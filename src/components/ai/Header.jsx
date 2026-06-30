export default function Header({ onNewChat }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          🤖 FREYA AI
        </h1>

        <p className="text-gray-600 mt-2">
          Developed by <b>Freya Solution Academy</b>
        </p>

        <p className="text-blue-600 font-semibold">
          Mission TAT Gujarat
        </p>
      </div>

      <button
        onClick={onNewChat}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        + New Chat
      </button>
    </div>
  );
}