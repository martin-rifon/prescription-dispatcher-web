import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

import { PatientInfoForm } from './components/PatientInfoForm';
import { PrescriptionForm } from './components/PrescriptionForm';
import LoadFormulationModal from './components/LoadFormulationModal';

export interface AppProps { observableFormulationStore: Object, observableUiStore: Object }

class App extends React.Component<AppProps, undefined> {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={6} smOffset={3}>
              <h1 style={{ textAlign: 'center' }}>Prescription Dispatcher</h1>
            </Col>

            <Col sm={10} smOffset={1}>
              <PatientInfoForm />
            </Col>

            <Col sm={10} smOffset={1}>
              <PrescriptionForm uiStore={ this.props.observableUiStore } />
            </Col>

            <LoadFormulationModal uiStore={ this.props.observableUiStore } />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
