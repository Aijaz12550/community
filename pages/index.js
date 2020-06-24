import Head from "next/head";
import LandingPage from "./landingPage";
import "../styles/assets/css/dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { DashBoard } from "../components";
import { GetToken } from "$config";

const Home = () => (
  <div>
    <Head>
      <title>Community System</title>
      <link rel="icon" href="/Favicon.png" />
      <link
        rel="stylesheet"
        type="text/css"
        href={"/_next/static/css/styles.chunk.css?v=" + Date.now()}
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
      ></link>
    </Head>
    <LandingPage />
    {/* <DashBoard /> */}
    {/* <GetToken/> */}
  </div>
);

export default Home;
