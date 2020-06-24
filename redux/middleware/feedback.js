import { FeedbackErrorAction, FeedbackSuccessAction  } from '../actions'
import { _axios1 } from "$config"

export const Send_Feedback = (param) => {
    return async dispatch => {
        await _axios1.post('/v1/users/feedback',param).then( response => {
            console.log('res ===>', response)
        }).catch( error =>{
            console.log('error', error)
        })
    }
}