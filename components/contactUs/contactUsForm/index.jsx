import React, { useState } from "react";
// import '../../../styles/contactUs/ContactUsForm.scss';

export const ContactUsForm = ({ sendFeedback }) => {
  const [fullName, setFullName] = useState(String);
  const [phoneNumber, setPhoneNumber] = useState(Number);
  const [email, setEmail] = useState(String);
  const [message, setMessage] = useState(String);
  return (
    <div className="contact-us-form">
      <span className="contact-us-heading">
        Please use this form to contact us
      </span>

      <div className="contact-us-input-container">
        <input
          type="text"
          name="FullName"
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter Your Full Name"
        />
        <input
          type="Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter Your Phone Number"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Address"
        />
        <textarea onChange={(e) => setMessage(e.target.value)}>Hello</textarea>
      </div>

      <button
        onClick={() =>
          sendFeedback({
            fullName,
            phoneNumber,
            email,
            message,
          })
        }
      >
        {" "}
        Send Message
      </button>
    </div>
  );
};
