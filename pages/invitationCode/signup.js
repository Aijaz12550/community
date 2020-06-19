import React, { Fragment } from "react";
import SignUp from "../../components/invitationCode/signup";
import "../../styles/invitaionCode/index.scss";
import { connect } from "react-redux";
import Head from "next/head";
import { register } from '$middleware'
import { useRouter } from 'next/router'

export default connect((state) => state)((props) => {
  let { dispatch } = props;
  let router = useRouter();

  const _register = (payload) => {
    console.log('payload',payload)
    dispatch(register(payload))
    router.push('/invitationCode/verifyEmail')
  }
  return (
    <Fragment>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUp  _register = {_register} />
    </Fragment>
  );
});
