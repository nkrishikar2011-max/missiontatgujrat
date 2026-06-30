import { FaBookmark, FaRegBookmark } from "react-icons/fa";

function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
  onBookmark,
}) {

  const options = [
    question.optionA,
    question.optionB,
    question.optionC,
    question.optionD,
  ];

  const answerIndex = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
  };

  return (

    <div className="bg-white rounded-2xl shadow-lg p-8">

      <div className="flex justify-between items-start">

        <h2 className="text-2xl font-bold leading-9">

          {question.order}. {question.question}

        </h2>

        <button
          onClick={() => onBookmark(question)}
          className="text-yellow-500 text-3xl"
        >
          <FaRegBookmark />
        </button>

      </div>

      <div className="space-y-4 mt-8">

        {options.map((option, index) => {

          const selected =
            selectedAnswer === index;

          return (

            <button

              key={index}

              onClick={() =>
                onSelectAnswer(index)
              }

              className={`
                w-full
                rounded-xl
                border-2
                p-5
                text-left
                transition

                ${
                  selected

                  ?

                  "bg-blue-600 border-blue-600 text-white"

                  :

                  "bg-white border-gray-300 hover:bg-blue-50"
                }
              `}
            >

              <b>

                {String.fromCharCode(65 + index)}.

              </b>

              {" "}

              {option}

            </button>

          );

        })}

      </div>

      <div className="flex justify-between mt-8">

        <span className="text-gray-500">

          Marks :
          {" "}
          {question.marks || 1}

        </span>

        <span className="text-red-500">

          Negative :
          {" "}
          {question.negative || 0}

        </span>

      </div>

    </div>

  );

}

export default QuestionCard;