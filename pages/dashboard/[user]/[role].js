import React, { Fragment } from "react";
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
  residents,
  addDocument,
} from "$middleware";
import { useRouter } from "next/router";

export default connect((state) => state)((props) => {
  const router = useRouter();
  const { dispatch } = props;

  const __SIGNOUT = () => {
    dispatch(signout());
    router.push("/signIn");
  };

  return (
    <Fragment>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/Favicon.png" />
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
      <DashBoard
        _signout={__SIGNOUT}
        {...props}
      />
    </Fragment>
  );
});
