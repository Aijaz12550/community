import {
  ADD_DOCUMENT_SUCCESS,
  ADD_DOCUMENT_ERROR,
  GET_DOCUMENT_SUCCESS,
  GET_DOCUMENT_ERROR,
} from "../CONSTANTS";

export const addDocumentSuccess = (payload) => {
  return {
    type: ADD_DOCUMENT_SUCCESS,
    payload,
  };
};

export const addDocumentError = (payload) => {
  return {
    type: ADD_DOCUMENT_ERROR,
    payload,
  };
};

export const getDocumentSuccess = (payload) => {
  return {
    type: GET_DOCUMENT_SUCCESS,
    payload,
  };
};

export const getDocumentError = (payload) => {
  return {
    type: GET_DOCUMENT_ERROR,
    payload,
  };
};
