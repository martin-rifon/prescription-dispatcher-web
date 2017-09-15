import * as React from 'react';
import { Modal, Button, Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import { observer } from 'mobx-react';

import ui from '../store/ui';

export interface DownloadPrescriptionModalProps { }

const DownloadPrescriptionModal = observer(
  class DownloadPrescriptionModal extends React.Component<DownloadPrescriptionModalProps, undefined> {
    render() {
      return (
        <div className="static-modal">
          <Modal
            show={!!ui.downloadPrescriptionLink}
            onHide={ui.clearPrescriptionLink}
          >
            <Modal.Header>
              <Modal.Title>Success! Prescription generated</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <a href={ui.downloadPrescriptionLink} target="_blank">
                Please click here to download the prescription
              </a>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }
);

export default DownloadPrescriptionModal;
