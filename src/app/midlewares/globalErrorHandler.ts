import { ErrorRequestHandler } from "express";
import { ZodError, ZodIssue } from "zod";
import { TErrorSource } from "../interface/errors";
import config from "../config";
import handleZodError from "../Errors/handleZodError";
import handleValidationError from "../Errors/handleValidationError";
import handleCastError from "../Errors/handleCastError";
import handleDuplicateError from "../Errors/handleDuplicateError";
import AppError from "../Errors/AppErrors";


const globalErrorhandler: ErrorRequestHandler = (
  err , 
  req,
  res , 
  next)=>{

  let statusCode =  300;
  let message ='something went wrong';


  let errorSource : TErrorSource =[{
    path: '',
    message:'something went wrong!',
  }]


  if(err instanceof ZodError){
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSource = simplifiedError?.errorSource;
   
    message = 'This is zod error';
  }
  else if(err?.name === 'ValidationError'){
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSource = simplifiedError?.errorSource;
  }
  else if(err?.name === 'CastError'){
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSource = simplifiedError?.errorSource;
  }
  else if(err?.name === 11000 ){
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSource = simplifiedError?.errorSource;
  }
  else if(err instanceof AppError ){
    statusCode = err.statusCode;
    message = err.message;
    errorSource = [{
      path:'',
      message: err?.message,
    }]
  }
  else if(err instanceof Error ){
    message = err.message;
    errorSource = [{
      path:'',
      message: err?.message,
    }]
  }

    res.status(statusCode).json({
    success: false,
    message,
    errorSource ,
    stack: config.NODE_ENV === 'developement' ? err?.stack : null,
  })

}

export default globalErrorhandler;