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
const initialState = {
  getProfile: {},
  getProfileError: "",
  updateProfileSuccess: {},
  updateProfileError: "",
  getAvatar: {},
  getAvatarError: "",
  updateAvatar: {},
  updateAvatarError: "",
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
        getProfile: payload,
      };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        updateProfileError: payload,
      };
    case GET_AVATAR_SUCCESS:
      return {
        ...state,
        getAvatar: payload,
      };
    case GET_AVATAR_ERROR:
      return {
        ...state,
        getAvatarError: payload,
      };
    case UPDATE_AVATAR_SUCCESS:
      const { getProfile } = state;
      getProfile.familyMemberAvatarUrl = payload.userImage;
      return {
        ...state,
        updateAvatar: payload,
        getProfile,
      };
    case UPDATE_AVATAR_ERROR:
      return {
        ...state,
        updateAvatarError: payload,
      };
    default:
      return state;
  }
};
