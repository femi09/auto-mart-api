import { CarAdvertDto } from "../dto/car.dto";
import { CarRepository } from "../repository/car";
import HttpException from "./../exception/index";

export class CarService {
  static async create(createCarData: CarAdvertDto) {
    return await CarRepository.create(createCarData);
  }

  static async getAll() {
    return await CarRepository.findAll();
  }

  static async getCarDetails(id: string) {
    return await CarRepository.findOne({ _id: id });
  }

  static async deleteCarAdvert(id: string) {
    const car = await CarRepository.findOne({ _id: id });

    if (!car) {
      throw new HttpException("car not found", 404);
    }

    const deletedCar = await CarRepository.deleteOne(car);

    if (deletedCar) {
      return { msg: "car deleted successfully" };
    }
  }
}
