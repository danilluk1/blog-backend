import { NextFunction, Request, Response } from "express";
import firebaseService from "../services/firebase.service";
import ApiError from "../exceptions/api.error";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { tokenId } = req.body;
  if (!tokenId) return next(ApiError.UnauthorizedError());

  const decodedToken = await firebaseService.parseIdToken(tokenId);
  if (!decodedToken) return next(ApiError.UnauthorizedError());

  req.body.tokenId = "";
  req.body["decodedToken"] = decodedToken;

  next();
};
