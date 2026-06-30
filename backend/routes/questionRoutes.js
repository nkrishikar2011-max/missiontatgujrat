import express from "express";

import {
  uploadQuestions,
  getQuestions,
} from "../controllers/questionController.js";

const router = express.Router();

/*
========================================
Upload Questions
POST /api/questions/upload
========================================
*/

router.post(
  "/upload",
  uploadQuestions
);

/*
========================================
Get Questions By Test ID
GET /api/questions/:testId
========================================
*/

router.get(
  "/:testId",
  getQuestions
);

export default router;