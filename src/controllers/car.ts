import { Request, Response, NextFunction } from "express";
import { CarService } from "../services/car";

export const createCarAdvert = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body.seller = req.user._id;

    req.body.imageUrl = req.file?.path

    const response = await CarService.create(req.body);

    res.status(201).send(response);
  } catch (error) {
    next(error);
  }
};
