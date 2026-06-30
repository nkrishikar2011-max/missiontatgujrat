import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { auth, googleProvider, db } from "../firebase/firebase.js";

function Login() {
  const navigate = useNavigate();

  async function loginWithGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;

      const userRef = doc(db, "users", user.uid);

      const snapshot = await getDoc(userRef);

      if (!snapshot.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,

          plan: "free",

          dailyLimit: 10,
          usedToday: 0,

          lastReset: new Date().toISOString().split("T")[0],

          createdAt: serverTimestamp(),
        });
      }
localStorage.setItem("freya_uid", user.uid);
localStorage.setItem("freya_name", user.displayName);
localStorage.setItem("freya_plan", "free");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 w-[430px] rounded-3xl shadow-2xl p-10">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-white">
            🤖 FREYA AI
          </h1>

          <p className="text-blue-400 mt-2 font-semibold">
            Freya Solution Academy
          </p>

          <p className="text-gray-400 mt-1">
            Mission TAT Gujarat
          </p>

        </div>

        <button
          onClick={loginWithGoogle}
          className="w-full mt-10 bg-white hover:bg-gray-100 rounded-2xl py-4 font-semibold text-lg transition"
        >
          Continue with Google
        </button>

        <div className="mt-8 text-center text-gray-500 text-sm">
          By continuing you agree to use
          <br />
          FREYA AI for educational purposes.
        </div>

      </div>

    </div>
  );
}

export default Login;