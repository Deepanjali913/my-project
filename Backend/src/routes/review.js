import express from 'express';
import { submitReview, updateReviewStatus, getItemReviews } from '../controllers/reviewController.js';
import { authMiddleware, adminMiddleware } from '../controllers/authController.js';

const router = express.Router();

router.post('/submit', authMiddleware, submitReview);
router.put('/update-status', authMiddleware, adminMiddleware, updateReviewStatus);
router.get('/item/:itemId', getItemReviews);

export default router;

