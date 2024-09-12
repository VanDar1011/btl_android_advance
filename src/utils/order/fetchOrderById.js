const API_APP = process.env['API_APP'];
const fetchOrderById = async (id, status, setOrder) => {
  // http://localhost:4000/v1/api/orders?userId=2&status=pending
  const res = await fetch(
    `${API_APP}/v1/api/orders?userId=${id}&status=${status}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await res.json();
  setOrder(data.data.carts);
};
export default fetchOrderById;
