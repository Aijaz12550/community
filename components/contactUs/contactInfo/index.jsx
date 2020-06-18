import React from "react";
import { Image } from 'react-bootstrap';
import '../../../styles/contactUs/contactInfo.scss';

export const ContactInfo = () => {
  return (
    <div className='contact-info-container'>
      <span className='contact-info-heading'>Contact Info</span>

      <div className='contact-info-list-container'>

        <div className='contact-row'>
          <Image src='/assets/mockup/contact.png' />
          <div>
            <span className='contact-row-title'>Phone Number: </span>
            <span className='contact-row-val'>+1 401-321-2786</span>
          </div>
        </div>
        <br />

        <div className='contact-row'>
          <Image src='/assets/mockup/email.png' />
          <div>
            <span className='contact-row-title'>Email Address:</span>
            <span className='contact-row-val'>support@weneighbors.io</span>
          </div>
        </div>
      </div>

      <Image src='/assets/mockup/contactInfoFrame.png' width={350} />

    </div>
  );
};
