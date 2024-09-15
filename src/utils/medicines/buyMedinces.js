import toastCustom from '../notifications/toastCustom';
const API_APP = process.env['API_APP'];
const byMedinines = async data => {
  console.log(data);
  const res = await fetch(`${API_APP}/v1/api/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const dataRes = await res.json();
  console.log(dataRes);
  if (!res.ok) {
    throw new Error(dataRes.message || 'Something went wrong');
  }
  toastCustom('Order created successfully');
};
export default byMedinines;
