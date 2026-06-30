import db from "../config/firebase.js";

export async function getAllMockTests() {

    const snapshot = await db.collection("mockTests").get();

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

}