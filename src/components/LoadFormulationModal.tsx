import * as React from 'react';
import { Modal, Button, Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import { observer } from 'mobx-react';

import ui from '../store/ui';
import formulations from '../store/formulations';
import prescription from '../store/prescription';

export interface LoadFormulationModalProps { }

const LoadFormulationModal = observer(
  class LoadFormulationModal extends React.Component<LoadFormulationModalProps, undefined> {
    constructor (props: any) {
      super(props);
      this.handleFormulationSelect = this.handleFormulationSelect.bind(this);
    }

    handleFormulationSelect = (e: any) => {
      const formulation: any =
        formulations.formulations
                    .find((formulation: any) => formulation.id == e.currentTarget.dataset.id);

      prescription.setIngredients(formulation.ingredients);
      ui.hideAddFromFormulationModal();
    };

    render() {
      const formulationRows = formulations.formulations.map((formulation: any) => {
        return <ListGroupItem
                 key={formulation.id}
                 data-id={formulation.id}
                 style={{cursor: 'pointer'}}
                 onClick={this.handleFormulationSelect}
               >
                 {formulation.name}
               </ListGroupItem>;
      });

      return (
        <div className="static-modal">
          <Modal
            show={ ui.addFromFormulationModalOpen }
            onHide={ ui.hideAddFromFormulationModal }
          >
            <Modal.Header>
              <Modal.Title>Please select a formulation</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <ListGroup>
                {formulationRows}
              </ListGroup>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }
);

export default LoadFormulationModal;
