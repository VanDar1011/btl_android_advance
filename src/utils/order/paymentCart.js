const API_APP = process.env['API_APP'];
const paymentCart = async id => {
  // http://localhost:3000/v1/api/order
  // {"idOrder":28,
  //  "payload":{"quantity":8000,"status":"pending"}
  // }
  console.log('thanh toan xong', id);
  const res = await fetch(`${API_APP}/v1/api/order`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      idOrder: id,
      payload: {
        status: 'done',
      },
    }),
  });
  const data = await res.json();
  console.log(data);
  return data;
};
export default paymentCart;
