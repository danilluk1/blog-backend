import { NextFunction, Router, Request, Response } from "express";
import postController from "../controllers/post.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const postRouter = Router();

postRouter.get("/posts", authMiddleware, postController.getPosts);
postRouter.post("/posts", authMiddleware, postController.newPost);
postRouter.get("/post/:id", authMiddleware, postController.getPost);
postRouter.put("/post/:id", authMiddleware, postController.updatePost);
postRouter.delete("/post/:delete", authMiddleware, postController.deletePost);
