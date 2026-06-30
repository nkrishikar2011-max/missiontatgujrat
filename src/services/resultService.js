const API = "http://localhost:5000/api/results";

export async function saveResult(result, testId) {

  const response = await fetch(API, {

    method: "POST",

    headers: {

      "Content-Type": "application/json",

    },

    body: JSON.stringify({

      ...result,

      testId,

    }),

  });

  const data = await response.json();

  if (!response.ok) {

    throw new Error(

      data.message || "Failed to save result"

    );

  }

  return data;

}