import Razorpay from "razorpay";
import crypto from "crypto";

import { db } from "../firebase/firebaseAdmin.js";

const razorpay = new Razorpay({

  key_id: process.env.RAZORPAY_KEY_ID,

  key_secret: process.env.RAZORPAY_SECRET,

});

export async function createOrder(req, res) {

  try {

    const { amount } = req.body;

    const order = await razorpay.orders.create({

      amount: amount * 100,

      currency: "INR",

      receipt: "receipt_" + Date.now(),

    });

    res.json(order);

  }

  catch (err) {

    res.status(500).json(err);

  }

}

export async function verifyPayment(req, res) {

  try {

    const {

      razorpay_order_id,

      razorpay_payment_id,

      razorpay_signature,

      uid,

      plan,

      amount,

    } = req.body;

    const generated = crypto

      .createHmac(

        "sha256",

        process.env.RAZORPAY_SECRET

      )

      .update(

        razorpay_order_id +

        "|" +

        razorpay_payment_id

      )

      .digest("hex");

    if (generated !== razorpay_signature) {

      return res.status(400).json({

        success: false,

      });

    }

    await db.collection("payments").add({

      uid,

      plan,

      amount,

      paymentId: razorpay_payment_id,

      orderId: razorpay_order_id,

      createdAt: new Date(),

      status: "Success",

    });

    await db.collection("users")

      .doc(uid)

      .update({

        premium: true,

        premiumPlan: plan,

        premiumSince: new Date(),

      });

    res.json({

      success: true,

    });

  }

  catch (err) {

    console.log(err);

    res.status(500).json(err);

  }

}