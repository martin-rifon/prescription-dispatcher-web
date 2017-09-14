import * as React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Button } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { observe } from 'mobx';
import { observer } from 'mobx-react';

import ui from '../store/ui';
import prescription from '../store/prescription';

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

    addIngredient = () => {
      let ingredient: any = ui.typeaheadIngredient;
      ingredient.percentage = ui.typeaheadQuantity;
      prescription.addIngredient(ingredient);
    }

    handleTypeaheadChange = (ingredients: any) => {
      let ingredient = ingredients[0];
      if (ingredient) {
        ui.pickIngredient(ingredient);
      }
    }

    handleQuantityChange = (quantity: any) => {
      ui.pickQuantity(parseFloat(quantity.target.value));
    }

    render() {
      const arrayIngredients = ui.typeaheadIngredientsResults.slice();

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
                renderMenuItemChildren={this._renderMenuItemChildren}
                labelKey="name"
                options={arrayIngredients}
                onChange={this.handleTypeaheadChange}
                placeholder="Choose an ingredient..."
              />
            </Col>
          </FormGroup>

           <FormGroup controlId="formControlsQuantity">
            <Col componentClass={ ControlLabel } sm={3}>
              Quantity:
            </Col>
            <Col sm={9}>
              <FormControl
                type="number"
                step="0.01"
                value={ui.typeaheadQuantity}
                onChange={this.handleQuantityChange}
              />
            </Col>
          </FormGroup>

          <Button onClick={this.addIngredient} bsStyle="primary">
            Add ingredient
          </Button>
        </Form>
      );
    }
  }
);

export default AddIngredientForm;
