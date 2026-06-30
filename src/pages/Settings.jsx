function Settings() {

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold mb-8">
          Settings
        </h1>

        <div className="space-y-5">

          <div className="flex justify-between items-center bg-slate-100 rounded-xl p-5">
            <h2>Dark Mode</h2>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
              Coming Soon
            </button>
          </div>

          <div className="flex justify-between items-center bg-slate-100 rounded-xl p-5">
            <h2>Language</h2>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
              Gujarati
            </button>
          </div>

          <div className="flex justify-between items-center bg-slate-100 rounded-xl p-5">
            <h2>Notifications</h2>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
              ON
            </button>
          </div>

          <div className="flex justify-between items-center bg-slate-100 rounded-xl p-5">
            <h2>Version</h2>
            <b>1.0.0</b>
          </div>

        </div>

      </div>

    </div>

  );

}

export default Settings;