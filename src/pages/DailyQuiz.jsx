function DailyQuiz() {

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h1 className="text-4xl font-bold mb-4">
            Daily Quiz
          </h1>

          <p className="text-gray-500 mb-8">
            One quiz every day to improve your score.
          </p>

          <div className="grid grid-cols-3 gap-6">

            <div className="bg-green-100 rounded-xl p-6">
              <h2 className="font-bold">Today's Quiz</h2>
              <p className="text-3xl mt-4">25 Questions</p>
            </div>

            <div className="bg-yellow-100 rounded-xl p-6">
              <h2 className="font-bold">Time</h2>
              <p className="text-3xl mt-4">20 Min</p>
            </div>

            <div className="bg-blue-100 rounded-xl p-6">
              <h2 className="font-bold">Marks</h2>
              <p className="text-3xl mt-4">25</p>
            </div>

          </div>

          <button
            className="mt-10 w-full bg-blue-600 text-white py-4 rounded-xl font-bold"
          >
            Start Daily Quiz
          </button>

        </div>

      </div>

    </div>

  );

}

export default DailyQuiz;