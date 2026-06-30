import { useEffect, useState } from "react";
import { getLeaderboard } from "../services/leaderboardService";

function Leaderboard() {

  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    loadLeaderboard();
  }, []);

  async function loadLeaderboard() {
    const data = await getLeaderboard();
    setLeaders(data);
  }

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Leaderboard
        </h1>

        <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-4">Rank</th>
              <th>Name</th>
              <th>Score</th>
              <th>Correct</th>
              <th>Wrong</th>
              <th>Percentage</th>

            </tr>

          </thead>

          <tbody>

            {leaders.map((user, index) => (

              <tr
                key={user.id}
                className="border-b text-center"
              >

                <td className="p-4 font-bold">

                  {index + 1}

                </td>

                <td>

                  {user.name || "Student"}

                </td>

                <td>

                  {user.score}

                </td>

                <td>

                  {user.correct}

                </td>

                <td>

                  {user.wrong}

                </td>

                <td>

                  {user.percentage}%

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Leaderboard;