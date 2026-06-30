import { getLeaderboardService } from "../services/leaderboardService.js";

export async function getLeaderboard(req, res) {

  try {

    const leaderboard = await getLeaderboardService();

    return res.status(200).json(leaderboard);

  }

  catch (err) {

    console.error(err);

    return res.status(500).json({

      success: false,

      message: err.message,

    });

  }

}