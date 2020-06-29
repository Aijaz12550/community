import React, { Fragment, useState } from "react";
import HomeAddress from "../../components/invitationCode/homeAddress";
import "../../styles/invitaionCode/index.scss";
import "../../styles/dashboard/changeCommunity/index.scss";
import { connect } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";

export default connect((state) => state)((props) => {
  const router = useRouter();
  console.log('*************************',router)
  const [isloading, setIsloading] = useState(false);
  const { homeAddress } = router.query;
  const [address] = homeAddress;
  console.log("======>>>>>123", homeAddress);
  const home_address_validator = (payload) => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
      router.push("/invitationCode/signup");
    }, 3000);
  };
  return (
    <Fragment>
      <Head>
        <title>Home Address</title>
      </Head>
      <HomeAddress
        home_address_validator={home_address_validator}
        isloading={isloading}
        address={address}
        goBack = {router.back}
      />
    </Fragment>
  );
});
