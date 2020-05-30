import React, { Component } from "react";
import { Row, Col, Table } from "reactstrap";
import { Image } from 'react-bootstrap'
import { DashboardHeaderCard } from "../dashboardHeaderCard/index.jsx";
import "../../../styles/dashboard/manageDocument/index.scss";

export default class ManageDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableCreate: [{ documentType: 'HOA Bylaws', upload: 'hoa-bylaws.pdf', note: '' }]
    }
  }

  addRow = () => {
    this.setState({
      tableCreate: [...this.state.tableCreate, { documentType: 'HOA Bylaws', upload: 'hoa-bylaws.pdf', note: '' }]
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
        <Row responsive className="table-section scrollBarStyle-Y">
          <Col md="12" className="PL30 PR30">
            {this.state.tableCreate.map((val, index) => (
              <Table responsive className="scrollBarStyle-X" key={index}>
                <tbody className="scrollBarStyle-Y tBody">
                  <tr className="residents-table-row-modal">
                    <td className="td1-m PL30">
                      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <label>Document Type</label>
                        <input className='input1' type='email' name="documentType" value={val.documentType} />
                      </div>
                    </td>

                    <td className="td2-m ">
                      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <label>Upload</label>
                        <input className='input2' type='text' name='upload' value={val.upload} />
                      </div>
                    </td>

                    <td className="td3-m">
                      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <label>Note</label>
                        <input className='input3' type='email' name="email" value={val.note} placeholder='Add Note Here' />
                      </div>
                    </td>
                    <td className="td4-m">
                      <div>
                        <label></label>
                        <span>
                          <button className='btn'>
                            <Image className=''
                              src={'/assets/mockup/edit-row.png'}
                            />
                          </button>
                          <button className='btn'>
                            <Image className=''
                              src={'/assets/mockup/delete-table.png'}
                            />
                          </button>
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            ))}

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

      </div>
    );
  };
}