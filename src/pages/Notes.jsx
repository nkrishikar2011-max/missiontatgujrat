function Notes() {

  const notes = [
    "Psychology",
    "Gujarati",
    "Hindi",
    "English",
    "Reasoning",
    "Pedagogy",
    "Current Affairs",
    "Science",
  ];

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Notes Library
        </h1>

        <div className="grid grid-cols-4 gap-6">

          {notes.map((note) => (

            <div
              key={note}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >

              <div className="text-5xl">
                📚
              </div>

              <h2 className="text-2xl font-bold mt-5">
                {note}
              </h2>

              <button
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl"
              >
                View Notes
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Notes;