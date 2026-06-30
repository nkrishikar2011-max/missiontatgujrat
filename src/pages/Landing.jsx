import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">

        <h1 className="text-3xl font-bold text-yellow-400">
          Mission TAT AI
        </h1>

        <button
          onClick={() => navigate("/login")}
          className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition"
        >
          Login
        </button>

      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center mt-24 px-6">

        <h1 className="text-6xl font-extrabold">
          Gujarat's Smartest
        </h1>

        <h2 className="text-6xl font-extrabold text-yellow-400 mt-3">
          AI Teacher
        </h2>

        <p className="text-gray-300 text-xl mt-6">
          Mock Tests • AI Teacher • Previous Papers • Notes
        </p>

        <button
          onClick={() => navigate("/login")}
          className="mt-10 bg-yellow-400 text-black px-8 py-4 rounded-2xl text-xl font-bold hover:bg-yellow-300 transition"
        >
          Start Free
        </button>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 w-full max-w-6xl">

          <div className="bg-slate-900 rounded-2xl p-6">
            <h2 className="text-4xl font-bold text-yellow-400">2000+</h2>
            <p className="text-gray-300 mt-2">Students</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <h2 className="text-4xl font-bold text-yellow-400">3000+</h2>
            <p className="text-gray-300 mt-2">MCQs</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <h2 className="text-4xl font-bold text-yellow-400">500+</h2>
            <p className="text-gray-300 mt-2">Notes</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <h2 className="text-4xl font-bold text-yellow-400">24/7</h2>
            <p className="text-gray-300 mt-2">AI Support</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Landing;