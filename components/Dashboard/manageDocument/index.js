import React, { Component } from "react";
import { Row, Col, Table, Input } from "reactstrap";
import { toast } from "react-toastify";
import { Image, Modal } from "react-bootstrap";
import { DashboardHeaderCard } from "../dashboardHeaderCard/index.jsx";
import {
  getDocument,
  addDocument,
  deleteDocument,
  updateDocument,
  documentType,
} from "$middleware";
import {
  getDocumentError,
  addDocumentError,
  updateDocumentError,
  updateDocumentSuccess,
} from "../../../redux/actions";
import { Loader } from "../../Loader/Loader";
import "../../../styles/dashboard/manageDocument/index.scss";
import ReactLoading from "react-loading";
import DragAndDrop from "./dnd";

export default class ManageDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      tableCreate: [
        {
          documentType: "HOA Bylaws",
          upload: "hoa-bylaws.pdf",
          notes: "hello",
          file: "",
        },
      ],
      addRecord: {
        documentType: "N/A",
        upload: "",
        notes: "",
        file: "",
        docType: "",
        documentId: "",
      },
      documentTypeList: ["document"],
      setModalShow: false,
      hasEdit: false,
      editIndex: null,
      loader: false,
      index: 0,
      deleteIndex: null,
    };
  }

  handleDrop = (files) => {
    let file = files[0];
    let { addRecord } = this.state;
    addRecord.file = file;
    addRecord.docType = file.type;
    addRecord.name = file.name;
    this.setState({
      addRecord,
    });
  };

  componentDidMount() {
    const {
      AuthReducer: {
        user: { communityId },
      },
      documentsReducer: { documents },
      dispatch,
    } = this.props;
    if (!documents.length) {
      this.setState({ loader: true });
    }
    dispatch(getDocument(communityId));
    dispatch(documentType());
  }

  notify = (payload) => {
    this.setState({ loader: false });
    toast(payload);
  };

  componentDidUpdate(prevProps) {
    const { documentsReducer, dispatch } = this.props;
    if (
      documentsReducer.documentsError !==
        prevProps?.documentsReducer?.documentsError &&
      documentsReducer.documentsError?.length !== 0
    ) {
      this.notify(documentsReducer.documentsError);
      dispatch(getDocumentError(""));
    }
    if (
      documentsReducer.documents.length !==
        prevProps?.documentsReducer?.documents.length &&
      documentsReducer.documents.length !== 0
    ) {
      this.setState({ loader: false, deleteIndex: null });
    }
    if (
      documentsReducer?.addDocuments?.documentId !==
      prevProps.documentsReducer?.addDocuments?.documentId
    ) {
      this.closeModal();
      this.notify("Successfully add Document");
    }
    if (
      documentsReducer.addDocumentsError !==
      prevProps.documentsReducer.addDocumentsError
    ) {
      this.setState({ modalLoader: false });
    }
    if (
      documentsReducer.updateDocumentError !==
      prevProps.documentsReducer.updateDocumentError
    ) {
      this.setState({ modalLoader: false });
    }
    if (
      documentsReducer?.updateDocument?.documentId !==
        prevProps?.documentsReducer?.updateDocument?.documentId &&
      documentsReducer?.updateDocument?.documentId
    ) {
      this.setState({ modalLoader: false });
      this.closeModal();
      this.notify("Updated Successfully");
    }
    // if (
    //   documentsReducer?.deleteDocument?.data !==
    //     prevProps?.documentsReducer?.deleteDocument?.data &&
    //   documentsReducer?.deleteDocument?.data
    // ) {
    //   console.log('new dunnya')
    //   this.setState({
    //     deleteIndex: null,
    //   });
    //   dispatch(
    //     deleteDocumentSuccess({
    //       data: "",
    //     })
    //   );
    // }
  }

  addRowModal = (e) => {
    this.setState({
      setModalShow: true,
    });
  };

  addRow = () => {
    if (this.state.hasEdit) {
      let { tableCreate } = this.state;
      tableCreate[this.state.editIndex] = this.state.addRecord;

      this.setState({
        tableCreate,
        addRecord: { documentType: "", upload: "", notes: "" },
        setModalShow: false,
        editIndex: null,
        hasEdit: false,
      });
    } else {
      this.setState({
        tableCreate: [...this.state.tableCreate, this.state.addRecord],
        addRecord: { documentType: "", upload: "", notes: "", name: "" },
        setModalShow: false,
      });
    }
  };

  closeModal = () => {
    const { dispatch } = this.props;
    dispatch(addDocumentError(""));
    dispatch(updateDocumentError(""));
    this.setState({
      setModalShow: false,
      addRecord: {
        documentType: "N/A",
        upload: "",
        notes: "",
        file: "",
      },
      modalLoader: false,
    });
  };

  deleteRow = (val, rowIndex) => {
    // this.setState({
    //   deleteIndex: rowIndex,
    // });
    let deleteRowObj = {
      communityId: val.communityId,
      documentId: val.documentId,
      rowIndex,
    };
    this.props.dispatch(deleteDocument(deleteRowObj));
  };

  _onchange = (e) => {
    let { addRecord } = this.state;
    addRecord[e.target.name] = e.target.value;
    this.setState({
      addRecord,
    });
  };

  _saveDocument = (e) => {
    const {
      addRecord: { notes, docType, file, documentId, documentType },
      index,
      hasEdit,
    } = this.state;
    const {
      AuthReducer: {
        user: { communityId, userId },
      },
      dispatch,
    } = this.props;
    this.setState({
      modalLoader: true,
    });
    let formdata = new FormData();
    formdata.append("file", file);
    const documentObj = {
      Notes: notes,
      category: "document",
      communityId,
      docType: documentType,
      file: formdata,
      userId,
    };
    documentObj.documentId = documentId;
    documentObj.rowIndex = index;
    if (hasEdit) {
      const UpdateObj = {
        docObj: { communityId, documentId, userId },
        rowIndex: index,
      };
      notes ? (UpdateObj.docObj.Notes = notes) : null;
      docType ? (UpdateObj.docObj["Document Type"] = docType) : null;
      file ? (UpdateObj.docObj["Document File"] = formdata) : null;
      dispatch(updateDocument(UpdateObj));
    } else {
      dispatch(addDocument(documentObj));
    }
  };

  _upload = (e) => {
    let file = e.target.files[0];
    let { addRecord } = this.state;
    addRecord.file = file;
    addRecord.docType = file.type;
    addRecord.name = file.name;
    this.setState({
      addRecord,
    });
  };

  fileUploadButton = () => {
    document.getElementById("fileButton").click();
    let val = "";
    document.getElementById("fileButton").onchange = () => {
      val = document.getElementById("fileButton").files;

      let file = val[0];
      let { addRecord } = this.state;
      addRecord.file = file;
      addRecord.docType = file.type;
      addRecord.name = file.name;
      this.setState({
        addRecord,
      });
      // this.setState({ fileUploadState: val });
    };
  };

  removefile = () => {
    const { addRecord } = this.state;
    addRecord.file = "";
    addRecord.name = "";
    this.setState({ addRecord });
  };

  editRow = (value, index) => {
    const { notes, documentType, fileName, documentUrl, documentId } = value;
    this.setState({
      addRecord: {
        notes,
        documentType,
        name: fileName,
        file: documentUrl,
        documentId,
      },
      setModalShow: true,
      editIndex: index,
      hasEdit: true,
      index,
    });
  };

  render() {
    const {
      documentsReducer: {
        documents,
        addDocumentsError,
        documentType,
        updateDocumentError,
      },
      dispatch,
    } = this.props;
    const { addRecord, hasEdit, modalLoader, loader, deleteIndex } = this.state;
    return (
      <div className="content manage-document-component">
        <Row className="MT60 section-top">
          <Col lg="12" md="12" sm="12" className="PL35 PR35">
            <DashboardHeaderCard />
          </Col>
        </Row>
        <Row className="table-section">
          <Col md="12" className="PL30 PR30">
            <Table responsive className="scrollBarStyle-X">
              <thead>
                <tr>
                  <td className="td1-m">
                    <div>
                      <label>Document Type</label>
                    </div>
                  </td>
                  <td className="td2-m">
                    <div>
                      <label>Document</label>
                    </div>
                  </td>
                  <td className="td3-m">
                    <div>
                      <label>Note</label>
                    </div>
                  </td>
                  <td className="td4-m"></td>
                </tr>
              </thead>
              <tbody className="scrollBarStyle-Y tBody">
                {documents.length &&
                  documents?.map((val, index) => (
                    <tr className="residents-table-row-modal" key={index}>
                      <td className="td1-m PL30">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                          }}
                        >
                          <input
                            className="input1"
                            style={{ background: "white" }}
                            type="email"
                            name="documentType"
                            value={val?.documentType}
                            disabled
                          />
                        </div>
                      </td>

                      <td className="td2-m">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                          }}
                        >
                          <input
                            className="input2"
                            style={{ background: "white" }}
                            type="text"
                            name="upload"
                            value={val?.fileName}
                            disabled
                          />
                        </div>
                      </td>

                      <td className="td3-m">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                          }}
                        >
                          <input
                            className="input3"
                            style={{ background: "white" }}
                            type="email"
                            name="email"
                            value={val?.notes}
                            placeholder="Add Note Here"
                            disabled
                          />
                        </div>
                      </td>
                      <td className="td4-m">
                        <div>
                          <span>
                            <button
                              className="btn"
                              onClick={() => this.editRow(val, index)}
                            >
                              <Image
                                className=""
                                src={"/assets/mockup/edit-row.png"}
                              />
                            </button>
                            <button
                              className="btn flex-center-center"
                              onClick={() => this.deleteRow(val, index)}
                            >
                              {deleteIndex === index ? (
                                <ReactLoading
                                  height={"20px"}
                                  width={"20px"}
                                  type="spin"
                                  color="#009999"
                                />
                              ) : (
                                <Image
                                  className=""
                                  src={"/assets/mockup/delete-table.png"}
                                />
                              )}
                            </button>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        {loader ? <Loader /> : null}
        <Row className="invite-btn-row">
          <Col lg="12" md="12" sm="12" className="PL35 PR35">
            <span className="invite-span">
              <button
                className="add-row-invitation-btn"
                onClick={this.addRowModal}
              >
                <Image
                  className="add-btn"
                  src={"/assets/mockup/add-invite-member.png"}
                />
              </button>
              <p className="btn-text">Add More Documents</p>
            </span>
          </Col>
        </Row>
        <Modal
          show={this.state.setModalShow}
          onHide={() => {
            dispatch(addDocumentError(""));
            this.setState({
              setModalShow: false,
              addRecord: {
                documentType: "N/A",
                upload: "",
                notes: "",
                file: "",
              },
              modalLoader: false,
            });
          }}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="add-record-modal-manage-document"
        >
          <Modal.Header>
            <span onClick={this.closeModal}>
              <Image className="" src={"/assets/mockup/modal-close-btn.png"} />
            </span>
          </Modal.Header>
          <Modal.Body>
            <Row className="row-1">
              <Col>
                <p>{this.state.hasEdit ? "Edit Document" : "Add Document"}</p>
              </Col>
            </Row>
            <Row className="row-2">
              <Col>
                <label>Document Type</label>
              </Col>
            </Row>
            <Row className="row-3">
              <Col>
                {/* value={val.role} onChange={(e) => this.dropDownChanging(e, index)}  */}
                <div>
                  {this.state.hasEdit ? (
                    <select
                      className="dropDownInput"
                      name="documentType"
                      value={this.state.addRecord?.documentType}
                      onChange={(e) => this._onchange(e)}
                    >
                      <option
                        key="selected"
                        value={this.state.addRecord?.documentType}
                      >
                        {this.state.addRecord?.documentType}
                      </option>
                      {documentType?.map((val, index) => (
                        <>
                          {val !== this.state.addRecord?.documentType ? (
                            <option key={index} value={val.name}>
                              {val.description}
                            </option>
                          ) : null}
                        </>
                      ))}
                    </select>
                  ) : (
                    <select
                      className="dropDownInput"
                      name="documentType"
                      value={this.state.addRecord?.documentType}
                      onChange={(e) => this._onchange(e)}
                    >
                      <option key="disable" value="N/A">
                        N/A
                      </option>
                      {documentType?.map((value, index) => (
                        <option key={index} value={value.name}>
                          {value.description}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </Col>
            </Row>
            <Row className="row-4">
              <Col>
                {/* {addRecord.file ? (
                  <label>
                    <span>{addRecord.name}</span>
                    <span onClick={this.removefile}>x</span>
                  </label>
                ) : (
                    <label className="upload_label">
                      <input type="file" onChange={(e) => this._upload(e)} />
                      <span>Upload Documents</span>
                      <span>or Drop file here</span>
                    </label>
                  )} */}
                <DragAndDrop handleDrop={this.handleDrop}>
                  {addRecord.file ? (
                    <label className="getFileContainer">
                      <span className="cancleFile">
                        <span onClick={this.removefile}>X</span>
                      </span>
                      <span className="fileName">{addRecord.name}</span>
                    </label>
                  ) : (
                    <div className="drag-n-drop">
                      <Image
                        className=""
                        src={"/assets/mockup/file-import.png"}
                      />
                      <input id="fileButton" type="file" hidden />
                      <button
                        className="fileUpload-btn"
                        onClick={this.fileUploadButton}
                      >
                        Upload Document
                      </button>
                      <span>or Drop file here</span>
                    </div>
                  )}
                </DragAndDrop>
              </Col>
            </Row>
            <Row className="row-5">
              <Col>
                <label>Note</label>
              </Col>
            </Row>
            <Row className="row-6">
              <Col>
                <div>
                  <Input
                    type="textarea"
                    name="notes"
                    id="exampleText"
                    placeholder="Add Note Here"
                    value={this.state.addRecord.notes}
                    onChange={(e) => this._onchange(e)}
                  />
                </div>
              </Col>
            </Row>
            <Row className="row-7">
              <Col>
                <button onClick={this._saveDocument}>
                  {modalLoader ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ReactLoading
                        height={"30px"}
                        width={"30px"}
                        type="bubbles"
                        color="white"
                      />
                    </div>
                  ) : hasEdit ? (
                    "Update"
                  ) : (
                    "Save"
                  )}
                </button>
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                  marginTop: "5px",
                }}
              >
                {addDocumentsError ? addDocumentsError : updateDocumentError}
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
