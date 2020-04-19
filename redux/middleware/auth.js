import { signin, signup } from "../actions";
import { _axios } from "$config";
import { registerUser } from "$config";
import { OauthConfig } from "./../../configuration/OauthConfig";

export const login = (payload) => {
  return (dispatch) => {
    OauthConfig(payload)
      .then((res) => {
        console.log(res);
        dispatch(signin(res));
      })
      .catch((err) => {
        dispatch(signin(err));
      });
  };
};

export const register = (payload) => {
  return (dispatch) => {
    _axios
      .post(registerUser, payload)
      .then((data) => {
        dispatch(signup(data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const signout = () => {
  return (dispatch) => {
    dispatch(signin(null));
  };
};
