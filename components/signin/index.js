import React from "react";
import { Container } from "../mainlayout";
import { Navbar, Image, Modal } from "react-bootstrap";
import Link from "next/link";
import "../../styles/signin/index.scss";
import { GoogleLogin } from "./google";
import { Apple } from "./apple";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ReactLoading from "react-loading";
import ModalCustomize from './modalsCustomize'
library.add(fas);
// import Theme from '../theme'

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
      showModalName: 'emailVerifiedRequiredModal'
    };
  }
  showModal = (modalName) => {
    this.setState({
      modalShow: true,
      showModalName: modalName
    });
  };

  signIn = (e) => {
    let { _signin, router } = this.props;
    e.preventDefault();
    this.setState({
      loader: true,
    });
    const { username, password } = this.state;
    const body = {
      grant_type: "password",
      username,
      password,
    };
    _signin(body)
      .then((data) => {
        let scope = data.scope.toLowerCase();
        router.push(
          "/dashboard/[user]/[role]",
          `/dashboard/${scope}/view_residents`
        );
        console.log("data from comp", data);
      })
      .catch((error) => {
        console.log("error from component", error);
      });
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
    if (
      this.props.AuthReducer?.user?.userId !==
      prevProps.AuthReducer?.user?.userId
    ) {
      this.setState({
        loader: false,
      });
    }
  }

  emailVerifiedRequiredModal = () => {
    return (
      <>
        <p className='close-row'><button onClick={() => this.setState({ modalShow: false })}>X</button></p>
        <p className='heading'>Email Verfication Required!</p>
        <p className='warning'>Please verify your email registered with us.</p>
        <p className='warning warning-username'>{`"${this.state.username}"`}</p>
        <button className='resend-btn'>Resend</button>
      </>
    )
  }

  recoverPasswordSendReq = () => {
    return (
      <>
        <p className='close-row'><button onClick={() => this.setState({ modalShow: false })}>X</button></p>
        <p className='heading-email-verify'>Recover Password</p>
        <p className='warning-email-verfiy'>Don't worry, happen to the best for us</p>
        <p className='email-label'>Email</p>
        <input type='email' className='input-email-field' placeholder='Enter your valid Email' value='demomail@gmail.com' />
        <p className='warning-email-row'><Image src='/assets/mockup/fe_warning.png' /><span className='warning-email-msg'>The email address you entered could not be found</span></p>
        <button className='resend-btn'>Email me a recovery link</button>
      </>
    )
  }

  recoverPassword = () => {
    return (
      <>
        <p className='close-row'><button onClick={() => this.setState({ modalShow: false })}>X</button></p>
        <p className='heading'>Recover Password</p>
        <p className='warning-email-recover'>An email has been sent. Please follow the instructions to recover your password.</p>
      </>
    )
  }

  render() {
    const { username, password, loader } = this.state;
    const { _socialLogin, router, AuthReducer } = this.props;
    console.log(this.props.AuthReducer);
    return (
      <Container>
        <div>
          <p className="signIn-Heading">Welcome Back! </p>
          <p className="sigiin-message">
            Please Sign In to access your community dashboard.
          </p>
        </div>
        {/* <Theme /> */}
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
        {/* <Apple /> */}

        {/* <button className="google-login-btn">continue with Google</button> */}

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
                icon={[fas, this.state.eyeIcon]}
                color="#444444"
              />
            </button>
          </div>
          <div className='forgot-div'>
            <button className="forgot-pwd" onClick={() => this.showModal('recoverPasswordSendReq')}>Forgot password?</button>
          </div>

          <button className="signinbtn flex-center-center" onClick={this.signIn}>
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
          <span>Don’t have an account?</span>
          <button onClick={() => this.showModal('emailVerifiedRequiredModal')}>Sign Up</button>
        </div>
        <ModalCustomize
          modalShow={this.state.modalShow}
          modalName={this.state.showModalName}
          closeModal={() => this.setState({ showModal: false })}
          emailVerifiedRequiredModal={this.emailVerifiedRequiredModal}
          recoverPasswordSendReq={this.recoverPassword}
        />
      </Container>
    );
  }
}
