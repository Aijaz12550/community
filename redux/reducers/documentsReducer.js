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
  documentsError: "",
  addDocuments: {},
  addDocumentsError: "",
  deleteDocument: {},
  deleteDocumentError: "",
  updateDocument: {},
  updateDocumentError: "",
  documentType: [],
  documentTypeError: "",
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
        addDocuments: payload,
        documents: state.documents.concat([payload]),
      };
    case ADD_DOCUMENT_ERROR:
      return {
        ...state,
        addDocumentsError: payload,
      };
    case DELETE_DOCUMENT_SUCCESS:
      const { documents } = state;
      documents.splice(payload.rowIndex, 1);
      return {
        ...state,
        deleteDocument: payload,
        documents,
      };
    case DELETE_DOCUMENT_ERROR:
      return {
        ...state,
        deleteDocumentsError: payload,
      };
    case UPDATE_DOCUMENT_SUCCESS:
      const documents1 = state.documents;
      documents1.splice(payload.rowIndex, 1, payload.data);
      return {
        ...state,
        updateDocument: payload.data,
        documents: documents1,
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
