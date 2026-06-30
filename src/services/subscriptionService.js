import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export async function getPlans() {

  const snapshot = await getDocs(
    collection(db, "plans")
  );

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

}

export async function addPlan(plan) {

  await addDoc(
    collection(db, "plans"),
    plan
  );

}

export async function updatePlan(id, data) {

  await updateDoc(
    doc(db, "plans", id),
    data
  );

}

export async function deletePlan(id) {

  await deleteDoc(
    doc(db, "plans", id)
  );

}