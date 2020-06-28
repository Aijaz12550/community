import React, { useState } from "react";
// import '../../../styles/contactUs/ContactUsForm.scss';
import ReactLoading from "react-loading";

export const ContactUsForm = ({ sendFeedback }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");
  const [feedback, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const clearState = () => {
    setFullName("");
    setPhoneNumber("");
    setEmail("");
    setMessage(" ");
    setLoading(false);
  };
  const handleClick = () => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    return sendFeedback({
      fullName,
      phoneNumber,
      email,
      feedback,
    })
      .then((success) => {
        setSuccessMessage(success?.data?.responseMessage);
        clearState();
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  };
  return (
    <div className="contact-us-form">
      <span className="contact-us-heading">
        Please use this form to contact us
      </span>

      <div className="contact-us-input-container">
        <input
          type="text"
          name="FullName"
          onChange={(e) =>
            setFullName(e.target.value) ||
            setErrorMessage("") ||
            setSuccessMessage("")
          }
          placeholder="Enter Your Full Name"
          value={fullName}
        />
        <input
          type="Number"
          onChange={(e) =>
            setPhoneNumber(e.target.value) ||
            setErrorMessage("") ||
            setSuccessMessage("")
          }
          placeholder="Enter Your Phone Number"
          value={phoneNumber}
        />
        <input
          type="email"
          onChange={(e) =>
            setEmail(e.target.value) ||
            setErrorMessage("") ||
            setSuccessMessage("")
          }
          placeholder="Enter Email Address"
          value={email}
        />
        <textarea
          onChange={(e) =>
            setMessage(e.target.value) ||
            setErrorMessage("") ||
            setSuccessMessage("")
          }
          value = {feedback}
        />
          
      </div>
      <br />
      {successMessage && <span style={{ color: "#296",fontSize:'16px' }} >{successMessage}</span>}
      {errorMessage && <span style={{ color: "red",fontSize:'16px' }}>{errorMessage}</span>}

      {/* <button onClick={handleClick}> Send Message</button> */}
      <div className={"btn-class-ve"} onClick={handleClick}>
        {loading ? (
          <ReactLoading
            height={"20px"}
            width={"20px"}
            type="spin"
            color="#fff"
          />
        ) : (
          "Send Message"
        )}
      </div>
    </div>
  );
};
