import { useState } from "react";

import { uploadQuestions } from "../services/uploadQuestionService";
import { uploadExcel } from "../services/excelUploadService";
import { extractQuestionsFromPDF } from "../services/pdfQuestionExtractor";
import { parseQuestions } from "../services/aiQuestionParser";

function UploadQuestions() {

  const [json, setJson] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleUpload() {

    try {

      setLoading(true);

      const questions = JSON.parse(json);

      await uploadQuestions(questions);

      alert("✅ Questions Uploaded Successfully");

      setJson("");

    } catch (err) {

      console.error(err);

      alert("❌ Invalid JSON");

    } finally {

      setLoading(false);

    }

  }

  async function handleExcel(e) {

    if (!e.target.files[0]) return;

    try {

      setLoading(true);

      await uploadExcel(e.target.files[0]);

      alert("✅ Excel Uploaded Successfully");

    } catch (err) {

      console.error(err);

      alert("❌ Excel Upload Failed");

    } finally {

      setLoading(false);

    }

  }

  async function handlePDF(e) {

    if (!e.target.files[0]) return;

    try {

      setLoading(true);

      const text = await extractQuestionsFromPDF(
        e.target.files[0]
      );

      const parsed = parseQuestions(text);

      setJson(
        JSON.stringify(parsed, null, 2)
      );

      alert("✅ PDF Converted To JSON");

    } catch (err) {

      console.error(err);

      alert("❌ PDF Parsing Failed");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold">
          Upload Questions
        </h1>

        <p className="text-gray-500 mt-2">
          Upload Excel, PDF or Paste JSON
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div>

            <label className="block font-bold mb-3">
              Upload Excel
            </label>

            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleExcel}
              className="w-full border rounded-xl p-3"
            />

          </div>

          <div>

            <label className="block font-bold mb-3">
              Upload PDF
            </label>

            <input
              type="file"
              accept=".pdf"
              onChange={handlePDF}
              className="w-full border rounded-xl p-3"
            />

          </div>

        </div>

        <div className="mt-8">

          <label className="block font-bold mb-3">
            JSON Preview / Manual Paste
          </label>

          <textarea

            value={json}

            onChange={(e)=>setJson(e.target.value)}

            className="w-full h-[420px] border rounded-xl p-5 font-mono outline-none"

            placeholder={`[
  {
    "question":"Question Here",
    "optionA":"Option A",
    "optionB":"Option B",
    "optionC":"Option C",
    "optionD":"Option D",
    "answer":"A",
    "testId":"tat-demo",
    "order":1,
    "marks":1,
    "negative":0
  }
]`}

          />

        </div>

        <button

          onClick={handleUpload}

          disabled={loading}

          className="mt-8 w-full bg-green-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-green-700"

        >

          {loading ? "Processing..." : "Upload Questions"}

        </button>

      </div>

    </div>

  );

}

export default UploadQuestions;