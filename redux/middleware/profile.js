import {
  getProfileSuccess,
  getProfileError,
  updateProfileSuccess,
  updateProfileError,
} from "../actions";
import { _axios } from "$config";

export const getProfile = () => {
  return async (dispatch) => {
    await _axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://microservices-dev.weneighbors.io/ms-event/api/v1/users/profile`
      )
      .then(({ data }) => {
        dispatch(getProfileSuccess(data));
      })
      .catch((error) => {
        dispatch(getProfileError(error));
      });
  };
};

export const updateProfile = (payload) => {
  return async (dispatch) => {
    await _axios
      .put(
        `https://cors-anywhere.herokuapp.com/https://microservices-dev.weneighbors.io/ms-event/api/v1/users/profile`,
        payload
      )
      .then(({ data }) => {
        console.log(data, "update profile");
        dispatch(updateProfileSuccess(data));
      })
      .catch((error) => {
        console.log(
          error?.response?.data,
          "update profile"
        );
        dispatch(updateProfileError(error?.response?.data?.errors[0]?.message));
      });
  };
};
