import Router from 'express';
import { getBusinessesByCategory } from '../controllers/getbusiness.controller.js';

const router=Router();
router.route('/getbusiness/category/:categoryId').get(getBusinessesByCategory);

export default router ;