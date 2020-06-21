import React, { useState } from "react";
import { Layout } from "../layout";
import { CentralComponent } from "../centralComponent";
import { Image } from "react-bootstrap";

const SignUp = ({ _register, isloading }) => {
  let [email, setEmail] = useState("anschessclub@gmail.com");
  let [phone, setPhone] = useState(+12308766554);
  let [password, setPassword] = useState("123455676");

  return (
    <Layout>
      <CentralComponent steps={[{ title: '' }, { title: '' }, { title: '' }]} progress_value={2}>
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
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />

          <br />
          <label>Phone</label>
          <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Phone" />

          <br />
          <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </div>

        <span></span>
        <div className="bottom-button-container">
          <button>Back</button>

          {/* <button onClick={()=>_register({email,phone,password})}>Sign Up</button> */}
          <div
            onClick={() => _register({ email, phone, password })}
            disabled={isloading}
            style={{ maxWidth: "150px" }}
            className={!isloading ? "btn-class" : "btn-class-isloading"}
            onClick={() => _register({ email, phone, password })}
            disabled={isloading}
          >
            {isloading ? (
              <ReactLoading
                height={"20px"}
                width={"20px"}
                type="spin"
                color="#fff"
              />
            ) : (
              "Sign Up"
            )}
          </div>
        </div>
      </CentralComponent>
    </Layout>
  );
};
export default SignUp;
