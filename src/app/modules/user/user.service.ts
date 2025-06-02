import config from "../../config";
import { Student } from "../student.model";
import { TStudent } from "../student/student.interface";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentToDB = async (password: string,studentData: TStudent)=>{
  // built in static method
  // if(await Student.isUserExist(studentData.id)){
  //   throw new Error('user already exits')
  // }

  // create a empty object
  const userData: Partial<TUser> ={};

  // if password not given , use default password
  userData.password = password || config.default_pass as string;

  userData.role = 'student';

  // set manually generated id
  userData.id = '22303025';

  // set student role
  const newUser = await User.create(userData);

  // create a student 
  if(Object.keys(newUser).length){
    // set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; 

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
 

  // built in instance method
  // const student = new Student(studentData)
  // if(await student.isUserExist(studentData.id)){
  //   throw new Error ('user already exists')
  // }
  // const result = await student.save() 

  
}

export const userService = {
  createStudentToDB
}