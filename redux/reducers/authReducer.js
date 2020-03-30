const initialState = {
  field: "test Auth reducer"
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export { AuthReducer };
