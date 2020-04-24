import { ALLUSERS, FAMILY_MEMBERS, INVITE_MEMBERS } from "../CONSTANTS";

const initialState = {
  allUsers:[],
  familyMembers:[],
  invitedMembers:[]
};

const AllUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLUSERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    case FAMILY_MEMBERS:
      return {
        ...state,
        familyMembers: action.payload,
      };

    case INVITE_MEMBERS:
      return {
        ...state,
        invitedMembers: action.payload,
      };
    default:
      return state;
  }
};

export { AllUsersReducer };
