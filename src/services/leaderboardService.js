const API = "http://localhost:5000/api/leaderboard";

export async function getLeaderboard() {

  const response = await fetch(API);

  const data = await response.json();

  if (!response.ok) {

    throw new Error(

      data.message || "Failed to load leaderboard"

    );

  }

  return data;

}