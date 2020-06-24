import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  GET_AVATAR_SUCCESS,
  GET_AVATAR_ERROR,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_ERROR,
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

export const getAvatarSuccess = (payload) => {
  return {
    type: GET_AVATAR_SUCCESS,
    payload,
  };
};

export const getAvatarError = (payload) => {
  return {
    type: GET_AVATAR_ERROR,
    payload,
  };
};

export const updateAvatarSuccess = (payload) => {
  return {
    type: UPDATE_AVATAR_SUCCESS,
    payload,
  };
};

export const updateAvatarError = (payload) => {
  return {
    type: UPDATE_AVATAR_ERROR,
    payload,
  };
};
