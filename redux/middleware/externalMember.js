import { getExternalMemberSuccess, getExternalMemberError } from "../actions";
import { _axios } from "$config";

export const getExternalMember = (payload) => {
  return async (dispatch) => {
    await _axios
      .get(`${process.env.API_BASE_URL}/v2/invitation/community/${payload}`)
      .then(({ data }) => {
        // console.log(data, "ExternalMember");
        dispatch(getExternalMemberSuccess(data?.paramObjectsMap?.InvitationList));
      })
      .catch((error) => {
        dispatch(getExternalMemberError(error));
      });
  };
};
