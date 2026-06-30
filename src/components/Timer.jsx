function Timer({ minutes, seconds }) {

  const danger =
    minutes < 5;

  return (

    <div
      className={`
      px-6 py-3 rounded-xl
      text-2xl font-bold shadow

      ${
        danger
          ? "bg-red-600 text-white animate-pulse"
          : "bg-green-600 text-white"
      }
      `}
    >

      {String(minutes).padStart(2,"0")}:
      {String(seconds).padStart(2,"0")}

    </div>

  );

}

export default Timer;