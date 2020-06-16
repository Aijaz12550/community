import React, { useState, Fragment, useEffect } from "react";
import {
  Col,
  Row,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  PaginationLink,
} from "reactstrap";
import ResidentMemberDetail from "../residentMemberDetail";
import { DashboardHeaderCard } from "../dashboardHeaderCard";
import { Table } from "react-bootstrap";
import Images from "../imageRow";
import { residents } from "$middleware";
import { Loader } from "../../Loader/Loader";

import "../../../styles/dashboard/viewResidents/index.scss";

export const ViewResident = (props) => {
  const {
    dispatch,
    AuthReducer: {
      user: { communityId },
    },
  } = props;

  const [modalShow, setModalShow] = useState(false);
  const [sendData, setData] = useState();
  const [sendStreetName, setStreetName] = useState('');
  const [searchData, SearchCol] = useState("");

  function sendProps(setModalValue, setDataValue, StreetName) {
    setModalShow(setModalValue);
    setData(setDataValue);
    setStreetName(StreetName);
  }

  useEffect(() => {
    dispatch(residents(communityId));
  }, [props.ResidentsReducer?.residents?.length]);

  const { ResidentsReducer } = props;
  return (
    <Fragment key={+Date.now()}>
      <div className="content view-resident-component">
        <Row className="MT60 section-top">
          <Col lg="12" md="12" sm="12" className="PL35 PR35">
            <DashboardHeaderCard />
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
                  value={searchData}
                  placeholder="Search..."
                  className="bg-white outline-none"
                  onChange={(event) => SearchCol(event.target.value)}
                />
              </InputGroup>
            </form>
          </Col>
        </Row>

        <Row className="table-section">
          <Col md="12" className="PL35 PR35">
            <Table responsive className="table-content scrollBarStyle-X">
              <thead className="table-head">
                <tr>
                  <th className="th Col-1">Address</th>
                  <th className="th Col-2">Family Members</th>
                  <th className="th Col-3">Residence Since </th>
                </tr>
              </thead>
              <tbody className="scrollBarStyle-Y table-tbody">
                {ResidentsReducer?.residents?.length ? (
                  ResidentsReducer?.residents.map((data1, index) => {
                    if (
                      `${data1.street}`
                        .toLowerCase()
                        .indexOf(searchData.toLowerCase()) !== -1
                    ) {
                      return (
                        <tr
                          className="residents-table-row"
                          key={index}
                          onClick={() => sendProps(true, data1?.familyMembers, data1.street)}
                        >
                          <td className="Col-1 sm-dmemberImageisplay-none">
                            {data1.street}
                          </td>
                          <td className="Col-2">
                            <Images familyMember={data1?.familyMembers} />
                          </td>
                          <td className="Col-3">{data1.residentSince ? data1.residentSince.split(' ')[0] + ' ' + data1.residentSince.split(' ')[2] : ''}</td>
                        </tr>
                      );
                    } else null;
                  })
                ) : (
                    <Loader />
                  )}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="pagination-section">
          <div className="pagination-nav" aria-label="Page navigation example">
            <button className="next-page-btn">
              <i className="fas fa-chevron-left" />
            </button>
            <div>
              <span>
                <PaginationLink href="#">1</PaginationLink>
              </span>
              <span>
                <PaginationLink href="#">2</PaginationLink>
              </span>
              <span>
                <PaginationLink href="#">3</PaginationLink>
              </span>
              <span>
                <PaginationLink href="#">4</PaginationLink>
              </span>
              <span>
                <PaginationLink href="#">5</PaginationLink>
              </span>
            </div>
            <button className="next-page-btn">
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </Row>
      </div>
      <ResidentMemberDetail
        show={modalShow}
        familyDetails={sendData}
        streetName={sendStreetName}
        onHide={() => setModalShow(false)}
      />
    </Fragment>
  );
};
