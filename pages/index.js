import Head from "next/head";
import LandingPage from "./landingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => (
  <div>
    <Head>
      <title>Community System</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        type="text/css"
        href={"/_next/static/css/styles.chunk.css?v=" + Date.now()}
      />
    </Head>

    <LandingPage />
  </div>
);

export default Home;
