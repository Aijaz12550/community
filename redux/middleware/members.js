import { getMembersSuccess, getMembersError } from "../actions";
import { _axios } from "$config";

export const getMembers = (payload) => {
  return async (dispatch) => {
    await _axios
      .get(`${process.env.API_BASE_URL}member/community/${payload}`)
      .then(({ data }) => {
        console.log("$data", data);
        dispatch(getMembersSuccess(data?.paramObjectsMap?.communityMembers));
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(getMembersError(error));
      });
  };
};
