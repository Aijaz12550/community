import React, { useState, Fragment } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Badge,

} from "reactstrap";
import MydModalWithGrid from '../residentMemberDetail'
import { Table, Image } from 'react-bootstrap';
import Images from '../imageRow';

import "../../../styles/viewResidents/index.scss";

export const ViewResident = () => {
  let data = [
    {
      dataID: 1,
      address: '10 Mckeon Pl',
      familyMember: [
        { memberName: 'Brii Ritter', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/assets/mockup/img2.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/assets/mockup/img3.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
      ],
      residenceSince: '10 September 2018'
    },
    {
      dataID: 1,
      address: '12 Barnum Pl',
      familyMember: [
        { memberName: 'Brii Ritter', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/assets/mockup/img3.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/assets/mockup/img4.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Brii Ritter', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/assets/mockup/img3.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/assets/mockup/img4.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Owais Warsi', memberImage: '/assets/mockup/img5.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' }],
      residenceSince: '10 September 2018'
    },
    {
      dataID: 1,
      address: '5 Taylor Ct',
      familyMember: [
        { memberName: 'Brii Ritter', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 June 2018' },
        { memberName: 'Wilam Carry', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 June 2018' },
        { memberName: 'Jhon Doe', memberImage: '/assets/mockup/img3.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 June 2018' },
        { memberName: 'Walter Obrain', memberImage: '/assets/mockup/img4.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 June 2018' },
        { memberName: 'Brii Ritter', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 June 2018' },
        { memberName: 'Wilam Carry', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 June 2018' },
        { memberName: 'Jhon Doe', memberImage: '/assets/mockup/img3.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 June 2018' },
        { memberName: 'Walter Obrain', memberImage: '/assets/mockup/img4.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 June 2018' },
        { memberName: 'Owais Warsi', memberImage: '/assets/mockup/img5.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 June 2018' }],
      residenceSince: '10 June 2018'
    },
    {
      dataID: 1,
      address: '3 Taylor Ct',
      familyMember: [
        { memberName: 'Brii Ritter', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/assets/mockup/img3.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/assets/mockup/img4.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Brii Ritter', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/assets/mockup/img3.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/assets/mockup/img4.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Owais Warsi', memberImage: '/assets/mockup/img5.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' }],
      residenceSince: '10 September 2018'
    },
    {
      dataID: 1,
      address: '10 Barnum Pl',
      familyMember: [
        { memberName: 'Brii Ritter', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/assets/mockup/img3.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/assets/mockup/img4.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Brii Ritter', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/assets/mockup/img3.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/assets/mockup/img4.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Owais Warsi', memberImage: '/assets/mockup/img5.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' }],
      residenceSince: '10 September 2018'
    },
    {
      dataID: 1,
      address: '5 Titus Pl',
      familyMember: [
        { memberName: 'Brii Ritter', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/assets/mockup/img3.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/assets/mockup/img4.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Brii Ritter', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/assets/mockup/img3.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/assets/mockup/img4.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Owais Warsi', memberImage: '/assets/mockup/img5.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' }],
      residenceSince: '10 September 2018'
    },
    {
      dataID: 1,
      address: '10 Lynn Pl',
      familyMember: [
        { memberName: 'Brii Ritter', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/assets/mockup/img3.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/assets/mockup/img4.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Brii Ritter', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Wilam Carry', memberImage: '/assets/mockup/img1.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Jhon Doe', memberImage: '/assets/mockup/img3.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Walter Obrain', memberImage: '/assets/mockup/img4.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' },
        { memberName: 'Owais Warsi', memberImage: '/assets/mockup/img5.png', phoneNumber: '(217) 555-0113', emailAddress: 'seth.olson@example.com', memberSince: '10 September 2018' }],
      residenceSince: '10 September 2018'
    },
  ]

  const [modalShow, setModalShow] = useState(false);
  const [sendData, setData] = useState();
  const [searchData, SearchCol] = useState([]);
  const [noMatchSearchData, noMatchSearchCol] = useState(false);

  function sendProps(setModalValue, setDataValue) {
    setModalShow(setModalValue);
    setData(setDataValue)
  }

  function searchHandleChange(value) {
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
    <Fragment key={+Date.now()}>
      <div className="content">
        <Row style={{ marginTop: 60 }}>
          <Col lg="12" md="12" sm="12" style={{ paddingLeft: 35, paddingRight: 35 }}>
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
                      2 Barnum place, Ridgefeild CT 06877
                    </p>
                    <p />
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>

          {/* search ======= */}
          <Col lg="12" md="12" sm="12" style={{ paddingLeft: 35, paddingRight: 35, marginTop: 18 }}>
            <form style={{
              background: '#FFFFFF',
              border: 'none !important solid #E9E9E9',
              boxSizing: 'border-box',
              boxShadow: '0px 12px 50px rgba(0, 0, 0, 0.04)',
              borderRadius: '8px',
              paddingLeft: 5,
              paddingRight: 5,
            }}>
              <InputGroup
                className="no-border card-stats"
                style={{ background: "white", height: "50px", alignItems: 'center', margin: 0 }}
              >
                <InputGroupAddon
                  addonType="append"
                  style={{ background: "white" }}
                >
                  <InputGroupText style={{ background: "white" }}>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search..." style={{ background: "white", outline: 'none' }} onChange={event => searchHandleChange(event.target.value)} />
              </InputGroup>
            </form>
          </Col>
        </Row>

        <Row>
          <Col md="12" style={{ paddingLeft: 35, paddingRight: 35 }}>
            <Table responsive="sm" className="residents-tabl ">
              <thead className="">
                <tr >
                  <th className='th td1' style={{ width: '35%' }}>Address</th>
                  <th className='th td2' style={{ width: '35%', justifyContent: 'space-between', display: 'flex', alignItems: 'center', }}>Family Members</th>
                  <th className="text-right th" style={{ width: '30%' }}>Residence Since</th>
                </tr>
              </thead>
              {noMatchSearchData ?
                <tbody></tbody>
                :
                <tbody className='scrollBarStyle tbody'>
                  {searchData.length ? searchData.map((data1, index) => (
                    <tr className="residents-table-row" style={{}} key={index} onClick={() => sendProps(true, data1)}>
                      <td className='address-td sm-dmemberImageisplay-none td1' style={{ width: '35%', alignItems: 'center', display: 'flex' }}>{data1.address}</td>
                      <td className="td2" style={{ width: '35%', justifyContent: 'space-between', display: 'flex', alignItems: 'center', }}>

                        <Images key={index} familyMember={data1.familyMember} />
                      </td>
                      <td className="text-right td-residence-since" style={{ width: '30%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end', }}>{data1.residenceSince.split(' ')[1] + ' ' + data1.residenceSince.split(' ')[2]}</td>

                    </tr>
                  ))
                    :
                    data.map((data1, index) => (
                      <tr className="residents-table-row" style={{}} key={index+6767} onClick={() => sendProps(true, data1)}>
                        <td className='address-td sm-dmemberImageisplay-none td1' style={{ width: '35%', alignItems: 'center', display: 'flex' }}>{data1.address}</td>
                        <td className="td2" style={{ width: '35%', justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>

                          <Images Uniquekey={index+(+Date.now())} familyMember={data1.familyMember} />

                        </td>
                        <td className="text-right td-residence-since" style={{ width: '30%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end' }}>{data1.residenceSince.split(' ')[1] + ' ' + data1.residenceSince.split(' ')[2]}</td>

                      </tr>
                    ))}

                </tbody>

              }
            </Table>
          </Col>
        </Row>
      </div >
      <MydModalWithGrid show={modalShow} trData={sendData} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};


