import React, { Component } from "react";
import { Modal, Row, Col, Card, Table } from 'react-bootstrap';
import "../../../styles/residentMemberDetail/index.scss";

class ResidentMemberDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                className='contained-modal-title-vcenter'
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <Row>
                            <Col lg="12" md="12" sm="12">
                                <Card
                                    style={{ border: "none", boxShadow: "none" }}
                                >
                                    <Card.Body>
                                        <Row>
                                            <div
                                                className="number"
                                                style={{
                                                    display: "flex",
                                                    width: "100%",
                                                    justifyContent: "center",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <p className="view-residents-title">
                                                    {this.props?.trData?.address}
                                                </p>
                                                <p className="view-residents-address">
                                                    Residence Since:<span style={{ fontWeight: 'bold' }}>{this.props?.trData?.residenceSince.split(' ')[1] + ' ' + this.props?.trData?.residenceSince.split(' ')[2]}</span>
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
                <Modal.Body>
                    <Table>
                        <thead className="text-primary">
                            <tr>
                                <th style={{ width: '20%', alignItems: 'center', display: 'flex' }}>Name</th>
                                <th style={{ width: '20%', alignItems: 'center', display: 'flex' }}>Phone Number</th>
                                <th style={{ width: '40%', alignItems: 'center', display: 'flex' }}>Email Address</th>
                                <th className="text-right" style={{ width: '20%', alignItems: 'center', display: 'flex' }}>Residence Since</th>
                            </tr>
                        </thead>
                        <tbody className='scrollBarStyle'>
                            {this.props?.trData?.familyMember.map((data1, index) => (
                                <tr>
                                    <td className='address-td sm-dmemberImageisplay-none' style={{ width: '20%' }}>
                                        <img src={data1.memberImage} key={index} className="roundedCircle"></img>
                                        <span style={{ textOverflow: 'ellipsis', marginLeft: 20 }}>{data1.memberName}</span>
                                    </td>
                                    <td className="" style={{ textOverflow: 'ellipsis', display: 'flex', flexDirection: 'row', alignItems: 'center', width: '20%' }}>{data1.phoneNumber}</td>
                                    <td className="" style={{ textOverflow: 'ellipsis', display: 'flex', flexDirection: 'row', alignItems: 'center', width: '40%' }}>{data1.emailAddress}</td>
                                    <td className="text-right" style={{ width: '20%', alignItems: 'center', display: 'flex' }}>{data1.memberSince.split(' ')[1] + ' ' + data1.memberSince.split(' ')[2]}</td>

                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </Modal.Body>

            </Modal>
        )
    }

}

export default ResidentMemberDetail;