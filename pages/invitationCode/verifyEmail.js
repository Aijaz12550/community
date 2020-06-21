import VerifyEmail from "../../components/invitationCode/verifyEmail";
import "../../styles/invitaionCode/index.scss";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Head from "next/head";
import { reSendEmailVerification } from '$middleware'
import { useRouter } from 'next/router'

export default connect((state) => state)((props) => {
    let router = useRouter();
  let {
    AuthReducer: { user },
    dispatch,
  } = props;
  const __reSendVerificationEmail = () => {
    console.log(" resend email", user?.email);
    dispatch(reSendEmailVerification(user?.email))
    console.log('======>',props.AuthReducer)
    // router.push('/invitationCode/accountVerified')

  };
  return (
    <Fragment>
      <Head>
        <title>Verify Email</title>
      </Head>

      <VerifyEmail __reSendVerificationEmail={__reSendVerificationEmail} />
    </Fragment>
  );
});
