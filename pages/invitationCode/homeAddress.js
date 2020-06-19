import React, { Fragment, useState } from "react";
import HomeAddress from "../../components/invitationCode/homeAddress";
import "../../styles/invitaionCode/index.scss";
import { connect } from "react-redux";
import Head from "next/head";
import { useRouter } from 'next/router'

export default connect((state) => state)((props) => {

  const router = useRouter();
  const [isloading, setIsloading] = useState(false)
  const home_address_validator = (payload) => {
    setIsloading(true)
    console.log('payload',payload)
    
    setTimeout(()=>{
      setIsloading(false)
      router.push('/invitationCode/signup')
    },3000)
  }
  return (
    <Fragment>
      <Head>
        <title>Home Address</title>
      </Head>
      <HomeAddress home_address_validator = {home_address_validator} isloading = {isloading} />
    </Fragment>
  );
});
