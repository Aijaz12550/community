import React, { Fragment, useState } from "react";
import SignUp from "../../components/invitationCode/signup";
import "../../styles/invitaionCode/index.scss";
import { connect } from "react-redux";
import Head from "next/head";
import { register } from "$middleware";
import { useRouter } from "next/router";

export default connect((state) => state)((props) => {
  let {
    dispatch,
    inviteReducer: {
      // invitationCode: {
      //   community: { communityId, street },
      //   roles,
      // },
      code,
    },
  } = props;
  let router = useRouter();
  let [isloading, setIsLoading] = useState(false);

  const _register = (payload) => {
    setIsLoading(true);
    const data = {
      apnsKey: "",
      appartmentUnit: "",
      communityId: 1,
      deviceType: "ANDROID",
      fcmKey: "",
      fullName: "Muhammad Owais Warsi",
      idToken: "",
      invitationCode: "RMAN959309",
      latitude: 44.500000,
      longitude: -89.500000,
      registrationId: "",
      registrationType: "APPLICATION",
      street: "12 Barnum Pl",
      timeZone: "",
      udid: "",
      userRoleType: "ROLE_COMMUNITY_RESIDENT, ROLE_COMMUNITY_MEMBER",
      
    };
    dispatch(register(data));
    router.push("/invitationCode/verifyEmail");
  };
  return (
    <Fragment>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUp _register={_register} 
      goBack = {router.back} />
    </Fragment>
  );
});
