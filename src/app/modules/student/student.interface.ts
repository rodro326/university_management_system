import { Schema, model, connect } from 'mongoose';

export type student = {
  id: string;
  name: {
    fistName: string;
    middleName: string;
    lastName: string;
  },
  dateOfBirth: string;
  contactNumber: string;
  gender: 'male' | 'female';
  email: string;
  emergencyContact: string;
  BloodGroup: "A+"| "B+"| "A-"
}