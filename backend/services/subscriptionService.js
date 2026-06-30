import db from "../config/firebase.js";
import { FieldValue } from "firebase-admin/firestore";

const FREE_LIMIT = 10;

export async function checkUserLimit(userId) {

  if (!userId) {
    throw new Error("Please login first.");
  }

  const ref = db.collection("users").doc(userId);

  const doc = await ref.get();

  const today = new Date().toISOString().split("T")[0];

  // Auto Create User
  if (!doc.exists) {

    await ref.set({
      plan: "free",
      usedToday: 0,
      lastReset: today,
      createdAt: FieldValue.serverTimestamp(),
    });

    return {
      allowed: true,
      remaining: FREE_LIMIT,
    };

  }

  const user = doc.data();

  // Daily Reset
  if (user.lastReset !== today) {

    await ref.update({
      usedToday: 0,
      lastReset: today,
    });

    user.usedToday = 0;

  }

  // Premium
  if (user.plan === "premium") {

    return {
      allowed: true,
      remaining: "Unlimited",
    };

  }

  // Free Limit
  if (user.usedToday >= FREE_LIMIT) {

    return {
      allowed: false,
      remaining: 0,
    };

  }

  return {

    allowed: true,

    remaining: FREE_LIMIT - user.usedToday,

  };

}

export async function increaseUsage(userId) {

  if (!userId) return;

  await db
    .collection("users")
    .doc(userId)
    .update({

      usedToday: FieldValue.increment(1),

    });

}