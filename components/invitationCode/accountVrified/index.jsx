import React from "react";
import { Layout } from "../layout";
import { CentralComponent } from "../centralComponent";
import { Image } from "react-bootstrap";

const AccountVerified = () => {
  return (
    <Layout>
      <CentralComponent style={{ minHeight: "40vh" }} progressbar="none">
        <div className="account-verified-status">
          <Image src="/assets/mockup/cong.png" width={150} />

          <span>Congratulations! Your WeNeighbors account is verified</span>
        </div>
      </CentralComponent>
    </Layout>
  );
};
export default AccountVerified;
