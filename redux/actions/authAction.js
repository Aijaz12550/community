import { SIGNIN, SIGNUP, EMAILVERIFICATIONSTATUS } from "../CONSTANTS";
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

const emailverification = (payload) => {
  return {
    type: EMAILVERIFICATIONSTATUS,
    payload,
  };
};
export { signin, signup, emailverification };
