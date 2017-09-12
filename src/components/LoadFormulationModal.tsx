import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { observer } from 'mobx-react';

import ui from '../store/ui';

export interface LoadFormulationModalProps { }

const LoadFormulationModal = observer(
  class LoadFormulationModal extends React.Component<LoadFormulationModalProps, undefined> {
    render() {
        return (
          <div className="static-modal">
            <Modal
              show={ ui.addFromFormulationModalOpen }
              onHide={ ui.hideAddFromFormulationModal }
            >
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                One fine body...
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={ ui.hideAddFromFormulationModal }>Close</Button>
                <Button onClick={ ui.hideAddFromFormulationModal } bsStyle="primary">Save changes</Button>
              </Modal.Footer>

            </Modal>
          </div>
        );
    }
  }
);

export default LoadFormulationModal;
