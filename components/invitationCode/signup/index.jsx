import React from "react";
import { Layout } from "../layout";
import { CentralComponent } from "../centralComponent";
import { Image } from "react-bootstrap";

const SignUp = () => {
  return (
    <Layout>
      <CentralComponent progress_value={100}>
        <span className="signup-heading">
          Almost there please signup to access your community dashboard.
        </span>

        <span className="signup-home">Turner Hill Homeowner Association</span>

        <div className="signupbtn-container">
          <Image src="/assets/mockup/APPLE.png" height={50} />
          <Image src="/assets/mockup/GOOGLE.png" height={50} />
        </div>

        <span className="signup-option">OR USE YOUR OWN EMAIL</span>

        <div className="_inp_container">
          <label>Email</label>
          <input type="email" placeholder="Email" />

          <br />
          <label>Phone</label>
          <input type="number" placeholder="Phone" />

          <br />
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>

        <span></span>
        <div className="bottom-button-container">
          <button>Back</button>

          <button>Sign Up</button>
        </div>
      </CentralComponent>
    </Layout>
  );
};
export default SignUp;
