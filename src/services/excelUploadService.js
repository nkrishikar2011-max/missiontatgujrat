import * as XLSX from "xlsx";
import { uploadQuestions } from "./uploadQuestionService";

export async function uploadExcel(file) {

  const data = await file.arrayBuffer();

  const workbook = XLSX.read(data);

  const sheet =
    workbook.Sheets[
      workbook.SheetNames[0]
    ];

  const json =
    XLSX.utils.sheet_to_json(sheet);

  const questions = json.map((q, index) => ({

    question: q.question,

    optionA: q.optionA,

    optionB: q.optionB,

    optionC: q.optionC,

    optionD: q.optionD,

    answer: q.answer,

    testId: q.testId || "tat-demo",

    order: q.order || index + 1,

    marks: q.marks || 1,

    negative: q.negative || 0,

  }));

  await uploadQuestions(questions);

}