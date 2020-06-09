import { GET_MEMBER_SUCCESS, GET_MEMBER_ERROR } from "../CONSTANTS";

export const getMembersSuccess = (payload) => {
  return {
    type: GET_MEMBER_SUCCESS,
    payload,
  };
};

export const getMembersError = (payload) => {
  return {
    type: GET_MEMBER_ERROR,
    payload,
  };
};
