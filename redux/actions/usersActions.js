import { ALLUSERS } from "../CONSTANTS";
const allUsers = (payload) => {
  return {
    type: ALLUSERS,
    payload,
  };
};


export { allUsers };