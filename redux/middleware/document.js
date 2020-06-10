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
      .post(`${process.env.API_BASE_URL}document/add`, file, {
        headers: { "Content-Type": "multipart/form-data" },
        params: { Notes, category, communityId, docType, userId },
      })
      .then(({ data }) => {
        console.log("$data", data.paramObjectsMap);
        dispatch(addDocumentSuccess(data?.paramObjectsMap?.DocumentEntityVO));
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
        dispatch(
          getDocumentError(
            JSON.parse(JSON.stringify(error.response))?.data?.error
          )
        );
      });
  };
};

export const deleteDocument = (payload) => {
  return async (dispatch) => {
    await _axios
      .delete(
        `${process.env.API_BASE_URL}document/community/${payload.communityId}/document/${payload.documentId}`
      )
      .then(($data) => {
        console.log("$data", $data);
        dispatch(
          deleteDocumentSuccess({
            data: $data?.data?.paramObjectsMap?.DocumentEntityList,
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
  return async (dispatch) => {
    console.log(payload, "asdfasdfwerwerwer");
    await _axios
      .post(`${process.env.API_BASE_URL}document/update`, payload)
      .then(($data) => {
        console.log("$data", $data);
        dispatch(
          updateDocumentSuccess(
            $data?.data?.paramObjectsMap?.DocumentEntityList
          )
        );
      })
      .catch((error) => {
        dispatch(updateDocumentError(error));
      });
  };
};

export const documentType = () => {
  return async (dispatch) => {
    await _axios
      .get(`${process.env.API_BASE_URL}lookup/documentType/get`)
      .then(($data) => {
        console.log("$data", $data.data?.paramObjectsMap);
        dispatch(documentTypeSuccess($data?.data?.paramObjectsMap?.LookupList));
      })
      .catch((error) => {
        dispatch(documentTypeError(error));
      });
  };
};
