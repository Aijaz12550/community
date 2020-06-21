import { GET_EXTERNAL_MEMBER_SUCCESS, GET_EXTERNAL_MEMBER_ERROR } from "../CONSTANTS";

export const getExternalMemberSuccess = (payload) => {
    return {
        type: GET_EXTERNAL_MEMBER_SUCCESS,
        payload,
    };
};

export const getExternalMemberError = (payload) => {
    return {
        type: GET_EXTERNAL_MEMBER_ERROR,
        payload,
    };
};
