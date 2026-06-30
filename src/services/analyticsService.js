import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export async function getAnalytics() {

  const snapshot = await getDocs(
    collection(db,"results")
  );

  const results = snapshot.docs.map(doc=>doc.data());

  if(results.length===0){

    return{

      tests:0,

      average:0,

      best:0,

      totalCorrect:0,

      totalWrong:0,

      accuracy:0,

    };

  }

  let totalCorrect=0;

  let totalWrong=0;

  let totalPercentage=0;

  let best=0;

  results.forEach(r=>{

    totalCorrect+=r.correct||0;

    totalWrong+=r.wrong||0;

    totalPercentage+=r.percentage||0;

    if((r.percentage||0)>best)

      best=r.percentage;

  });

  const average=Math.round(

    totalPercentage/results.length

  );

  const accuracy=Math.round(

    totalCorrect/

    (totalCorrect+totalWrong)

    *100

  )||0;

  return{

    tests:results.length,

    average,

    best,

    totalCorrect,

    totalWrong,

    accuracy,

  };

}