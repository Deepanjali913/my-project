import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

client.connect(); 

const query = async (text, params) => {
    try {
        const res = await client.query(text, params);
        return res;
    } catch (err) {
        console.error('Database query error:', err);
        throw err;
    }
};

// new user registration
export const register = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        // Checking if the user already exists
        const { rows } = await query('SELECT * FROM "User" WHERE username = $1 OR email = $2', [username, email]);
        if (rows.length > 0) return res.status(400).json({ message: 'Username or Email already exists' });

        // Hashing the password & inserting the new user
        const password_hash = await bcrypt.hash(password, 10);
        const { rows: newUserRows } = await query(
            `INSERT INTO "User" (username, password_hash, email) VALUES ($1, $2, $3) RETURNING *`,
            [username, password_hash, email]
        );

        res.status(201).json({ message: 'User registered successfully', user: newUserRows[0] });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Login a user👇
export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user exists
        const { rows } = await query('SELECT * FROM "User" WHERE username = $1', [username]);
        if (rows.length === 0) return res.status(400).json({ message: 'Invalid credentials' });

        // Check the password
        const validPassword = await bcrypt.compare(password, rows[0].password_hash);
        if (!validPassword) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate and return a JWT token
        const token = jwt.sign({ user_id: rows[0].user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Middleware to protect routes
export const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user_id;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

// Auth routes
router.post('/register', register);
router.post('/login', login);

export default router;
