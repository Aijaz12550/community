import React from "react";
import { Layout } from "../invitationCode/layout";
import "../../styles/signin/index.scss";
import "../../styles/userValidation/index.scss";

export const SignUp = () => {
  return (
    <Layout prog={100}>
      <p
        style={{
          color: "black",
          marginTop: "20px",
          fontSize: "17px"
        }}
      >
        Almost there! Please SignUp to access your &lt;Community&gt; community
        dashboard.
      </p>

      <button className="apple-login-btn">continue with Apple</button>

      <button className="google-login-btn">continue with Google</button>
      <input
        className="invitation-code-input"
        placeholder="Email"
        type="email"
        required
      />
      <input
        className="invitation-code-input"
        placeholder="Phone"
        type="Number"
        required
      />
      <input
        className="invitation-code-input"
        placeholder="Password"
        type="password"
        required
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%"
        }}
      >
        <button
          className="btn"
          style={{ marginRight: "7px", alignSelf: "flex-start" }}
        >
          &lt; Back
        </button>
        <button className="btn" style={{ width: "65%" }}>
          Sign Up
        </button>
      </div>
    </Layout>
  );
};
