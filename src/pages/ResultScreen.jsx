import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

import { useTest } from "../context/TestContext";
import { calculateScore } from "../utils/scoreCalculator";
import { addXP } from "../services/xpService";

function ResultScreen() {

  const navigate = useNavigate();

  const auth = getAuth();

  const { questions, answers } = useTest();

  const result = calculateScore(
    questions,
    answers
  );

  const attempted =
    result.correct + result.wrong;

  useEffect(() => {

    async function saveXP() {

      if (!auth.currentUser) return;

      try {

        await addXP(

          auth.currentUser.uid,

          result.correct * 2

        );

      } catch (err) {

        console.error(err);

      }

    }

    saveXP();

  }, []);

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-2xl shadow-xl p-10">

          <h1 className="text-5xl font-bold text-center">

            🎉 Test Completed

          </h1>

          <p className="text-center text-gray-500 mt-3">

            Congratulations! Here is your performance.

          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

            <div className="bg-green-100 rounded-2xl p-6 text-center">

              <h2 className="text-gray-500">

                Score

              </h2>

              <p className="text-5xl font-bold mt-3">

                {result.score}

              </p>

            </div>

            <div className="bg-blue-100 rounded-2xl p-6 text-center">

              <h2>

                Correct

              </h2>

              <p className="text-5xl font-bold mt-3">

                {result.correct}

              </p>

            </div>

            <div className="bg-red-100 rounded-2xl p-6 text-center">

              <h2>

                Wrong

              </h2>

              <p className="text-5xl font-bold mt-3">

                {result.wrong}

              </p>

            </div>

            <div className="bg-yellow-100 rounded-2xl p-6 text-center">

              <h2>

                Skipped

              </h2>

              <p className="text-5xl font-bold mt-3">

                {result.skipped}

              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">

            <div className="bg-purple-100 rounded-2xl p-6 text-center">

              <h2>

                Attempted

              </h2>

              <p className="text-4xl font-bold mt-3">

                {attempted}

              </p>

            </div>

            <div className="bg-orange-100 rounded-2xl p-6 text-center">

              <h2>

                XP Earned

              </h2>

              <p className="text-4xl font-bold mt-3">

                +{result.correct * 2}

              </p>

            </div>

          </div>

          <div className="mt-10">

            <div className="w-full h-5 bg-gray-300 rounded-full">

              <div

                className="bg-green-600 h-5 rounded-full transition-all"

                style={{

                  width: `${result.percentage}%`

                }}

              />

            </div>

            <h2 className="text-center text-4xl font-bold mt-5">

              {result.percentage}%

            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">

            <button

              onClick={() => navigate("/dashboard")}

              className="bg-blue-600 text-white py-4 rounded-xl font-bold"

            >

              Dashboard

            </button>

            <button

              onClick={() => navigate("/review")}

              className="bg-green-600 text-white py-4 rounded-xl font-bold"

            >

              Review

            </button>

            <button

              onClick={() => navigate("/certificate")}

              className="bg-orange-600 text-white py-4 rounded-xl font-bold"

            >

              Certificate

            </button>

            <button

              onClick={() => window.print()}

              className="bg-purple-600 text-white py-4 rounded-xl font-bold"

            >

              Print

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ResultScreen;