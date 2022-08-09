import { Request, Response, NextFunction } from "express";

class PostController {
  async newPost(req: Request, res: Response, next: NextFunction) {}

  async getPosts(req: Request, res: Response, next: NextFunction) {}

  async getPost(req: Request, res: Response, next: NextFunction) {}

  async updatePost(req: Request, res: Response, next: NextFunction) {}
}

export default new PostController();
