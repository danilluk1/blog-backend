import { Request, Response, NextFunction } from "express";
import ApiError from "../exceptions/api.error";
import postService from "../services/post.service";

class PostController {
  async newPost(req: Request, res: Response, next: NextFunction) {
    try {
      const { postData, user } = req.body;
      if (!postData || !user) return next(ApiError.UnauthorizedError());

      await postService.newPost(postData, user);

      return res.status(200).json({
        message: "Post created successfully",
      });
    } catch (err) {
      console.error(err);
    }
  }

  async getPosts(req: Request, res: Response, next: NextFunction) {
    try {
      const page = req.query.page;
      const limit = req.query.limit;
      if (!page || isNaN(Number(page)) || !limit || isNaN(Number(limit)))
        return next(ApiError.BadRequest());

      if (Number(page) <= 0 || Number(limit) <= 0)
        return next(ApiError.BadRequest());

      const posts = await postService.getPosts(Number(page), Number(limit));

      return res.status(200).json({
        posts,
      });
    } catch (err) {
      console.error(err);
    }
  }

  async getPost(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const post = await postService.getPost(Number(id));

      return res.status(200).json({
        post,
      });
    } catch (err) {
      console.error(err);
    }
  }

  async updatePost(req: Request, res: Response, next: NextFunction) {
    try {
      const { postData, user } = req.body;
      if (!postData || !user) return next(ApiError.UnauthorizedError());

      await postService.updatePost(postData, user);

      return res.status(200).json({
        message: "Post updated successfully",
      });
    } catch (err) {
      console.error(err);
    }
  }

  async deletePost(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (err) {}
  }
}

export default new PostController();
