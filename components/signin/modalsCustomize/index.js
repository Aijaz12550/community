import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export default class ModalCustomize extends Component {
  constructor(props) {
    super(props);
  }
  handleDaata = () => {
    if (this.props.modalName == "recoverPasswordSendReq") {
      return this.props.recoverPasswordSendReq();
    } else {
      return this.props.emailVerifiedRequiredModal();
    }
  };
  render() {
    return (
      <Modal
        show={this.props.modalShow}
        onHide={() => this.props.closeModal}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        className="modal-parent"
        centered
      >
        <Modal.Body>{this.handleDaata()}</Modal.Body>
      </Modal>
    );
  }
}
