import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getMockTests,
  deleteMockTest,
} from "../services/mockTestService";

function ManageMockTests() {

  const navigate = useNavigate();

  const [tests, setTests] = useState([]);

  useEffect(() => {
    loadTests();
  }, []);

  async function loadTests() {
    const data = await getMockTests();
    setTests(data);
  }

  async function handleDelete(id) {

    if (!window.confirm("Delete this Mock Test?"))
      return;

    await deleteMockTest(id);

    loadTests();

  }

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            Manage Mock Tests
          </h1>

          <button
            onClick={() => navigate("/admin/create-test")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
          >
            + Create Test
          </button>

        </div>

        <div className="space-y-5">

          {tests.map((test) => (

            <div
              key={test.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center"
            >

              <div>

                <h2 className="text-2xl font-bold">
                  {test.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  {test.totalQuestions} Questions • {test.duration} Minutes
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  {test.description}
                </p>

              </div>

              <div className="flex gap-3">

                <button
                  onClick={() =>
                    navigate(`/admin/edit-test/${test.id}`)
                  }
                  className="bg-yellow-400 px-6 py-3 rounded-xl font-bold"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(test.id)
                  }
                  className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default ManageMockTests;