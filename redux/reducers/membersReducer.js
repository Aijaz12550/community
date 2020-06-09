import { GET_MEMBER_SUCCESS, GET_MEMBER_ERROR } from "../CONSTANTS";
const initialState = {
  getMembers: [],
  getMembersError: {},
};

export const membersReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_MEMBER_SUCCESS:
      return {
        ...state,
        getMembers: payload,
      };
    case GET_MEMBER_ERROR:
      return {
        ...state,
        getMembersError: payload,
      };
    default:
      return state;
  }
};
