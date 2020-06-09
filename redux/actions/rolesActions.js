import { GET_ROLES_SUCCESS, GET_ROLES_ERROR } from "../CONSTANTS";

export const getRolesSuccess = (payload) => {
  return {
    type: GET_ROLES_SUCCESS,
    payload,
  };
};

export const getRolesError = (payload) => {
  return {
    type: GET_ROLES_ERROR,
    payload,
  };
};
