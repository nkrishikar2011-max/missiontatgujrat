import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  const cards = [

    {
      title: "Create Mock Test",
      icon: "🆕",
      color: "bg-blue-600",
      path: "/admin/create-test",
    },
    {
  title: "Analytics",
  icon: "📈",
  color: "bg-indigo-600",
  path: "/admin/analytics",
},
    {
      title: "Upload Questions",
      icon: "📤",
      color: "bg-green-600",
      path: "/admin/upload",
    },
{
  title: "Subscription",
  icon: "💎",
  color: "bg-cyan-600",
  path: "/admin/plans",
},
    {
      title: "Manage Questions",
      icon: "📚",
      color: "bg-yellow-500",
      path: "/admin/questions",
    },

    {
      title: "Manage Tests",
      icon: "📝",
      color: "bg-purple-600",
      path: "/admin/tests",
    },

    {
      title: "Students",
      icon: "👨‍🎓",
      color: "bg-pink-600",
      path: "/admin/students",
    },

    {
      title: "Results",
      icon: "📊",
      color: "bg-red-600",
      path: "/admin/results",
    }

  ];

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-8">

          {cards.map((card) => (

            <div

              key={card.title}

              onClick={() => navigate(card.path)}

              className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer hover:scale-105 transition"

            >

              <div
                className={`${card.color} w-20 h-20 rounded-2xl flex items-center justify-center text-5xl text-white`}
              >
                {card.icon}
              </div>

              <h2 className="text-2xl font-bold mt-6">
                {card.title}
              </h2>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;