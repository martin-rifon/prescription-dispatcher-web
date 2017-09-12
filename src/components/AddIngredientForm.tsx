import * as React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { observe } from 'mobx';
import { observer } from 'mobx-react';

import ui from '../store/ui';

export interface AddIngredientFormProps { }

const AddIngredientForm = observer(
  class AddIngredientForm extends React.Component<AddIngredientFormProps, undefined> {
    _renderMenuItemChildren(option: any, props: any, index: any) {
      const classes = option.classes.reduce((accumulator: any, currentValue: any) => {
        if (accumulator) {
          return `${accumulator}, ${currentValue}`;
        } else {
          return `${currentValue}`;
        }
      });
      return [
        <strong key="name">{ option.name }</strong>,
        <div key="description">
          Description: { option.description }
        </div>,
        <div key="minimum_percentage">Minimum percentage: { option.minimum_percentage }</div>,
        <div key="maximum_percentage">Maximum percentage: { option.maximum_percentage }</div>,
        <div key="classes">Classes: { classes }</div>
      ];
    }

    _handleSearch = (query: any) => {
      if (!query) {
        return;
      }

      ui.fetchIngredients(query);
    }

    render() {
      const arrayIngredients = ui.ingredientsTypeaheadResults.slice();

      return (
        <Form horizontal>
          <FormGroup controlId="formControlsAddIngredient">
            <Col componentClass={ ControlLabel } sm={3}>
              Ingredient:
            </Col>
            <Col sm={9}>
              <AsyncTypeahead
                { ...this.props }
                onSearch={this._handleSearch}
                renderMenuItemChildren={ this._renderMenuItemChildren }
                labelKey="name"
                options={arrayIngredients}
                placeholder="Choose an ingredient..."
              />
            </Col>
          </FormGroup>

           <FormGroup controlId="formControlsQuantity">
            <Col componentClass={ ControlLabel } sm={3}>
              Quantity:
            </Col>
            <Col sm={9}>
              <FormControl type="number" />
            </Col>
          </FormGroup>
        </Form>
      );
    }
  }
);

export default AddIngredientForm;
