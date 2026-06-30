function QuestionPalette({
  questions,
  answers,
  current,
  onJump,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">

      <h2 className="text-xl font-bold mb-5">
        Question Palette
      </h2>

      <div className="grid grid-cols-5 gap-3">

        {questions.map((q, index) => {

          let color =
            "bg-gray-200 text-black";

          if (answers[q.id] !== undefined)
            color =
              "bg-green-500 text-white";

          if (index === current)
            color =
              "bg-blue-600 text-white";

          return (
            <button
              key={q.id}
              onClick={() => onJump(index)}
              className={`h-12 rounded-xl font-bold ${color}`}
            >
              {index + 1}
            </button>
          );

        })}

      </div>

      <div className="mt-6 space-y-2 text-sm">

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-600"></div>
          Current
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-500"></div>
          Attempted
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gray-300"></div>
          Not Attempted
        </div>

      </div>

    </div>
  );
}

export default QuestionPalette;