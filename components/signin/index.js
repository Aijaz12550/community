import React from "react";
import { Container } from "../mainlayout";
import Link from "next/link";
import "../../styles/signin/index.scss";
import {GoogleLogin} from './google'
import { Apple } from './apple'
import { OauthConfig } from '../../configuration'

export const SignIn = props => {
let clientId =  process.env.oauth_client_id
console.log('================================',props)
  const getToken = () => {
    const token = OauthConfig.createToken('access token')
    const re = token.client.code.getUri()
  // let re = token.client.code.getToken({},clientId ,process.env.oauth_token_url)
    console.log(' token >>>',token ,"---",re)
  }
    return (
    <Container>
      <p>Welcome Back! </p>
      <p>Please Sign In to access your community dashboard.</p>

      <button className="apple-login-btn">continue with Apple</button>
      <GoogleLogin/>
      <Apple/>

      {/* <button className="google-login-btn">continue with Google</button> */}

      <Link href="#">
  <a>OR USE YOUR OWN EMAIL {process.env.REACT_APP_TEST}</a>
      </Link>

      <input
        className="signin-input"
        placeholder="Email"
        type="email"
        required
      />
      <input
        className="signin-input"
        placeholder="Password"
        type="password"
        required
      />

      <p>Forgot password?</p>

      <button className="signinbtn" onClick={getToken}>Sign In</button>
    </Container>
  );
};

