import express, { Application } from "express";
import auth from "./routes/auth";
import car from "./routes/car"
import cors from "cors";
import errorMiddleware from "./middlewares/error.response";

const routes = (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/cars", car);
  
  app.use(errorMiddleware as any);
};

export default routes;