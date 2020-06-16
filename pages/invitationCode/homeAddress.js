import React, { Fragment } from "react";
import HomeAddress from "../../components/invitationCode/homeAddress";
import "../../styles/invitaionCode/index.scss";
import { connect } from "react-redux";
import Head from "next/head";

export default connect((state) => state)((props) => {
  return (
    <Fragment>
      <Head>
        <title>Home Address</title>
      </Head>
      <HomeAddress />
    </Fragment>
  );
});
