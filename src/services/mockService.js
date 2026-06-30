const API_URL = import.meta.env.VITE_API_URL + "/api/mocktests";

export async function getMockTests() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch mock tests");
  }

  return await response.json();
}