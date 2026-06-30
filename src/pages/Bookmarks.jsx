import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

import { getBookmarks } from "../services/bookmarkService";

function Bookmarks() {

  const auth = getAuth();

  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {

    load();

  }, []);

  async function load() {

    if (!auth.currentUser) return;

    const data = await getBookmarks(
      auth.currentUser.uid
    );

    setBookmarks(data);

  }

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">

          Bookmarked Questions

        </h1>

        <div className="space-y-5">

          {bookmarks.map(item=>(

            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >

              <h2 className="text-xl font-bold">

                {item.question}

              </h2>

              <p className="mt-4">

                Answer :

                <b>

                  {item.answer}

                </b>

              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Bookmarks;