import { GET_PROFILE_SUCCESS, GET_PROFILE_ERROR } from "../CONSTANTS";
const initialState = {
  getProfile: {},
  getProfileError: "",
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
    default:
      return state;
  }
};
