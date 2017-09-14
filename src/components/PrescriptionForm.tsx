import * as React from 'react';
import { Row , ControlLabel, Col, Table, Button } from 'react-bootstrap';
import { observer } from 'mobx-react';

import AddIngredientForm from './AddIngredientForm';

import ui from '../store/ui';
import prescription from '../store/prescription';

export interface PrescriptionFormProps { }

const PrescriptionForm = observer(
  class PrescriptionForm extends React.Component<PrescriptionFormProps, undefined> {
    render() {
      const prescriptionRows = prescription.ingredients.map((ingredient: any) => {
        return <tr key={ingredient.id}>
                 <td>
                   {ingredient.name}
                 </td>
                 <td>
                   {ingredient.description}
                 </td>
                 <td>
                   {ingredient.percentage}
                 </td>
               </tr>;
      });

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
                    <th>Name</th>
                    <th>Description</th>
                    <th>Percentage</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {prescriptionRows}
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
);

export default PrescriptionForm;