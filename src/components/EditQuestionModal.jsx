import { useEffect, useState } from "react";

function EditQuestionModal({
  open,
  question,
  onClose,
  onSave,
}) {

  const [form, setForm] = useState({});

  useEffect(() => {
    if (question)
      setForm(question);
  }, [question]);

  if (!open) return null;

  function change(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white w-[900px] rounded-2xl p-8">

        <h1 className="text-3xl font-bold mb-6">
          Edit Question
        </h1>

        <textarea
          value={form.question || ""}
          onChange={(e)=>change("question",e.target.value)}
          className="w-full border rounded-xl p-4 h-28"
        />

        <div className="grid grid-cols-2 gap-4 mt-6">

          <input
            value={form.optionA || ""}
            onChange={(e)=>change("optionA",e.target.value)}
            className="border rounded-xl p-4"
            placeholder="Option A"
          />

          <input
            value={form.optionB || ""}
            onChange={(e)=>change("optionB",e.target.value)}
            className="border rounded-xl p-4"
            placeholder="Option B"
          />

          <input
            value={form.optionC || ""}
            onChange={(e)=>change("optionC",e.target.value)}
            className="border rounded-xl p-4"
            placeholder="Option C"
          />

          <input
            value={form.optionD || ""}
            onChange={(e)=>change("optionD",e.target.value)}
            className="border rounded-xl p-4"
            placeholder="Option D"
          />

        </div>

        <div className="mt-6">

          <select
            value={form.answer || "A"}
            onChange={(e)=>change("answer",e.target.value)}
            className="border rounded-xl p-4"
          >

            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>

          </select>

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="bg-gray-300 px-6 py-3 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(form)}
            className="bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}

export default EditQuestionModal;