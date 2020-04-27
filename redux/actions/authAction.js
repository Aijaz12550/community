import { SIGNIN, SIGNUP } from "../CONSTANTS";
const signin = (payload) => {
  return {
    type: SIGNIN,
    payload,
  };
};

const signup = (payload) => {
  return {
    type: SIGNUP,
    payload,
  };
};
export { signin, signup };
