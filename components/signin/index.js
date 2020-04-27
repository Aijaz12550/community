import React from "react";
import { Container } from "../mainlayout";
import Link from "next/link";
import "../../styles/signin/index.scss";
import { GoogleLogin } from "./google";
import { Apple } from "./apple";

export class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "weneighbors.test1@yopmail.com",
      password: "Unimel@n12345",
    };
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
    _signin(body).then( data => {
      let scope = (data.scope).toLowerCase()
      router.push("/dashboard/[user]/[role]",`/dashboard/${scope}/view_residents`)
      console.log('data from comp', data)
    }).catch( error => {
      console.log('error from component',error)
    })
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { username, password } = this.state;
    const { _socialLogin, router} = this.props
    return (
      <Container>
        <p>Welcome Back! </p>
        <p>Please Sign In to access your community dashboard.</p>

        <button className="apple-login-btn">continue with Apple</button>
        <GoogleLogin _socialLogin={_socialLogin} router={router} />
        {/* <Apple /> */}

        {/* <button className="google-login-btn">continue with Google</button> */}

        <Link href="#">
          <a>OR USE YOUR OWN EMAIL</a>
        </Link>

        <form className="signin-form" onSubmit={this.signIn}>
          <input
            className="signin-input"
            placeholder="Email"
            type="email"
            required
            value={username}
            name="username"
            onChange={this.onChange}
          />
          <input
            className="signin-input"
            placeholder="Password"
            type="password"
            value={password}
            required
            name="password"
            onChange={this.onChange}
          />

          <p>Forgot password?</p>

          <button className="signinbtn" type="submit">
            Sign In
          </button>
        </form>
      </Container>
    );
  }
}
