import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MessageBubble({ message }) {

  const isUser = message.role === "user";

  return (

    <div
      className={`flex mb-6 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >

      <div
        className={`max-w-4xl rounded-2xl px-6 py-5 shadow-md ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white border"
        }`}
      >

        <div className="font-bold mb-3">

          {isUser ? "👤 You" : "🤖 Mission TAT AI"}

        </div>

        {isUser ? (

          <p className="whitespace-pre-wrap">
            {message.content}
          </p>

        ) : (

          <div className="prose prose-slate max-w-none">

            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
            >
              {message.content}
            </ReactMarkdown>

          </div>

        )}

      </div>

    </div>

  );

}

export default MessageBubble;