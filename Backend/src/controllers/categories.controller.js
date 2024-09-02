import client from '../db/index.js'

const getCategories =  async (req, res) => {
    try {
        // SQL query to fetch categories
        const queryText = 'SELECT category_id, category_name FROM "Category"';
        const result = await client.query(queryText);

        // Sending response
        res.status(200).json({
            success: true,
            data: result.rows // PostgreSQL results are in the rows array
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};

export {getCategories}