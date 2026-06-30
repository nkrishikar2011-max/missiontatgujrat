import {
  collection,
  getCountFromServer,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export async function getDashboardStats() {

  const users =
    await getCountFromServer(
      collection(db, "users")
    );

  const tests =
    await getCountFromServer(
      collection(db, "mockTests")
    );

  const questions =
    await getCountFromServer(
      collection(db, "questions")
    );

  const results =
    await getCountFromServer(
      collection(db, "results")
    );

  return {

    users: users.data().count,

    tests: tests.data().count,

    questions: questions.data().count,

    results: results.data().count,

  };

}