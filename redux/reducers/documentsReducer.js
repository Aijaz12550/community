import {
  GET_DOCUMENT_ERROR,
  GET_DOCUMENT_SUCCESS,
  ADD_DOCUMENT_SUCCESS,
  ADD_DOCUMENT_ERROR,
  DELETE_DOCUMENT_SUCCESS,
  DELETE_DOCUMENT_ERROR,
  UPDATE_DOCUMENT_SUCCESS,
  UPDATE_DOCUMENT_ERROR,
  DOCUMENT_TYPE_SUCCESS,
  DOCUMENT_TYPE_ERROR,
} from "../CONSTANTS";
const initialState = {
  documents: [],
  documentsError: {},
  getDocuments: {},
  getDocumentsError: {},
  deleteDocument: {},
  deleteDocumentError: {},
  updateDocument: {},
  updateDocumentError: {},
  documentType: [],
  documentTypeError: {},
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
        documents: state.documents.concat([payload]),
      };
    case ADD_DOCUMENT_ERROR:
      return {
        ...state,
        getDocumentsError: payload,
      };
    case DELETE_DOCUMENT_SUCCESS:
      return {
        ...state,
        deleteDocument: payload,
        documents: state.documents.splice(payload.rowIndex, 1),
      };
    case DELETE_DOCUMENT_ERROR:
      return {
        ...state,
        getDocumentsError: payload,
      };
    case UPDATE_DOCUMENT_SUCCESS:
      return {
        ...state,
        updateDocument: payload,
      };
    case UPDATE_DOCUMENT_ERROR:
      return {
        ...state,
        updateDocumentError: payload,
      };
    case DOCUMENT_TYPE_SUCCESS:
      return {
        ...state,
        documentType: payload,
      };
    case DOCUMENT_TYPE_ERROR:
      return {
        ...state,
        documentTypeError: payload,
      };
    default:
      return state;
  }
};
