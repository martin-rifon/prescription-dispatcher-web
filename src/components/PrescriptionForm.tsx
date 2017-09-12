import * as React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Table, Button } from 'react-bootstrap'

export interface PrescriptionFormProps { uiStore: any }

export class PrescriptionForm extends React.Component<PrescriptionFormProps, undefined> {
    render() {
        return (
          <Form horizontal>
            <FormGroup controlId="formControlsTitle">
              <Col componentClass={ControlLabel} sm={5} style={{ textAlign: 'left' }}>
                <h2>Prescription information</h2>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={5} style={{ textAlign: 'left' }}>
                <Button
                  bsStyle="primary"
                  onClick={ this.props.uiStore.showAddFromFormulationModal }
                >
                  Pick a starting formulation
                </Button>
              </Col>
            </FormGroup>

            <FormGroup>
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
                Add ingredient miniform
              </Col>
            </FormGroup>
          </Form>
        );
    }
}
