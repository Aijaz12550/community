const initialState = {
  field: "test Auth reducer",
  user: {},
  userError: "",
};

const AuthReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        user: payload,
      };
    case "SIGNIN_ERROR":
      console.log(payload, 'payload')
      return {
        ...state,
        userError: payload,
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
