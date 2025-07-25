import express from 'express';
import { studentController } from './student.controller';
import validateRequest from '../../midlewares/validateRequest';
import { updateStudentZodSchema } from './student.zod.validation';

const router = express.Router();


router.get('/', studentController.getAllStudent);

router.get('/:studentId',studentController.getSingleStudent)

router.patch('/:studentId',
validateRequest( updateStudentZodSchema),
studentController.updateSingleStudent)

router.delete('/:studentId',studentController.deleteSingleStudent)

export const studentRoute = router;