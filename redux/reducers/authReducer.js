const initialState = {
  field: "test Auth reducer",
  user: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        user: action.payload,
      };
    case "SIGNOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export { AuthReducer };
