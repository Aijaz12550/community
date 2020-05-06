import { RESIDENTS_ERROR, COMMUNITY_RESIDENTS } from "../CONSTANTS";
const initialState = {
  residents: "test residents reducer",
  residents: [],
  residentsError: {},
};

export const ResidentsReducer = (state = initialState, { payload,type }) => {
  switch (type) {
    case COMMUNITY_RESIDENTS:
      return {
        ...state,
        residents: payload,
      };
    case RESIDENTS_ERROR:
      return {
        ...state,
        residentsError: payload,
      };
    default:
      return state;
  }
};
