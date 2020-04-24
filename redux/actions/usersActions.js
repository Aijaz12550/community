import { ALLUSERS, FAMILY_MEMBERS, INVITE_MEMBERS } from "../CONSTANTS";

const allUsers = (payload) => {
  return {
    type: ALLUSERS,
    payload,
  };
};

const familyMembersListAction = (payload) => {
  return {
    type: FAMILY_MEMBERS,
    payload,
  };
};

const inviteMembersAction = (payload) => {
  return {
    type: INVITE_MEMBERS,
    payload,
  };
};

export { allUsers, familyMembersListAction, inviteMembersAction };
