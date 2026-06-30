function Performance() {

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Performance
        </h1>

        <div className="grid grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-gray-500">Tests</h2>
            <p className="text-5xl font-bold mt-4">0</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-gray-500">Average</h2>
            <p className="text-5xl font-bold mt-4">0%</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-gray-500">Best</h2>
            <p className="text-5xl font-bold mt-4">0%</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-gray-500">Rank</h2>
            <p className="text-5xl font-bold mt-4">--</p>
          </div>

        </div>

      </div>

    </div>

  );

}

export default Performance;