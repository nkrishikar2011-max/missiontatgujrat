import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";

function Home() {

  const navigate = useNavigate();

  const cards = [

    {
      title: "Mock Tests",
      subtitle: "Open Mock Tests",
      icon: "📝",
      onClick: () => navigate("/mock-test"),
    },

    {
      title: "AI Teacher",
      subtitle: "Open AI Teacher",
      icon: "🤖",
      onClick: () => navigate("/ai-teacher"),
    },

    {
      title: "Notes",
      subtitle: "Study Notes",
      icon: "📚",
      onClick: () => navigate("/notes"),
    },

    {
      title: "Profile",
      subtitle: "Student Profile",
      icon: "👤",
      onClick: () => navigate("/profile"),
    },

    {
      title: "Analytics",
      subtitle: "Performance Report",
      icon: "📈",
      onClick: () => navigate("/analytics"),
    },

    {
      title: "Settings",
      subtitle: "Application Settings",
      icon: "⚙️",
      onClick: () => navigate("/settings"),
    },

    {
      title: "Previous Papers",
      subtitle: "View Papers",
      icon: "📄",
      onClick: () => navigate("/previous-papers"),
    },

    {
      title: "Leaderboard",
      subtitle: "Top Students",
      icon: "🏆",
      onClick: () => navigate("/leaderboard"),
    },

    {
      title: "Performance",
      subtitle: "Your Progress",
      icon: "📊",
      onClick: () => navigate("/performance"),
    },

    {
      title: "Daily Quiz",
      subtitle: "Today's Quiz",
      icon: "🎯",
      onClick: () => navigate("/daily-quiz"),
    },

    {
      title: "PDF Library",
      subtitle: "Study PDFs",
      icon: "📂",
      onClick: () => navigate("/pdf-library"),
    },

  ];

  return (

    <div className="min-h-screen bg-slate-100 p-4 md:p-8">

      <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          <div>

            <h1 className="text-3xl md:text-5xl font-bold">
              Mission TAT Gujarat
            </h1>

            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Welcome back 👋
            </p>

          </div>

          <div className="flex items-center gap-4">

            <div className="relative text-3xl">

              🔔

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">

                3

              </span>

            </div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">

                N

              </div>

              <div>

                <h2 className="font-bold">

                  Nitin

                </h2>

                <p className="text-xs md:text-sm text-gray-500">

                  Premium Member

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="mt-8">

        <h2 className="text-2xl md:text-4xl font-bold">

          Dashboard

        </h2>

        <p className="text-gray-600 mt-2">

          Your complete platform for TAT | TET | HTAT Preparation.

        </p>

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-8">

        {

          cards.map((card) => (

            <DashboardCard

              key={card.title}

              title={card.title}

              subtitle={card.subtitle}

              icon={card.icon}

              onClick={card.onClick}

            />

          ))

        }

      </div>

    </div>

  );

}

export default Home;