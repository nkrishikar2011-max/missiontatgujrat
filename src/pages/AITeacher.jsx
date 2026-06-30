import { useState } from "react";

import { askAI } from "../services/aiService";

import Header from "../components/ai/Header";
import Welcome from "../components/ai/Welcome";

import MessageBubble from "../components/chat/MessageBubble";
import TypingIndicator from "../components/chat/TypingIndicator";
import ChatInput from "../components/chat/ChatInput";

function AITeacher() {

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [exam, setExam] = useState("TAT Secondary");
  const [language, setLanguage] = useState("Auto");
  const [style, setStyle] = useState("Detailed");
  const [difficulty, setDifficulty] = useState("Exam Level");

  async function handleSend(question) {

    const userMessage = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setLoading(true);

    try {

      const answer = await askAI({
        question,
        exam,
        language,
        style,
        difficulty,
      });

      const aiMessage = {
        role: "assistant",
        content: answer,
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

    } catch (err) {

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ " + err.message,
        },
      ]);

    } finally {

      setLoading(false);

    }

  }

  function newChat() {

    setMessages([]);

    setExam("TAT Secondary");
    setLanguage("Auto");
    setStyle("Detailed");
    setDifficulty("Exam Level");

  }

  return (

    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto p-8">

        <Header onNewChat={newChat} />

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">

          <div className="grid lg:grid-cols-4 gap-5">

            <div>

              <label className="font-bold">
                Exam
              </label>

              <select
                value={exam}
                onChange={(e)=>setExam(e.target.value)}
                className="w-full border rounded-xl mt-2 p-3"
              >

                <option>TAT Secondary</option>
                <option>TAT Higher Secondary</option>
                <option>TET 1</option>
                <option>TET 2</option>
                <option>HTAT</option>
                <option>General Education</option>

              </select>

            </div>

            <div>

              <label className="font-bold">
                Language
              </label>

              <select
                value={language}
                onChange={(e)=>setLanguage(e.target.value)}
                className="w-full border rounded-xl mt-2 p-3"
              >

                <option>Auto</option>
                <option>Gujarati</option>
                <option>English</option>
                <option>Hindi</option>

              </select>

            </div>
                        <div>

              <label className="font-bold">
                Response Style
              </label>

              <select
                value={style}
                onChange={(e)=>setStyle(e.target.value)}
                className="w-full border rounded-xl mt-2 p-3"
              >

                <option>Short</option>
                <option>Detailed</option>
                <option>Bullet Notes</option>
                <option>MCQ Generator</option>
                <option>Lesson Plan</option>
                <option>Interview Questions</option>

              </select>

            </div>

            <div>

              <label className="font-bold">
                Difficulty
              </label>

              <select
                value={difficulty}
                onChange={(e)=>setDifficulty(e.target.value)}
                className="w-full border rounded-xl mt-2 p-3"
              >

                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
                <option>Exam Level</option>

              </select>

            </div>

          </div>

        </div>

        <div className="bg-slate-50 border rounded-2xl p-6 min-h-[450px]">

          {messages.length === 0 && (
            <Welcome
              onQuickAction={handleSend}
            />
          )}

          {messages.map((message, index) => (

            <MessageBubble
              key={index}
              message={message}
            />

          ))}

          {loading && <TypingIndicator />}

        </div>

        <div className="mt-6">

          <ChatInput
            onSend={handleSend}
            loading={loading}
          />

        </div>

      </div>

    </div>
      );

}

export default AITeacher;