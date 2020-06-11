import React from "react";
import { Layout } from "../layout";
import { CentralComponent } from "../centralComponent";
import { Image } from "react-bootstrap";

const EmailVerificationError = () => {
  return (
    <Layout>
      <CentralComponent style={{ minHeight: "40vh" }} progressbar="none">
        <div className="account-verified-status">
          <Image src="/assets/mockup/error.png" width={150} />

          <span>Sorry! We're unable to verify your WeNeighbors account</span>
        </div>
      </CentralComponent>
    </Layout>
  );
};
export default EmailVerificationError;
