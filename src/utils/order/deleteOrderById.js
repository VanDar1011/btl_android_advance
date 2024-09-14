const API_APP = process.env['API_APP'];
const deleteOrderById = async id => {
  // http://localhost:3000/v1/api/order/9
  const res = await fetch(`${API_APP}/v1/api/order/${id}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  console.log(data);
  return data;
};
export default deleteOrderById;
