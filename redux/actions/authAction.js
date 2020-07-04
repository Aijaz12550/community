import { SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNUP, EMAILVERIFICATIONSTATUS } from "../CONSTANTS";

export const signInSuccess = (payload) => {
  return {
    type: SIGNIN_SUCCESS,
    payload,
  };
};

export const signInError = (payload) => {
  return {
    type: SIGNIN_ERROR,
    payload,
  };
};

export const signup = (payload) => {
  return {
    type: SIGNUP,
    payload,
  };
};

export const emailverification = (payload) => {
  return {
    type: EMAILVERIFICATIONSTATUS,
    payload,
  };
};
