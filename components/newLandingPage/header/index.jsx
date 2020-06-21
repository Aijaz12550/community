import React from "react";
import { Image } from "react-bootstrap";
import "../../../styles/newLandingPage/header.scss";
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
      <Link href='/'>
        <Image src="/assets/mockup/logoAndTitle.png" />
        </Link>
      </div>

      <div></div>

      <div className="btn-container">
        <div></div>
        <div></div>
       
        <button>WhyWeNeighbourse ?</button>

<Link href='/landingPage/contactUs'>
        <button>Contact Us</button>
</Link>

        <a href="/signIn">
          <button className="signin-btn">Sign In</button>
        </a>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
