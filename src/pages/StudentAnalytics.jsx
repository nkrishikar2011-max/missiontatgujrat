import { useEffect, useState } from "react";
import { getAnalytics } from "../services/analyticsService";

function StudentAnalytics() {

  const [stats, setStats] = useState({

    tests:0,

    average:0,

    best:0,

    totalCorrect:0,

    totalWrong:0,

    accuracy:0,

  });

  useEffect(()=>{

    load();

  },[]);

  async function load(){

    const data = await getAnalytics();

    setStats(data);

  }

  const cards=[

    {
      title:"Tests Attempted",
      value:stats.tests,
      color:"bg-blue-600",
      icon:"📝",
    },

    {
      title:"Average Score",
      value:stats.average+"%",
      color:"bg-green-600",
      icon:"📈",
    },

    {
      title:"Best Score",
      value:stats.best+"%",
      color:"bg-purple-600",
      icon:"🏆",
    },

    {
      title:"Accuracy",
      value:stats.accuracy+"%",
      color:"bg-red-600",
      icon:"🎯",
    },

  ];

  return(

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">

          Performance Analytics

        </h1>

        <div className="grid grid-cols-4 gap-8">

          {cards.map(card=>(

            <div
              key={card.title}
              className="bg-white rounded-2xl shadow-lg p-8"
            >

              <div className={`${card.color} w-20 h-20 rounded-2xl flex items-center justify-center text-5xl text-white`}>

                {card.icon}

              </div>

              <h2 className="mt-6 text-xl">

                {card.title}

              </h2>

              <p className="text-5xl font-bold mt-5">

                {card.value}

              </p>

            </div>

          ))}

        </div>

        <div className="grid grid-cols-2 gap-8 mt-10">

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold">

              Correct Answers

            </h2>

            <p className="text-6xl text-green-600 mt-8">

              {stats.totalCorrect}

            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold">

              Wrong Answers

            </h2>

            <p className="text-6xl text-red-600 mt-8">

              {stats.totalWrong}

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default StudentAnalytics;