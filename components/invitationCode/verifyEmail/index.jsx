import React from "react";
import { Layout } from "../layout";
import { CentralComponent } from "../centralComponent";
import { Image } from "react-bootstrap";
import Link from "next/link";
import ReactLoading from 'react-loading'
const SignUp = ({
  __reSendVerificationEmail,
  isloading
}) => {
  return (
    <Layout>
      <CentralComponent progressbar='none'>
        <Image src="/assets/mockup/Frame.png" />

        <span className="verify-email-heading">
          Thank you for signing up. Please verify your email to proceed.
        </span>

        <span className="verify-email-heading-2">
          We just sent an email to the address: name@domain.com
        </span>

        <span className="verify-email-heading-2">
          Please check your email and click on the link provided to verify your
          address.
        </span>

        <span className="verify-email-help">
          Need help verifying your email? Please visit
          <Link href="#">http://help.weneighbors.io</Link>
        </span>

        {/* <button className="verify-email-btn" onClick={__reSendVerificationEmail}>Resend Verification Email</button> */}
        <div className={!isloading?"btn-class":'btn-class-isloading'} onClick={__reSendVerificationEmail}  disabled={isloading} >
              {
                isloading
                ?
                <ReactLoading type={'balls'} color={'white'} height='20px' width='20px'  />
                :
              'Resend Verification Email'
              }
              </div >
      </CentralComponent>
    </Layout>
  );
};
export default SignUp;
