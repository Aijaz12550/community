import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Table
} from "reactstrap";
import "../../../styles/viewResidents/index.scss";

export const ViewResident = () => {
  return (
    <div className="content">
      <Row>
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
              <Input placeholder="Search..." style={{ background: "white" }} />
            </InputGroup>
          </form>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Table responsive className="residents-tabl">
            <thead className="text-primary">
              <tr>
                <th className='sm-display-none'>Address</th>
                <th>Family Members</th>
                <th className="text-right" style={{minWidth:'150px',padding:'0px',paddingRight:'15px'}}>Residence Since</th>
              </tr>
            </thead>
            <tbody>
              <tr className="residents-table-row">
                <td className='address-td sm-display-none'>Dakota Rice</td>
                <td className="row-residents">
                  <div className=' residents-name-container  truncate-overflow'>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img
                      src="/zeit.svg"
                      className="roundedCircle"
                      style={{ background: "yellow", zIndex: 2 }}
                    ></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img
                      src="/zeit.svg"
                      className="roundedCircle"
                      style={{ background: "yellow", zIndex: 2 }}
                    ></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img
                      src="/zeit.svg"
                      className="roundedCircle"
                      style={{ background: "yellow", zIndex: 2 }}
                    ></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                  </div>
                  
                    <span className='residents-name-container truncate-overflow'>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                    </span>
               
                </td>
                <td className="text-right">September 2019</td>
              </tr>
              <div style={{height:'15px'}}>
               
               </div>
              {/* ======================= */}
              <tr className="residents-table-row">
                <td className='address-td sm-display-none'>Dakota Rice</td>
                <td className="row-residents">
                  <div className=' residents-name-container  truncate-overflow'>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img
                      src="/zeit.svg"
                      className="roundedCircle"
                      style={{ background: "yellow", zIndex: 2 }}
                    ></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img
                      src="/zeit.svg"
                      className="roundedCircle"
                      style={{ background: "yellow", zIndex: 2 }}
                    ></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img
                      src="/zeit.svg"
                      className="roundedCircle"
                      style={{ background: "yellow", zIndex: 2 }}
                    ></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                  </div>
                  
                    <span className='residents-name-container truncate-overflow'>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                    </span>
               
                </td>
                <td className="text-right">September 2019</td>
              </tr>
              <div style={{height:'15px'}}>
               
               </div>
              {/* -========================== */}

              <tr className="residents-table-row">
                <td className='address-td sm-display-none'>Dakota Rice</td>
                <td className="row-residents">
                  <div className=' residents-name-container  truncate-overflow'>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img
                      src="/zeit.svg"
                      className="roundedCircle"
                      style={{ background: "yellow", zIndex: 2 }}
                    ></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img
                      src="/zeit.svg"
                      className="roundedCircle"
                      style={{ background: "yellow", zIndex: 2 }}
                    ></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img
                      src="/zeit.svg"
                      className="roundedCircle"
                      style={{ background: "yellow", zIndex: 2 }}
                    ></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                  </div>
                  
                    <span className='residents-name-container truncate-overflow'>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                    </span>
               
                </td>
                <td className="text-right">September 2019</td>
              </tr>
              <div style={{height:'15px'}}>
               
              </div>

              {/* ============================= */}
              <tr className="residents-table-row" >
                <td className='address-td sm-display-none'>Dakota Rice</td>
                <td className="row-residents">
                  <div className=' residents-name-container  truncate-overflow'>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img
                      src="/zeit.svg"
                      className="roundedCircle"
                      style={{ background: "yellow", zIndex: 2 }}
                    ></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img
                      src="/zeit.svg"
                      className="roundedCircle"
                      style={{ background: "yellow", zIndex: 2 }}
                    ></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                    <img
                      src="/zeit.svg"
                      className="roundedCircle"
                      style={{ background: "yellow", zIndex: 2 }}
                    ></img>
                    <img src="/zeit.svg" className="roundedCircle"></img>
                  </div>
                  
                    <span className='residents-name-container truncate-overflow'>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                      <p>hello,</p>
                    </span>
               
                </td>
                <td className="text-right">September 2019</td>
              </tr>

            
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};
