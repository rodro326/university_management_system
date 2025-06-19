import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";

const createAcademicDepartmentIntoDB =async (payload:TAcademicDepartment) =>{
 const result = await AcademicDepartment.create(payload);
 return result;
}

// get academic faculty
 const getAllAcademicDepartment = async() => {
  const result = await AcademicDepartment.find();
  return result;
 }

export const AcademicDepartmentServices  ={
  createAcademicDepartmentIntoDB ,
  getAllAcademicDepartment,
}