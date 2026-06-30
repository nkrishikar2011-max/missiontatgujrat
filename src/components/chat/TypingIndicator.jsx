function TypingIndicator() {

  return (

    <div className="flex justify-start mb-6">

      <div className="bg-white border rounded-2xl px-6 py-5 shadow-md">

        <div className="font-bold mb-3">

          🤖 Mission TAT AI

        </div>

        <div className="flex items-center gap-2">

          <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"></div>

          <div
            className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>

          <div
            className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>

          <span className="ml-3 text-gray-600">

            Thinking...

          </span>

        </div>

      </div>

    </div>

  );

}

export default TypingIndicator;