import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqwjM1Fnad7RGZIfodmpjiH3qlywRKTls",
  authDomain: "mission-tat-gujrat-ai.firebaseapp.com",
  projectId: "mission-tat-gujrat-ai",
  storageBucket: "mission-tat-gujrat-ai.firebasestorage.app",
  messagingSenderId: "152764673673",
  appId: "1:152764673673:web:c54ad34c0ee928a48ce058",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Keep user logged in after refresh/browser restart
setPersistence(auth, browserLocalPersistence).catch(console.error);

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export default app;