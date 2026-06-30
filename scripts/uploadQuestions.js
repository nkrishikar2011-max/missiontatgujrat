import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc, arrayUnion } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqwjM1Fnad7RGZIfodmpjiH3qlywRKTls",
  authDomain: "mission-tat-gujrat-ai.firebaseapp.com",
  projectId: "mission-tat-gujrat-ai",
  storageBucket: "mission-tat-gujrat-ai.firebasestorage.app",
  messagingSenderId: "152764673673",
  appId: "1:152764673673:web:c54ad34c0ee928a48ce058"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const questions = [
  {
    question: "ભારતનું બંધારણ ક્યારે અમલમાં આવ્યું?",
    options: [
      "15 August 1947",
      "26 January 1950",
      "26 November 1949",
      "2 October 1950"
    ],
    answer: 1
  },
  {
    question: "ગુજરાતની રાજધાની કઈ છે?",
    options: [
      "અમદાવાદ",
      "વડોદરા",
      "ગાંધીનગર",
      "સુરત"
    ],
    answer: 2
  }
];

async function upload() {
  const ref = doc(db, "mockTests", "tat-demo");

  await updateDoc(ref, {
    questions: arrayUnion(...questions)
  });

  console.log("Questions Uploaded Successfully");
}

upload();