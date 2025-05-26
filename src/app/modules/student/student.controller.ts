import { Request, Response } from "express";
import { studentService } from "./student.service";

const createStudent = async (req:Request,res:Response)=>{
  try{
    const {student : studentData} = req.body;
  // will call the service function to send this data
  const result = await studentService.createStudentToDB(studentData)
  // send response
  res.status(200).json({
    success: true,
    message: 'student is created successfully',
    data: result
  });
  } 
  catch(err){
    console.log(err);
  }
}



const getAllStudent = async (req: Request,res: Response)=>{
  try{
    const result = await studentService.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'student are retrieve successfully',
      data: result
    });
  }catch(err){
    console.log(err)
  }
}


const getSingleStudent = async (req: Request,res: Response)=>{
  try{
    const {studentId} = req.params;
    const result = await studentService.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'student is retrieve successfully',
      data: result
    });
  }catch(err){
    console.log(err)
  }
}



export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent
}