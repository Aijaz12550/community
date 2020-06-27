import React, { useState } from "react";
import { Layout } from "./layout";
import { CentralComponent } from "./centralComponent";
import Link from "next/link";
import ReactLoading from "react-loading";

const InvitationCode = ({ _invitationCode, codeError, isloading }) => {
  let [inv_code, setInv_code] = useState("RMAN707066");

  return (
    <Layout>
      <CentralComponent style={{minHeight:'700px'}} steps={[{ title: '' }, { title: '' }]} progress_value={0}>
        <div className="central-component-body-1">
          <span className="central-component-heading">
            Please Enter the invitation Code That you have recieved from us
          </span>

          {codeError && (
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
              value={inv_code}
              placeholder="AED5687"
            />
          </span>
        </div>

        <div className="central-component-body-2">
          <span></span>
          <span></span>
          <span>
            Already have an account? &nbsp;
            <Link href="/SignIn">Sign in</Link>
          </span>

          <div className="btn-container">
            <button>Back</button>
            <div
            style={{maxWidth:'150px'}}
              className={!isloading ? "btn-class" : "btn-class-isloading"}
              onClick={() => _invitationCode(inv_code)}
              disabled={isloading}
            >
              {isloading ? (
                <ReactLoading
                  height={"20px"}
                  width={"20px"}
                  type="spin"
                  color="#fff"
                />
              ) : (
                "Next"
              )}
            </div>
          </div>
        </div>
      </CentralComponent>
    </Layout>
  );
};
export default InvitationCode;
