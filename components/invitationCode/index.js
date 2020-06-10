import React from "react";
import { Layout } from "./layout";
import { CentralComponent } from "./centralComponent";
import Link from 'next/link'

const InvitationCode = () => {
  return (
    <Layout>
      <CentralComponent>
        <div className="central-component-body-1">
          <span>
            Please Enter the invitation Code That you have recieved from us
          </span>

          <span>
            Sorry! Entered invitation code is invalid or expired. If problem
            persist, please contact our support at 
            <Link href="/test">
             support@weneighbors.io
            </Link>
          </span>

          <span className="inp-container">
            <label>Invitaion Code</label>
            <input className="inp-compo" type="text" placeholder="AED5687" />
          </span>
        </div>

        <div className="central-component-body-2">
          <span></span>
          <span></span>
          <span>Already have an account?
            <Link href="SignIn">

             Sign in
            </Link>
             </span>

          <div className="btn-container">
            <button>Back</button>
            <button>Sign in</button>
          </div>
        </div>
      </CentralComponent>
    </Layout>
  );
};
export default InvitationCode;
