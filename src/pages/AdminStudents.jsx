import { useEffect, useState } from "react";

import {
  getUsers,
  banUser,
  unbanUser,
  makePremium,
  removePremium,
  deleteUser,
} from "../services/userManagementService";

function AdminStudents() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    setUsers(await getUsers());
  }

  const filtered = users.filter(user =>
    (user.name || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            User Management
          </h1>

          <input
            placeholder="Search User..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="border rounded-xl px-5 py-3 w-72"
          />

        </div>

        <div className="space-y-5">

          {filtered.map(user=>(

            <div
              key={user.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center"
            >

              <div>

                <h2 className="text-xl font-bold">
                  {user.name}
                </h2>

                <p>{user.email}</p>

                <div className="mt-2 flex gap-3">

                  {user.premium && (
                    <span className="text-green-600 font-bold">
                      PREMIUM
                    </span>
                  )}

                  {user.banned && (
                    <span className="text-red-600 font-bold">
                      BANNED
                    </span>
                  )}

                </div>

              </div>

              <div className="grid grid-cols-2 gap-3">

                <button
                  onClick={async()=>{
                    await makePremium(user.id);
                    loadUsers();
                  }}
                  className="bg-green-600 text-white px-4 py-2 rounded-xl"
                >
                  Premium
                </button>

                <button
                  onClick={async()=>{
                    await removePremium(user.id);
                    loadUsers();
                  }}
                  className="bg-yellow-500 px-4 py-2 rounded-xl"
                >
                  Remove
                </button>

                <button
                  onClick={async()=>{
                    await banUser(user.id);
                    loadUsers();
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-xl"
                >
                  Ban
                </button>

                <button
                  onClick={async()=>{
                    await unbanUser(user.id);
                    loadUsers();
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl"
                >
                  Unban
                </button>

                <button
                  onClick={async()=>{
                    if(confirm("Delete User?")){
                      await deleteUser(user.id);
                      loadUsers();
                    }
                  }}
                  className="bg-black text-white px-4 py-2 rounded-xl col-span-2"
                >
                  Delete User
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default AdminStudents;