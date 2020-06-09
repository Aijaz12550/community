import { sendInvitesSuccess, sendInvitesError } from "../actions";
import { _axios } from "$config";

export const sendInvites = (payload) => {
  console.log(payload, "payload");
  return async (dispatch) => {
    await _axios
      .post(`${process.env.API_BASE_URL}invitation/send`, payload)
      .then(({ data }) => {
        console.log("$data", data);
        dispatch(sendInvitesSuccess(data?.paramObjectsMap?.InvitationEntityVO));
      })
      .catch((error) => {
        dispatch(sendInvitesError(JSON.parse(JSON.stringify(error.response))?.data?.paramObjectsMap?.ErrorMessage));
      });
  };
};
