const initialState = {
  field: "test Auth reducer",
  user: {},
  userError: "",
};

const AuthReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case "SIGNIN_SUCCESS":
      console.log(payload, 'payload')
      return {
        ...state,
        user: payload,
      };
    case "SIGNIN_ERROR":
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
