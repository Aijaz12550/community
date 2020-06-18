import { getMembersSuccess, getMembersError } from "../actions";
import { _axios } from "$config";

export const getMembers = (payload) => {
  return async (dispatch) => {
    await _axios
      .get(`${process.env.API_BASE_URL}/v2/member/community/${payload}`)
      .then(({ data }) => {
        dispatch(getMembersSuccess(data?.paramObjectsMap?.communityMembers));
      })
      .catch((error) => {
        dispatch(getMembersError(error));
      });
  };
};
