import React, { Fragment, useState } from "react";
import SignUp from "../components/invitationCode/signup";
import "../styles/invitaionCode/index.scss";
import { connect } from "react-redux";
import Head from "next/head";
import { register } from "$middleware";
import { useRouter } from "next/router";

export default connect((state) => state)((props) => {
  let { dispatch, inviteReducer } = props;
  let router = useRouter();
  let [isloading, setIsLoading] = useState(false)
  const _register = (payload) => {
    setIsLoading(true)
    const data = {
      appartmentUnit: "string",
      communityId: "USC10001",
      deviceType: "desktop",
      fullName: "string",
      idToken: "string",
      invitationCode: "RMAN707066",
      latitude: 0,
      longitude: 0,
      registrationId: "string",
      registrationType: "string",
      street: "Barnum Pl, Mckeon Pl, Lynn Pl, Titus Pl, Taylor Ct",
      timeZone: "string",
      udid: "string",
      userRoleType: "ROLE_COMMUNITY_MEMBER,",
      ...payload,
    };
    dispatch(register(data));
    router.push('/invitationCode/verifyEmail')
    
  };
  return (
    <Fragment>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUp _register={_register} />
    </Fragment>
  );
});
