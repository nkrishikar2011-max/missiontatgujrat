const STYLE_TO_BRAIN = {
  "Explanation": "teacher",
  "Notes": "notes",
  "MCQ Generator": "mcq",
  "Lesson Plan": "lessonPlan",
};

function detectBrain(question = "") {
  const q = question.toLowerCase();

  // ---------- Pedagogy ----------
  if (
    q.includes("pedagogy") ||
    q.includes("શિક્ષણશાસ્ત્ર") ||
    q.includes("શિક્ષણ પદ્ધતિ") ||
    q.includes("constructivism") ||
    q.includes("constructivist") ||
    q.includes("bloom") ||
    q.includes("blooms") ||
    q.includes("taxonomy") ||
    q.includes("nep") ||
    q.includes("ncf") ||
    q.includes("competency") ||
    q.includes("inclusive education")
  ) {
    return "pedagogy";
  }

  // ---------- MCQ ----------
  if (
    q.includes("mcq") ||
    q.includes("quiz") ||
    q.includes("multiple choice") ||
    q.includes("બહુવિકલ્પી") ||
    q.includes("પ્રશ્નો બનાવ")
  ) {
    return "mcq";
  }

  // ---------- Notes ----------
  if (
    q.includes("notes") ||
    q.includes("revision") ||
    q.includes("summary") ||
    q.includes("નોંધ") ||
    q.includes("રીવિઝન")
  ) {
    return "notes";
  }

  // ---------- Lesson Plan ----------
  if (
    q.includes("lesson plan") ||
    q.includes("પાઠ આયોજન") ||
    q.includes("પાઠયોજના")
  ) {
    return "lessonPlan";
  }
  // Psychology
if (
  q.includes("psychology") ||
  q.includes("મનોવિજ્ઞાન") ||
  q.includes("child development") ||
  q.includes("બાળ વિકાસ") ||
  q.includes("intelligence") ||
  q.includes("memory") ||
  q.includes("motivation") ||
  q.includes("learning theory") ||
  q.includes("piaget") ||
  q.includes("vygotsky") ||
  q.includes("bruner") ||
  q.includes("gardner")
) {
  return "psychology";
}
// Question Paper Generator
if (
  q.includes("question paper") ||
  q.includes("paper") ||
  q.includes("question bank") ||
  q.includes("sample paper") ||
  q.includes("model paper") ||
  q.includes("પ્રશ્નપત્ર") ||
  q.includes("પેપર બનાવ")
) {
  return "paperGenerator";
}
// Interview
if (
  q.includes("interview") ||
  q.includes("mock interview") ||
  q.includes("ઇન્ટરવ્યૂ") ||
  q.includes("મૌખિક") ||
  q.includes("oral") ||
  q.includes("panel")
) {
  return "interview";
}

  return "teacher";
}

export function getBrain({ question = "", style = "" }) {
  if (STYLE_TO_BRAIN[style]) {
    return STYLE_TO_BRAIN[style];
  }

  return detectBrain(question);
}