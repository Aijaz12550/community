import { COMMUNITY_RESIDENTS, RESIDENTS_ERROR } from "../CONSTANTS";

export const addResidents = (payload) => {
  return {
    type: COMMUNITY_RESIDENTS,
    payload,
  };
};

export const residentsError = (payload) => {
  return {
    type: RESIDENTS_ERROR,
    payload,
  };
};
