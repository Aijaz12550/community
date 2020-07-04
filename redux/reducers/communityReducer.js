import { GET_COMMUNITY_SUCCESS, GET_COMMUNITY_ERROR } from "../CONSTANTS";
const initialState = {
    getCommunity: {},
    getCommunityError: "",
};

export const CommunityReducer = (
  state = initialState,
  { payload, type }
) => {
  switch (type) {
    case GET_COMMUNITY_SUCCESS:
      return {
        ...state,
        getCommunity: payload,
      };
    case GET_COMMUNITY_ERROR:
      return {
        ...state,
        getCommunityError: payload,
      };
    default:
      return state;
  }
};
