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
import axios from "axios";

export const getProfile = (Authorization) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:4000/", {
        url: `https://microservices-dev.weneighbors.io/ms-event/api/v1/users/profile`,
        headers: {
          Authorization,
        },
      })
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
        dispatch(updateProfileError(error?.response?.data?.errors[0]?.message));
      });
  };
};

export const getAvatar = (Authorization) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:4000/", {
        url: `https://microservices-dev.weneighbors.io/ms-event/api/v1/users/avatar`,
        headers: {
          Authorization,
        },
      })
      .then(({ data }) => {
        dispatch(getAvatarSuccess(data));
      })
      .catch((error) => {
        dispatch(getAvatarError(error));
      });
  };
};

export const updateAvatar = (payload) => {
  return async (dispatch) => {
    await _axios
      .post(
        `https://cors-anywhere.herokuapp.com/https://microservices-dev.weneighbors.io/ms-event/api/v1/users/avatar`,
        payload,
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      .then(({ data }) => {
        dispatch(updateAvatarSuccess(data));
      })
      .catch((error) => {
        dispatch(updateAvatarError("something went wrong"));
      });
  };
};
