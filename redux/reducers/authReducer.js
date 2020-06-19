const initialState = {
  field: "test Auth reducer",
  user: {},
};

const AuthReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case "SIGNIN":
      return {
        ...state,
        user: payload,
      };
    case "SIGNOUT":
      return {
        ...state,
        user: null,
      };

    case "EMAILVERIFICATIONSTATUS":
      return {
        ...state,
        emailVerificationStatus: payload,
      };
    default:
      return state;
  }
};

export { AuthReducer };
