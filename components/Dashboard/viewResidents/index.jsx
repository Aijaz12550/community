import React, { useState } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import MydModalWithGrid from '../residentMemberDetail'
import { Table } from 'react-bootstrap';

import "../../../styles/viewResidents/index.scss";

export const ViewResident = () => {
  let data = [
    {
      dataID: 1,
      address: 'TeSt',
      familyMember: [
        { memberName: 'Brii Ritter', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
      ],
      residenceSince: '10 September 2018'
    },
    {
      dataID: 1,
      address: '10 McKeon PI',
      familyMember: [
        { memberName: 'Brii Ritter', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Brii Ritter', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Owais Warsi', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' }],
      residenceSince: '10 September 2018'
    },
    {
      dataID: 1,
      address: '10 McKeon PI',
      familyMember: [
        { memberName: 'Brii Ritter', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Brii Ritter', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Owais Warsi', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' }],
      residenceSince: '10 September 2018'
    },
    {
      dataID: 1,
      address: '10 McKeon PI',
      familyMember: [
        { memberName: 'Brii Ritter', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Brii Ritter', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Owais Warsi', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' }],
      residenceSince: '10 September 2018'
    },
    {
      dataID: 1,
      address: '10 McKeon PI',
      familyMember: [
        { memberName: 'Brii Ritter', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Brii Ritter', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Owais Warsi', memberImage: '/img.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' }],
      residenceSince: '10 September 2018'
    },]
  const [modalShow, setModalShow] = useState(false);
  const [sendData, setData] = useState();
  const [searchData, SearchCol] = useState([]);
  const [noMatchSearchData, noMatchSearchCol] = useState(false);
  function sendProps(setModalValue, setDataValue) {
    setModalShow(setModalValue);
    setData(setDataValue)
  }

  function setPassword(value) {
    const results = data.filter(person =>
      person.address.toLowerCase().includes(value.toLowerCase())
    );
    if (value && results.length === 0) {
      noMatchSearchCol(true);
    }
    if (!value) {
      noMatchSearchCol(false);
    }
    SearchCol(results);
  }




  return (
    <>
      <div className="content">
        <Row style={{ marginTop: 60 }}>
          <Col lg="12" md="12" sm="12">
            <Card
              style={{ background: "#F6F7FB", border: "none", boxShadow: "none" }}
            >
              <CardBody>
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
                      Turner Hill HomeOwners Association
                  </p>
                    <p className="view-residents-address">
                      2 barnum place abc abc USA{" "}
                    </p>
                    <p />
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>

          {/* search ======= */}
          <Col lg="12" md="12" sm="12">
            <form style={{ background: "white" }}>
              <InputGroup
                className="no-border card-stats"
                style={{ background: "white", height: "50px" }}
              >
                <InputGroupAddon
                  addonType="append"
                  style={{ background: "white" }}
                >
                  <InputGroupText style={{ background: "white" }}>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search..." style={{ background: "white" }} onChange={event => setPassword(event.target.value)} />
              </InputGroup>
            </form>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <Table responsive="sm" className="residents-tabl">
              <thead className="text-primary">
                <tr style={{}} >
                  <th className='sm-display-none' style={{ width: '30%' }}>Address</th>
                  <th style={{ width: '40%' }}>Family Members</th>
                  <th className="text-right" style={{ width: '30%' }}>Residence Since</th>
                </tr>
              </thead>
              {noMatchSearchData ?
                <tbody></tbody>
                :
                <tbody className='scrollBarStyle tbody'>
                  {searchData.length ? searchData.map((data1, index) => (
                    <tr className="residents-table-row" style={{}} key={index} onClick={() => sendProps(true, data1)}>
                      <td className='address-td sm-dmemberImageisplay-none' style={{ width: '30%', alignItems: 'center', display: 'flex' }}>{data1.address}</td>
                      <td className="" style={{ textOverflow: 'ellipsis', display: 'flex', flexDirection: 'row', alignItems: 'center', width: '40%', }}>
                        <div className='' style={{
                          display: 'block',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}>
                          {data1.familyMember.map((membersImg, keys) => (
                            <img src={membersImg.memberImage} key={keys} className="roundedCircle"></img>

                          ))}
                        </div>

                        <div className='' style={{
                          display: 'block',
                          height: 20,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          marginLeft: 15
                        }}>
                          {data1.familyMember.map((memberNames, ind) => (
                            <span className='' key={ind} style={{
                              fontFamily: 'Open Sans',
                              fontStyle: 'normal',
                              fontWeight: '600',
                              fontWize: '14px',
                              lineHeight: '22px',
                            }}>{memberNames.memberName}, </span>
                          ))}

                        </div>

                      </td>
                      <td className="text-right" style={{ width: '30%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end' }}>{data1.residenceSince.split(' ')[1] + ' ' + data1.residenceSince.split(' ')[2]}</td>

                    </tr>
                  ))

                    : data.map((data1, index) => (
                      <tr className="residents-table-row" style={{}} key={index} onClick={() => sendProps(true, data1)}>
                        <td className='address-td sm-dmemberImageisplay-none' style={{ width: '30%', alignItems: 'center', display: 'flex' }}>{data1.address}</td>
                        <td className="" style={{ textOverflow: 'ellipsis', display: 'flex', flexDirection: 'row', alignItems: 'center', width: '40%', }}>
                          <div className='' style={{
                            display: 'block',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}>
                            {data1.familyMember.map((membersImg, keys) => (
                              <img src={membersImg.memberImage} key={keys} className="roundedCircle"></img>

                            ))}
                          </div>

                          <div className='' style={{
                            display: 'block',
                            height: 20,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            marginLeft: 15
                          }}>
                            {data1.familyMember.map((memberNames, ind) => (
                              <span className='' key={ind} style={{
                                fontFamily: 'Open Sans',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontWize: '14px',
                                lineHeight: '22px',
                              }}>{memberNames.memberName}, </span>
                            ))}

                          </div>

                        </td>
                        <td className="text-right" style={{ width: '30%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end' }}>{data1.residenceSince.split(' ')[1] + ' ' + data1.residenceSince.split(' ')[2]}</td>

                      </tr>
                    ))}

                </tbody>

              }
            </Table>
          </Col>
        </Row>
      </div >
      <MydModalWithGrid show={modalShow} trData={sendData} onHide={() => setModalShow(false)} />
    </>
  );
};
