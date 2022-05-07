import { Types } from "mongoose";
import { IUser } from "./user.interface";
export class ICar {
  _id?: Types.ObjectId;
  make: string;
  model: string;
  description: string;
  price: number;
  location: string;
  yearOfManufacture: string;
  seller: IUser;
  color: string;
  imageUrl: string;
  engineSize: string;
}
