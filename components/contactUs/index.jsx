import React, { Fragment } from "react";
import { Header } from "../newLandingPage/header";
import { ContactUsForm } from "./contactUsForm";
import { ContactInfo } from './contactInfo';
import '../../styles/contactUs/index.scss'

const ContactUs = () => {
  return (
    <Fragment>
      <Header />
      <div className="contact-us-body-container">
        <div className='contact-body-sub'>
          <ContactUsForm />
          <ContactInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;
