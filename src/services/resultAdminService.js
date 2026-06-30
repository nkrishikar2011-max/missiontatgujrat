import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export async function getAllResults() {

  const q = query(
    collection(db,"results"),
    orderBy("createdAt","desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc=>({

    id:doc.id,

    ...doc.data(),

  }));

}