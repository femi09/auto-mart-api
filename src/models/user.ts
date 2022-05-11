import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please enter your firstname"],
    },
    lastname: {
      type: String,
      required: [true, "Please Enter your lastname"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please enter your email address"],
    },
    password: {
      type: String,
      required: [true, "Please enter your passorwd"],
    },
    address: {
      type: String,
      required: [true, "Please enter your address"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please enter your phone Number"],
    },
  },
  {
    timestamps: true,
  }
);

export default model<IUser>("User", userSchema);
