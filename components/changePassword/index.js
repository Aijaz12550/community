import React, { Component } from "react";
import { Layout } from "../invitationCode/layout";
import { CentralComponent } from "../invitationCode/centralComponent"
import '../../styles/changePassword/index.scss'
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ChangePassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pwdHasShow: false,
      eyeIcon: "eye-slash",
      hiddnField: "password",
    }
  }
  showPwd = () => {
    if (this.state.pwdHasShow) {
      this.setState({
        pwdHasShow: false,
        eyeIcon: "eye-slash",
        hiddnField: "password",
      });
    } else {
      this.setState({
        pwdHasShow: true,
        eyeIcon: "eye",
        hiddnField: "text",
      });
    }
  };
  render() {
    return (
      <div className='change-password' >
        <Layout>
          <CentralComponent style={{ paddingTop: 50, paddingLeft: 40, paddingRight: 40, paddingBottom: 70 }} progressbar="none">
            <p className='heading'>Change Password</p>
            <p className='warning-criteria'>Enter your new password to meet below criteria:</p>
            <div className='pwd-required-validation'>
              <p className='warning'>- Must contain at least eight characters</p>
              <p className='warning'>- Must contain at least one uppercase letter</p>
              <p className='warning'>- Must contain at least one lowercase letter</p>
              <p className='warning'>- Must contain at least one number</p>
              <p className='warning'>- Must not same as your email address</p>
            </div>
            <div className='pwd-row'>
              <input className='pwd-field' type={this.state.hiddnField} placeholder='New Password' />
              <button onClick={this.showPwd} className="pwd-btn">
                <FontAwesomeIcon
                  icon={['fas', this.state.eyeIcon]}
                  color="#444444"
                />
              </button>
            </div>
            <button className='change-pwd-btn'>Change Password</button>
          </CentralComponent>
        </Layout>
      </div>
    );
  }
};
export default ChangePassword;
