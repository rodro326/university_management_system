import { Request, Response } from "express";
import { studentService } from "./student.service";
import { z } from "zod";
import   studentZodSchema from "./student.zod.validation";
 "./student.zod.validation";
// import studentJoiValidationSchema from "./student.joi.validation";
// const Joi = require('joi');


const createStudent = async (req: Request, res: Response) => {
  try {

    const { student: studentData } = req.body;



    const zodParseData = studentZodSchema.parse(studentData);

    const result = await studentService.createStudentToDB(zodParseData)


    // data validation by joi
    // const {error, value} = studentJoiValidationSchema.validate(studentData);



    // console.log({error},{ value});
    // used for joi validation schema 
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'something went wrong',
    //     error: error.details,
    //   });
    // }



    // will call the service function to send this data
    // send response
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result
    });
  }
  catch (err :any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      data: err
    });
  }
}



const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'student are retrieve successfully',
      data: result
    });
  } catch (err:any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      data: err
    });
  }
}


// get single student data from data
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'student is retrieve successfully',
      data: result
    });
  } catch (err:any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      data: err
    });
  }
}


const deleteSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'student is deleted successfully',
      data: result
    });
  } catch (err:any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      data: err
    });
  }
}



export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deleteSingleStudent
}