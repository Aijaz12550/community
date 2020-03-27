import React from "react";
import { Layout } from "../invitationCode/layout";
import Link from "next/link";
import '../../styles/signin/index.scss'

export const HomeAddress = () => {
  return (
    <Layout prog={50}>
      <p
        style={{
          color: "black",
          marginTop: "20px",
          fontSize: "19px"
        }}
      >
        It seems you're also a resident at &lt;Community&gt; Please enter your
        home address.
      </p>

      <p style={{ color: "gray" }}>
        Your home address is required to use resident app and stay connected
        with your neighbors.
      </p>

      <input
        className="invitation-code-input"
        placeholder="Your Home Address"
        type="text"
      />
      <input
        className="invitation-code-input"
        placeholder="Apt / unit"
        type="text"
      />

      <p style={{ color: "red" }}>
        Cannot find your home at this community. Please enter your correct home
        address or please contact our support.
        <a href="#">support@weneibours.io</a>
        for any help.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <button className="btn">&lt; Back</button>
        <Link href="/signup">
          <button className="btn">Next &gt;</button>
        </Link>
      </div>
    </Layout>
  );
};
