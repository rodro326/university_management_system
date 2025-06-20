
import { Schema, model, connect, Model, Types } from 'mongoose';


export type TuserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export type TGuardian = {
  fatherName: string,
  fatherOccupation: string,
  fatherContact: string,
  motherName: string,
  motherOccupation: string,
  motherContact: string,
}



export type TlocalGuardian = {
  name: string;
  occupation :string;
  contact: string;
  address: string;
}

export type TStudent = {
  id: string;
  user: Types.ObjectId,
  password: string,
  name: TuserName;
  dateOfBirth: string;
  contactNumber: string;
  gender: 'male' | 'female';
  email: string;
  emergencyContact: string;
  BloodGroup: "A+"| "B+"| "A-";
  presentAddress: string;
  permanentAddress: string;
  Guardian:  TGuardian;
  localGuardian: TlocalGuardian;
  profileImg ?: string;
  admissionSemester: Types.ObjectId;
  academicDepartment:Types.ObjectId;
 
  isDeleted:boolean;
}


// $for creating static method
export interface StudentModel extends Model<TStudent>{
  isUserExist(id: string): Promise<TStudent | null>;
}


//  $for creating instance method
// export type studentMethods = {
//   isUserExist(id: string): Promise<TStudent | null>;
// }

// export type StudentModel = Model<TStudent,Record<string, never>,studentMethods>