import React, { Component } from "react";
import { Row, Col, Table } from "reactstrap";
import { Dropdown, Image } from 'react-bootstrap'
import { DashboardHeaderCard } from "../dashboardHeaderCard/index.jsx";
import "../../../styles/dashboard/inviteResident/index.scss";

export default class InviteResident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invitationData: [
        { homeAddress: '10 Mckeon Pl', apt_unit: '78/80', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', PhoneNumber: '207 555-0119', memberRole: 'N/A' },
      ],
      dropdownInput: ['N/A', 'Community Manager', 'Board Manager'],
      val: '',
      th_1: 'Home Address (Street)',
      width: '',
      height: '',
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState(
      { width: window.innerWidth, height: window.innerHeight });
  }

  addRow = () => {
    this.setState({
      invitationData: [...this.state.invitationData, { homeAddress: '10 Mckeon Pl', apt_unit: '78/80', fullName: 'Jackson Smith', email: 'alice.bryant@example.com', PhoneNumber: '207 555-0119', memberRole: 'N/A' }]
    })
  }

  resetTable = () => {
    this.setState({
      invitationData: [{ homeAddress: '', apt_unit: '', fullName: '', email: '', PhoneNumber: '', memberRole: 'N/A' },]
    })
  }

  dropDownChanging = (e, i) => {
    let { invitationData } = this.state
    invitationData[i][e.target.name] = e.target.value;
    this.setState({ invitationData }, () => console.log(this.state.invitationData))
  }

  _onChange = (e, index) => {
    let { invitationData } = this.state
    invitationData[index][e.target.name] = e.target.value;
    this.setState({ invitationData })
  }

  render() {
    return (
      <div className="content invite-resident-component">
        <Row className="MT60 section-top">
          <Col lg="12" md="12" sm="12" className="PL35 PR35">
            <DashboardHeaderCard />
          </Col>
        </Row>
        <Row className="table-section">
          <Col md="12" className="PL35 PR35">
            <Table responsive className="scrollBarStyle-X">
              <thead className="">
                <tr>
                  <th className="td1-m">{this.state.width > 1000 ? this.state.th_1 : this.state.th_1.split(' ')[0] + ' ' + this.state.th_1.split(' ')[1]}</th>
                  <th className="td2-m">Apt/Unit</th>
                  <th className="td3-m">Full Name</th>
                  <th className="td4-m">Email</th>
                  <th className="td5-m">Phone</th>
                  <th className="td6-m">Member Role</th>
                </tr>
              </thead>
              <tbody className="scrollBarStyle-Y tBody">
                {this.state.invitationData?.map((val, index) => (
                  <tr className="residents-table-row-modal" key={index} onChange={(e) => this._onChange(e, index)} >
                    <td className="td1-m PL30">
                      <input type='text' name='homeAddress' value={val.homeAddress} />
                    </td>
                    <td className="td2-m"><input type='text' name="apt_unit" value={val.apt_unit} /></td>
                    <td className="td3-m"><input type='text' name="fullName" value={val.fullName} /></td>
                    <td className="td4-m"><input type='text' name="email" value={val.email} /></td>
                    <td className="td5-m"><input type='text' name='PhoneNumber' value={val.PhoneNumber} /></td>
                    <td className="td6-m">
                      <select className='dropDownInput' name='memberRole' value='N/A' onChange={(e) => this.dropDownChanging(e, index)} >
                        <option value="N/A">{this.state.dropdownInput[0]}</option>
                        <option value="Community Manager">{this.state.dropdownInput[1]}</option>
                        <option value="Board Manager">{this.state.dropdownInput[2]}</option>
                      </select></td>
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
          <Col lg="12" md="12" sm="12" className="PL35 PR35 invite-send-row">
            <span className='send-invite-box'>
              <button className='reset-invite' onClick={this.resetTable}>
                <Image className='add-btn' src={'/assets/mockup/reset-icon.png'} />
                Reset
              </button>
              <button className='send-invite-btn'>
                Invite Send
              </button>
            </span>
          </Col>
        </Row>

      </div>
    );
  };
}