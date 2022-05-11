import express, { Router } from "express";

import {
  createCarAdvert,
  getAllCars,
  getMyCars,
  getCar,
  deleteCar,
} from "../controllers/car";
import parser from "../utils/cloudinary";

import authMiddleware from "./../middlewares/auth";

const router: Router = express.Router();

router
  .route("/post_advert")
  .post(authMiddleware, parser.single("imageUrl"), createCarAdvert);
router.route("/").get(authMiddleware, getAllCars);

router.route("/my_cars").get(authMiddleware, getMyCars);

router.route("/:id").get(authMiddleware, getCar);

router.route("/:id").delete(authMiddleware, deleteCar);

export default router;
