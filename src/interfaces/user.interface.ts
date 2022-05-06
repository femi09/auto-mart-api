import { Types } from 'mongoose';
export class IUser {
    _id?: Types.ObjectId;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    address: string;
    phoneNumber: string;
  }