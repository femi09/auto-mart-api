import { IUser } from "../interfaces/user.interface";
import User from "../models/user";
import { FilterQuery } from "mongoose";

export class UserRepository {
  static async create(userData: IUser): Promise<IUser> {
    let user = new User(userData);

    return await user.save();
  }

  static async findOne(
    entityFilterQuery: FilterQuery<any>
  ): Promise<IUser | null> {
    return await User.findOne(entityFilterQuery);
  }
}
