import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export async function addXP(uid, xp) {

  const ref = doc(db, "users", uid);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {

    await setDoc(ref, {

      xp,

      level: 1,

      streak: 1,

      lastPlayed: new Date().toISOString(),

    });

    return;

  }

  const data = snapshot.data();

  const totalXP = (data.xp || 0) + xp;

  const level = Math.floor(totalXP / 100) + 1;

  await updateDoc(ref, {

    xp: increment(xp),

    level,

    lastPlayed: new Date().toISOString(),

  });

}