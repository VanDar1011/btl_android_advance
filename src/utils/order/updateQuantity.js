const API_APP = process.env['API_APP'];
const updateQuantity = async (id, quantity) => {
  // http://localhost:3000/v1/api/order
  // {"idOrder":28,
  //  "payload":{"quantity":8000,"status":"pending"}
  // }
  const res = await fetch(`${API_APP}/v1/api/order`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      idOrder: id,
      payload: {
        quantity,
        status: 'pending',
      },
    }),
  });
  const data = await res.json();
  console.log(data);
  return data;
};
export default updateQuantity;
