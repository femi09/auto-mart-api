import { FilterQuery } from "mongoose";
import Car from "../models/car";
import { CarAdvertDto } from "../dto/car.dto";
import { ICar } from "../interfaces/car.interface";

export class CarRepository {
  static async create(carAdvertData: CarAdvertDto) {
    let car = new Car(carAdvertData);

    return await car.save();
  }

  static async findAll() {
    return await Car.find({});
  }

  static async findOne(filterQuery: FilterQuery<any>): Promise<ICar | null> {
    return await Car.findOne({ filterQuery });
  }

  static async deleteOne(car: ICar) {
    return await car?.remove();
  }
}
