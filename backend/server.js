import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import "./config/firebase.js";

import questionRoutes from "./routes/questionRoutes.js";
import mockTestRoutes from "./routes/mockTestRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/questions",
  questionRoutes
);

app.use(
  "/api/mocktests",
  mockTestRoutes
);

app.use(
  "/api/results",
  resultRoutes
);

app.use(
  "/api/leaderboard",
  leaderboardRoutes
);

app.use(
  "/api/ai",
  aiRoutes
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`🚀 Server Running On Port ${PORT}`);

});