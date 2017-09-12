import * as mobx from 'mobx';
import { observable, computed } from 'mobx';

interface ObservableUiStoreInterface {
  addFromFormulationModalOpen: Boolean;
  showAddFromFormulationModal(): any;
  hideAddFromFormulationModal(): any;
}

class ObservableUiStore implements ObservableUiStoreInterface {
	@observable addFromFormulationModalOpen: Boolean = false;

  constructor() {
      mobx.autorun(() => console.log(this.report));
  }

	showAddFromFormulationModal = () => {
		this.addFromFormulationModalOpen = true;
	};

	hideAddFromFormulationModal = () => {
		this.addFromFormulationModalOpen = false;
	};

  @computed get report() {
    return `this.addFromFormulationModalOpen: ${this.addFromFormulationModalOpen}`;
  }
}

export default ObservableUiStore;
