import * as mobx from 'mobx';
import { observable } from 'mobx';

import * as api from '../api/index';

interface ObservableFormulationStoreInterface {
  fetchFormulations(): void;

  formulations: Array<Object>;
}

class ObservableFormulationStore implements ObservableFormulationStoreInterface {
	@observable formulations: Array<Object> = [];

  constructor() {
    this.fetchFormulations();
  }

  fetchFormulations = () => {
    let that = this;
    api.getFormulations()
       .then((data: any) => {
         that.formulations = JSON.parse(data.formulations);
       })
       .catch((error: any) => {
         that.formulations = [];
       });
  };
}

const formulations = new ObservableFormulationStore();
export default formulations;
