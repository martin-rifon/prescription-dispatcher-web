import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { observer } from 'mobx-react';

export interface LoadFormulationModalProps { uiStore: any }

const LoadFormulationModal = observer(
  class LoadFormulationModal extends React.Component<LoadFormulationModalProps, undefined> {
    render() {
        return (
          <div className="static-modal">
            <Modal
              show={ this.props.uiStore.addFromFormulationModalOpen }
              onHide={ this.props.uiStore.hideAddFromFormulationModal }
            >
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                One fine body...
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={ this.props.uiStore.hideAddFromFormulationModal }>Close</Button>
                <Button onClick={ this.props.uiStore.hideAddFromFormulationModal } bsStyle="primary">Save changes</Button>
              </Modal.Footer>

            </Modal>
          </div>
        );
    }
  }
);

export default LoadFormulationModal;
