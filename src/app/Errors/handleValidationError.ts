import mongoose, { Mongoose } from "mongoose";
import { TErrorSource, TGenericErrorResponse } from "../interface/errors";



const handleValidationError=(err: mongoose.Error.ValidationError) :TGenericErrorResponse=> {
  const errorSource : TErrorSource = Object.values(err.errors)
  .map((val: mongoose.Error.ValidatorError | mongoose.Error.CastError)=>{
    return {
      path:val?.path,
      message:val.message,
    }
  })
  const statusCode = 400;
  return {
    statusCode,
    message:"ValidationError",
    errorSource
  }
}

export default handleValidationError