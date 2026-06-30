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
  title:"Analytics",
  subtitle:"Performance Report",
  icon:"📈",
  onClick:()=>navigate("/analytics"),
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
      icon: "📈",
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
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="flex justify-between items-center bg-white rounded-2xl shadow p-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back 👋
          </p>
        </div>

        <div className="flex items-center gap-4">

          <div className="relative text-3xl">
            🔔
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              3
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
              N
            </div>

            <div>
              <h2 className="font-bold">
                Nitin
              </h2>

              <p className="text-sm text-gray-500">
                Premium Member
              </p>
            </div>
          </div>

        </div>

      </div>

      <h2 className="text-4xl font-bold mb-2">
        Welcome to Mission TAT Gujarat AI 🚀
      </h2>

      <p className="text-gray-600 mb-10">
        Your complete platform for TAT | TET | HTAT preparation.
      </p>

      <div className="grid grid-cols-4 gap-8">

        {cards.map((card) => (

          <DashboardCard
            key={card.title}
            title={card.title}
            subtitle={card.subtitle}
            icon={card.icon}
            onClick={card.onClick}
          />

        ))}

      </div>

    </div>
  );
}

export default Home;