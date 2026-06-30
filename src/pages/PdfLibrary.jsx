function PdfLibrary() {

  const pdfs = [
    {
      title: "Psychology Notes",
      pages: 128,
    },
    {
      title: "Gujarati Grammar",
      pages: 84,
    },
    {
      title: "Pedagogy",
      pages: 210,
    },
    {
      title: "Previous Papers",
      pages: 160,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          PDF Library
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          {pdfs.map((pdf) => (

            <div
              key={pdf.title}
              className="bg-white rounded-2xl shadow-lg p-6"
            >

              <h2 className="text-2xl font-bold">
                📕 {pdf.title}
              </h2>

              <p className="mt-3 text-gray-500">
                {pdf.pages} Pages
              </p>

              <button
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
              >
                Open PDF
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default PdfLibrary;