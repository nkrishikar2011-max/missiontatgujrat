import db from "../config/firebase.js";

/*
========================================
Upload Questions
========================================
*/

export async function uploadQuestionsService(questions) {

  const batch = db.batch();

  questions.forEach((question) => {

    const ref = db.collection("questions").doc();

    batch.set(ref, {

      ...question,

      createdAt: new Date(),

      updatedAt: new Date(),

    });

  });

  await batch.commit();

}

/*
========================================
Get Questions By Test ID
========================================
*/

export async function getQuestionsService(testId) {

  const snapshot = await db
    .collection("questions")
    .where("testId", "==", testId)
    .orderBy("order")
    .get();

  return snapshot.docs.map((doc) => ({

    id: doc.id,

    ...doc.data(),

  }));

}

/*
========================================
Delete Question
========================================
*/

export async function deleteQuestionService(id) {

  await db
    .collection("questions")
    .doc(id)
    .delete();

}

/*
========================================
Update Question
========================================
*/

export async function updateQuestionService(id, data) {

  await db
    .collection("questions")
    .doc(id)
    .update({

      ...data,

      updatedAt: new Date(),

    });

}