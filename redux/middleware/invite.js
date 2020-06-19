import {
  sendInvitesSuccess,
  sendInvitesError,
  invitationCode,
} from "../actions";
import { _axios } from "$config";

export const sendInvites = (payload) => {
  return async (dispatch) => {
    await _axios
      .post(`${process.env.API_BASE_URL}/v2/invitation/send`, payload)
      .then(({ data }) => {
        dispatch(sendInvitesSuccess(data?.paramObjectsMap?.InvitationEntityVO));
      })
      .catch((error) => {
        dispatch(
          sendInvitesError(
            JSON.parse(JSON.stringify(error.response))?.data?.paramObjectsMap
              ?.ErrorMessage
          )
        );
      });
  };
};

export const __invitationCode = (code) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      await _axios
        .get(`${process.env.NEW_BASE_URL}users/invitationCode/${code}/valid`)
        .then((data) => {
          console.log("data ===>", data);
          dispatch(invitationCode(data));
          resolve(data);
        })
        .catch((error) => {
          reject(error);
          console.log("error ===>", error);
        });
    });
  };
};
