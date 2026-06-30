export function calculateScore(questions, answers) {
  let correct = 0;
  let wrong = 0;
  let skipped = 0;

  questions.forEach((q) => {
    const selected = answers[q.id];

    if (selected === undefined) {
      skipped++;
      return;
    }

    const correctIndex =
      q.answer === "A" ? 0 :
      q.answer === "B" ? 1 :
      q.answer === "C" ? 2 : 3;

    if (selected === correctIndex)
      correct++;
    else
      wrong++;
  });

  return {
    correct,
    wrong,
    skipped,
    total: questions.length,
    percentage:
      questions.length === 0
        ? 0
        : Math.round((correct / questions.length) * 100)
  };
}