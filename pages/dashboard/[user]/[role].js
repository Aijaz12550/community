import React, { Fragment, useEffect } from "react";
import { DashBoard } from "$components";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/assets/css/dashboard.css";
import "../../../styles/sidebar/index.scss";
import Head from "next/head";
import { connect } from "react-redux";
import {
  getUsers,
  signout,
  familyMembersList,
  inviteFamilyMembers,
} from "$middleware";
import { useRouter } from "next/router";

export default connect((state) => state)(({ dispatch, AllUsersReducer }) => {
  const router = useRouter();
  useEffect(() => {
    dispatch(getUsers());
    dispatch( familyMembersList() )
  }, []);

  const _INVITEMEMBER = (id) => {
    dispatch(inviteFamilyMembers(id))
  } 

  const __SIGNOUT = () => {
    dispatch(signout());
    router.push("/signIn");
  };

  return (
    <Fragment>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href={"/_next/static/css/styles.chunk.css?v=" + Date.now()}
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <DashBoard users={AllUsersReducer} _signout={__SIGNOUT} _inviteMember = {_INVITEMEMBER} />
    </Fragment>
  );
});
