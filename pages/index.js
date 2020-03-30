import Head from "next/head";
import LandingPage from "./landingPage";
import '../styles/assets/css/dashboard.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { DashBoard } from '../components'

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
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
    </Head>

    {/* <LandingPage /> */}
    <DashBoard/>
  </div>
);

export default Home;
