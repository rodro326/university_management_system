import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";
import AppError from "../../Errors/AppErrors";

const academicDepartmentSchema = new Schema<TAcademicDepartment>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    ref:'AcademicFaculty',
  }
},{
  timestamps: true,
})




academicDepartmentSchema.pre('save', async function(next){
  const isDepartmentExits = await AcademicDepartment.findOne({
    name: this.name
  });
  if(isDepartmentExits){
    throw new AppError(404,"Department already exits!");
  }
  next();

});







export const AcademicDepartment = model<TAcademicDepartment>('AcademicDepartment',academicDepartmentSchema);