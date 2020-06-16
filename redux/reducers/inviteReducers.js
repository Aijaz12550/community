import {
  SEND_INVITES_SUCCESS,
  SEND_INVITES_ERROR,
  INVITATION_CODE,
} from "../CONSTANTS";
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
    case INVITATION_CODE:
      return {
        ...state,
        invitationCode: payload,
      };
    default:
      return state;
  }
};
