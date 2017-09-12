import { makeRequest } from './utils';

const searchIngredients = (query: any) => {
  return makeRequest(`http://localhost:3000/ingredients?q=/${query}`, {});
};

export {
  searchIngredients
};
