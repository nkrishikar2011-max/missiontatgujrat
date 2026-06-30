import { useNavigate } from "react-router-dom";

import { useTest } from "../context/TestContext";

function ReviewScreen() {

  const navigate = useNavigate();

  const { questions, answers } = useTest();

  function optionClass(question, index) {

    const selected = answers[question.id];

    const correct =
      {
        A: 0,
        B: 1,
        C: 2,
        D: 3,
      }[String(question.answer).toUpperCase()];

    if (index === correct)
      return "bg-green-600 text-white border-green-600";

    if (
      selected === index &&
      selected !== correct
    )
      return "bg-red-600 text-white border-red-600";

    return "bg-white border-gray-300";

  }

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-5xl font-bold">

            Review Answers

          </h1>

          <button

            onClick={() => navigate("/dashboard")}

            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"

          >

            Dashboard

          </button>

        </div>

        <div className="space-y-8">

          {questions.map((question, qIndex) => (

            <div

              key={question.id}

              className="bg-white rounded-2xl shadow-lg p-8"

            >

              <h2 className="text-2xl font-bold mb-8">

                {qIndex + 1}. {question.question}

              </h2>

              <div className="space-y-4">

                {[
                  question.optionA,
                  question.optionB,
                  question.optionC,
                  question.optionD,
                ].map((option, index) => (

                  <div

                    key={index}

                    className={`

                      border-2

                      rounded-xl

                      p-5

                      ${optionClass(question, index)}

                    `}

                  >

                    <b>

                      {String.fromCharCode(65 + index)}.

                    </b>

                    {" "}

                    {option}

                  </div>

                ))}

              </div>

              <div className="flex justify-between mt-8">

                <span className="text-green-700 font-bold">

                  Correct Answer :

                  {" "}

                  {question.answer}

                </span>

                <span className="font-bold">

                  Your Answer :

                  {" "}

                  {answers[question.id] === undefined
                    ? "Not Answered"
                    : String.fromCharCode(
                        65 + answers[question.id]
                      )}

                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default ReviewScreen;