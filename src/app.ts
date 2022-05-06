import "dotenv/config";
import express, { Application } from "express";
import connectDB from "./database";

const app: Application = express();

connectDB();

const port = process.env.PORT || 5000;

app.listen(5000, () =>
  console.log(`App Started Successfully on port ${port} `)
);
