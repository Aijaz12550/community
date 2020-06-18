import { GET_PROFILE_SUCCESS, GET_PROFILE_ERROR } from "../CONSTANTS";

export const getProfileSuccess = (payload) => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload,
  };
};

export const getProfileError = (payload) => {
  return {
    type: GET_PROFILE_ERROR,
    payload,
  };
};
