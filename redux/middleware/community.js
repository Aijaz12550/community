import { _axios1 } from "$config";
import { getCommunitySuccess, getCommunityError } from "../actions";
import axios from "axios";

export const getCommunity = ({ Authorization, communityId }) => {
  return async (dispatch) => {
    await axios
      .post("ec2-18-218-60-110.us-east-2.compute.amazonaws.com:4000", {
        method: "GET",
        url: `${process.env.API_BASE_URL_1}/v1/users/community/${communityId}`,
        headers: {
          Authorization,
        },
      })
      .then(({ data }) => {
        console.log(data, "getCommunity");
        dispatch(getCommunitySuccess(data));
      })
      .catch((error) => {
        dispatch(getCommunityError(error));
      });
  };
};
