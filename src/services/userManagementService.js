import {
  collection,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export async function getUsers() {

  const snapshot = await getDocs(
    collection(db, "users")
  );

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

}

export async function makePremium(id) {

  await updateDoc(
    doc(db, "users", id),
    {
      premium: true,
    }
  );

}

export async function removePremium(id) {

  await updateDoc(
    doc(db, "users", id),
    {
      premium: false,
    }
  );

}

export async function banUser(id) {

  await updateDoc(
    doc(db, "users", id),
    {
      banned: true,
    }
  );

}

export async function unbanUser(id) {

  await updateDoc(
    doc(db, "users", id),
    {
      banned: false,
    }
  );

}

export async function deleteUser(id) {

  await deleteDoc(
    doc(db, "users", id)
  );

}