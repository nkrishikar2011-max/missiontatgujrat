import { useEffect, useState } from "react";

import {
  addPlan,
  deletePlan,
  getPlans,
} from "../services/subscriptionService";

function SubscriptionPlans() {

  const [plans, setPlans] = useState([]);

  const [form, setForm] = useState({
    title: "",
    price: "",
    validity: "",
  });

  useEffect(() => {
    loadPlans();
  }, []);

  async function loadPlans() {

    setPlans(
      await getPlans()
    );

  }

  async function save() {

    if (!form.title) return;

    await addPlan(form);

    setForm({
      title: "",
      price: "",
      validity: "",
    });

    loadPlans();

  }

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">

          Subscription Plans

        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="grid grid-cols-3 gap-5">

            <input

              placeholder="Plan Name"

              value={form.title}

              onChange={(e)=>setForm({...form,title:e.target.value})}

              className="border rounded-xl p-4"

            />

            <input

              placeholder="Price"

              value={form.price}

              onChange={(e)=>setForm({...form,price:e.target.value})}

              className="border rounded-xl p-4"

            />

            <input

              placeholder="Validity"

              value={form.validity}

              onChange={(e)=>setForm({...form,validity:e.target.value})}

              className="border rounded-xl p-4"

            />

          </div>

          <button

            onClick={save}

            className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl"

          >

            Add Plan

          </button>

        </div>

        <div className="space-y-5 mt-8">

          {plans.map(plan=>(

            <div

              key={plan.id}

              className="bg-white rounded-xl shadow-lg p-6 flex justify-between"

            >

              <div>

                <h2 className="text-2xl font-bold">

                  {plan.title}

                </h2>

                <p>

                  ₹{plan.price}

                </p>

                <p>

                  {plan.validity}

                </p>

              </div>

              <button

                onClick={async()=>{

                  await deletePlan(plan.id);

                  loadPlans();

                }}

                className="bg-red-600 text-white px-6 py-3 rounded-xl"

              >

                Delete

              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default SubscriptionPlans;