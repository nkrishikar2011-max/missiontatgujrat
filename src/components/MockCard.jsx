import { FaClock, FaQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function MockCard({ test }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

      <h2 className="text-2xl font-bold text-slate-800">
        {test.title}
      </h2>

      <div className="flex items-center gap-8 mt-6">

        <div className="flex items-center gap-2 text-gray-600">
          <FaQuestionCircle />
          {test.totalQuestions || 100} Questions
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaClock />
          {test.duration} Minutes
        </div>

      </div>

      <button
        onClick={() => navigate(`/mock-test/${test.id}`)}
        className="mt-8 w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl"
      >
        Start Test
      </button>

    </div>
  );
}

export default MockCard;