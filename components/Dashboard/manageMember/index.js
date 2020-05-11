import React, { Component } from "react";
import { Row, Col, Input } from "reactstrap";
import { DashboardHeaderCard } from "../dashboardHeaderCard/index.jsx";
import "../../../styles/dashboard/manageMember/index.scss";

export default class ManageMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div
        className="content manage-member-component"
        key={Date.now() + 5765}
      >
        <Row className="MT60 section-top">
          <Col lg="12" md="12" sm="12" className="PL35 PR35">
            <DashboardHeaderCard />
          </Col>
        </Row>
      </div>
    );
  }
}
