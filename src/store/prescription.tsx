import * as mobx from 'mobx';
import { observable } from 'mobx';

import * as api from '../api/index';

interface ObservablePrescriptionStoreInterface {
  setIngredients(ingredients: Array<Object>): void;
  addIngredient(ingredients: Object): void;
  dispatch(): void;

  patientInformation: any;
}

class ObservablePrescriptionStore implements ObservablePrescriptionStoreInterface {
	@observable ingredients: Array<Object> = [];
  @observable patientInformation: any = {
    name: '',
    dateOfBirth: null,
    streetAddress: null,
    city: null,
    state: null,
    zip: null,
    phone: null,
  };

  setIngredients = (ingredients: Array<Object>) => {
    this.ingredients = ingredients;
  };

  addIngredient = (ingredient: Object) => {
    this.ingredients.push(ingredient);
  };

  dispatch = () => {
    const ingredients = this.ingredients;
    const patientInformation = this.patientInformation;
    api.dispathPrescription({ ingredients, patientInformation })
       .then((data: any) => {
         console.log('success');
         console.log('');
         console.log('data');
         console.log(data);
         console.log('');
       })
       .catch((error: any) => {
         console.log('error');
         console.log('');
         console.log('error');
         console.log(error);
         console.log('');
       });
  };
}

const prescription = new ObservablePrescriptionStore();
export default prescription;
