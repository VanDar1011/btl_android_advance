const API_APP = process.env['API_APP'];
const searchMedicineByName = async (text, idCategory, setMedicines) => {
  // console.log(text, idCategory);
  const res = await fetch(
    `${API_APP}/v1/api/medicines?q=${text}&categoryId=${idCategory}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await res.json();
  // console.log(data);
  setMedicines(data.data.medicines);
};
export default searchMedicineByName;
