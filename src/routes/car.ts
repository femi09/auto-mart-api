import express, { Router } from "express";

import {
 createCarAdvert
} from "../controllers/car";
import parser from "../utils/cloudinary";

import authMiddleware from "./../middlewares/auth";

const router: Router = express.Router();

router.route("/post_advert").post(authMiddleware, parser.single('imageUrl'), createCarAdvert);

export default router;