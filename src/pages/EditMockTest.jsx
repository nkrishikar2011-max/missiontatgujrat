import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getMockTest,
  updateMockTest,
} from "../services/mockTestService";

function EditMockTest() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: 60,
    totalQuestions: 100,
  });

  useEffect(() => {
    loadTest();
  }, []);

  async function loadTest() {

    const data = await getMockTest(id);

    setForm(data);

  }

  function change(field, value) {

    setForm({
      ...form,
      [field]: value,
    });

  }

  async function save() {

    await updateMockTest(id, form);

    alert("Updated Successfully");

    navigate("/admin/tests");

  }

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold mb-8">
          Edit Mock Test
        </h1>

        <div className="space-y-5">

          <input
            value={form.title}
            onChange={(e)=>change("title",e.target.value)}
            className="w-full border rounded-xl p-4"
          />

          <textarea
            value={form.description}
            onChange={(e)=>change("description",e.target.value)}
            className="w-full h-40 border rounded-xl p-4"
          />

          <input
            type="number"
            value={form.duration}
            onChange={(e)=>change("duration",Number(e.target.value))}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="number"
            value={form.totalQuestions}
            onChange={(e)=>change("totalQuestions",Number(e.target.value))}
            className="w-full border rounded-xl p-4"
          />

          <button
            onClick={save}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold"
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>

  );

}

export default EditMockTest;