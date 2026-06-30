import express from "express";
import { getMockTests } from "../controllers/mockTestController.js";

const router = express.Router();

router.get("/", getMockTests);

export default router;