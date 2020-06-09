import { GET_ROLES_SUCCESS, GET_ROLES_ERROR } from "../CONSTANTS";
const initialState = {
  getRoles: [],
  getRolesError: {},
};

export const rolesReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_ROLES_SUCCESS:
      return {
        ...state,
        getRoles: payload,
      };
    case GET_ROLES_ERROR:
      return {
        ...state,
        getRolesError: payload,
      };
    default:
      return state;
  }
};
