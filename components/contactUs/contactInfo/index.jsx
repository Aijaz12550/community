import React from "react";
import { Image } from 'react-bootstrap'

export const ContactInfo = () => {
  return (
    <div className='contact-info-container'>
      <span>Contact Info</span>

      <div className='contact-row'>
        <Image src='/assets/mockup/contact.png' />
        <div>
          <span>Phone Number: </span>
          <span>+1 401-321-2786</span>
        </div>
      </div>
<br />

      <div className='contact-row'>
        <Image src='/assets/mockup/email.png' />
        <div>
          <span>Email Address:</span>
          <span>support@weneighbors.io</span>
        </div>
      </div>

      <Image src='/assets/mockup/contactInfoFrame.png' />

    </div>
  );
};
