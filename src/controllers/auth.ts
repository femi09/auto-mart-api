import { Request, Response, NextFunction } from "express";
import { AuthenticationService } from "../services/auth";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await AuthenticationService.register(req.body);

    res.status(201).send(response);
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await AuthenticationService.login(req.body);

    res.status(200).send(response)
  } catch (error) {
    next(error);
  }
};
