import { Schema, model, connect } from 'mongoose';
import { TGuardian, TStudent,  TlocalGuardian, TuserName, studentMethods, StudentModel } from './student/student.interface';

const userNameSchema = new Schema<TuserName>({
  
    fistName: {
      type: String,
      required:[true, "First Name is required"],
    },
    middleName:{
      type: String,
    },
    lastName:{
      type: String,
      required:[true, "Last Name is required"],
    }
  
})

const guardianSchema = new Schema <TGuardian>(
  {
    fatherName:{
      type: String
    },
  fatherOccupation: {
    type: String
  },
  fatherContact: {
    type: String
  },
  motherName: {
    type: String
  },
  motherOccupation: {
    type: String
  },
  motherContact: {
    type: String
  },
  }
)

const localGuardianSchema = new Schema <TlocalGuardian> (
  {
    name: {
      type: String
    },
  occupation :{
    type: String
  },
  contact: {
    type: String
  },
  address: {
    type: String
  },
  }
)

const studentSchema = new Schema < TStudent,studentMethods,StudentModel> ({
  id: {type: String, required: true, unique: true},
  name:{
    type: userNameSchema,
    required: true,
  },
  gender:{
    type: String,
    enum:{
      values:['male','female'],
      message:'{VALUE} is not supported',
    },
    required: true,
  },
  dateOfBirth: {type: String},
  email:{
    type : String,
    required: true,
    // unique: true,
  },
  contactNumber: {
    type: String,
    required: true
  },
  BloodGroup:{
    type: String,
    enum: ["A+", "B+", "A-"],
  },
  presentAddress:{
    type : String,
    required: true
  },
  permanentAddress:{
    type : String,
    required: true
  },
  Guardian:{
    type:  guardianSchema,
    required: true,
  },
  localGuardian:{
    type:localGuardianSchema,
    required: true,
  },
  profileImg: {type: String},
  isActive:{
    type: String,
    enum:['Active','Inactive'],
    default: "Active"
  }
})


studentSchema.methods.isUserExits = async function(id:string){
  const existingUser = await Student.findOne({id})
  return existingUser;
}
// creating model
export const Student = model<TStudent,StudentModel>('Student',studentSchema)