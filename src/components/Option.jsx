function Option({
  option,
  index,
  selectedAnswer,
  onSelect,
}) {

  const letters = ["A","B","C","D"];

  const selected =
    selectedAnswer === index;

  return (

    <button
      onClick={() => onSelect(index)}
      className={`w-full text-left p-5 rounded-xl border-2 transition-all

      ${
        selected
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white hover:bg-blue-50 border-gray-300"
      }`}
    >

      <span className="font-bold mr-3">

        {letters[index]}.

      </span>

      {option}

    </button>

  );

}

export default Option;