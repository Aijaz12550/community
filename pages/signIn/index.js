import { SignIn } from "$components";
import { connect } from "react-redux";
import { login, socialLogin } from "$middleware";
import Head from "next/head";
import React, { Fragment } from "react";
import { useRouter } from "next/router";

export default connect((state) => state)(({ dispatch }) => {
  const router_ = useRouter();
  return (
    <Fragment>
      <Head>
        <title>Sign In</title>
      </Head>
      <SignIn
        _signin={(payload) => dispatch(login(payload))}
        router={router_}
        _socialLogin={(payload, provider) =>
          dispatch(socialLogin(payload, provider))
        }
      />
    </Fragment>
  );
});
