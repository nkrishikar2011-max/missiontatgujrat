import { useEffect, useState } from "react";
import { getAllResults } from "../services/resultAdminService";

function AdminResults() {

  const [results, setResults] = useState([]);

  useEffect(() => {
    loadResults();
  }, []);

  async function loadResults() {
    const data = await getAllResults();
    setResults(data);
  }

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Student Results
        </h1>

        <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">

          <thead className="bg-slate-800 text-white">

            <tr>

              <th className="p-4">Test</th>
              <th className="p-4">Score</th>
              <th className="p-4">Correct</th>
              <th className="p-4">Wrong</th>
              <th className="p-4">%</th>

            </tr>

          </thead>

          <tbody>

            {results.map((r)=>(

              <tr
                key={r.id}
                className="border-b text-center"
              >

                <td className="p-4">{r.testId}</td>

                <td>{r.score}</td>

                <td>{r.correct}</td>

                <td>{r.wrong}</td>

                <td>{r.percentage}%</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default AdminResults;