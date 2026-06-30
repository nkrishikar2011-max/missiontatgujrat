import {
  createOrder,
  verifyPayment,
} from "../services/paymentService";

import { getAuth } from "firebase/auth";

function Payment() {

  const auth = getAuth();

  const plan = {

    title: "Premium",

    amount: 199,

  };

  async function buyPlan() {

    const order = await createOrder(

      plan.amount

    );

    const options = {

      key: import.meta.env.VITE_RAZORPAY_KEY,

      amount: order.amount,

      currency: order.currency,

      name: "Mission TAT Gujarat",

      description: plan.title,

      order_id: order.id,

      handler: async function(response) {

        const result = await verifyPayment({

          razorpay_order_id:

            response.razorpay_order_id,

          razorpay_payment_id:

            response.razorpay_payment_id,

          razorpay_signature:

            response.razorpay_signature,

          uid: auth.currentUser.uid,

          plan: plan.title,

          amount: plan.amount,

        });

        if(result.success){

          alert("Premium Activated");

        }

        else{

          alert("Verification Failed");

        }

      },

      theme:{

        color:"#2563eb",

      }

    };

    new window.Razorpay(options).open();

  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white rounded-2xl shadow-xl p-10 w-[500px]">

        <h1 className="text-4xl font-bold">

          Premium Plan

        </h1>

        <p className="mt-4">

          ₹199 / Month

        </p>

        <button

          onClick={buyPlan}

          className="mt-10 w-full bg-blue-600 text-white py-4 rounded-xl"

        >

          Buy Premium

        </button>

      </div>

    </div>

  );

}

export default Payment;