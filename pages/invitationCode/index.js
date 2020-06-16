import React, { Fragment } from "react";
import InvitationScreen from "../../components/invitationCode";
import "../../styles/invitaionCode/index.scss";
import { connect } from "react-redux";
import { invitationCode } from "$middleware";
import Head from "next/head";

export default connect((state) => state)((props) => {
  console.log("props ==>", props);
  let { dispatch } = props;

  let _invitationCode = (code) => {
    dispatch(invitationCode(code));
  };
  return (
    <Fragment>
      <Head>
        <title>Invitation Code</title>
      </Head>
      <InvitationScreen _invitationCode={_invitationCode} />
    </Fragment>
  );
});
