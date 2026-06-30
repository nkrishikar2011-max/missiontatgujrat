import db from "../config/firebase.js";

export async function getLeaderboardService() {

  const snapshot = await db
    .collection("results")
    .get();

  const data = snapshot.docs.map((doc) => ({

    id: doc.id,

    ...doc.data(),

  }));

  data.sort((a, b) => {

    if ((b.percentage || 0) !== (a.percentage || 0)) {

      return (b.percentage || 0) - (a.percentage || 0);

    }

    return (b.score || 0) - (a.score || 0);

  });

  return data.slice(0, 100);

}