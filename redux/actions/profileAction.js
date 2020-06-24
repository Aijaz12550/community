import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
} from "../CONSTANTS";

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

export const updateProfileSuccess = (payload) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload,
  };
};

export const updateProfileError = (payload) => {
  return {
    type: UPDATE_PROFILE_ERROR,
    payload,
  };
};
