import { getRolesSuccess, getRolesError } from "../actions";
import { _axios } from "$config";

export const getRoles = () => {
  return async (dispatch) => {
    await _axios
      .get(`${process.env.API_BASE_URL}lookup/userRoleType`)
      .then(({ data }) => {
        console.log("$data", data);
        dispatch(getRolesSuccess(data?.paramObjectsMap?.LookupList));
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(getRolesError(error));
      });
  };
};