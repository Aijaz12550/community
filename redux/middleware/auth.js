import {
  signInSuccess,
  signInError,
  signup,
  emailverification,
} from "../actions";
import { registerUser, OauthConfig, _axios, _axios1 } from "$config";
import axios from "axios";

export const login = (payload) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return axios
        .post("http://ec2-18-188-176-187.us-east-2.compute.amazonaws.com:4000/", {
          body: payload,
          method: "POST",
          url: process.env.OAUTH_TOKEN_URL,
          headers: {
            Authorization: "Basic dGFsa3RpdmFBcHA6dGFsa0BUaXZhITE=",
          },
        })
        .then((res) => {
          console.log(res, "result of logn");
          dispatch(signInSuccess(res.data));
          resolve(res.data);
        })
        .catch((err) => {
          dispatch(signInError(err?.body?.error));
          reject(err);
        });
    });
  };
};

export const socialLogin = (payload) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      await _axios
        .post(`users/login/${payload.provider}`, { ...payload })
        .then((res) => {
          dispatch(signin(res.data));
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export const register = (payload) => {
  return async (dispatch) => {
    await _axios1
      .post(`/v2/users/register`, payload)
      .then((data) => {
        dispatch(signup(data));
        console, log("=-=-=", data);
      })
      .catch((error) => {
        console.log("error ====>", error);
      });
  };
};

export const reSendEmailVerification = (email) => {
  return async (dispatch) => {
    await _axios
      .get(
        `${process.env.API_BASE_URL_1}/v1/users/resendVerificationEmail/${email}`
      )
      .then((data) => {
        dispatch(emailverification(data?.data));
      })
      .catch((error) => {
        console.log(" error ==>", error);
      });
  };
};

export const signout = () => {
  return (dispatch) => {
    dispatch(signInSuccess({}));
  };
};

export const recoverPassword = (email) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      await _axios(
        `${process.env.API_BASE_URL_1}/v1/users/resetPassword/${email}`
      )
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
};
