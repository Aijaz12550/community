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
      .post(`${process.env.NEW_BASE_URL}users/register`, payload)
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
   await _axios.get(`https://microservices-dev.weneighbors.io/ms-event/api/v1/users/resendVerificationEmail/${email}`)
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
