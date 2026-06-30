import SYSTEM_PROMPT from "./systemPrompt.js";

import teacherBrain from "../brains/teacherBrain.js";
import mcqBrain from "../brains/mcqBrain.js";
import notesBrain from "../brains/notesBrain.js";
import lessonPlanBrain from "../brains/lessonPlanBrain.js";
import pedagogyBrain from "../brains/pedagogyBrain.js";
import psychologyBrain from "../brains/psychologyBrain.js";
import interviewBrain from "../brains/interviewBrain.js";
import { getBrain } from "./aiRouter.js";
import paperGeneratorBrain from "../brains/paperGeneratorBrain.js";
const BRAINS = {
  teacher: teacherBrain,
  mcq: mcqBrain,
  notes: notesBrain,
  lessonPlan: lessonPlanBrain,
  pedagogy: pedagogyBrain,
  psychology: psychologyBrain,
  interview: interviewBrain,
  paperGenerator: paperGeneratorBrain,
};

export function buildPrompt({
  question,
  exam = "TAT",
  language = "Gujarati",
  style = "Explanation",
  difficulty = "Medium",
}) {
  const brain = getBrain({
    question,
    style,
  });

  const brainPrompt = BRAINS[brain] || teacherBrain;

  return `
${SYSTEM_PROMPT}

${brainPrompt}

==============================
EXAM
==============================
${exam}

==============================
LANGUAGE
==============================
${language}

==============================
STYLE
==============================
${style}

==============================
DIFFICULTY
==============================
${difficulty}

==============================
USER QUESTION
==============================
${question}

==============================
RULES
==============================

• Reply only in the selected language.
• Answer according to the selected exam.
• Keep the response exam-oriented.
• Use Markdown formatting.
• If Notes → Generate structured notes.
• If MCQs → Always include answer + explanation.
• If Lesson Plan → Follow NEP 2020 and Bloom's Taxonomy.
• Never invent facts.
• If information is uncertain, clearly mention it.
`;
}