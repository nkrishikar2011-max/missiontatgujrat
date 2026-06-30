function PreviousPapers() {

  const papers = [
    "TAT 2025",
    "TAT 2024",
    "TAT 2023",
    "TET 2 2025",
    "HTAT 2025",
    "HMAT",
  ];

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Previous Papers
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          {papers.map((paper) => (

            <div
              key={paper}
              className="bg-white rounded-2xl shadow-lg p-6"
            >

              <h2 className="text-2xl font-bold">
                📄 {paper}
              </h2>

              <button
                className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl"
              >
                Open Paper
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default PreviousPapers;