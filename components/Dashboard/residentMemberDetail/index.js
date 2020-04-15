import React, { Component } from "react";
import { Modal, Row, Col, Card, Table } from "react-bootstrap";
import "../../../styles/dashboard/ResidentMemberDetail/index.scss";

class ResidentMemberDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        className="contained-modal-title-vcenter resident-member-detail"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <div className="header-main-div">
            <Row>
              <Col lg="12" md="12" sm="12">
                <Card className="header-modal-card">
                  <Card.Body>
                    <Row>
                      <div className="header-modal-card-body">
                        <p className="view-residents-title">
                          {this.props?.trData?.address}
                        </p>
                        <p className="view-residents-address">
                          <span className="residence-since">
                            Residence Since:
                          </span>
                          <span className="residents-time">
                            {this.props?.trData?.residenceSince.split(" ")[1] +
                              " " +
                              this.props?.trData?.residenceSince.split(" ")[2]}
                          </span>
                        </p>
                        <p />
                      </div>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Modal.Header>
        <Modal.Body className="PT0">
          <Table responsive className="scrollBarStyle-X">
            <thead className="">
              <tr>
                <th className="td1-m">Name</th>
                <th className="td2-m">Phone Number</th>
                <th className="td3-m">Email Address</th>
                <th className="td4-m">Member Since</th>
              </tr>
            </thead>
            <tbody className="scrollBarStyle-Y tBody">
              {this.props?.trData?.familyMember.map((data1, index) => (
                <tr className="residents-table-row-modal" key={index}>
                  <td className="address-td sm-dmemberImageisplay-none td1-m PL30">
                    <img src={data1.memberImage} key={index} className="roundedCircle"></img>
                    
                    <span className="ML20">{data1.memberName}</span>
                  </td>
                  <td className="td2-m">{data1.phoneNumber}</td>
                  <td className="td3-m">{data1.emailAddress}</td>
                  <td className="td4-m">
                    {data1.memberSince.split(" ")[1] +
                      " " +
                      data1.memberSince.split(" ")[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ResidentMemberDetail;
