import { FilterQuery } from "mongoose";
import Car from "../models/car";
import { CarAdvertDto } from "../dto/car.dto";

export class CarRepository {
  static async create(carAdvertData: CarAdvertDto){
    let car = new Car(carAdvertData)

    return await car.save();
  }
}
