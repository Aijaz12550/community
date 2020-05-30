import {
  GET_DOCUMENT_ERROR,
  GET_DOCUMENT_SUCCESS,
  ADD_DOCUMENT_SUCCESS,
  ADD_DOCUMENT_ERROR,
} from "../CONSTANTS";
const initialState = {
  documents: [],
  documentsError: {},
  getDocuments: "",
  getDocumentsError: {},
};

export const documentsReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_DOCUMENT_SUCCESS:
      return {
        ...state,
        documents: payload,
      };
    case GET_DOCUMENT_ERROR:
      return {
        ...state,
        documentsError: payload,
      };
    case ADD_DOCUMENT_SUCCESS:
      return {
        ...state,
        getDocuments: payload,
      };
    case ADD_DOCUMENT_ERROR:
      return {
        ...state,
        getDocumentsError: payload,
      };
    default:
      return state;
  }
};
