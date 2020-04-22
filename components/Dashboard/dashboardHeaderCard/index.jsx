import React from "react";
import { Card, CardBody, Row } from "reactstrap";
import "../../../styles/dashboard/dashboardHeaderCard/index.scss";

export const DashboardHeaderCard = () => {
  return (
    <Card className="main-card">
      <CardBody>
        <Row>
          <div className="card-body ">
            <p className="view-residents-title">
              Turner Hill HomeOwners Association
            </p>
            <p className="view-residents-address">
              2 Barnum place, Ridgefeild CT 06877
            </p>
            <p />
          </div>
        </Row>
      </CardBody>
    </Card>
  );
};
