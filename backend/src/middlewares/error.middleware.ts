import { Request, Response, NextFunction } from "express";
import ApiError from "../exceptions/api.error";

export const errorMiddleware = async (err : Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);

  if(err instanceof ApiError){
    return res.status(err.status).json({
      message: err.message
    })
  }
}