import { useState } from "react";
import { createMockTest } from "../services/mockTestService";

function CreateMockTest() {

  const [form, setForm] = useState({
    title: "",
    duration: 60,
    totalQuestions: 100,
    description: "",
  });

  function change(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
  }

  async function handleCreate() {

    if (!form.title) {
      alert("Enter Test Title");
      return;
    }

    await createMockTest(form);

    alert("Mock Test Created Successfully");

    setForm({
      title: "",
      duration: 60,
      totalQuestions: 100,
      description: "",
    });

  }

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold">
          Create Mock Test
        </h1>

        <div className="space-y-6 mt-8">

          <input
            value={form.title}
            onChange={(e)=>change("title",e.target.value)}
            placeholder="Mock Test Name"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="number"
            value={form.duration}
            onChange={(e)=>change("duration",Number(e.target.value))}
            placeholder="Duration"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="number"
            value={form.totalQuestions}
            onChange={(e)=>change("totalQuestions",Number(e.target.value))}
            placeholder="Questions"
            className="w-full border rounded-xl p-4"
          />

          <textarea
            value={form.description}
            onChange={(e)=>change("description",e.target.value)}
            placeholder="Description"
            className="w-full h-36 border rounded-xl p-4"
          />

          <button
            onClick={handleCreate}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold"
          >
            Create Mock Test
          </button>

        </div>

      </div>

    </div>

  );

}

export default CreateMockTest;