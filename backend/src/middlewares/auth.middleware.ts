import { NextFunction, Request, Response } from "express";
import firebaseService from "../services/firebase.service";
import ApiError from "../exceptions/api.error";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authStr = req.headers["authorization"];
  if (!authStr) return next(ApiError.UnauthorizedError());

  const tokenId = authStr.split(" ").pop();
  if (!tokenId) return next(ApiError.UnauthorizedError());

  const decodedToken = await firebaseService.parseIdToken(tokenId);
  if (!decodedToken) return next(ApiError.IdTokenExpiredOrInvalid());

  req.body["user"] = {
    name: decodedToken.name,
    avatar: decodedToken.avatar,
    email: decodedToken.email,
    email_verified: decodedToken.email_verified,
    uid: decodedToken.uid,
  };

  next();
};
