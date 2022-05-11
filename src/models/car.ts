import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const carSchema = new Schema(
  {
    model: {
      type: String,
      required: [true, "model is required"],
    },
    make: {
      type: String,
      required: [true, "car make is required"],
    },
    price: {
      type: Number,
      required: [true, "price is required"],
    },
    color: {
      type: String,
      required: [true, "color is required"],
    },
    location: {
      type: String,
      required: [true, "location is reuired"],
    },
    engineSize: {
      type: Number,
      required: [true, "engine size is required"],
    },
    description: {
      type: String,
      required: false,
    },
    yearOfManufacture: {
      type: String,
      required: [true, "year of manufacture is required"],
    },
    condition: {
      type: String,
      required: [true, "condition is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "an image of the car is required"],
    },
    seller: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default model<IUser>("Car", carSchema);
