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
      username: "",
      password: "",
    };
  }
  signIn = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const body = {
      grant_type: "password",
      username,
      password,
    };
    this.props._signin(body);
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <Container>
        <p>Welcome Back! </p>
        <p>Please Sign In to access your community dashboard.</p>

        <button className="apple-login-btn">continue with Apple</button>
        <GoogleLogin />
        <Apple />

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
