import {
  addDocumentError,
  addDocumentSuccess,
  getDocumentSuccess,
  getDocumentError,
} from "../actions";
import { _axios } from "$config";

export const addDocument = ({
  Notes,
  file,
  docType,
  category,
  communityId,
  userId,
}) => {
  return async (dispatch) => {
    await _axios
      .post(`${process.env.API_BASE_URL}document/add`, file, {
        headers: { "Content-Type": "multipart/form-data" },
        params: { Notes, category, communityId, docType, userId },
      })
      .then(($data) => {
        console.log("$data", $data);
        dispatch(
          addDocumentSuccess($data?.paramObjectsMap?.DocumentEntityList)
        );
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(addDocumentError(error));
      });
  };
};

export const getDocument = (payload) => {
  return async (dispatch) => {
    await _axios
      .get(`${process.env.API_BASE_URL}document/community/${payload}`)
      .then(($data) => {
        console.log("$data", $data);
        dispatch(
          getDocumentSuccess($data?.data?.paramObjectsMap?.DocumentEntityList)
        );
      })
      .catch((error) => {
        dispatch(getDocumentError(error));
      });
  };
};
