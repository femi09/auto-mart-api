import { CarAdvertDto } from "../dto/car.dto";
import { CarRepository } from "../repository/car";

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
}
