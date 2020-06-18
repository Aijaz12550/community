import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'

export default class ModalCustomize extends Component {
  constructor(props) {
    super(props);
  }
  handleDaata = () => {
    if (this.props.modalName == 'recoverPasswordSendReq') {
      return this.props.recoverPasswordSendReq();
    } else {
      return this.props.emailVerifiedRequiredModal()
    }
  }
  render() {
    console.log(this.props)
    return (
      <Modal
        show={this.props.modalShow}
        onHide={() => this.props.closeModal}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          {this.handleDaata()}
        </Modal.Body>
      </Modal>
    )
  }
}