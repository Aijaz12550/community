import React, { Component } from "react";
import { Row, Col, Table, Input } from "reactstrap";
import { Image, Modal } from "react-bootstrap";
import { DashboardHeaderCard } from "../dashboardHeaderCard/index.jsx";
import { getDocument, addDocument } from "$middleware";
import "../../../styles/dashboard/manageDocument/index.scss";

export default class ManageDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableCreate: [
        {
          documentType: "HOA Bylaws",
          upload: "hoa-bylaws.pdf",
          note: "hello",
          file: "",
        },
      ],
      addRecord: {
        documentType: "N/A",
        upload: "",
        note: "",
        file: "",
        docType: "",
      },
      documentTypeList: ["DOC"],
      setModalShow: false,
      hasEdit: false,
      editIndex: null,
    };
  }

  componentDidMount() {
    const {
      AuthReducer: {
        user: { communityId },
      },
      dispatch,
    } = this.props;
    console.log(communityId, "asdfas");
    dispatch(getDocument(communityId));
  }

  addRowModal = () => {
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
        addRecord: { documentType: "", upload: "", note: "" },
        setModalShow: false,
        editIndex: null,
        hasEdit: false,
      });
    } else {
      this.setState({
        tableCreate: [...this.state.tableCreate, this.state.addRecord],
        addRecord: { documentType: "", upload: "", note: "" },
        setModalShow: false,
      });
    }
  };

  closeModal = () => {
    this.setState({
      setModalShow: false,
    });
  };

  deleteRow = (rowIndex) => {
    let filterData = this.state.tableCreate.filter(
      (val, index) => index !== rowIndex
    );
    this.setState({
      tableCreate: filterData,
    });
  };

  _onchange = (e) => {
    let { addRecord } = this.state;
    addRecord[e.target.name] = e.target.value;
    this.setState({
      addRecord,
    });
  };

  _saveDocument = () => {
    const {
      addRecord: { note, documentType, docType, file },
    } = this.state;
    const {
      AuthReducer: {
        user: { communityId, userId },
      },
      dispatch,
    } = this.props;
    let formdata = new FormData();
    formdata.append("file", file);
    const addDocumentObj = {
      Notes: note,
      category: documentType,
      communityId,
      docType,
      file: formdata,
      userId,
    };
    console.log(addDocumentObj);
    dispatch(addDocument(addDocumentObj));
  };

  _upload = (e) => {
    let file = e.target.files[0];
    let { addRecord } = this.state;
    addRecord.file = file;
    addRecord.docType = file.type;
    this.setState({
      addRecord,
    });
  };

  editRow = (value, index) => {
    this.setState({
      addRecord: value,
      setModalShow: true,
      editIndex: index,
      hasEdit: true,
    });
  };

  render() {
    const {
      documentsReducer: { documents, getDocumentsError },
    } = this.props;
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
                            value={val.documentType}
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
                            value={val.fileName}
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
                            value={val.notes}
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
                              className="btn"
                              onClick={() => this.deleteRow(index)}
                            >
                              <Image
                                className=""
                                src={"/assets/mockup/delete-table.png"}
                              />
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
              <p className="btn-text">Add Resident</p>
            </span>
          </Col>
        </Row>
        <Modal
          show={this.state.setModalShow}
          onHide={() => this.setState({ setModalShow: false })}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="add-record-modal"
        >
          <Modal.Header closeButton>
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
                      value={this.state.addRecord.documentType}
                      onChange={(e) => this._onchange(e)}
                    >
                      <option
                        key="selected"
                        value={this.state.addRecord.documentType}
                      >
                        {this.state.addRecord.documentType}
                      </option>
                      {this.state.documentTypeList.map((val, index) => (
                        <>
                          {val !== this.state.addRecord.documentType ? (
                            <option key={index} value={val}>
                              {val}
                            </option>
                          ) : null}
                        </>
                      ))}
                    </select>
                  ) : (
                    <select
                      className="dropDownInput"
                      name="documentType"
                      value={this.state.addRecord.documentType}
                      onChange={(e) => this._onchange(e)}
                    >
                      <option key="disable" value="N/A" disabled>
                        N/A
                      </option>
                      {this.state.documentTypeList.map((value, index) => (
                        <option key={index} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </Col>
            </Row>
            <Row className="row-4">
              <Col>
                <label>
                  <input type="file" onChange={(e) => this._upload(e)} />
                </label>
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
                    name="note"
                    id="exampleText"
                    placeholder="Add Note Here"
                    value={this.state.addRecord.note}
                    onChange={(e) => this._onchange(e)}
                  />
                </div>
              </Col>
            </Row>
            <Row className="row-7">
              <Col>
                <button onClick={this._saveDocument}>
                  {this.state.hasEdit ? "Update" : "Save"}
                </button>
              </Col>
            </Row>
            <Row>
              <Col>{getDocumentsError?.message}</Col>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
