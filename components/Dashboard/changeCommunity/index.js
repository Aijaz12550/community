import React, { Component } from "react";
import { Row, Col, Input } from "reactstrap";
import { Image } from 'react-bootstrap'
import { DashboardHeaderCard } from "../dashboardHeaderCard/index.jsx";
import "../../../styles/dashboard/changeCommunity/index.scss";

export default class ChangeCommunity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCommunityName: [
        { name: 'Downtown West', location: 'St. Louis, MO, USA' },
        { name: 'Town West', location: 'St. Louis, MO, USA' },
        { name: 'Newyork West', location: 'St. Louis, MO, USA' }
      ]
    };
  }

  render() {
    return (
      <div
        className="content change-community-component"
        key={Date.now() + 5735}
      >
        <div className="MT130 PT60 PL90 PR90 body-section">
          <Row className='heading'>
            <Col>
              <span>Select Community to Manage</span>
            </Col>
          </Row>
          <Row className='content-data'>
            <Col>
              <div>
                <label>Enter Zipcode</label>
                <Input type='text' className='input-div row-1' />

              </div>
              <div>
                <label>Community Name</label>
                <Input className='input-div row-2' type='text' placeholder='Enter to select Community Name - List Communities' />
              </div>
              {this.state.listCommunityName.length ?
                <div className='find-community-name'>
                  <ul>
                    {this.state.listCommunityName.map((val, index) => (
                      <li key={index}>
                        <span className='_icon'><Image src='/assets/mockup/dropdown-list-icon.png' /></span>
                        <span className='list-view'>
                          <span className='name'>{val.name}</span>
                          <span className='location'>{val.location}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                :
                null
              }
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
