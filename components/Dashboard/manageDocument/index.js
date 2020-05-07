import React, { Component } from "react";
import { Row, Col, Table, Input } from "reactstrap";
import { Image, Modal, } from 'react-bootstrap'
import { DashboardHeaderCard } from "../dashboardHeaderCard/index.jsx";
import "../../../styles/dashboard/manageDocument/index.scss";

export default class ManageDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableCreate: [{ documentType: 'HOA Bylaws', upload: 'hoa-bylaws.pdf', note: '' }],
      setModalShow: false
    }
  }

  addRow = () => {
    this.setState({
      tableCreate: [...this.state.tableCreate, { documentType: 'HOA Bylaws', upload: 'hoa-bylaws.pdf', note: '' }]
    })
    // this.setState({
    //   setModalShow: true
    // })
  }

  closeModal = () => {
    this.setState({
      setModalShow: false
    })
  }

  deleteRow = (rowIndex) => {
    let filterData = this.state.tableCreate.filter((val, index) => index !== rowIndex)
    this.setState({
      tableCreate: filterData
    })
  }

  render() {
    return (
      <div className="content manage-document-component">
        <Row className="MT60 section-top">
          <Col lg="12" md="12" sm="12" className="PL35 PR35">
            <DashboardHeaderCard />
          </Col>
        </Row>
        <Row className="table-section">
          <Col md="12" className="PL30 PR30">
            <Table responsive className="scrollBarStyle-X">
              <thead>
                <tr>
                  <td className='td1-m'><div><label>Document Type</label></div></td>
                  <td className='td2-m'><div><label>Document</label></div></td>
                  <td className='td3-m'><div><label>Note</label></div></td>
                  <td className='td4-m'></td>
                </tr>
              </thead>
              <tbody className="scrollBarStyle-Y tBody">
                {this.state.tableCreate.map((val, index) => (
                  <tr className="residents-table-row-modal" key={index}>
                    <td className="td1-m PL30">
                      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <input className='input1' type='email' name="documentType" value={val.documentType} />
                      </div>
                    </td>

                    <td className="td2-m">
                      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <input className='input2' type='text' name='upload' value={val.upload} />
                      </div>
                    </td>

                    <td className="td3-m">
                      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <input className='input3' type='email' name="email" value={val.note} placeholder='Add Note Here' />
                      </div>
                    </td>
                    <td className="td4-m">
                      <div>
                        <span>
                          <button className='btn'>
                            <Image className=''
                              src={'/assets/mockup/edit-row.png'}
                            />
                          </button>
                          <button className='btn' onClick={() => this.deleteRow(index)}>
                            <Image className=''
                              src={'/assets/mockup/delete-table.png'}
                            />
                          </button>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

          </Col>
        </Row>
        <Row className='invite-btn-row'>
          <Col lg="12" md="12" sm="12" className="PL35 PR35">
            <span className='invite-span'>
              <button className='add-row-invitation-btn' onClick={this.addRow}>
                <Image className='add-btn'
                  src={'/assets/mockup/add-invite-member.png'}
                />
              </button>
              <p className='btn-text'>Add Resident</p>
            </span>
          </Col>
        </Row>
        <Modal
          show={this.state.setModalShow}
          onHide={() => this.setState({ setModalShow: false })}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className='add-record-modal'
        >
          <Modal.Header closeButton>
            <span onClick={this.closeModal}>
              <Image className='' src={'/assets/mockup/modal-close-btn.png'} />
            </span>
          </Modal.Header>
          <Modal.Body>
            <Row className='row-1' >
              <Col>
                <p>Add Document</p>
              </Col>
            </Row>
            <Row className='row-2'>
              <Col>
                <label>Document Type</label>
              </Col>
            </Row>
            <Row className='row-3'>
              <Col>
                {/* value={val.role} onChange={(e) => this.dropDownChanging(e, index)}  */}
                <div>
                  <select className='dropDownInput' name='role' >
                    <option value="" selected disabled>Select a documents Type</option>
                    <option value="N/A">aaaa</option>
                    <option value="Service Manager">bbb</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row className='row-4'>
              <Col>
                <div>

                </div>
              </Col>
            </Row>
            <Row className='row-5'>
              <Col>
                <label>Note</label>
              </Col>
            </Row>
            <Row className='row-6'>
              <Col>
                <div>
                  <Input type="textarea" name="text" id="exampleText" placeholder='Add Note Here' />
                </div>
              </Col>
            </Row>
            <Row className='row-7'>
              <Col>
                <button>Save</button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    );
  };

}