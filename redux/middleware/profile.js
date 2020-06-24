import {
  getProfileSuccess,
  getProfileError,
  updateProfileSuccess,
  updateProfileError,
  getAvatarSuccess,
  getAvatarError,
  updateAvatarSuccess,
  updateAvatarError,
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
        dispatch(updateProfileSuccess(data));
      })
      .catch((error) => {
        console.log(error?.response?.data, "update profile");
        dispatch(updateProfileError(error?.response?.data?.errors[0]?.message));
      });
  };
};

export const getAvatar = () => {
  return async (dispatch) => {
    await _axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://microservices-dev.weneighbors.io/ms-event/api/v1/users/avatar`
      )
      .then(({ data }) => {
        console.log(data, "get avatar data");
        dispatch(getAvatarSuccess(data));
      })
      .catch((error) => {
        console.log(error?.response?.data, "getAvatar error");
        dispatch(getAvatarError(error));
      });
  };
};

export const updateAvatar = (payload) => {
  console.log(payload, "payload");
  return async (dispatch) => {
    await _axios
      .post(
        `https://cors-anywhere.herokuapp.com/https://microservices-dev.weneighbors.io/ms-event/api/v1/users/avatar`,
        payload,
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      .then(({ data }) => {
        console.log(data, "update avatar data");
        dispatch(updateAvatarSuccess(data));
      })
      .catch((error) => {
        // console.log(error?.response, "update avatar error");
        dispatch(updateAvatarError("something went wrong"));
      });
  };
};
