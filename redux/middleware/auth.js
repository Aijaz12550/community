import { signin, signup, emailverification } from "../actions";
import { registerUser, OauthConfig, _axios } from "$config";

export const login = (payload) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return OauthConfig(payload)
        .then((res) => {
          dispatch(signin(res.data));
          resolve(res.data);
        })
        .catch((err) => {
          dispatch(signin(err));
          reject(err);
        });
    });
  };
};

export const socialLogin = (payload) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      await _axios
        .post(`users/login/${payload.provider}`, { ...payload })
        .then((res) => {
          dispatch(signin(res.data));
          resolve(res);
        })
        .catch((err) => {
          console.log("err", err);
          reject(err);
        });
    });
  };
};

export const register = (payload) => {
  return async(dispatch) => {
    await _axios
      .post(`${process.env.API_BASE_URL_1}/v2/users/register`, payload)
      .then((data) => {
        dispatch(signup(data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const reSendEmailVerification = (email) => {
  return async (dispatch) => {
   await _axios.get(`${process.env.API_BASE_URL_1}/v1/users/resendVerificationEmail/${email}`)
   .then( data => {
     console.log(' data ==>', data)
     dispatch(emailverification(data?.data))
   }).catch( error => {
     console.log(' error ==>', error)
   })

  }
}

export const signout = () => {
  return (dispatch) => {
    dispatch(signin({}));
  };
};

export const recoverPassword = (email) => {
  return dispatch => {
    return new Promise(async (resolve, reject)=>{
      await _axios(`${process.env.API_BASE_URL_1}/v1/users/resetPassword/${email}`)
      .then( data => {
        resolve(data)
      }).catch( error => {
        console.log('error =>', error)
        reject(error)
      })
    })
  }
}
