function QuestionNavigator({
  current,
  total,
  onPrevious,
  onNext,
}) {

  return (

    <div className="flex justify-between mt-10">

      <button
        disabled={current===0}
        onClick={onPrevious}
        className="
        bg-gray-300
        px-8
        py-3
        rounded-xl
        font-bold
        disabled:opacity-50
        "
      >
        ← Previous
      </button>

      <div className="text-xl font-bold">

        {current+1} / {total}

      </div>

      <button
        disabled={current===total-1}
        onClick={onNext}
        className="
        bg-blue-600
        text-white
        px-8
        py-3
        rounded-xl
        font-bold
        disabled:opacity-50
        "
      >
        Next →
      </button>

    </div>

  );

}

export default QuestionNavigator;