import * as React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';

export interface PatientInfoFormProps { }

export class PatientInfoForm extends React.Component<PatientInfoFormProps, undefined> {
    render() {
        return (
          <Form horizontal>
            <FormGroup controlId="formControlsTitle">
              <Col componentClass={ControlLabel} sm={5} style={{ textAlign: 'left' }}>
                <h2>Patient information</h2>
              </Col>
            </FormGroup>

            <FormGroup controlId="formControlsName">
              <Col componentClass={ControlLabel} sm={2}>
                Name:
              </Col>
              <Col sm={4}>
                <FormControl type="text" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formControlsDateOfBirth">
              <Col componentClass={ControlLabel} sm={2}>
                Date of birth:
              </Col>
              <Col sm={4}>
                <FormControl type="date" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formControlsAddressStreet">
              <Col componentClass={ControlLabel} sm={2}>
                Street address:
              </Col>
              <Col sm={4}>
                <FormControl type="text" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formControlsAddressCity">
              <Col componentClass={ControlLabel} sm={2}>
                City:
              </Col>
              <Col sm={4}>
                <FormControl type="text" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formControlsAddressState">
              <Col componentClass={ControlLabel} sm={2}>
                State / Province / Region:
              </Col>
              <Col sm={4}>
                <FormControl type="text" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formControlsAddressZip">
              <Col componentClass={ControlLabel} sm={2}>
                Zip code:
              </Col>
              <Col sm={4}>
                <FormControl type="text" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formControlsAddressPhone">
              <Col componentClass={ControlLabel} sm={2}>
                Phone number:
              </Col>
              <Col sm={4}>
                <FormControl type="tel" />
              </Col>
            </FormGroup>
          </Form>
        );
    }
}
