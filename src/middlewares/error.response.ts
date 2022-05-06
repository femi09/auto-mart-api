import { Response, NextFunction } from "express";
import HttpException from "../exception";

const errorMiddleware = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const msg = err.message || "Something went wrong";

  res.status(status).send({ status, msg });
};

export default errorMiddleware;
