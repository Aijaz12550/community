import { SEND_INVITES_SUCCESS, SEND_INVITES_ERROR } from "../CONSTANTS";
const initialState = {
  sendInvites: [],
  sendInvitesError: "",
};

export const inviteReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SEND_INVITES_SUCCESS:
      return {
        ...state,
        sendInvites: payload,
      };
    case SEND_INVITES_ERROR:
      return {
        ...state,
        sendInvitesError: payload,
      };
    default:
      return state;
  }
};
