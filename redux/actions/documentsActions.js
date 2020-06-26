import {
  ADD_DOCUMENT_SUCCESS,
  ADD_DOCUMENT_ERROR,
  GET_DOCUMENT_SUCCESS,
  GET_DOCUMENT_ERROR,
  DELETE_DOCUMENT_SUCCESS,
  DELETE_DOCUMENT_ERROR,
  UPDATE_DOCUMENT_SUCCESS,
  UPDATE_DOCUMENT_ERROR,
  DOCUMENT_TYPE_SUCCESS,
  DOCUMENT_TYPE_ERROR,
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

export const deleteDocumentSuccess = (payload) => {
  return {
    type: DELETE_DOCUMENT_SUCCESS,
    payload,
  };
};

export const deleteDocumentError = (payload) => {
  return {
    type: DELETE_DOCUMENT_ERROR,
    payload,
  };
};

export const updateDocumentSuccess = (payload) => {
  console.log('hello world', payload)
  return {
    type: UPDATE_DOCUMENT_SUCCESS,
    payload,
  };
};

export const updateDocumentError = (payload) => {
  return {
    type: UPDATE_DOCUMENT_ERROR,
    payload,
  };
};

export const documentTypeSuccess = (payload) => {
  return {
    type: DOCUMENT_TYPE_SUCCESS,
    payload,
  };
};

export const documentTypeError = (payload) => {
  return {
    type: DOCUMENT_TYPE_ERROR,
    payload,
  };
};
