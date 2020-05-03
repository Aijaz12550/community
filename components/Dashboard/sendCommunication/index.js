import React, { Component } from "react";
import { Row, Col, Input } from "reactstrap";
import { DashboardHeaderCard } from "../dashboardHeaderCard/index.jsx";
import "../../../styles/dashboard/sendcommunication/index.scss";

export default class Sendcommunication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch1: true,
      toggleChange: true
    }
  }

  handleSwitchChange = nr => () => {
    let switchNumber = `switch${nr}`;
    this.setState({
      [switchNumber]: !this.state[switchNumber]
    });
  }
  toggleChange = () => {
    this.setState({
      toggleChange: false
    })
  }

  render() {
    return (
      <div className="content send-communication-component" key={Date.now() + 5765}>
        <Row className="MT60 section-top">
          <Col lg="12" md="12" sm="12" className="PL35 PR35">
            <DashboardHeaderCard />
          </Col>
        </Row>
        <div style={{ overflow: 'auto' }}>
          <div className='send-communication-body'>
            <Row className='row-1'>
              <Col>
                <div>
                  <label>To:</label>
                  <Input type='text' placeholder='(All/ Selected Register Users/ Emails' />
                </div>
              </Col>
            </Row>
            <Row className='row-2'>
              <Col>
                <div>
                  <label>To:</label>
                  <Input type='text' placeholder='Add Email' />
                </div>
              </Col>
            </Row>
            <Row className='row-3'>
              <Col>
                <div>
                  <label>To:</label>
                  <select className='dropDownInput' name='memberRole' >
                    <option value="N/A">dfsdfsdf</option>
                    <option value="Community Manager">dfsdfsdf</option>
                    <option value="Board Manager">dfsdfsdf</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row className='row-4'>
              <Col>
                <div className='toggle-row'>
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
            <Row className='row-5'>
              <Col>
                
              </Col>
            </Row>
            <Row className='row-6'>
              <Col></Col>
            </Row>
          </div>
        </div>
      </div>
    );
  };
}