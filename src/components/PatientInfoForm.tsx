// import * as React from "react";
//
// export interface PatientInfoFormProps { }
//
// export const PatientInfoForm = (props: PatientInfoFormProps) => <h1>Hello!</h1>;

import * as React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

export interface PatientInfoFormProps { }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class PatientInfoForm extends React.Component<PatientInfoFormProps, undefined> {
    render() {
        return (
          <form>
            <FormGroup controlId="formControlsText">
              <ControlLabel>Hola</ControlLabel>
              <FormControl type="text" label="Text" placeholder="Enter text" />
            </FormGroup>
          </form>
        );
    }
}
