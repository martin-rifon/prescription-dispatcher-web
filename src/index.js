import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import ObservableFormulationStore from './store/formulations';
import ObservableUiStore from './store/ui';

const observableFormulationStore = new ObservableFormulationStore();
const observableUiStore = new ObservableUiStore();

ReactDOM.render(<App observableFormulationStore={ observableFormulationStore }
                     observableUiStore={ observableUiStore }/>,
                document.getElementById('root'));
registerServiceWorker();
