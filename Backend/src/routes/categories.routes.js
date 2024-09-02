import Router from 'express';
import { getCategories } from '../controllers/categories.controller.js';
const router = Router();
router.route('/categories').get(getCategories)

export default router ; 