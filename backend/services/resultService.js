import db from "../config/firebase.js";

export async function saveResultService(result) {

  await db.collection("results").add({

    ...result,

    createdAt: new Date(),

  });

}