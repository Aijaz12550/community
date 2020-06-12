import React from "react";
import { Image } from "react-bootstrap";
import "../../../styles/newLandingPage/header.scss";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <Image src="/assets/mockup/logoAndTitle.png" />
      </div>

      <div></div>
     

      <div className="btn-container">
        <div></div>
        <div></div>
        <button>whyWeNeighbourse ?</button>

        <button>contact us</button>

          <a href="/signIn">
        <button className='signin-btn'>
            Sign In
        </button>
            </a>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
