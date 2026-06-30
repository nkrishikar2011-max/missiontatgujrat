const API = "http://localhost:5000/payment";

export async function createOrder(amount) {

  const response = await fetch(

    `${API}/create-order`,

    {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify({

        amount,

      }),

    }

  );

  return await response.json();

}

export async function verifyPayment(data) {

  const response = await fetch(

    `${API}/verify`,

    {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify(data),

    }

  );

  return await response.json();

}