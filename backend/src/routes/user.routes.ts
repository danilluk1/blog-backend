import { NextFunction, Router, Request, Response } from "express";
import userController from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const userRouter: Router = Router();

userRouter.get("/users", authMiddleware, (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body.decodedToken);
  res.status(200).json({
    message: "Success",
  });
});

userRouter.get("/user/:uid", authMiddleware, userController.getUser)
