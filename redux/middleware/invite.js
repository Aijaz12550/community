import { sendInvitesSuccess, sendInvitesError } from "../actions";
import { _axios } from "$config";

export const sendInvites = (payload) => {
  return async (dispatch) => {
    await _axios
      .post(`${process.env.API_BASE_URL}invitation/send`, payload)
      .then(({ data }) => {
        dispatch(sendInvitesSuccess(data?.paramObjectsMap?.InvitationEntityVO));
      })
      .catch((error) => {
        dispatch(sendInvitesError(JSON.parse(JSON.stringify(error.response))?.data?.paramObjectsMap?.ErrorMessage));
      });
  };
};

export const invitationCode = (code) => {
  return async (dispatch) => {
    await _axios
    .get(`users/invitationCode/${code}/valid`)
    .then( data => {
      console.log('data ===>', data)
    }).catch( error => {
      console.log( 'error ===>',error)
    })
  }
}
