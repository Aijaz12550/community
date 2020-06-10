import React from "react";
import { Container } from "../mainlayout";
import { Navbar, Image } from 'react-bootstrap'
import Link from "next/link";
import "../../styles/signin/index.scss";
import { GoogleLogin } from "./google";
import { Apple } from "./apple";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
// import Modals from './modal';
// library.add(fas);
// import Theme from '../theme'

export class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "androiduser1@unimelon.com",
      password: "Unimel@n12345",
      pwdHasShow: false,
      eyeIcon: 'eye-slash',
      hiddnField: 'password',
      modalShow: false
    };
  }
  showModal = () => {
    this.setState({
      modalShow: true
    })
  }
  signIn = (e) => {
    let { _signin, router } = this.props
    e.preventDefault();
    const { username, password } = this.state;
    const body = {
      grant_type: "password",
      username,
      password,
    };
    _signin(body).then(data => {
      let scope = (data.scope).toLowerCase()
      router.push("/dashboard/[user]/[role]", `/dashboard/${scope}/view_residents`)
      console.log('data from comp', data)
    }).catch(error => {
      console.log('error from component', error)
    })
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
        eyeIcon: 'eye-slash',
        hiddnField: 'password'
      })
    } else {
      this.setState({
        pwdHasShow: true,
        eyeIcon: 'eye',
        hiddnField: 'text'
      })
    }
  }

  render() {
    const { username, password } = this.state;
    const { _socialLogin, router } = this.props
    return (


      <Container>
        <div>
          <p className='signIn-Heading'>Welcome Back! </p>
          <p className='sigiin-message'>Please Sign In to access your community dashboard.</p>
        </div>
        {/* <Theme /> */}
        <div>
          <button className="apple-login-btn"><Image className='apple-icon' src={'/assets/mockup/apple-icon.png'} />Continue with Apple</button>
          <GoogleLogin _socialLogin={_socialLogin} router={router} />
        </div>
        {/* <Apple /> */}

        {/* <button className="google-login-btn">continue with Google</button> */}

        <div className='another-login'><span className='line-draw'></span><span className='use-on-email'>OR USE YOUR OWN EMAIL</span><span className='line-draw'></span></div>

        <form className="signin-form" onSubmit={this.signIn}>
          <label className='label'>Email</label>
          <input
            className="signin-input"
            placeholder="Enter Email"
            type="email"
            required
            value={username}
            name="username"
            onChange={this.onChange}
          />
          <label className='label'>Password</label>
          <div className="signin-input1">
            <input
              className='input1'
              placeholder="Enter Password"
              type={this.state.hiddnField}
              value={password}
              required
              name="password"
              onChange={this.onChange}
            />
            <button onClick={this.showPwd} className='pwd-btn'><FontAwesomeIcon icon={["fas", this.state.eyeIcon]} color='#444444' /></button>
          </div>

          <div><p className='forgot-pwd'>Forgot password?</p></div>

          <button className="signinbtn" type="submit">Sign In</button>
          <div className='have-an-account'><span>Don’t have an account?</span><button onClick={this.showModal}>Sign Up</button></div>
        </form>

        {/* <Modals
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        /> */}
      </Container>
    );
  }
}
