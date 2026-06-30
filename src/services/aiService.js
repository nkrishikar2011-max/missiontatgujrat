const API =
  import.meta.env.VITE_API_URL + "/api/ai";

export async function askAI({
  question,
  exam,
  language,
  style,
  difficulty,
}) {

  const userId = localStorage.getItem("freya_uid");

  const response = await fetch(API, {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      question,
      exam,
      language,
      style,
      difficulty,
      userId,
    }),

  });

  const data = await response.json();

  if (!response.ok) {

    throw new Error(

      data.message ||

      "⚠️ FREYA AI હાલમાં ઉપલબ્ધ નથી."

    );

  }

  return data.answer;

}