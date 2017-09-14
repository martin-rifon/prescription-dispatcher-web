import { makeRequest } from './utils';

const searchIngredients = (query: any) => {
  return makeRequest(`http://localhost:3000/ingredients?q=/${query}`, {});
};

const getFormulations = () => {
  return makeRequest(`http://localhost:3000/formulations`, {});
};

const dispathPrescription = (data: any) => {
  return makeRequest(`http://localhost:3000/prescriptions`,
    {
      method: 'POST',
      body: JSON.stringify({
        prescription: data
      })
    }
  );
};

export {
  searchIngredients,
  getFormulations,
  dispathPrescription
};
