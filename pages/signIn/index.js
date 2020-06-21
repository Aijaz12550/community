import { SignIn } from "$components";
import { connect } from "react-redux";
import { login, socialLogin, recoverPassword } from "$middleware";
import Head from "next/head";
import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";

export default connect((state) => state)((props) => {
  const router_ = useRouter();
  let { dispatch } = props
  let [recoverPasswordLoading, setRecoverPasswordLoading] = useState(false)
  let [ error, setError] = useState(null)

  const _recoverPassword_ = (email) => {
    setRecoverPasswordLoading(true)
    console.log('email ==>', email)
    dispatch(recoverPassword(email)).then(data => {
      console.log('=======>', data)
      setRecoverPasswordLoading(false)
    }).catch( error => {
      setError(error)
      setRecoverPasswordLoading(false)
      console.log('error',error)
    })
  }
  return (
    <Fragment>
      <Head>
        <title>Sign In</title>
      </Head>
      <SignIn
        _signin={(payload) => props.dispatch(login(payload))}
        router={router_}
        _socialLogin={(payload, provider) =>
          props.dispatch(socialLogin(payload, provider))
        }
        {...props}
        _recoverPassword_ = {_recoverPassword_}
        recoverPasswordLoading = {recoverPasswordLoading}
        error = {error}
      />
    </Fragment>
  );
});
