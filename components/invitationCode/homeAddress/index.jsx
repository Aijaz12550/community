import React, { useState } from "react";
import { Layout } from "../layout";
import { CentralComponent } from "../centralComponent";
import Link from "next/link";
import ReactLoading from "react-loading";

const HomeAddress = ({ home_address_validator, isloading, isError }) => {
  const [homeAddress, setHomeAddress] = useState("");
  const [apt, setApt] = useState("");
  return (
    <Layout>
      <CentralComponent progress_value={50}>
        <div className="central-component-body-1">
          <span className="home-address-heading">
            It seems you're also a resident at
            <span> Turner Hill Homeowners Association. </span>
            Please Enter Your Home Address.
          </span>

          <span className="home-address-heading-2">
            Your home address is required to use resident app and stay connected
            with your neighbors
          </span>

          <span className="inp-container">
            <label className="inp-label">Home Address</label>
            <input
              className="inp-compo"
              onChange={(e) => setHomeAddress(e.target.value)}
              value={homeAddress}
              type="text"
              placeholder="AED5687"
            />
            <br />
          </span>
        </div>

        <div className="central-component-body-2">
          <span className="inp-container">
            <label className="inp-label">Apt / Unit</label>
            <input
              className="inp-compo"
              onChange={(e) => setApt(e.target.value)}
              value={apt}
              type="text"
              placeholder="AED5687"
            />
          </span>
          <span></span>
          <span></span>
          {isError && (
            <span className="home-address-error">
              Cannot find your home at this community. Please enter your correct
              home address or please contact our support at
              <Link href="/test">support@weneighbors.io</Link>
              for any help.
            </span>
          )}

          <div className="btn-container">
            <button>Back</button>
            <div
              style={{ maxWidth: "150px" }}
              className={!isloading ? "btn-class" : "btn-class-isloading"}
              onClick={() => home_address_validator({ homeAddress, apt })}
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
export default HomeAddress;
