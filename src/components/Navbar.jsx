import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-white h-20 rounded-2xl shadow-md px-8 flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-6">

        <button className="relative text-2xl text-slate-700 hover:text-blue-600">
          <FaBell />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">

          <FaUserCircle className="text-5xl text-blue-600" />

          <div>
            <h3 className="font-bold">Nitin</h3>
            <p className="text-gray-500 text-sm">
              Premium Member
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;