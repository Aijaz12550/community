import { SIGNIN, SIGNUP } from "../CONSTANTS";
const signin = (payload) => {
console.log('ppp',payload)
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
