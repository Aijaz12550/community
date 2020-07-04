import { GET_COMMUNITY_SUCCESS, GET_COMMUNITY_ERROR } from "../CONSTANTS";

export const getCommunitySuccess = (payload) => {
  return {
    type: GET_COMMUNITY_SUCCESS,
    payload,
  };
};

export const getCommunityError = (payload) => {
  return {
    type: GET_COMMUNITY_ERROR,
    payload,
  };
};
