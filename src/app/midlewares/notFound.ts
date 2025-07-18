import express, {  NextFunction, Request, Response } from 'express';
import httpStatus from "http-status";

const notFound = ( req: Request, res: Response , next: NextFunction)=>{
  
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message:'API NOT FOUND',
    error: '',
  })

}

export default notFound;