import { signin, signup } from "../actions";
import { registerUser, OauthConfig, _axios } from "$config";
import axios from 'axios'


export const login = (payload) => {
  return  (dispatch) => {
   return new Promise((resolve, reject)=>{
    return OauthConfig(payload)
     .then((res) => {
       console.log(res);
       dispatch(signin(res.data));
       resolve(res.data)
      })
      .catch((err) => {
        dispatch(signin(err));
        reject(err)
      });
    })

  };
};

export const socialLogin = (payload) => {
  return  dispatch => {
    return new Promise(async(resolve, reject)=> {
      await _axios.post(`users/login/${payload.provider}`,{...payload}).then( res => {
        dispatch(signin(res.data))
        resolve(res)
      }).catch(err=>{
        reject(err)
        
      })
    })
  }
}

export const register = (payload) => {
  return (dispatch) => {
    _axios
      .post(registerUser, payload)
      .then((data) => {
        dispatch(signup(data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const signout = () => {
  return (dispatch) => {
    dispatch(signin({}));
  };
};
