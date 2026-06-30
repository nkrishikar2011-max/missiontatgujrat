import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import {
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export async function createMockTest(data) {

  await addDoc(
    collection(db,"mockTests"),
    {
      ...data,
      createdAt:serverTimestamp(),
    }
  );

}

export async function getMockTests() {

  const snapshot = await getDocs(
    collection(db,"mockTests")
  );

  return snapshot.docs.map(doc=>({

    id:doc.id,

    ...doc.data(),

  }));

}

export async function deleteMockTest(id){

  await deleteDoc(
    doc(db,"mockTests",id)
  );

}
export async function getMockTest(id) {

  const snapshot = await getDoc(
    doc(db,"mockTests",id)
  );

  return {

    id:snapshot.id,

    ...snapshot.data(),

  };

}

export async function updateMockTest(id,data){

  await updateDoc(
    doc(db,"mockTests",id),
    data
  );

}