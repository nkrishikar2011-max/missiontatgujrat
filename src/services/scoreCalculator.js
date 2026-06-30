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

    const ans =
      String(q.answer).toLowerCase();

    const correctIndex =
      ans === "a"
        ? 0
        : ans === "b"
        ? 1
        : ans === "c"
        ? 2
        : 3;

    if (selected === correctIndex)
      correct++;
    else
      wrong++;

  });

  const score = correct;

  return {
    correct,
    wrong,
    skipped,
    score,
    percentage: Math.round(
      (correct / questions.length) * 100
    ),
  };

}