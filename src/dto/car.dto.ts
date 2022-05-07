import { Types } from "mongoose";
export class CarAdvertDto {
    make: string;
    model: string;
    description: string;
    price: number;
    location: string;
    yearOfManufacture: string;
    seller: Types.ObjectId;
    color: string;
    imageUrl: string;
    engineSize: string;
  }