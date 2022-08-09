import { Request, Response, NextFunction } from "express";

class UserController {
  async getUser(req: Request, res: Response, next: NextFunction) {}
}

export default new UserController();
