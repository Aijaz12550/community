import React, { Component } from "react";
import { Row, Col, Table } from "reactstrap";
import { Image } from "react-bootstrap";
import { getRoles, sendInvites } from "$middleware";
import { DashboardHeaderCard } from "../dashboardHeaderCard/index.jsx";
import {
  sendInvitesSuccess,
  sendInvitesError,
} from "../../../redux/actions/inviteActions";
import { toast } from "react-toastify";
import "../../../styles/dashboard/inviteResident/index.scss";

export default class InviteResident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invitationData: [
        {
          appartmentUnit: "",
          communityId: props?.AuthReducer?.user?.communityId,
          email: "",
          external: false,
          fullName: "",
          memberTitle: "",
          phoneNo: "",
          roleName: "ROLE_COMMUNITY_RESIDENT,ROLE_COMMUNITY_MEMBER",
          source: "WEB-APP",
          street: "",
        },
      ],
      val: "",
      th_1: "Home Address (Street)",
      width: "",
      height: "",
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    const { dispatch } = this.props;
    dispatch(getRoles());
  }

  notify = (payload) => toast(payload);

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentDidUpdate(prevProps) {
    const {
      inviteReducer,
      AuthReducer: {
        user: { communityId },
      },
      dispatch,
    } = this.props;
    console.log(this.props, 'this.props')
    // if (
    //   inviteReducer?.sendInvites?.length !==
    //     prevProps?.inviteReducer?.sendInvites.length &&
    //   inviteReducer?.sendInvites?.length !== 0
    // ) {
    //   this.notify("Invited Successfully");
    //   this.setState({
    //     invitationData: [
    //       {
    //         appartmentUnit: "",
    //         communityId,
    //         email: "",
    //         external: false,
    //         fullName: "",
    //         memberTitle: "",
    //         phoneNo: "",
    //         roleName: "",
    //         source: "WEB-APP",
    //         street: "",
    //       },
    //     ],
    //   });
    //   dispatch(sendInvitesSuccess([]));
    // }
    if (
      inviteReducer.sendInvitesError !==
        prevProps?.inviteReducer?.sendInvitesError &&
      inviteReducer.sendInvitesError?.length !== 0
    ) {
      this.notify(inviteReducer.sendInvitesError);
      dispatch(sendInvitesError(""));
    }
  }

  addRow = () => {
    const {
      AuthReducer: {
        user: { communityId },
      },
    } = this.props;
    this.setState({
      invitationData: [
        ...this.state.invitationData,
        {
          appartmentUnit: "",
          communityId,
          email: "",
          external: false,
          fullName: "",
          memberTitle: "",
          phoneNo: "",
          roleName: "",
          source: "WEB-APP",
          street: "",
        },
      ],
    });
  };

  resetTable = () => {
    this.setState({
      invitationData: [
        {
          appartmentUnit: "",
          communityId,
          email: "",
          external: false,
          fullName: "",
          memberTitle: "",
          phoneNo: "",
          roleName: "",
          source: "WEB-APP",
          street: "",
        },
      ],
    });
  };

  dropDownChanging = (e, i) => {
    let { invitationData } = this.state;
    invitationData[i][e.target.name] = e.target.value;
    this.setState({ invitationData }, () =>
      console.log(this.state.invitationData)
    );
  };

  _onChange = (e, index) => {
    let { invitationData } = this.state;
    invitationData[index][e.target.name] = e.target.value;
    this.setState({ invitationData });
  };

  inviteSendFunc = () => {
    const {
      AuthReducer: {
        user: { communityId, userId, access_token },
      },
      dispatch,
    } = this.props;
    const invitationObj = {
      communityId,
      invitationCodes: this.state.invitationData,
      inviterUserId: userId,
      sourceType: "WEB-APP",
    };
    console.log(invitationObj, "invitationObj");
    dispatch(sendInvites({ Authorization: `bearer ${access_token}`, invitationObj }));
  };

  render() {
    const {
      rolesReducer: { getRoles },
      CommunityReducer: { appartmentOrUnitRequired },
    } = this.props;
    const { invitationData } = this.state;
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
                  <th className="td1-m">
                    {this.state.width > 1000
                      ? this.state.th_1
                      : this.state.th_1.split(" ")[0] +
                        " " +
                        this.state.th_1.split(" ")[1]}
                  </th>
                  <th className="td2-m">Apt/Unit</th>
                  <th className="td3-m">Full Name</th>
                  <th className="td4-m">Email</th>
                  <th className="td5-m">Phone</th>
                  <th className="td6-m">Member Title</th>
                </tr>
              </thead>
              <tbody className="scrollBarStyle-Y tBody">
                {invitationData?.map((val, index) => (
                  <tr className="residents-table-row-modal" key={index}>
                    <td className="td1-m PL30">
                      <input
                        type="text"
                        name="street"
                        value={val.street}
                        onChange={(e) => this._onChange(e, index)}
                      />
                    </td>
                    <td className="td2-m">
                      <input
                        type="text"
                        name="appartmentUnit"
                        value={val.appartmentUnit}
                        disabled={!appartmentOrUnitRequired}
                        onChange={(e) => this._onChange(e, index)}
                      />
                    </td>
                    <td className="td3-m">
                      <input
                        type="text"
                        name="fullName"
                        value={val.fullName}
                        onChange={(e) => this._onChange(e, index)}
                      />
                    </td>
                    <td className="td4-m">
                      <input
                        type="email"
                        name="email"
                        value={val.email}
                        onChange={(e) => this._onChange(e, index)}
                      />
                    </td>
                    <td className="td5-m">
                      <input
                        type="number"
                        name="phoneNo"
                        value={val.phoneNo}
                        onChange={(e) => this._onChange(e, index)}
                      />
                    </td>
                    <td className="td6-m">
                      <div>
                        <select
                          className="dropDownInput"
                          name="memberTitle"
                          value={val.name}
                          onChange={(e) => this.dropDownChanging(e, index)}
                        >
                          <option value={"N/A"}>N/A</option>
                          {getRoles?.map((role, index) => {
                            return (
                              <option key={index} value={role}>
                                {role}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="add-btn-row">
          <Col lg="12" md="12" sm="12" className="PL35 PR35">
            <span className="invite-span">
              <button className="add-row-invitation-btn" onClick={this.addRow}>
                <Image
                  className="add-btn"
                  src={"/assets/mockup/add-invite-member.png"}
                />
              </button>
              <p className="btn-text">Add Resident</p>
            </span>
          </Col>
        </Row>
        <Row className="invite-btn-row">
          <Col lg="12" md="12" sm="12" className="PL35 PR35 invite-send-row">
            <span className="send-invite-box">
              <button className="reset-invite" onClick={this.resetTable}>
                <Image
                  className="add-btn"
                  src={"/assets/mockup/reset-icon.png"}
                />
                Reset
              </button>
              <button className="send-invite-btn" onClick={this.inviteSendFunc}>
                Invite Send
              </button>
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}
