import * as React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './App.css';

import { PatientInfoForm } from './components/PatientInfoForm';
import PrescriptionForm from './components/PrescriptionForm';
import LoadFormulationModal from './components/LoadFormulationModal';

import ui from './store/ui';
import prescription from './store/prescription';

export interface AppProps { observableFormulationStore: Object, observableUiStore: Object }

class App extends React.Component<AppProps, undefined> {
  generatePDF() {
    prescription.dispatch();
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={6} smOffset={3}>
              <h1 style={{ textAlign: 'center' }}>Prescription Dispatcher</h1>
            </Col>

            <Col sm={10} smOffset={1}>
              <hr />
              <PatientInfoForm />
              <hr />
            </Col>

            <hr />

            <Col sm={10} smOffset={1}>
              <PrescriptionForm />
              <hr />
            </Col>

            <Row style={{marginTop: '3em', marginBottom: '1em'}}>
              <Col sm={7} smOffset={5}>
                <Button onClick={this.generatePDF} bsStyle="primary">
                  Generate PDF
                </Button>
              </Col>
            </Row>

            <LoadFormulationModal />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
