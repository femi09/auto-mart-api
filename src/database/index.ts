import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI
 
  try {
    mongoose.connect(`${MONGO_URI}`, {});

    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log("Could not connect to mongoDB", error);
  }
};

export default connectDB;