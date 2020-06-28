import React, { Component } from "react";
import { Row, Col, Input } from "reactstrap";
import { Image } from "react-bootstrap";
import { updateProfile, updateAvatar } from "$middleware";
import { DashboardHeaderCard } from "../dashboardHeaderCard/index.jsx";
import { Loader } from "../../Loader/Loader";
import ReactLoading from "react-loading";
import { updateProfileError, updateAvatarError } from "../../../redux/actions";
import { toast } from "react-toastify";
import "../../../styles/dashboard/userProfile/index.scss";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetail: {
        fullName: "",
        familyMemberAvatarUrl: "",
        role: "Board Member",
        email: "",
        phone: "",
        residentSince: "10 Auguest 2019",
        file: {},
      },
      error: "",
      loader: false,
    };
  }

  fileUploadButton = () => {
    try {
      document.getElementById("fileButton").click();
      let val = "";
      document.getElementById("fileButton").onchange = (e) => {
        let val1 = URL.createObjectURL(e.target.files[0]);
        val = document.getElementById("fileButton").files;
        let file = val[0];
        let { userDetail } = this.state;
        userDetail.familyMemberAvatarUrl = val1;
        this.setState({
          userDetail,
        });
        let formdata = new FormData();
        formdata.append("file", file);
        this.props.dispatch(updateAvatar(formdata));
      };
    } catch (error) {
      throw error;
    }
  };

  _onChange = (e) => {
    e.preventDefault();
    let { userDetail } = this.state;
    userDetail[e.target.name] = e.target.value;
    this.setState({
      userDetail,
    });
  };

  componentDidMount() {
    const { profileReducer } = this.props;
    if (profileReducer.getProfile.email) {
      const {
        fullName,
        familyMemberAvatarUrl,
        email,
        phone,
        residentSince,
      } = profileReducer.getProfile;
      this.setState({
        userDetail: {
          fullName,
          familyMemberAvatarUrl,
          role: "",
          email,
          phone,
          residentSince,
        },
      });
    }
  }

  notify = (payload) => {
    this.setState({ loader: false });
    toast(payload);
  };

  componentDidUpdate(prevProps) {
    const { profileReducer, dispatch } = this.props;
    if (
      profileReducer?.updateProfileSuccess?.email !==
        prevProps.profileReducer?.updateProfileSuccess?.email ||
      profileReducer?.updateProfileSuccess?.phone !==
        prevProps.profileReducer?.updateProfileSuccess?.phone ||
      profileReducer?.updateProfileSuccess?.fullName !==
        prevProps.profileReducer?.updateProfileSuccess?.fullName
    ) {
      this.setState({ loader: false });
      this.notify("successfully updated");
    }
    if (
      profileReducer.updateProfileError !==
      prevProps.profileReducer.updateProfileError
    ) {
      this.setState({
        loader: false,
        error: profileReducer.updateProfileError,
      });
      dispatch(updateProfileError(""));
    }
    if (
      profileReducer?.updateAvatar?.userImage !==
      prevProps.profileReducer?.updateAvatar?.userImage
    ) {
      this.notify("successfully Image updated");
    }
    if (
      profileReducer?.updateAvatarError !==
        prevProps.profileReducer?.updateAvatarError &&
      !profileReducer?.updateAvatarError
    ) {
      this.setState({ error: profileReducer?.updateAvatarError });
      dispatch(updateAvatarError(""));
    }
  }

  saveProfile = () => {
    const {
      userDetail: { fullName, familyMemberAvatarUrl, email, phone },
    } = this.state;
    this.setState({
      loader: true,
    });
    const { profileReducer, dispatch } = this.props;
    const {
      canChangeName,
      showMyBirthday,
      showMyContactInfo,
      residentSince,
    } = profileReducer.getProfile;
    let updatedProfile = {
      email,
      familyMemberAvatarUrl,
      fullName,
      phone,
      canChangeName,
      showMyBirthday,
      showMyContactInfo,
      residentSince: residentSince ? residentSince : new Date(),
    };
    dispatch(updateProfile(updatedProfile));
  };

  render() {
    const { userDetail, loader, error } = this.state;
    return (
      <div className="content user-profile-component" key={Date.now() + 5765}>
        <Row className="MT60 section-top">
          <Col lg="12" md="12" sm="12" className="PL35 PR35">
            <DashboardHeaderCard />
          </Col>
        </Row>
        <Row className="body-row scrollBarStyle-Y ">
          {userDetail.email ? (
            <>
              <div className="profile-card">
                <div className="profile-div">
                  <div className="user-name">{userDetail.fullName}</div>
                  <div className="user-role">
                    <span>{this.state.userDetail.role}</span>
                  </div>
                  <div className="profile-image-div">
                    <Image
                      className="profile-image"
                      src={userDetail.familyMemberAvatarUrl}
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
                  {error && <p style={{ color: "red" }}>Hello world</p>}
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
                <div className="input-div-remaining">
                  <span>
                    <Input
                      type="text"
                      name="fullName"
                      value={userDetail.fullName}
                      onChange={(e) => this._onChange(e)}
                    />
                  </span>
                </div>
                {/* <div className="username-warning">
                  <span>
                    Please note: If you change your name, you can't change it
                    again for 60 days.
                  </span>
                </div> */}

                <div className="name-label">
                  <span className="name-title">Email Address </span>
                  <span className="required">(Required)</span>
                </div>
                <div className="input-div-remaining">
                  <span>
                    <Input
                      type="text"
                      name="email"
                      value={userDetail.email}
                      disabled
                      onChange={(e) => this._onChange(e)}
                    />
                  </span>
                </div>

                <div className="name-label">
                  <span className="name-title">Phone Number </span>
                </div>
                <div className="input-div-remaining">
                  <span>
                    <Input
                      type="text"
                      name="phone"
                      value={userDetail.phone}
                      onChange={(e) => this._onChange(e)}
                    />
                  </span>
                </div>

                <div className="name-label">
                  <span className="name-title">Member Since </span>
                </div>
                <div className="input-div-remaining member-since">
                  <span>
                    <Input
                      type="text"
                      name="memberSince"
                      value={userDetail.residentSince}
                      disabled
                    />
                  </span>
                </div>

                <div className="save-btn-div">
                  <button onClick={this.saveProfile} className="save-btn">
                    {loader ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <ReactLoading
                          height={"30px"}
                          width={"30px"}
                          type="bubbles"
                          color="white"
                        />
                      </div>
                    ) : (
                      <span>Save</span>
                    )}
                  </button>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "50px",
                      color: "red",
                    }}
                  >
                    {error}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div style={{ width: "100%", height: "100%" }}>
              <Loader />
            </div>
          )}
        </Row>
      </div>
    );
  }
}
