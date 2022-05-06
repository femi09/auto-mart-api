import express, { Router } from "express";

import {
  register,
  login
} from "../controllers/auth";

// import authMiddleware from "./../middlewares/auth";

const router: Router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);


export default router;