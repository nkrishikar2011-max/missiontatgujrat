const quickActions = [
  {
    title: "📝 Smart Notes",
    prompt: "Generate short revision notes.",
  },
  {
    title: "❓ Generate MCQs",
    prompt: "Generate 20 exam level MCQs.",
  },
  {
    title: "📖 Lesson Plan",
    prompt: "Create a lesson plan.",
  },
  {
    title: "🧠 Pedagogy",
    prompt: "Explain Constructivism.",
  },
  {
    title: "👨‍🎓 Psychology",
    prompt: "Explain Piaget's Theory.",
  },
  {
    title: "🎯 Mock Test",
    prompt: "Generate a 25 question mock test.",
  },
];

export default function Welcome({ onQuickAction }) {
  return (
    <div className="text-center py-16">

      <h2 className="text-4xl font-bold text-slate-900">
        👋 Welcome to FREYA AI
      </h2>

      <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
        Your Personal AI Teacher developed by
        <span className="font-semibold"> Freya Solution Academy</span>
      </p>

      <p className="text-blue-600 font-semibold mt-2">
        Mission TAT Gujarat
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

        {quickActions.map((item) => (
          <button
            key={item.title}
            onClick={() => onQuickAction(item.prompt)}
            className="bg-white border rounded-2xl p-6 shadow hover:shadow-xl transition text-left"
          >
            <div className="text-xl font-semibold">
              {item.title}
            </div>

            <div className="text-gray-500 mt-3">
              Click to start instantly.
            </div>
          </button>
        ))}

      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-10">

        <button
          onClick={() =>
            onQuickAction("Generate 20 TAT Secondary MCQs")
          }
          className="px-5 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700"
        >
          20 MCQs
        </button>

        <button
          onClick={() =>
            onQuickAction("Generate Short Notes")
          }
          className="px-5 py-3 rounded-full bg-green-600 text-white hover:bg-green-700"
        >
          Short Notes
        </button>

        <button
          onClick={() =>
            onQuickAction("Explain Bloom's Taxonomy")
          }
          className="px-5 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700"
        >
          Bloom's Taxonomy
        </button>

        <button
          onClick={() =>
            onQuickAction("Create Lesson Plan")
          }
          className="px-5 py-3 rounded-full bg-orange-600 text-white hover:bg-orange-700"
        >
          Lesson Plan
        </button>

      </div>

    </div>
  );
}