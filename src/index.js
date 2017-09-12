import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import ObservableFormulationStore from './store/formulations';

const observableFormulationStore = new ObservableFormulationStore();

ReactDOM.render(<App observableFormulationStore={ observableFormulationStore } />,
                document.getElementById('root'));
registerServiceWorker();
