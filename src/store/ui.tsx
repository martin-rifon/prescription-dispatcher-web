import * as mobx from 'mobx';
import { observable, computed } from 'mobx';

import * as api from '../api/index';

interface ObservableUiStoreInterface {
  showAddFromFormulationModal(): void;
  hideAddFromFormulationModal(): void;
  fetchIngredients(query: String): void;
  pickIngredient(ingredient: any): void;
  resetIngredient(): void;
  pickQuantity(quantity: number): void;
  resetQuantity(): void;
  addIngredientToList(ingredient: any): void;
  clearPrescriptionLink(): void;

  addFromFormulationModalOpen: boolean;
  typeaheadIngredientsResults: Array<Object>;
  typeaheadIngredient: Object;
  typeaheadQuantity: number;
  listIngredients: Array<Object>;
  downloadPrescriptionLink: string;
}

class ObservableUiStore implements ObservableUiStoreInterface {
	@observable addFromFormulationModalOpen: boolean = false;
	@observable typeaheadIngredientsResults: Array<Object> = [];
	@observable listIngredients: Array<Object> = [];
	@observable typeaheadIngredient: Object = null;
	@observable typeaheadQuantity: number = 1;
	@observable downloadPrescriptionLink: string = null;

	showAddFromFormulationModal = () => {
		this.addFromFormulationModalOpen = true;
	};

	hideAddFromFormulationModal = () => {
		this.addFromFormulationModalOpen = false;
	};

	fetchIngredients = (query: String) => {
    api.searchIngredients(query)
       .then((data) => {
         this.typeaheadIngredientsResults = data.ingredients;
       })
       .catch(error => {
         this.typeaheadIngredientsResults = [];
       });
	};

  addIngredientToList = (ingredient: any) => {
    this.listIngredients.push(ingredient);
  };

  pickIngredient = (ingredient: any) => {
    this.typeaheadIngredient = ingredient;
  };

  resetIngredient = () => {
    this.typeaheadIngredient = null;
  };

  pickQuantity = (quantity: number) => {
    this.typeaheadQuantity = quantity;
  };

  resetQuantity = () => {
    this.typeaheadQuantity = 1;
  };

  clearPrescriptionLink = () => {
    this.downloadPrescriptionLink = null;
  };
}

const ui = new ObservableUiStore();
export default ui;
