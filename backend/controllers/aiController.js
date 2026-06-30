import { askAIService } from "../services/aiService.js";
import {
  checkUserLimit,
  increaseUsage,
} from "../services/subscriptionService.js";

export async function askAI(req, res) {
  try {
    const {
      question,
      exam = "TAT Secondary",
      language = "Auto",
      style = "Detailed",
      difficulty = "Exam Level",
      userId = "test-user",
    } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please enter your question.",
      });
    }

    // Daily Limit
    const limit = await checkUserLimit(userId);

    if (!limit.allowed) {
      return res.status(403).json({
        success: false,
        premium: false,
        message:
          "🚫 તમારી આજની FREE AI Limit પૂર્ણ થઈ ગઈ છે.\n\nPremium Plan લઈને આગળ ચાલુ રાખો.",
      });
    }

    const answer = await askAIService({
      question,
      exam,
      language,
      style,
      difficulty,
    });

    await increaseUsage(userId);

    return res.status(200).json({
      success: true,
      answer,
      remaining:
        limit.remaining === "Unlimited"
          ? "Unlimited"
          : limit.remaining - 1,
    });

  } catch (err) {

    console.error("AI ERROR:", err);

    const msg = err?.message || "";

    // Gemini Quota
    if (
      msg.includes("429") ||
      msg.includes("RESOURCE_EXHAUSTED") ||
      msg.toLowerCase().includes("quota")
    ) {
      return res.status(429).json({
        success: false,
        message:
          "⚠️ FREYA AI ની આજની AI Quota પૂર્ણ થઈ ગઈ છે.\n\nકૃપા કરીને થોડા સમય પછી ફરી પ્રયાસ કરો.",
      });
    }

    // API Key
    if (
      msg.includes("INVALID_API_KEY") ||
      msg.toLowerCase().includes("api key")
    ) {
      return res.status(500).json({
        success: false,
        message:
          "⚠️ FREYA AI Configuration Error.\nAdministrator નો સંપર્ક કરો.",
      });
    }

    return res.status(500).json({
      success: false,
      message:
        "⚠️ FREYA AI હાલમાં ઉપલબ્ધ નથી.\nકૃપા કરીને થોડા સમય પછી ફરી પ્રયાસ કરો.",
    });

  }
}