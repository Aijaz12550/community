import { SEND_INVITES_SUCCESS, SEND_INVITES_ERROR, INVITATION_CODE } from "../CONSTANTS";

export const sendInvitesSuccess = (payload) => {
  return {
    type: SEND_INVITES_SUCCESS,
    payload,
  };
};

export const sendInvitesError = (payload) => {
  return {
    type: SEND_INVITES_ERROR,
    payload,
  };
};

export const invitationCode = (payload) => {
  return {
    type: INVITATION_CODE,
    payload
  }
}
