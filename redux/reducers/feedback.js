import { FEEDBACK_ERROR, FEEDBACK_SUCCESS } from "../CONSTANTS";
export const FeedbackSuccessReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FEEDBACK_SUCCESS:
      return {
        ...state,
        payload,
      };

    case FEEDBACK_ERROR:
      return {
        ...state,
        payload,
      };
    default:
      return state ;
  }
};
