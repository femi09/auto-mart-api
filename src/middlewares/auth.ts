import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import User from "../models/user";
import HttpException from "../exception";
import { UserRepository } from "../repository/user";

const authMiddleware = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
  
    if (!token) {
      throw new HttpException("Acess Denied! no token provided", 401);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as Secret);

    req.user = await UserRepository.findOne({_id: (decoded as any)._id})
    next();
  } catch (error) {
    next(error)
  }
};

export default authMiddleware;
