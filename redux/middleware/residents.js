import { addResidents, residentsError } from "../actions";
import { _axios } from "$config";
import axios from "axios";

export const residents = (payload) => {
  return async (dispatch) => {
    await axios
      .get(
        `https://devapp.talktiva.com/community-service/api/v1/community/${payload}/residents`
      )
      .then(($data) => {
        dispatch(addResidents($data?.data?.body));
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(residentsError(error));
      });
  };
};
