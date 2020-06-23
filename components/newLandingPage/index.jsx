import React, { Fragment } from "react";
import { Header } from "./header";
import { Hero } from "./hero";
import { Image } from "react-bootstrap";
import "../../styles/newLandingPage/index.scss";

export const LandingPage = () => {
  return (
    <Fragment>
      <div className="landingpage-container">
        <div className="hero-and-header-container">
          <Header />
          <Hero />
          <Image className='landing-page-img' src="/assets/mockup/heroImage.png" />
        </div>
        <div className="body-and-footer-container">
          <span className="mob-app-hint">
            If you’re a resident or homeowner, please use our neighborhood
            mobile app
          </span>

          <div className="app-images-container">
            <Image src="/assets/mockup/appStore.png" />
            <Image src="/assets/mockup/playstore.png" />
          </div>

          <span className="query-address">
            If you have any question, please contact us at
            support@weneighbors.io
          </span>
        </div>
      </div>
      <div className="landing-page-footer">
        <div className='landing-page-footer-div'>
          <span className='copy-right'>© 2020 WeNeighbors. All rights reserved.</span>
          <div>
            <span className='term'>Terms</span>
            <span>Privacy</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
