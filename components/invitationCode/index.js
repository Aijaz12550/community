import React from "react";
import Link from "next/link";
import { Layout } from "./layout";
import "../../styles/userValidation/index.scss";
import "../../styles/signin/index.scss";

export default () => (
  <Layout prog={1} key="123">
    <p>
      Already have an acoount?
      <Link href="/signIn">
        <a>Sign In</a>
      </Link>
    </p>

    <p>Please Enter the invitation code that you have received from us.</p>

    <p style={{ color: "red" }}>
      sorry! Entered invitation code is invalid or expired. If problem persist
      please contact our support.
      <a href="#">support@weneibours.io</a>
    </p>

    <input
      className="invitation-code-input"
      placeholder="Invitation Code"
      type="password"
    />
    <p>Your Community is &lt;abc&gt;</p>
    <p>And For the member role is president.</p>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
      }}
    >
      <button className="btn">&lt; Back</button>
      <Link href="/homeAddress">
        <button className="btn"> Next &gt;</button>
      </Link>
    </div>
  </Layout>
);
