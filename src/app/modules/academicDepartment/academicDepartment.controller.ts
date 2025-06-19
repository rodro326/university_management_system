import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AcademicDepartmentServices } from "./academicDepartment.service";

const createAcademicDepartment = catchAsync(async (req, res) => {
  
  const result = await 
  AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);

  
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success: true,
    message:'Academic Department Created Successfully',
    data: result,
  })

}
)
// get all Department
const getAllDepartment= catchAsync(async (req, res) => {
  
  const result = await AcademicDepartmentServices.getAllAcademicDepartment();
  res.status(200).json({
    success: true,
    message: 'Departments are retrieve successfully',
    data: result
  });
})

export const academicDepartmentController = {
  createAcademicDepartment,
  getAllDepartment,
}