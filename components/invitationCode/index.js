import React, { useState } from "react";
import { Layout } from "./layout";
import { CentralComponent } from "./centralComponent";
import Link from "next/link";

const InvitationCode = ({ _invitationCode }) => {
  let [inv_code, setInv_code] = useState(null);

  return (
    <Layout>
      <CentralComponent progress_value={0}>
        <div className="central-component-body-1">
          <span className="central-component-heading">
            Please Enter the invitation Code That you have recieved from us
          </span>

          {false && (
            <span className="central-component-warning">
              Sorry! Entered invitation code is invalid or expired. If problem
              persist, please contact our support at &nbsp;
              <Link href="/test">support@weneighbors.io</Link>
            </span>
          )}

          <span className="inp-container">
            <label className="inp-label">Invitaion Code</label>
            <input
              className="inp-compo"
              onChange={(e) => setInv_code(e.target.value)}
              type="text"
              placeholder="AED5687"
            />
          </span>
        </div>

        <div className="central-component-body-2">
          <span></span>
          <span></span>
          <span>
            Already have an account?
            <Link href="SignIn">Sign in</Link>
          </span>

          <div className="btn-container">
            <button>Back</button>
            <button onClick={() => _invitationCode(inv_code)}>Next</button>
          </div>
        </div>
      </CentralComponent>
    </Layout>
  );
};
export default InvitationCode;
