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
} from "reactstrap";
import ResidentMemberDetail from "../residentMemberDetail";
import { Table } from "react-bootstrap";
import Images from "../imageRow";

import "../../../styles/dashboard/viewResidents/index.scss";

export const ViewResident = () => {
  let data = [
    {
      dataID: 1,
      address: "10 Mckeon Pl",
      familyMember: [
        {
          memberName: "Brii Ritter",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Wilam Carry",
          memberImage: "/assets/mockup/img2.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Jhon Doe",
          memberImage: "/assets/mockup/img3.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
      ],
      residenceSince: "10 September 2018",
    },
    {
      dataID: 1,
      address: "12 Barnum Pl",
      familyMember: [
        {
          memberName: "Brii Ritter",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Wilam Carry",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Jhon Doe",
          memberImage: "/assets/mockup/img3.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Walter Obrain",
          memberImage: "/assets/mockup/img4.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Brii Ritter",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Wilam Carry",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Jhon Doe",
          memberImage: "/assets/mockup/img3.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Walter Obrain",
          memberImage: "/assets/mockup/img4.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Owais Warsi",
          memberImage: "/assets/mockup/img5.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
      ],
      residenceSince: "10 September 2018",
    },
    {
      dataID: 1,
      address: "5 Taylor Ct",
      familyMember: [
        {
          memberName: "Brii Ritter",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 June 2018",
        },
        {
          memberName: "Wilam Carry",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 June 2018",
        },
        {
          memberName: "Jhon Doe",
          memberImage: "/assets/mockup/img3.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 June 2018",
        },
        {
          memberName: "Walter Obrain",
          memberImage: "/assets/mockup/img4.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 June 2018",
        },
        {
          memberName: "Brii Ritter",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 June 2018",
        },
        {
          memberName: "Wilam Carry",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 June 2018",
        },
        {
          memberName: "Jhon Doe",
          memberImage: "/assets/mockup/img3.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 June 2018",
        },
        {
          memberName: "Walter Obrain",
          memberImage: "/assets/mockup/img4.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 June 2018",
        },
        {
          memberName: "Owais Warsi",
          memberImage: "/assets/mockup/img5.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 June 2018",
        },
      ],
      residenceSince: "10 June 2018",
    },
    {
      dataID: 1,
      address: "3 Taylor Ct",
      familyMember: [
        {
          memberName: "Brii Ritter",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Wilam Carry",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Jhon Doe",
          memberImage: "/assets/mockup/img3.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Walter Obrain",
          memberImage: "/assets/mockup/img4.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Brii Ritter",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Wilam Carry",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Jhon Doe",
          memberImage: "/assets/mockup/img3.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Walter Obrain",
          memberImage: "/assets/mockup/img4.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Owais Warsi",
          memberImage: "/assets/mockup/img5.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
      ],
      residenceSince: "10 September 2018",
    },
    {
      dataID: 1,
      address: "10 Barnum Pl",
      familyMember: [
        {
          memberName: "Brii Ritter",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Wilam Carry",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Jhon Doe",
          memberImage: "/assets/mockup/img3.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Walter Obrain",
          memberImage: "/assets/mockup/img4.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Brii Ritter",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Wilam Carry",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Jhon Doe",
          memberImage: "/assets/mockup/img3.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Walter Obrain",
          memberImage: "/assets/mockup/img4.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Owais Warsi",
          memberImage: "/assets/mockup/img5.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
      ],
      residenceSince: "10 September 2018",
    },
    {
      dataID: 1,
      address: "5 Titus Pl",
      familyMember: [
        {
          memberName: "Brii Ritter",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Wilam Carry",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Jhon Doe",
          memberImage: "/assets/mockup/img3.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Walter Obrain",
          memberImage: "/assets/mockup/img4.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Brii Ritter",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Wilam Carry",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Jhon Doe",
          memberImage: "/assets/mockup/img3.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Walter Obrain",
          memberImage: "/assets/mockup/img4.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Owais Warsi",
          memberImage: "/assets/mockup/img5.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
      ],
      residenceSince: "10 September 2018",
    },
    {
      dataID: 1,
      address: "10 Lynn Pl",
      familyMember: [
        {
          memberName: "Brii Ritter",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Wilam Carry",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Jhon Doe",
          memberImage: "/assets/mockup/img3.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Walter Obrain",
          memberImage: "/assets/mockup/img4.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Brii Ritter",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Wilam Carry",
          memberImage: "/assets/mockup/img1.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Jhon Doe",
          memberImage: "/assets/mockup/img3.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Walter Obrain",
          memberImage: "/assets/mockup/img4.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
        {
          memberName: "Owais Warsi",
          memberImage: "/assets/mockup/img5.png",
          phoneNumber: "(217) 555-0113",
          emailAddress: "seth.olson@example.com",
          memberSince: "10 September 2018",
        },
      ],
      residenceSince: "10 September 2018",
    },
  ];

  const [modalShow, setModalShow] = useState(false);
  const [sendData, setData] = useState();
  const [searchData, SearchCol] = useState([]);
  const [noMatchSearchData, noMatchSearchCol] = useState(false);

  function sendProps(setModalValue, setDataValue) {
    setModalShow(setModalValue);
    setData(setDataValue);
  }

  function searchHandleChange(value) {
    const results = data.filter((person) =>
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
      <div className="content view-resident-component">
        <Row className="MT60 section-top">
          <Col lg="12" md="12" sm="12" className="PL35 PR35">
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
          </Col>

          {/* search ======= */}
          <Col lg="12" md="12" sm="12" className="PL35 PR35 MT18 search-bar">
            <form className="PL5 PR5 form">
              <InputGroup className="no-border input-group bg-white M0">
                <InputGroupAddon addonType="append" className="bg-white">
                  <InputGroupText className="bg-white">
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Search..."
                  className="bg-white outline-none"
                  onChange={(event) => searchHandleChange(event.target.value)}
                />
              </InputGroup>
            </form>
          </Col>
        </Row>

        <Row className="table-section">
          <Col md="12" className="PL35 PR35">
            <Table responsive className="table-content">
              <thead className="table-head">
                <tr>
                  <th className="th Col-1">Address</th>
                  <th className="th Col-2">Family Members</th>
                  <th className="th Col-3">Residence Since </th>
                </tr>
              </thead>
              {noMatchSearchData ? (
                <tbody></tbody>
              ) : (
                <tbody className="scrollBarStyle-Y table-tbody">
                  {searchData.length
                    ? searchData.map((data1, index) => (
                        <tr
                          className="residents-table-row"
                          key={index}
                          onClick={() => sendProps(true, data1)}
                        >
                          <td className="Col-1 sm-dmemberImageisplay-none">
                            {data1.address}
                          </td>
                          <td className="Col-2">
                            <Images
                              key={index}
                              familyMember={data1.familyMember}
                            />
                          </td>
                          <td className="Col-3">
                            {data1.residenceSince.split(" ")[1] +
                              " " +
                              data1.residenceSince.split(" ")[2]}
                          </td>
                        </tr>
                      ))
                    : data.map((data1, index) => (
                        <tr
                          className="residents-table-row"
                          key={index + 6767}
                          onClick={() => sendProps(true, data1)}
                        >
                          <td className="Col-1 sm-dmemberImageisplay-none">
                            {data1.address}
                          </td>
                          <td className="Col-2">
                            <Images
                              Uniquekey={index + +Date.now()}
                              familyMember={data1.familyMember}
                            />
                          </td>
                          <td className="Col-3">
                            {data1.residenceSince.split(" ")[1] +
                              " " +
                              data1.residenceSince.split(" ")[2]}
                          </td>
                        </tr>
                      ))}
                </tbody>
              )}
            </Table>
          </Col>
        </Row>
      </div>
      <ResidentMemberDetail
        show={modalShow}
        trData={sendData}
        onHide={() => setModalShow(false)}
      />
    </Fragment>
  );
};
