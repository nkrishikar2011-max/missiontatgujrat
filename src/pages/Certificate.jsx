import { useTest } from "../context/TestContext";
import { calculateScore } from "../utils/scoreCalculator";

function Certificate() {

  const { questions, answers } = useTest();

  const result = calculateScore(
    questions,
    answers
  );

  const today = new Date().toLocaleDateString();

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-10">

      <div className="bg-white border-[10px] border-blue-700 rounded-3xl shadow-2xl w-[1000px] p-14">

        <div className="text-center">

          <h1 className="text-6xl font-bold text-blue-700">

            CERTIFICATE

          </h1>

          <p className="mt-5 text-xl">

            Mission TAT Gujarat

          </p>

        </div>

        <div className="mt-16 text-center">

          <p className="text-2xl">

            This Certificate is Proudly Presented To

          </p>

          <h2 className="text-5xl font-bold mt-8">

            Student

          </h2>

          <p className="text-2xl mt-10">

            for successfully completing the Mock Test.

          </p>

        </div>

        <div className="grid grid-cols-3 gap-8 mt-16">

          <div className="text-center">

            <h3 className="text-gray-500">

              Score

            </h3>

            <p className="text-4xl font-bold mt-3">

              {result.score}

            </p>

          </div>

          <div className="text-center">

            <h3 className="text-gray-500">

              Percentage

            </h3>

            <p className="text-4xl font-bold mt-3">

              {result.percentage}%

            </p>

          </div>

          <div className="text-center">

            <h3 className="text-gray-500">

              Date

            </h3>

            <p className="text-3xl font-bold mt-3">

              {today}

            </p>

          </div>

        </div>

        <div className="flex justify-between mt-24">

          <div>

            <div className="border-t-2 border-black w-48"></div>

            <p className="mt-3">

              Instructor

            </p>

          </div>

          <div>

            <div className="border-t-2 border-black w-48"></div>

            <p className="mt-3">

              Director

            </p>

          </div>

        </div>

        <button

          onClick={() => window.print()}

          className="mt-16 w-full bg-blue-700 text-white py-4 rounded-xl font-bold"

        >

          Download / Print Certificate

        </button>

      </div>

    </div>

  );

}

export default Certificate;