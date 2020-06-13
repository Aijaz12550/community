import { addResidents, residentsError } from "../actions";
import { _axios } from "$config";

export const residents = (payload) => {
  console.log(payload, "asdfadfafs");
  return async (dispatch) => {
    await _axios
      .get(`${process.env.API_BASE_URL}resident/community/${payload}`)
      .then(({ data }) => {
        dispatch(addResidents(data?.paramObjectsMap?.residentsHomeAddresses));
      })
      .catch((error) => {
        dispatch(residentsError(error));
      });
  };
};
