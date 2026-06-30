import { useEffect, useState } from "react";
import { getQuestions } from "../services/questionService";
import {
  deleteQuestion,
  updateQuestion,
} from "../services/manageQuestionService";

import EditQuestionModal from "../components/EditQuestionModal";

function ManageQuestions() {

  const [questions, setQuestions] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    loadQuestions();
  }, []);

  async function loadQuestions() {
    const data = await getQuestions("tat-demo");
    setQuestions(data);
  }

  async function handleDelete(id) {

    if (!confirm("Delete Question?")) return;

    await deleteQuestion(id);

    loadQuestions();

  }

  async function handleSave(question) {

    await updateQuestion(
      question.id,
      question
    );

    setEditing(null);

    loadQuestions();

  }

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Manage Questions
        </h1>

        <div className="space-y-5">

          {questions.map((q) => (

            <div
              key={q.id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >

              <h2 className="text-xl font-bold">

                {q.order}. {q.question}

              </h2>

              <div className="grid grid-cols-2 gap-3 mt-5">

                <p>A. {q.optionA}</p>
                <p>B. {q.optionB}</p>
                <p>C. {q.optionC}</p>
                <p>D. {q.optionD}</p>

              </div>

              <div className="flex justify-between mt-6">

                <span className="font-bold text-green-600">

                  Correct : {q.answer}

                </span>

                <div className="flex gap-3">

                  <button
                    onClick={() => setEditing(q)}
                    className="bg-yellow-400 px-5 py-2 rounded-xl"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(q.id)}
                    className="bg-red-600 text-white px-5 py-2 rounded-xl"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      <EditQuestionModal
        open={editing !== null}
        question={editing}
        onClose={() => setEditing(null)}
        onSave={handleSave}
      />

    </div>

  );

}

export default ManageQuestions;