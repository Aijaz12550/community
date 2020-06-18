import {
  addDocumentError,
  addDocumentSuccess,
  getDocumentSuccess,
  getDocumentError,
  deleteDocumentSuccess,
  deleteDocumentError,
  updateDocumentSuccess,
  updateDocumentError,
  documentTypeSuccess,
  documentTypeError,
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
      .post(`${process.env.API_BASE_URL}/v2/document/add`, file, {
        headers: { "Content-Type": "multipart/form-data" },
        params: { Notes, category, communityId, docType, userId },
      })
      .then(({ data }) => {
        dispatch(addDocumentSuccess(data?.paramObjectsMap?.DocumentEntityVO));
      })
      .catch((error) => {
        dispatch(
          addDocumentError(
            JSON.parse(JSON.stringify(error.response))?.data?.paramObjectsMap
              ?.ErrorMessage
          )
        );
      });
  };
};

export const getDocument = (payload) => {
  return async (dispatch) => {
    await _axios
      .get(`${process.env.API_BASE_URL}/v2/document/community/${payload}`)
      .then(($data) => {
        dispatch(
          getDocumentSuccess($data?.data?.paramObjectsMap?.DocumentEntityList)
        );
      })
      .catch((error) => {
        dispatch(
          getDocumentError(
            JSON.parse(JSON.stringify(error?.response))?.data?.error
          )
        );
      });
  };
};

export const deleteDocument = (payload) => {
  return async (dispatch) => {
    await _axios
      .delete(
        `${process.env.API_BASE_URL}/v2/document/community/${payload.communityId}/document/${payload.documentId}`
      )
      .then(($data) => {
        dispatch(
          deleteDocumentSuccess({
            data: $data?.data?.paramObjectsMap?.SuccessMsg,
            rowIndex: payload.rowIndex,
          })
        );
      })
      .catch((error) => {
        dispatch(deleteDocumentError(error));
      });
  };
};

export const updateDocument = (payload) => {
  console.log("pagad", payload);
  return async (dispatch) => {
    await _axios
      .post(`${process.env.API_BASE_URL}/v2/document/update`, null, {
        params: payload.docObj,
      })
      .then(($data) => {
        dispatch(
          updateDocumentSuccess({
            data: $data?.data?.paramObjectsMap?.DocumentEntityVO,
            rowIndex: payload.rowIndex,
          })
        );
      })
      .catch((error) => {
        dispatch(updateDocumentError(error?.response?.data?.message));
      });
  };
};

export const documentType = () => {
  return async (dispatch) => {
    await _axios
      .get(`${process.env.API_BASE_URL}/v2/lookup/documentType`)
      .then(($data) => {
        dispatch(documentTypeSuccess($data?.data?.paramObjectsMap?.LookupList));
      })
      .catch((error) => {
        dispatch(documentTypeError(error));
      });
  };
};
