import { useState } from "react";

function ChatInput({ onSend, loading }) {

  const [message, setMessage] = useState("");

  async function send() {

    if (!message.trim()) return;

    await onSend(message);

    setMessage("");

  }

  function handleKeyDown(e) {

    if (e.key === "Enter" && !e.shiftKey) {

      e.preventDefault();

      send();

    }

  }

  return (

    <div className="bg-white border rounded-2xl shadow-lg p-4">

      <textarea

        value={message}

        onChange={(e)=>setMessage(e.target.value)}

        onKeyDown={handleKeyDown}

        rows={3}

        placeholder="Ask anything about TAT, TET, HTAT..."

        className="w-full resize-none outline-none"

      />

      <div className="flex justify-end mt-4">

        <button

          disabled={loading}

          onClick={send}

          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-xl font-bold"

        >

          {

            loading

            ? "Thinking..."

            : "Send"

          }

        </button>

      </div>

    </div>

  );

}

export default ChatInput;