import React, { Component, Fragment } from "react";
import { Row, Col, Table } from "reactstrap";
import { Dropdown, Image } from 'react-bootstrap'
import { DashboardHeaderCard } from "../dashboardHeaderCard/index.jsx";
import { getExternalMember, getRoles } from "$middleware";
import "../../../styles/dashboard/externalMember/index.scss";

export default class ExternalMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      externalMemberData: [],
      dropdownInput: [
        { name: "ROLE_ADMINISTRATOR", description: "Administrator" },
        { name: "ROLE_REGIONAL_MANAGER", description: "Regional Manager" },
        { name: "ROLE_COMMUNITY_RESIDENT", description: "Community Resident" },
        { name: "ROLE_COMMUNITY_MEMBER", description: "Community Member" }
      ],
    }
    this.myRef = React.createRef();
  }


  addRow = () => {
    this.setState({
      externalMemberData: [...this.state.externalMemberData, { roleName: 'N/A', fullName: '', email: '', phoneNumber: '' }]
    })
    this.handleScrollToElement();
  }
  handleScrollToElement = (event) => {
    window.scrollTo(0, this.myRef.current.offsetTop);
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

  componentDidMount() {
    const {
      AuthReducer: {
        user: { communityId },
      },
      dispatch,
    } = this.props;
    dispatch(getExternalMember(communityId));
    dispatch(getRoles());
  }

  componentDidUpdate(prevProps) {
    const { externalMemberReducer: { getExternalMember, getExternalMemberError } } = this.props;
    // if (!this.state.externalMemberData.length) {
    //   this.setState({
    //     externalMemberData: getExternalMember
    //   })
    // }
    // if (profileReducer.getProfile.email !== prevProps.profileReducer.email) {
    //   const {
    //     fullName,
    //     familyMemberAvatarUrl,
    //     email,
    //     phone,
    //     residentSince,
    //   } = profileReducer.getProfile;
    //   this.setState({
    //     userName: fullName,
    //     profilePicUrl: familyMemberAvatarUrl,
    //     role: "",
    //     email,
    //     phoneNumber: phone,
    //     memberSince: residentSince,
    //   });
    // }
  }


  render() {
    const { externalMemberReducer: { getExternalMember, getExternalMemberError }, rolesReducer } = this.props;
    console.log('aa', getExternalMember)
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
              <tbody className="scrollBarStyle-Y tBody" ref={this.myRef}>
                {this.state.externalMemberData.length && this.state.externalMemberData?.map((val, index) => (
                  <tr className="residents-table-row-modal" key={index}>
                    <td className="td1-m PL30">
                      <div>
                        {val.roleName === 'N/A' ?
                          <select className='dropDownInput' name='role' value={this.state.dropdownInput[0].name} onChange={(e) => this.dropDownChanging(e, index)} >
                            <option value={this.state.dropdownInput[0].name}>{this.state.dropdownInput[0].name}</option>
                            <option value={this.state.dropdownInput[1].name}>{this.state.dropdownInput[1].name}</option>
                            <option value={this.state.dropdownInput[2].name}>{this.state.dropdownInput[2].name}</option>
                            <option value={this.state.dropdownInput[3].name}>{this.state.dropdownInput[3].name}</option>
                          </select>
                          :
                          <select className='dropDownInput' name='role' value={val.roleName} onChange={(e) => this.dropDownChanging(e, index)} >
                            <option value={val.roleName}>{val.roleName}</option>
                          </select>
                        }
                      </div>
                    </td>
                    <td><input type='text' name='fullName' value={val.fullName} onChange={(e) => this._onChange(e, index)} /></td>
                    {/* <td className="td2-m">
                      <input type='text' name='fullName' value={val.fullName} onChange={(e) => this._onChange(e, index)} />
                    </td> */}
                    <td className="td3-m"><input type='email' name="email" value={val.email} onChange={(e) => this._onChange(e, index)} /></td>
                    <td className="td4-m"><input type='text' name='phoneNumber' value={val.phoneNo} onChange={(e) => this._onChange(e, index)} /></td>
                    <td className="td5-m"><button onClick={() => this.deleteRow(index)}><img src="/assets/mockup/delete-icon.png" /></button></td>
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