import {
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export async function deleteQuestion(id) {
  await deleteDoc(
    doc(db, "questions", id)
  );
}

export async function updateQuestion(id, data) {

  const updateData = {
    question: data.question,
    optionA: data.optionA,
    optionB: data.optionB,
    optionC: data.optionC,
    optionD: data.optionD,
    answer: data.answer,
    order: Number(data.order),
    testId: data.testId,
    marks: Number(data.marks || 1),
    negative: Number(data.negative || 0),
  };

  await updateDoc(
    doc(db, "questions", id),
    updateData
  );

}