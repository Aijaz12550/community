import React, { Component } from "react";
import { Modal, Row, Col, Card, Table } from "react-bootstrap";
import "../../../styles/dashboard/ResidentMemberDetail/index.scss";

class ResidentMemberDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { familyDetails } = this.props;
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
                          {familyDetails?.address}
                        </p>
                        <p className="view-residents-address">
                          <span className="residence-since">
                            Residence Since:
                          </span>
                          <span className="residents-time"></span>
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
        <Modal.Body className="PT0 PR34 PL46">
          <Table responsive className="scrollBarStyle-X">
            <thead className="">
              <tr>
                <th className="td1-m">Name</th>
                <th className="td2-m">Phone Number</th>
                <th className="td3-m">Email Address</th>
                <th className="td4-m">Member Since</th>
              </tr>
            </thead>
            <tbody className="scrollBarStyle-Y tBody-1">
              {familyDetails?.map((data1, index) => (
                <tr className="residents-table-row-modal" key={index}>
                  <td className="td1-m PL30">
                    <div>
                      <img
                        src={data1.avatarUrl}
                        key={index}
                        className="roundedCircle"
                      ></img>
                    </div>
                    <div
                      className="memberName-div"
                      style={
                        data1.memberRole
                          ? { alignItems: "flex-start" }
                          : { alignItems: "center" }
                      }
                    >
                      <span className="ML13 memberName">{data1.fullName}</span>
                      {data1.memberRole ? (
                        <span className="ML13 memberRole">
                          {data1.memberRole}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                  <td className="td2-m">{data1.phone}</td>
                  <td className="td3-m">{data1.email}</td>
                  {/* <td className="td4-m">
                    {data1.memberSince.split(" ")[1] +
                      " " +
                      data1.memberSince.split(" ")[2]}
                  </td> */}
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
