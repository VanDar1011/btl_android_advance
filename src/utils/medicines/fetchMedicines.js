const API_APP = process.env['API_APP'];
const fetchMedicines = async setMedicines => {
  const res = await fetch(`${API_APP}/v1/api/medicines`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  setMedicines(data.data.medicines);
};
export default fetchMedicines;
