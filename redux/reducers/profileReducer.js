import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
} from "../CONSTANTS";
const initialState = {
  getProfile: {},
  getProfileError: "",
  updateProfileSuccess: {},
  updateProfileError: "",
};

export const profileReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        getProfile: payload,
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        getProfileError: payload,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        updateProfileSuccess: payload,
      };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        updateProfileError: payload,
      };
    default:
      return state;
  }
};
