import React, { Fragment, useState } from "react";
import InvitationScreen from "../../components/invitationCode";
import "../../styles/invitaionCode/index.scss";
import { connect } from "react-redux";
import { invitationCode } from "$middleware";
import Head from "next/head";

export default connect((state) => state)((props) => {
  let { dispatch } = props;
  let [codeError, setCodeError] = useState(null)

  let _invitationCode = (code) => {
    dispatch(invitationCode(code))
    .then( ({data}) => {
      console.log('kjhgjhgjh0',data)
      if(data?.customMessage){
        setCodeError(data.customMessage)
      }
    })
  };
  return (
    <Fragment>
      <Head>
        <title>Invitation Code</title>
      </Head>
      <InvitationScreen _invitationCode={_invitationCode} codeError={codeError} />
    </Fragment>
  );
});
