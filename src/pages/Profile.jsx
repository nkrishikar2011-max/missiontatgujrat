import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../firebase/firebase";

function Profile() {

  const auth = getAuth();

  const [user, setUser] = useState({

    name: "",

    email: "",

    xp: 0,

    level: 1,

    streak: 0,

    premium: false,

  });

  useEffect(() => {

    loadProfile();

  }, []);

  async function loadProfile() {

    if (!auth.currentUser) return;

    const snap = await getDoc(

      doc(db, "users", auth.currentUser.uid)

    );

    if (snap.exists()) {

      setUser({

        name:
          auth.currentUser.displayName ||
          "Student",

        email:
          auth.currentUser.email,

        ...snap.data(),

      });

    }

  }

  const progress = user.xp % 100;

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-3xl shadow-lg p-10">

          <div className="flex items-center gap-8">

            <div className="w-32 h-32 rounded-full bg-blue-600 text-white flex items-center justify-center text-5xl font-bold">

              {user.name
                ? user.name[0]
                : "S"}

            </div>

            <div>

              <h1 className="text-5xl font-bold">

                {user.name}

              </h1>

              <p className="text-gray-500 mt-3">

                {user.email}

              </p>

              <div className="flex gap-3 mt-5">

                <span className="bg-blue-600 text-white px-4 py-2 rounded-full">

                  Level {user.level}

                </span>

                <span className="bg-yellow-500 text-white px-4 py-2 rounded-full">

                  ⭐ {user.xp} XP

                </span>

                <span className="bg-red-500 text-white px-4 py-2 rounded-full">

                  🔥 {user.streak} Days

                </span>

                {user.premium && (

                  <span className="bg-green-600 text-white px-4 py-2 rounded-full">

                    💎 Premium

                  </span>

                )}

              </div>

            </div>

          </div>

          <div className="mt-10">

            <div className="flex justify-between">

              <span>

                XP Progress

              </span>

              <span>

                {progress}/100

              </span>

            </div>

            <div className="w-full bg-gray-300 rounded-full h-5 mt-3">

              <div

                className="bg-blue-600 h-5 rounded-full"

                style={{

                  width: `${progress}%`

                }}

              />

            </div>

          </div>

        </div>

        <div className="grid grid-cols-4 gap-8 mt-10">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <div className="text-5xl">

              📝

            </div>

            <h2 className="mt-5">

              Tests

            </h2>

            <p className="text-4xl font-bold mt-4">

              0

            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <div className="text-5xl">

              🎯

            </div>

            <h2 className="mt-5">

              Accuracy

            </h2>

            <p className="text-4xl font-bold mt-4">

              0%

            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <div className="text-5xl">

              🏆

            </div>

            <h2 className="mt-5">

              Rank

            </h2>

            <p className="text-4xl font-bold mt-4">

              --

            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <div className="text-5xl">

              📜

            </div>

            <h2 className="mt-5">

              Certificates

            </h2>

            <p className="text-4xl font-bold mt-4">

              0

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Profile;