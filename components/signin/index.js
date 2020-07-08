import React from "react";
import { Container } from "../mainlayout";
import { Navbar, Image, Modal } from "react-bootstrap";
import Link from "next/link";
import "../../styles/signin/index.scss";
import { GoogleLogin } from "./google";
import { Apple } from "./apple";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactLoading from "react-loading";
import ModalCustomize from "./modalsCustomize";
import { signInError } from "../../redux/actions";

export class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "androiduser1@unimelon.com",
      password: "Unimel@n12345",
      pwdHasShow: false,
      eyeIcon: "eye-slash",
      hiddnField: "password",
      modalShow: false,
      loader: false,
      showModalName: "emailVerifiedRequiredModal",
      email: "",
    };
  }
  showModal = (modalName) => {
    this.setState({
      modalShow: true,
      showModalName: modalName,
    });
  };

  signIn = (e) => {
    let { _signin, router, dispatch } = this.props;
    e.preventDefault();
    this.setState({
      loader: true,
    });
    console.log('data helo world')
    // const { username, password } = this.state;
    // const body = {
    //   grant_type: "password",
    //   username,
    //   password,
    // };
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("grant_type", "password");
    data.append("username", "androiduser1@unimelon.com");
    data.append("password", "Unimel@n12345");
    console.log('data', data)
    debugger
    var config = {
      method: "post",
      url: "https://microservices-dev.weneighbors.io/uaa/oauth/token",
      headers: {
        Authorization: "Basic dGFsa3RpdmFBcHA6dGFsa0BUaXZhITE=",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log("error from login",JSON.stringify(error));
      });
    // _signin(body)
    //   .then((data) => {
    //     const allow = data?.roles.filter(
    //       (item) => item.roleId === 7 || item.roleId === 9 || item.roleId === 10
    //     );
    //     if (allow.length) {
    //       let scope = data.scope.toLowerCase();
    //       router.push(
    //         "/dashboard/[user]/[role]",
    //         `/dashboard/${scope}/view_residents`
    //       );
    //     } else {
    //       dispatch(signInError("You are not authorised to login"))
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("error from component", error);
    //   });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

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

  componentDidUpdate(prevProps) {
    const { AuthReducer, dispatch } = this.props;
    if (AuthReducer?.user?.userId !== prevProps.AuthReducer?.user?.userId) {
      this.setState({
        loader: false,
      });
    }
    if (
      AuthReducer?.userError !== prevProps.AuthReducer?.userError &&
      AuthReducer?.userError
    ) {
      this.setState({
        error: AuthReducer?.userError,
        loader: false,
      });
      dispatch(signInError(""));
    }
  }

  emailVerifiedRequiredModal = () => {
    return (
      <>
        <p className="close-row">
          <button onClick={() => this.setState({ modalShow: false })}>X</button>
        </p>
        <p className="heading">Email Verfication Required!</p>
        <p className="warning">Please verify your email registered with us.</p>
        <p className="warning warning-username">{`"${this.state.username}"`}</p>
        <button className="resend-btn">Resend</button>
      </>
    );
  };

  recoverPasswordSendReq = () => {
    let { _recoverPassword_, recoverPasswordLoading, error } = this.props;
    let { email } = this.state;
    return (
      <>
        <p className="close-row">
          <button onClick={() => this.setState({ modalShow: false })}>X</button>
        </p>
        <p className="heading-email-verify">Recover Password</p>
        <p className="warning-email-verfiy">
          Don't worry, happen to the best for us
        </p>
        <p className="email-label">Email</p>
        <input
          onChange={(e) => this.setState({ email: e.target.value })}
          type="email"
          className="input-email-field"
          placeholder="Enter your valid Email"
          value={email}
        />
        {error && (
          <p className="warning-email-row">
            <Image src="/assets/mockup/fe_warning.png" />
            <span className="warning-email-msg">
              The email address you entered could not be found
            </span>
          </p>
        )}

        {!recoverPasswordLoading ? (
          <button
            className="resend-btn"
            onClick={() => _recoverPassword_(email)}
          >
            Email me a recovery link
          </button>
        ) : (
          <div
            className="resend-btn"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ReactLoading
              height={"20px"}
              width={"20px"}
              type="spin"
              color="white"
            />
          </div>
        )}
      </>
    );
  };

  recoverPassword = () => {
    return (
      <>
        <p className="close-row">
          <button onClick={() => this.setState({ modalShow: false })}>X</button>
        </p>
        <p className="heading">Recover Password</p>
        <p className="warning-email-recover">
          An email has been sent. Please follow the instructions to recover your
          password.
        </p>
      </>
    );
  };

  render() {
    const { username, password, loader, error } = this.state;
    const { _socialLogin, router, recoverPasswordLoading } = this.props;
    return (
      <Container>
        <div>
          <p className="signIn-Heading">Welcome Back! </p>
          <p className="sigiin-message">
            Please sign in to access your community dashboard.
          </p>
        </div>
        <div>
          <button className="apple-login-btn">
            <Image
              className="apple-icon"
              src={"/assets/mockup/apple-icon.png"}
            />
            Continue with Apple
          </button>
          <GoogleLogin _socialLogin={_socialLogin} router={router} />
        </div>
        <div className="another-login">
          <span className="line-draw"></span>
          <span className="use-on-email">OR USE YOUR OWN EMAIL</span>
          <span className="line-draw"></span>
        </div>

        <div className="signin-form">
          <label className="label">Email</label>
          <input
            className="signin-input"
            placeholder="Enter Email"
            type="email"
            required
            value={username}
            name="username"
            onChange={this.onChange}
          />
          <label className="label">Password</label>
          <div className="signin-input1">
            <input
              className="input1"
              placeholder="Enter Password"
              type={this.state.hiddnField}
              value={password}
              required
              name="password"
              onChange={this.onChange}
            />
            <button onClick={this.showPwd} className="pwd-btn">
              <FontAwesomeIcon
                icon={["fas", this.state.eyeIcon]}
                color="#444444"
              />
            </button>
          </div>
          <div className="forgot-div">
            <button
              className="forgot-pwd"
              onClick={() => this.showModal("recoverPasswordSendReq")}
            >
              Forgot password?
            </button>
          </div>

          <button
            className="signinbtn flex-center-center"
            onClick={this.signIn}
          >
            {loader ? (
              <ReactLoading
                height={"20px"}
                width={"20px"}
                type="bubbles"
                color="white"
              />
            ) : (
              "Sign In"
            )}
          </button>
        </div>

        <div className="have-an-account">
          <span style={{ marginRight: "5px" }}>Don’t have an account?</span>
          {/* <button onClick={() => this.showModal("emailVerifiedRequiredModal")}>
            Sign Up
          </button> */}
          <Link href="/invitationCode">Sign Up</Link>
        </div>

        {error && (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              color: "red",
            }}
          >
            {error}
          </p>
        )}

        <ModalCustomize
          modalShow={this.state.modalShow}
          modalName={this.state.showModalName}
          closeModal={() => this.setState({ showModal: false })}
          emailVerifiedRequiredModal={this.emailVerifiedRequiredModal}
          recoverPasswordSendReq={this.recoverPasswordSendReq}
        />
      </Container>
    );
  }
}
