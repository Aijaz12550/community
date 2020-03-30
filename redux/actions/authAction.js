import { SIGNIN } from '../CONSTANTS'
const signin = payload => {
  return {
    type: SIGNIN,
    payload
  };
};

export { signin };
