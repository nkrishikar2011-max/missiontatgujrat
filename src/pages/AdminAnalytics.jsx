import { useEffect, useState } from "react";

import { getDashboardStats } from "../services/adminAnalyticsService";

function AdminAnalytics() {

  const [stats, setStats] = useState({

    users:0,

    tests:0,

    questions:0,

    results:0,

  });

  useEffect(()=>{

    load();

  },[]);

  async function load(){

    const data=

      await getDashboardStats();

    setStats(data);

  }

  const cards=[

    {
      title:"Students",
      value:stats.users,
      color:"bg-blue-600",
      icon:"👨‍🎓",
    },

    {
      title:"Mock Tests",
      value:stats.tests,
      color:"bg-green-600",
      icon:"📝",
    },

    {
      title:"Questions",
      value:stats.questions,
      color:"bg-yellow-500",
      icon:"📚",
    },

    {
      title:"Results",
      value:stats.results,
      color:"bg-red-600",
      icon:"📊",
    },

  ];

  return(

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">

          Analytics Dashboard

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

              <h2 className="text-xl mt-6">

                {card.title}

              </h2>

              <p className="text-5xl font-bold mt-4">

                {card.value}

              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default AdminAnalytics;