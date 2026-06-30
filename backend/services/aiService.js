import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

import { buildPrompt } from "./promptBuilder.js";
import { validateResponse } from "./responseValidator.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function askAIService({
  question,
  exam,
  language,
  style,
  difficulty,
}) {
  const prompt = buildPrompt({
    question,
    exam,
    language,
    style,
    difficulty,
  });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return validateResponse(response.text);

  } catch (err) {

    console.error("Gemini Error:", err);

    const message = err?.message || "";

    if (
      message.includes("429") ||
      message.includes("RESOURCE_EXHAUSTED") ||
      message.toLowerCase().includes("quota")
    ) {
      throw new Error(
        "⚠️ FREYA AI ની આજની AI quota પૂર્ણ થઈ ગઈ છે. કૃપા કરીને થોડા સમય પછી ફરી પ્રયાસ કરો."
      );
    }

    if (
      message.includes("INVALID_API_KEY") ||
      message.includes("API key")
    ) {
      throw new Error(
        "⚠️ FREYA AI API Key અમાન્ય છે. કૃપા કરીને Administrator નો સંપર્ક કરો."
      );
    }

    throw new Error(
      "⚠️ FREYA AI હાલમાં ઉપલબ્ધ નથી. કૃપા કરીને થોડા સમય પછી ફરી પ્રયાસ કરો."
    );
  }
}