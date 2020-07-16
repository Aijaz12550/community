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
import axios from "axios";

export const addDocument = ({
  Notes,
  file,
  docType,
  category,
  communityId,
  userId,
  authorization,
}) => {
  console.log(
    Notes,
    category,
    communityId,
    docType,
    userId,
    "===============PRAMS"
  );
  ("url?Notes=Hello&category=2&communityId=1");
  const params = `?Notes=${Notes}&category=${category}&communityId=${communityId}&docType=${docType} userId=${userId}`;

  console.log(params, "params ======================");

  return async (dispatch) => {
    // await axios
    // .post( "http://ec2-18-188-176-187.us-east-2.compute.amazonaws.com:4000/", {
    //   method: "POST",
    //   url: `${process.env.API_BASE_URL}/v2/document/add${params}`,
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     authorization
    //   },
    //   body: file,
    //   // params: { Notes, category, communityId, docType, userId },
    // } )
    await _axios
      .post(
        `https://cors-anywhere.herokuapp.com/${process.env.API_BASE_URL}/v2/document/add`,
        file,
        {
          headers: { "Content-Type": "multipart/form-data" },
          params: { Notes, category, communityId, docType, userId },
        }
      )
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

export const getDocument = ({ Authorization, communityId }) => {
  return async (dispatch) => {
    await axios
      .post("http://ec2-18-188-176-187.us-east-2.compute.amazonaws.com:4000/", {
        method: "GET",
        url: `${process.env.API_BASE_URL}/v2/document/community/${communityId}`,
        headers: {
          Authorization,
        },
      })
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
    // await _axios
    //   .delete(
    //     `${process.env.API_BASE_URL}/v2/document/community/${payload.communityId}/document/${payload.documentId}`
    //   )
    await axios
      .post("http://ec2-18-188-176-187.us-east-2.compute.amazonaws.com:4000/", {
        method: "DELETE",
        url: `${process.env.API_BASE_URL}/v2/document/community/${payload.communityId}/document/${payload.documentId}`,
        headers: {
          authorization: payload.Authorization,
        },
      })
      .then(({ data }) => {
        if (data.status === 200 || 204) {
          payload.toast("deleted Successfully");
          dispatch(
            deleteDocumentSuccess({
              data: data?.paramObjectsMap?.SuccessMsg,
              rowIndex: payload.rowIndex,
            })
          );
        }
      })
      .catch((error) => {
        dispatch(deleteDocumentError(error));
      });
  };
};

export const updateDocument = (payload) => {
  return async (dispatch) => {
    // await _axios
    //   .post( `${process.env.API_BASE_URL}/v2/document/update`, null, {
    //     params: payload.docObj,
    //   } )
    // await axios
    //   .post( "http://ec2-18-188-176-187.us-east-2.compute.amazonaws.com:4000/", {
    //     method: "POST",
    //     url: `${process.env.API_BASE_URL}/v2/document/update?${payload.docObj}`,
    //     // params: payload.docObj,
    //     headers: {
    //       authorization: `bearer ${payload.docObj.access_token}`
    //     }
    //   } )
    await _axios
      .post(
        `https://cors-anywhere.herokuapp.com/${process.env.API_BASE_URL}/v2/document/update`,
        null,
        {
          params: payload.docObj,
        }
      )
      //   await _axios.post( `https://cors-anywhere.herokuapp.com/${process.env.API_BASE_URL}/v2/document/add`, file, {
      //   headers: { "Content-Type": "multipart/form-data" },
      //   params: { Notes, category, communityId, docType, userId },
      // } )
      .then((data) => {
        if (data.status === 200 || 204) {
          payload.toast("Updated Successfully");

          console.log(
            data?.data?.paramObjectsMap?.DocumentEntityVO,
            "$data?.data?.paramObjectsMap?.DocumentEntityVO"
          );
          dispatch(
            updateDocumentSuccess({
              data: $data?.data?.paramObjectsMap?.DocumentEntityVO,
              rowIndex: payload.rowIndex,
            })
          );
        }
      })
      .catch((error) => {
        dispatch(updateDocumentError(error?.response?.data?.message));
      });
  };
};

export const documentType = (authorization) => {
  return async (dispatch) => {
    await axios
      .post("http://ec2-18-188-176-187.us-east-2.compute.amazonaws.com:4000/", {
        url: `${process.env.API_BASE_URL}/v2/lookup/documentType`,
        method: "GET",
        headers: {
          authorization,
        },
      })
      .then(($data) => {
        dispatch(documentTypeSuccess($data?.data?.paramObjectsMap?.LookupList));
      })
      .catch((error) => {
        dispatch(documentTypeError(error));
      });
  };
};
