import {FEEDBACK_ERROR, FEEDBACK_SUCCESS} from '../CONSTANTS'

export const FeedbackSuccessAction = (payload) => {
    return {
        type: FEEDBACK_SUCCESS ,
        payload
    }
}

export const FeedbackErrorAction = (payload) => {
    return{
        type: FEEDBACK_ERROR,
        payload
    }
}