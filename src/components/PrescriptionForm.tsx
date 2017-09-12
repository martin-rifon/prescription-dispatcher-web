import * as React from 'react';
import { Row , ControlLabel, Col, Table, Button } from 'react-bootstrap';
import { observe } from 'mobx';

import AddIngredientForm from './AddIngredientForm';
import ui from '../store/ui';

export interface PrescriptionFormProps { }

export class PrescriptionForm extends React.Component<PrescriptionFormProps, undefined> {
  render() {
    return (
      <div>
        <Row>
          <Col componentClass={ ControlLabel } sm={5} style={{ textAlign: 'left' }}>
            <h2>Prescription information</h2>
          </Col>
        </Row>

        <Row>
          <Col componentClass={ ControlLabel } sm={5} style={{ textAlign: 'left' }}>
            <Button
              bsStyle="primary"
              onClick={ ui.showAddFromFormulationModal }
            >
              Pick a starting formulation
            </Button>
          </Col>
        </Row>

        <Row>
          <Col sm={7}>
            <Table responsive striped>
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Classes</th>
                  <th>Amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rick Sanchez</td>
                  <td>Alcoholic</td>
                  <td>1.0</td>
                  <td>Remove</td>
                </tr>
                <tr>
                  <td>Bird Person</td>
                  <td>Serious, Earnest</td>
                  <td>2.5</td>
                  <td>Remove</td>
                </tr>
                <tr>
                  <td>Squanchy</td>
                  <td>-</td>
                  <td>0.87</td>
                  <td>Remove</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col sm={4} smOffset={1}>
            <AddIngredientForm />
          </Col>
        </Row>
      </div>
    );
  }
}
