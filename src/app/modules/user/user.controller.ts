import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createStudent = catchAsync(async (req, res) => {
  

  const { password, student: studentData } = req.body;

  

  const result = await userService.createStudentToDB(password,studentData);

  // res.status(200).json({
  //   success: true,
  //   message: 'student is created successfully',
  //   data: result
  // });
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success: true,
    message:'Student Created Successfully',
    data: result,
  })

}
)
export const userController = {
  createStudent,
}