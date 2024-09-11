const API_APP = process.env['API_APP'];
const fetchMedicinesCategories = async setCategories => {
  const res = await fetch(`${API_APP}/v1/api/category-medicine`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  // console.log(data);
  setCategories(data.data.categoryMedicine.reverse());
};
export default fetchMedicinesCategories;
