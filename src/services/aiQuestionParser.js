export function parseQuestions(text, testId = "tat-demo") {

  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l);

  const questions = [];

  let current = null;

  for (const line of lines) {

    if (/^\d+[\.\)]/.test(line)) {

      if (current) questions.push(current);

      current = {
        question: line.replace(/^\d+[\.\)]\s*/, ""),
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: "",
        order: questions.length + 1,
        testId,
        marks: 1,
        negative: 0,
      };

    } else if (/^A[\)\.]/i.test(line)) {

      current.optionA = line.replace(/^A[\)\.]\s*/i, "");

    } else if (/^B[\)\.]/i.test(line)) {

      current.optionB = line.replace(/^B[\)\.]\s*/i, "");

    } else if (/^C[\)\.]/i.test(line)) {

      current.optionC = line.replace(/^C[\)\.]\s*/i, "");

    } else if (/^D[\)\.]/i.test(line)) {

      current.optionD = line.replace(/^D[\)\.]\s*/i, "");

    } else if (/^Answer/i.test(line)) {

      current.answer = line
        .split(":")[1]
        .trim()
        .toUpperCase();

    }

  }

  if (current) questions.push(current);

  return questions;

}