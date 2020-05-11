import React, { Component } from "react";
import { Row, Col, Input } from "reactstrap";
import { Image } from 'react-bootstrap'
import { DashboardHeaderCard } from "../dashboardHeaderCard/index.jsx";
import "../../../styles/dashboard/sendcommunication/index.scss";
import Editor from "../editor";

export default class Sendcommunication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch1: true,
      toggleChange: true,
      fileUploadState: ['or Drop file here']
    };
  }

  handleSwitchChange = (nr) => () => {
    let switchNumber = `switch${nr}`;
    this.setState({
      [switchNumber]: !this.state[switchNumber],
    });
  };
  toggleChange = () => {
    this.setState({
      toggleChange: false,
    });
  };

  resetTable = () => {

  }

  tast = () => {
    document.getElementById('selectedFile').click()
    console.log(document.getElementById('selectedFile'))
  }

  fileUploadButton = () => {
    document.getElementById('fileButton').click();
    let val = '';
    document.getElementById('fileButton').onchange = () => {
      val = document.getElementById('fileButton').value;
      val = val.split("\\");
      this.setState({ fileUploadState: val });
    }
  }

  render() {
    return (
      <div
        className="content send-communication-component"
        key={Date.now() + 5765}
      >
        <Row className="MT60 section-top">
          <Col lg="12" md="12" sm="12" className="PL35 PR35">
            <DashboardHeaderCard />
          </Col>
        </Row>
        <div style={{ overflow: "auto" }}>
          <div className="send-communication-body">
            <Row className="row-1">
              <Col>
                <div>
                  <label>To:</label>
                  <Input
                    type="text"
                    placeholder="(All/ Selected Register Users/ Emails)"
                  />
                </div>
              </Col>
            </Row>
            <Row className="row-2">
              <Col>
                <div>
                  <label>To:</label>
                  <Input type="text" placeholder="Add Email" />
                </div>
              </Col>
            </Row>
            <Row className="row-3">
              <Col>
                <div>
                  <label>Subject:</label>
                  <select className="dropDownInput" name="memberRole">
                    <option value="N/A">dfsdfsdf</option>
                    <option value="Community Manager">dfsdfsdf</option>
                    <option value="Board Manager">dfsdfsdf</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row className="row-4">
              <Col>
                <div>
                  <label><Image className='attachment-icon' src={'/assets/mockup/attachment-icon-16px.png'} /></label>
                  <input id="fileButton" type="file" hidden />
                  <button className="fileUpload-btn" onClick={this.fileUploadButton}>
                    Upload Document
                  </button>
                  <span>{this.state.fileUploadState.length > 2 ? this.state.fileUploadState[this.state.fileUploadState.length - 1] : this.state.fileUploadState[0]}</span>
                  <span>Optional</span>
                </div>
              </Col>
            </Row>
            <Row className="row-5">
              <Col>
                <div className="toggle-row">
                  <label>Importance:</label>
                  <span>
                    <input
                      className="react-switch-checkbox"
                      id={`react-switch-new`}
                      type="checkbox"
                    />
                    <label
                      className="react-switch-label"
                      htmlFor={`react-switch-new`}
                    // style={this.state.toggleChange ? { background: '#009999' } : { background: 'gray' }}
                    // onClick={this.toggleChange}
                    >
                      <span className={`react-switch-button`} />
                    </label>
                  </span>
                </div>
              </Col>
            </Row>
            <Editor />
            <Row className='invite-btn-row'>
              <Col lg="12" md="12" sm="12" className="PL35 PR35 invite-send-row">
                <span className='send-invite-box'>
                  <button className='reset-invite' onClick={this.resetTable}>
                    <Image className='add-btn' src={'/assets/mockup/reset-icon.png'} />Reset</button>
                  <button className='send-invite-btn'>Send</button>
                </span>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
