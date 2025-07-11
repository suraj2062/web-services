// routes/courseRoutes.js
import express from 'express';
import {
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse
} from '../controllers/course.controller.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, getAllCourses);
router.post('/', verifyToken, createCourse);
router.put('/:id', verifyToken, updateCourse);
router.delete('/:id', verifyToken, deleteCourse);

export default router;
