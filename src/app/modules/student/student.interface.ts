import { Schema, model, connect, Model } from 'mongoose';


export type TuserName = {
  fistName: string;
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
  isActive: 'Active' | 'Inactive';
}

export type studentMethods = {
  isUserExist(id: string): Promise<TStudent | null>;
}

export type StudentModel = Model<TStudent,Record<string, never>,studentMethods>