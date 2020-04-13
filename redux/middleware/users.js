import { allUsers } from "../actions";
import {_axios} from "$config";
import { getAllUsers, } from "$config";

export const getUsers = (payload) => {
    return async (dispatch) => {
       await _axios.get(getAllUsers).then(data=>{
            console.log('data ===>> all users',data)
            dispatch(allUsers(data))
        }).catch(error => {
            console.log('error',error)
        })
    }
}
