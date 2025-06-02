import { Request, Response } from "express";
import { userService } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
  try {

    const { password, student: studentData } = req.body;



    // const zodParseData = studentZodSchema.parse(studentData);

    const result = await userService.createStudentToDB(password,studentData);


    // data validation by joi
    // const {error, value} = studentJoiValidationSchema.validate(studentData);



    // console.log({error},{ value});
    // used for joi validation schema 
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'something went wrong',
    //     error: error.details,
    //   });
    // }



    // will call the service function to send this data
    // send response
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result
    });
  }
  catch (err :any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      data: err
    });
  }
}

export const userController = {
  createStudent,
}