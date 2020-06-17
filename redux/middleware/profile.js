import { getProfileSuccess, getProfileError } from "../actions";
import { _axios } from "$config";

export const getProfile = () => {
  return async (dispatch) => {
    await _axios
      .get(`${process.env.API_BASE_URL_1}v1/users/profile`)
      .then(({ data }) => {
        console.log(data, "profile");
        dispatch(getProfileSuccess(data));
      })
      .catch((error) => {
        dispatch(getProfileError(error));
      });
  };
};
