import React, { Fragment } from "react";
import SignUp from "../../components/invitationCode/signup";
import "../../styles/invitaionCode/index.scss";
import { connect } from "react-redux";
import Head from "next/head";

export default connect((state) => state)((props) => {
  return (
    <Fragment>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUp />
    </Fragment>
  );
});
