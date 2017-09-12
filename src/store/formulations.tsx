import * as mobx from 'mobx';
import { observable, computed } from 'mobx';

class ObservableFormulationStore {
	@observable formulations: Array<Object> = [];

  constructor() {
      mobx.autorun(() => console.log(this.report));
  }

	@computed get report() {
		return `this.formulations.length: ${this.formulations.length}`;
	}

	addFormulation(formulation: Object) {
		this.formulations.push(formulation);
	}
}

export default ObservableFormulationStore;
