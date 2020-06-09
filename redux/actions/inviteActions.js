import { SEND_INVITES_SUCCESS, SEND_INVITES_ERROR } from "../CONSTANTS";

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
