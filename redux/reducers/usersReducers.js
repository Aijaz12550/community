const initialState = {
    field: "test Auth reducer"
  };
  
  const AllUsersReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ALLUSERS":
        return {
          ...state,
          allUsers: action.payload
        };
      default:
        return state;
    }
  };
  
  export { AllUsersReducer };
  