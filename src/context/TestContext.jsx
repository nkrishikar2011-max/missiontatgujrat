import { createContext, useContext, useState } from "react";

const TestContext = createContext();

export function TestProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const saveAnswer = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  return (
    <TestContext.Provider
      value={{
        questions,
        setQuestions,
        currentQuestion,
        setCurrentQuestion,
        answers,
        saveAnswer,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

export function useTest() {
  return useContext(TestContext);
}