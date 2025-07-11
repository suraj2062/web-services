// routes/auth.route.js
import express from "express";
import { loginUser } from "../controllers/auth.contoller.js";

const router = express.Router();

router.post("/login", loginUser);

export default router;
