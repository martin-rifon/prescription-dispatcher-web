import * as mobx from 'mobx';
import { observable, computed } from 'mobx';

import * as api from '../api/index';

interface ObservableUiStoreInterface {
  addFromFormulationModalOpen: Boolean;
  showAddFromFormulationModal(): any;
  hideAddFromFormulationModal(): any;

  ingredientsTypeaheadResults: Array<Object>;
}

class ObservableUiStore implements ObservableUiStoreInterface {
	@observable addFromFormulationModalOpen: boolean = false;
	@observable ingredientsTypeaheadResults: Array<Object> = [];

	showAddFromFormulationModal = () => {
		this.addFromFormulationModalOpen = true;
	};

	hideAddFromFormulationModal = () => {
		this.addFromFormulationModalOpen = false;
	};

	fetchIngredients = (query: any) => {
    api.searchIngredients(query)
       .then((data) => {
         this.ingredientsTypeaheadResults = data.ingredients;
       })
       .catch(error => {
         this.ingredientsTypeaheadResults = [];
       });
	};
}

const ui = new ObservableUiStore();
export default ui;
