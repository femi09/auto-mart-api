import { CarAdvertDto } from "../dto/car.dto";
import { CarRepository } from "../repository/car";

export class CarService {
  static async create(createCarData: CarAdvertDto) {
    return await CarRepository.create(createCarData);
  }
}
