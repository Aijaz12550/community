import { SignIn } from "../../components/signin";
import "../../styles/signin/index.scss";

export default (props) => <SignIn prop={props} test={ process.env.REACT_APP_TEST} />;

export async function getServerSideProps() {
 
    return { data : process.env.REACT_APP_SECRET } 
  }
