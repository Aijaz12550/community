import { GET_EXTERNAL_MEMBER_SUCCESS, GET_EXTERNAL_MEMBER_ERROR } from "../CONSTANTS";
const initialState = {
  getExternalMember: {},
  getExternalMemberError: "",
};

export const externalMemberReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_EXTERNAL_MEMBER_SUCCESS:
      return {
        ...state,
        getExternalMember: payload,
      };
    case GET_EXTERNAL_MEMBER_ERROR:
      return {
        ...state,
        getExternalMemberError: payload,
      };
    default:
      return state;
  }
};
