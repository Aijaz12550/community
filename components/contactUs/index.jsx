import React, { Fragment } from "react";
import { Header } from "../newLandingPage/header";
import { ContactUsForm } from "./contactUsForm";
import { ContactInfo } from "./contactInfo";
import "../../styles/contactUs/index.scss";

const ContactUs = ({ sendFeedback }) => {
  return (
    <Fragment>
      <Header />
      <div className="contact-us-body-container">
        <div className="contact-body-sub">
          <ContactUsForm sendFeedback={sendFeedback} />
          <ContactInfo />
        </div>
      </div>
      <div
        className="landing-page-footer"
        style={{ background: "#F6F7FB", margin: 0 }}
      >
        <div className="landing-page-footer-div">
          <span className="copy-right">
            © 2020 WeNeighbors. All rights reserved.
          </span>
          <div>
            <span className="term">Terms</span>
            <span>Privacy</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;
