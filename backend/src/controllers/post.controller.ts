import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { appDataSource } from "../db/db-source";
import ApiError from "../exceptions/api.error";
import { Post } from "../models/post.model";

class PostController {
  postRepo: Repository<Post> = appDataSource.getRepository(Post); //Can be implemented using DI

  async newPost(req: Request, res: Response, next: NextFunction) {
    const { postData, user } = req.body;
    if (!postData || !user) return next(ApiError.UnauthorizedError());

    const newPost = new Post();
    newPost.author = user.uid;
    newPost.markdown = postData.markdown;
    newPost.title = postData.title;

    this.postRepo.save(newPost);

    return res.status(200).json({
      message: "Post created successfully",
    });
  }

  async getPosts(req: Request, res: Response, next: NextFunction) {}

  async getPost(req: Request, res: Response, next: NextFunction) {}

  async updatePost(req: Request, res: Response, next: NextFunction) {}
}

export default new PostController();
