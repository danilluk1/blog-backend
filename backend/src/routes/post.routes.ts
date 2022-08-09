import { NextFunction, Router, Request, Response } from "express";
import postController from "../controllers/post.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const postRouter = Router();

postRouter.get('/posts', authMiddleware, postController.getPosts);
postRouter.post('/posts', authMiddleware, postController.newPost);
postRouter.get('/posts/:id', authMiddleware, postController.getPost);
postRouter.put('/posts/:id', authMiddleware, postController.updatePost);