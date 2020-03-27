import React from "react";
import Carousel from "./carousel";
import Link from "next/link";
import { Header } from "./header";
import "../../styles/landingpage/index.scss";

export const LandingPage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="landingpage-bottom">
        <p>
          Keep communications organized in WeNeibours, the smart alternative to
          email.
        </p>
        <p>
          Already Have an account?
          <Link href="/signIn">
            <a> Sign In</a>
          </Link>
        </p>
      </div>
    </div>
  );
};
