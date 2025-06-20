import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";


const globalErrorhandler: ErrorRequestHandler = (
  err , 
  req,
  res , 
  next)=>{
    
  let statusCode = err.statusCode || 300;
  let message = err.message || 'something went wrong';


  type TErrorSource = {
    path:string | number,
    message: string,
  }[];

  let errorSource : TErrorSource =[{
    path: '',
    message:'something went wrong!',
  }]

  if(err instanceof ZodError){
    statusCode = 400;
    message = 'This is zod error';
  }

    res.status(statusCode).json({
    success: false,
    message,
    errorSource ,
    Error: err,
  })

}

export default globalErrorhandler;