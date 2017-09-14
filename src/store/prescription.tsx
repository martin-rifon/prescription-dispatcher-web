import * as mobx from 'mobx';
import { observable } from 'mobx';

interface ObservablePrescriptionStoreInterface {
  setIngredients(ingredients: Array<Object>): void;
  addIngredient(ingredients: Object): void;
}

class ObservablePrescriptionStore implements ObservablePrescriptionStoreInterface {
	@observable ingredients: Array<Object> = [];

  setIngredients = (ingredients: Array<Object>) => {
    this.ingredients = ingredients;
  };

  addIngredient = (ingredient: Object) => {
    this.ingredients.push(ingredient);
  };
}

const prescription = new ObservablePrescriptionStore();
export default prescription;
