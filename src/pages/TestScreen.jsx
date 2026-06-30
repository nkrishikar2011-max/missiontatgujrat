import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";

import { getQuestions } from "../services/questionService";
import { saveResult } from "../services/resultService";
import { addBookmark } from "../services/bookmarkService";

import { calculateScore } from "../utils/scoreCalculator";
import { useTest } from "../context/TestContext";
import useTimer from "../hooks/useTimer";

import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import QuestionNavigator from "../components/QuestionNavigator";
import QuestionPalette from "../components/QuestionPalette";
import SubmitModal from "../components/SubmitModal";

function TestScreen() {

  const navigate = useNavigate();
  const auth = getAuth();
  const { id } = useParams();

  const {
    questions,
    setQuestions,
    currentQuestion,
    setCurrentQuestion,
    answers,
    saveAnswer,
  } = useTest();

  const [showSubmit, setShowSubmit] = useState(false);

  const { minutes, seconds, totalSeconds } = useTimer(60 * 60);

  useEffect(() => {
    loadQuestions();
  }, []);

  useEffect(() => {
    if (totalSeconds === 0 && questions.length > 0) {
      submitTest();
    }
  }, [totalSeconds]);

  async function loadQuestions() {

    const data = await getQuestions(id);

    setQuestions(data);

  }

  function nextQuestion() {

    if (currentQuestion < questions.length - 1)
      setCurrentQuestion(currentQuestion + 1);

  }

  function previousQuestion() {

    if (currentQuestion > 0)
      setCurrentQuestion(currentQuestion - 1);

  }

  async function bookmark(question) {

    if (!auth.currentUser) return;

    await addBookmark({

      uid: auth.currentUser.uid,

      question: question.question,

      optionA: question.optionA,

      optionB: question.optionB,

      optionC: question.optionC,

      optionD: question.optionD,

      answer: question.answer,

      testId: question.testId,

    });

    alert("Question Bookmarked ⭐");

  }

  async function submitTest() {

    const result = calculateScore(
      questions,
      answers
    );

    await saveResult(result, id);

    navigate("/result");

  }

  if (questions.length === 0) {

    return (

      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Loading Questions...

      </div>

    );

  }

  const question = questions[currentQuestion];

  return (

    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto p-8">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">

            TAT Mock Test

          </h1>

          <Timer
            minutes={minutes}
            seconds={seconds}
          />

        </div>

        <div className="grid grid-cols-4 gap-8">

          <div className="col-span-3">

            <QuestionCard
              question={question}
              selectedAnswer={answers[question.id]}
              onSelectAnswer={(value)=>
                saveAnswer(question.id,value)
              }
              onBookmark={bookmark}
            />

            <QuestionNavigator
              current={currentQuestion}
              total={questions.length}
              onPrevious={previousQuestion}
              onNext={nextQuestion}
            />

            <div className="mt-8">

              <div className="w-full bg-gray-300 rounded-full h-3">

                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{
                    width: `${(Object.keys(answers).length/questions.length)*100}%`,
                  }}
                />

              </div>

              <p className="mt-2 text-gray-600">

                Attempted {Object.keys(answers).length} / {questions.length}

              </p>

            </div>

            <div className="flex justify-end mt-8">

              <button

                onClick={()=>setShowSubmit(true)}

                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold"

              >

                Submit Test

              </button>

            </div>

          </div>

          <div>

            <QuestionPalette

              questions={questions}

              answers={answers}

              current={currentQuestion}

              onJump={setCurrentQuestion}

            />

          </div>

        </div>

      </div>

      <SubmitModal

        open={showSubmit}

        onCancel={()=>setShowSubmit(false)}

        onSubmit={submitTest}

      />

    </div>

  );

}

export default TestScreen;