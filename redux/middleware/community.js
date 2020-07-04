import { _axios1 } from "$config";
import { getCommunitySuccess, getCommunityError } from "../actions";

export const getCommunity = (payload) => {
  return async (dispatch) => {
    await _axios1
      .get(`/v1/users/community/${payload}`)
      .then(({ data }) => {
        console.log(data, "getCommunity");
        dispatch(getCommunitySuccess(data));
      })
      .catch((error) => {
        dispatch(getCommunityError(error));
      });
  };
};
