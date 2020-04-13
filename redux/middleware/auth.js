import { signin, signup } from "../actions";
import {_axios} from "$config";
import { registerUser } from "$config";

export const login = (payload) => {
  return (dispatch) => {
    dispatch(signin());
  };
};


export const register = (payload) => {
    return (dispatch) => {
        _axios.post(registerUser,payload).then((data)=>{
            dispatch(signup(data))
        }).catch(error => {
            console.log('error',error)
        })
    }
}

export const signout = () => {
    return (dispatch)=>{
        dispatch(signin(null))
    }
}
