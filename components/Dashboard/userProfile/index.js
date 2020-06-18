import React, { Component } from "react";
import { Row, Col, Input } from "reactstrap";
import { Image } from "react-bootstrap";
import { getProfile } from "$middleware";
import { DashboardHeaderCard } from "../dashboardHeaderCard/index.jsx";
import "../../../styles/dashboard/userProfile/index.scss";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetail: {
        userName: "",
        profilePicUrl: "",
        role: "",
        email: "",
        phoneNumber: "",
        memberSince: "",
      },
    };
  }

  fileUploadButton = () => {
    document.getElementById("fileButton").click();
    document.getElementById("fileButton").onchange = (e) => {
      let val = URL.createObjectURL(e.target.files[0]);

      let { userDetail } = this.state;
      userDetail.profilePicUrl = val;
      this.setState({
        userDetail,
      });
    };
  };

  _onChange = (e) => {
    let { userDetail } = this.state;
    userDetail[e.target.name] = e.target.value;
    this.setState({
      userDetail,
    });
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProfile());
  }

  componentDidUpdate(prevProps) {
    const { profileReducer } = this.props;
    console.log(profileReducer, "profileReducer");
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
    return (
      <div className="content user-profile-component" key={Date.now() + 5765}>
        <Row className="MT60 section-top">
          <Col lg="12" md="12" sm="12" className="PL35 PR35">
            <DashboardHeaderCard />
          </Col>
        </Row>
        <Row className="body-row scrollBarStyle-Y ">
          <div className="profile-card">
            <div className="profile-div">
              <div className="user-name">{this.state.userDetail.userName}</div>
              <div className="user-role">
                <span>{this.state.userDetail.role}</span>
              </div>
              <div className="profile-image-div">
                <Image
                  className="profile-image"
                  src={this.state.userDetail.profilePicUrl}
                />
              </div>
              <div className="upload-photo-div">
                <input id="fileButton" type="file" hidden />
                <button
                  className="fileUpload-btn"
                  onClick={this.fileUploadButton}
                >
                  <span>Upload Photo</span>
                </button>
              </div>
              <div className="footer-card">
                <div className="image-content">
                  <span>
                    Upload a new avatar. Larger image will be resized
                    automatically.
                  </span>
                </div>
                <div className="image-warning">
                  <span>
                    Maximum upload size is <b>1 MB</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="edit-card">
            <div className="heading">
              <span>Edit Profile</span>
            </div>
            <div className="name-label">
              <span className="name-title">Full Name </span>
              <span className="required">(Required)</span>
            </div>
            <div className="input-div">
              <span>
                <Input
                  type="text"
                  name="userName"
                  value={this.state.userDetail.userName}
                  onChange={(e) => this._onChange(e)}
                />
              </span>
            </div>
            <div className="username-warning">
              <span>
                Please note: If you change your name, you can't change it again
                for 60 days.
              </span>
            </div>

            <div className="name-label">
              <span className="name-title">Email Address </span>
              <span className="required">(Required)</span>
            </div>
            <div className="input-div-remaing">
              <span>
                <Input
                  type="text"
                  name="email"
                  value={this.state.userDetail.email}
                  onChange={(e) => this._onChange(e)}
                />
              </span>
            </div>

            <div className="name-label">
              <span className="name-title">Phone Number </span>
            </div>
            <div className="input-div-remaing">
              <span>
                <Input
                  type="text"
                  name="phoneNumber"
                  value={this.state.userDetail.phoneNumber}
                  onChange={(e) => this._onChange(e)}
                />
              </span>
            </div>

            <div className="name-label">
              <span className="name-title">Member Since </span>
            </div>
            <div className="input-div-remaing member-since">
              <span>
                <Input
                  type="text"
                  name="memberSince"
                  value={
                    this.state.userDetail.memberSince.split(" ")[1] +
                    " " +
                    this.state.userDetail.memberSince.split(" ")[2]
                  }
                  disabled
                />
              </span>
            </div>

            <div className="save-btn-div">
              <button className="save-btn">
                <span>Save</span>
              </button>
            </div>
          </div>
        </Row>
      </div>
    );
  }
}
