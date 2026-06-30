import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export async function getBookmarks(uid) {

  const q = query(
    collection(db, "bookmarks"),
    where("uid", "==", uid)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));

}

export async function addBookmark(data) {

  await addDoc(
    collection(db, "bookmarks"),
    data
  );

}

export async function removeBookmark(id) {

  await deleteDoc(
    doc(db, "bookmarks", id)
  );

}