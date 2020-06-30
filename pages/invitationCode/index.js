import React, { Fragment, useState } from "react";
import InvitationScreen from "../../components/invitationCode";
import "../../styles/invitaionCode/index.scss";
import { connect } from "react-redux";
import { __invitationCode } from "$middleware";
import Head from "next/head";
import { useRouter } from "next/router";


export default connect((state) => state)((props) => {
  let { dispatch } = props;
  let router = useRouter();
  let [codeError, setCodeError] = useState(null);
  let [isloading, setLoading] = useState(false);

  let _invitationCode = (code) => {
    setLoading(true);
    dispatch(__invitationCode(code)).then(({ data }) => {
      console.log('===>',data)
      setLoading(false);
      if (data?.customMessage) {
        setCodeError(data.customMessage);
      }
      else if(data?.body?.homeAddressRequired){
        router.push(`/invitationCode/${data?.body?.community?.otherCommunityName}%20${code}?123%20%20@=`)
        // router.push(`/invitationCode/homeAddress`)
      }
      else if(!data?.body?.homeAddressRequired){
        router.push('/invitationCode/signup')

      }
    });
  };
  return (
    <Fragment>
      <Head>
        <title>Invitation Code</title>
      </Head>
      <InvitationScreen
        _invitationCode={_invitationCode}
        codeError={codeError}
        isloading={isloading}
        goBack = {router.back}
      />
    </Fragment>
  );
});
