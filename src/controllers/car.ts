import { Request, Response, NextFunction } from "express";
import { CarService } from "../services/car";

export const createCarAdvert = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body.seller = req.user._id;

    req.body.imageUrl = req.file?.path;

    const response = await CarService.create(req.body);

    res.status(201).send(response);
  } catch (error) {
    next(error);
  }
};

export const getAllCars = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cars = await CarService.getAll();

    res.status(200).send(cars);
  } catch (error) {
    next(error);
  }
};

export const getMyCars = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const cars = await CarService.getAllUserCars(req.user._id);

    res.status(200).send(cars);
  } catch (error) {
    next(error);
  }
};

export const getCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const car = await CarService.getCarDetails(req.params.id);

    res.status(200).send(car);
  } catch (error) {
    next(error);
  }
};

export const deleteCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await CarService.deleteCarAdvert(req.params.id);

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};
