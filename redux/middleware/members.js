import { getMembersSuccess, getMembersError } from "../actions";
import axios from "axios";

export const getMembers = (payload) => {
  const { Authorization, communityId } = payload;
  return async (dispatch) => {
    await axios
      .post("http://localhost:4000/", {
        url: `${process.env.API_BASE_URL}/v2/member/community/${communityId}`,
        method: "GET",
        headers: {
          Authorization,
        },
      })
      .then(({ data }) => {
        dispatch(getMembersSuccess(data?.paramObjectsMap?.communityMembers));
      })
      .catch((error) => {
        dispatch(getMembersError(error));
      });
  };
};
