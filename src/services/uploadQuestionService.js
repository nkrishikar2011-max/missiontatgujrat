const API = "http://localhost:5000/api/questions";

export async function uploadQuestions(questions) {

  const response = await fetch(`${API}/upload`, {

    method: "POST",

    headers: {

      "Content-Type": "application/json",

    },

    body: JSON.stringify(questions),

  });

  const data = await response.json();

  if (!response.ok) {

    throw new Error(data.message || "Upload Failed");

  }

  return data;

}