import { SignUp } from "$components";
import { connect } from "react-redux";
import { register } from "$middleware";

export default connect((state) => state)((props) => (
  <SignUp _signup={(payload) => props.dispatch(register(payload))} />
));
