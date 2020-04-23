import { allUsers } from "../actions";
import { _axios } from "$config";
import { getAllUsers } from "$config";

export const getUsers = (payload) => {
  return async (dispatch) => {
    await _axios
      .get(getAllUsers)
      .then((data) => {
        console.log("data ===>> all users", data);
        dispatch(allUsers(data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const uploadAddressProof = ({ id, file }) => {
  return async (dispatch) => {
    await _axios
      .post(`users/${id}/addressProof`, { file, id })
      .then((res) => {
        console.log("res from address proof", res);
      })
      .catch((error) => {
        console.log("error from address proof", error);
      });
  };
};

export const addFcmToken = (fcmToken) => {
  return async (dispatch) => {
    await _axios
      .get(`users/addfcmToken/${fcmToken}`)
      .then((res) => {
        console.log(" res from fcm token", res);
      })
      .catch((error) => {
        console.log(" error from fcm token", error);
      });
  };
};

export const getApplicationSetting = (applicationType) => {
  return async (dispatch) => {
    await _axios
      .get(`users/appSettings/${applicationType}`)
      .then((res) => {
        console.log(" res from get application setting", res);
      })
      .catch((error) => {
        console.log(" error from get application setting", error);
      });
  };
};

export const downloadProfileImage = () => {
  return async (dispatch) => {
    await _axios
      .get(`users/avatar`)
      .then((res) => {
        console.log("res from image upload"), res;
      })
      .catch((error) => console.log("error from image upload", error));
  };
};

export const uploadProfileImage = (file) => {
  return async (dispatch) => {
    await _axios
      .post(`users/avatar`, file)
      .then((res) => {
        console.log("res from upload image", res);
      })
      .catch((error) => {
        console.log("error from image upload", error);
      });
  };
};

export const downloadProfileImageById = (id) => {
  return async (dispatch) => {
    await _axios
      .get(`users/avatar/${id}`)
      .then((res) => {
        console.log("res from getting avatar by id", res);
      })
      .catch((error) => {
        console.log(" error from getting avatar by id", error);
      });
  };
};

export const changePasswordRequest = ( payload ) => {
    return async (dispatch) => {
        await _axios.post(`users/changePassword`, payload).then( res => {
            console.log('')
        })
    }
}
