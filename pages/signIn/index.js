import { SignIn } from "$components";
import { connect } from "react-redux";
import { login } from "$middleware";
import Head from "next/head";
import React, { Fragment } from "react";

export default connect((state) => state)((props) => {
  // useEffect(() => {
  //   props.dispatch(getUsers());
  // }, []);
  
  return (
    <Fragment>
      <Head>
        <title>Sign In</title>
      </Head>
      <SignIn _signin={(payload) => props.dispatch(login(payload))} />
    </Fragment>
  );
});
