import express, { Application } from "express";

const app: Application = express();

const port = process.env.PORT || 5000;

app.listen(5000, () =>
  console.log(`App Started Successfully on port ${port} `)
);
