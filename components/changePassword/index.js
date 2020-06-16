import React from "react";
import { Layout } from "../invitationCode/layout";
import { CentralComponent } from "../invitationCode/centralComponent"
import '../../styles/changePassword/index.scss'
import { Image } from "react-bootstrap";

const ChangePassword = () => {
  return (
    <div className='change-password'>
      <Layout>
        <CentralComponent style={{ paddingTop: 50, paddingLeft: 40, paddingRight: 40, paddingBottom: 70 }} progressbar="none">
          <p className='heading'>Change Password</p>
          <p className='warning-criteria'>Enter a new password to meet new criteria:</p>
        </CentralComponent>
      </Layout>
    </div>
  );
};
export default ChangePassword;
