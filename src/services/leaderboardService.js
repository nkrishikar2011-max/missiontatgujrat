const API = import.meta.env.VITE_API_URL + "/api/leaderboard";

export async function getLeaderboard() {
  const response = await fetch(API);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to load leaderboard");
  }

  return data;
}