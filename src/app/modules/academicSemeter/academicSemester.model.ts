import { Schema, model } from "mongoose";
import { TAcademicSemester, TMonth, academicSemesterCode, academicSemesterName } from "./academicSemester.interface";
import { AcademicSemesterCode, AcademicSemesterName, months } from "./academicSemester.constant";




const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    required: true,
    enum: AcademicSemesterName,
  },
  code:{
    type: String,
    required: true,
    enum:AcademicSemesterCode,
  },
  year:{
    type: String,
    required: true,
  },
  startMonth:{
    type: String,
    required: true,
    enum:months,
  },
  endMonth:{
    type: String,
    required: true,
    enum:months,
  },
  
  
},{
  timestamps: true,
})

academicSemesterSchema.pre('save', async function(next){
  const isSemesterExists = await academicSemester.findOne({
    name: this.name,
    year: this.year
  })
  if(isSemesterExists){
    throw new Error ('Semester already exits !')
  }
  next();
})

export const academicSemester = model<TAcademicSemester>('AcademicSemester',academicSemesterSchema)