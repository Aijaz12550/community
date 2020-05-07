import React, { Component, Fragment } from "react";
import { Row, Col, Table } from "reactstrap";
import { Dropdown, Image } from 'react-bootstrap'
import { DashboardHeaderCard } from "../dashboardHeaderCard/index.jsx";
import "../../../styles/dashboard/externalMember/index.scss";

export default class ExternalMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      externalMemberData: [
        { role: '10 Mckeon Pl', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', phoneNumber: '207 555-0119' },
      ],
      dropdownInput: ['N/A', 'Service Manager'],
    }
  }


  addRow = () => {
    this.setState({
      externalMemberData: [...this.state.externalMemberData, { role: 'N/A', fullName: '', email: '', phoneNumber: '' }]
    })
  }

  resetTable = () => {
    this.setState({
      externalMemberData: [{ role: 'N/A', fullName: '', email: '', phoneNumber: '' }]
    })
  }

  dropDownChanging = (e, i) => {
    let { externalMemberData } = this.state
    externalMemberData[i][e.target.name] = e.target.value;
    this.setState({ externalMemberData }, () => console.log(this.state.externalMemberData))
  }

  _onChange = (e, index) => {
    let { externalMemberData } = this.state
    externalMemberData[index][e.target.name] = e.target.value;
    this.setState({ externalMemberData })
  }

  deleteRow = (rowIndex) => {
    let filterData = this.state.externalMemberData.filter((val, i) => i !== rowIndex);
    this.setState({
      externalMemberData: filterData
    })
  }


  render() {
    console.log('>>>>>>>>>>>>>>>', this.state.externalMemberData)
    return (
      <div className="content external-member-component" key={Date.now() + 5765}>
        <Row className="MT60 section-top">
          <Col lg="12" md="12" sm="12" className="PL35 PR35">
            <DashboardHeaderCard />
          </Col>
        </Row>
        <Row className="table-section">
          <Col md="12" className="PL35 PR35">
            <Table responsive className="scrollBarStyle-X">
              <thead className="">
                {this.state.externalMemberData.length ?
                  <tr>
                    <th className="td1-m">Role</th>
                    <th className="td2-m">Full Name</th>
                    <th className="td3-m">Email</th>
                    <th className="td4-m">Phone</th>
                    <th className="td5-m"></th>
                  </tr>
                  :
                  <tr></tr>
                }
              </thead>
              <tbody className="scrollBarStyle-Y tBody">
                {this.state.externalMemberData?.map((val, index) => (
                  <tr className="residents-table-row-modal" key={index}>
                    <td className="td1-m PL30">
                      <div>
                        <select className='dropDownInput' name='role' value={val.role} onChange={(e) => this.dropDownChanging(e, index)} >
                          <option value="N/A">{this.state.dropdownInput[0]}</option>
                          <option value="Service Manager">{this.state.dropdownInput[1]}</option>
                        </select>
                      </div>
                    </td>
                    <td><input type='text' name='fullName' value={val.fullName} onChange={(e) => this._onChange(e, index)} /></td>
                    {/* <td className="td2-m">
                      <input type='text' name='fullName' value={val.fullName} onChange={(e) => this._onChange(e, index)} />
                    </td> */}
                    <td className="td3-m"><input type='email' name="email" value={val.email} onChange={(e) => this._onChange(e, index)} /></td>
                    <td className="td4-m"><input type='text' name='phoneNumber' value={val.phoneNumber} onChange={(e) => this._onChange(e, index)} /></td>
                    <td className="td5-m"><button onClick={() => this.deleteRow(index)}><img src="/assets/mockup/delete-icon.png" style={{ width: 14, height: 16 }} /></button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className='add-btn-row'>
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
        <Row className='invite-btn-row'>
          <Col lg="12" md="12" sm="12" className="PL35 PR35 invite-send-row">
            <span className='send-invite-box'>
              <button className='reset-invite' onClick={this.resetTable}>
                <Image className='add-btn' src={'/assets/mockup/reset-icon.png'} />Reset</button>
              <button className='send-invite-btn'>Invite Send</button>
            </span>
          </Col>
        </Row>
      </div>
    );
  };
}