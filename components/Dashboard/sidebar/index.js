import React, { createRef } from "react";
import Link from "next/link";
import { Nav, Col, Card } from "reactstrap";
import { routes } from "../dashboardRoutes";
import { useRouter } from "next/router";
import "../../../styles/sidebar/index.scss";
import { Image } from "react-bootstrap";

export const SideBar = () => {
  const sidebar = createRef();
  const router = useRouter();
  return (
    <div
      className="sidebar"
      data-color="red"
      data-active-color="white"
      style={{
        height: "100%",
        border: "none",
        boxShadow: "1px 0px 25px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="sidebar-header logo">
        <img src="/assets/mockup/Logo.png" style={{ width: 154, height: 75 }} />
      </div>

      <div className="sidebar-wrapper scrollBarStyle-Y sidebar-content">
        <div
          className="navUlListHeading"
          style={{ padding: "0 15px 0px 35px ", margin: "0 0 10px 0" }}
        >
          Main Navigation
        </div>
        <div
          className="sidebar-wrapper scrollBarStyle-Y sidebar-body"
          ref={sidebar}
          style={{ color: "black", overflowY: "auto" }}
        >
          <Nav style={{ height: 350 }}>
            {routes().map((prop, key) => {
              return (
                <li
                  key={key}
                  className="cursorPoint"
                  style={{ height: 50, marginBottom: 10 }}
                >
                  <Link
                    href="/dashboard/[user]/[role]"
                    as={`/dashboard/user/${prop.path}`}
                  >
                    <div
                      className="nav-link"
                      style={
                        router.query.role === prop.path
                          ? {
                              padding: "16px 15px 12px 30px ",
                              marginRight: "5px",
                              display: "flex",
                              alignItems: "center",
                              color: "#009999",
                              borderLeft: "4px solid #009999",
                              background: "#F0F9F9",
                              borderRadius: "0px 76px 76px 0px",
                            }
                          : {
                              // marginTop: "25px",
                              padding: "16px 15px 12px 34px ",
                              display: "flex",
                              alignItems: "center",
                            }
                      }
                    >
                      {prop.icon}

                      <p
                        style={{
                          width: "100%",
                          height: "22px",
                          top: " calc(50% - 22px/2 + 2px)",
                          paddingLeft: "15px",
                          fontFamily: "Open Sans",
                          fontStyle: " normal",
                          fontWeight:
                            router.query.role === prop.path ? "bold" : "normal",
                          color:
                            router.query.role === prop.path
                              ? "#009999"
                              : "#344563",
                          fontSize: "16px",
                          lineHeight: "22px",
                        }}
                      >
                        {prop.name}
                      </p>
                      {router.query.role === prop.path && (
                        <img
                          src="/assets/mockup/icon-back-icon.png"
                          style={{ width: 20, height: 20 }}
                        />
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </Nav>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 450,
            }}
          >
            <div className="sidebar-card">
              <div className="sidebar-card-content">
                <Image
                  className="roundedCircle"
                  style={{
                    width: 140,
                    height: 140,
                    borderRadius: 70,
                    background: "none",
                  }}
                  src="/assets/mockup/sidebarImg.png"
                />

                <p className="card-name">Macado Leam</p>
                <p className="card-title">Board Member</p>

                <div className="sidebar-card-footer">
                  <p className="memberSince">Member Since</p>
                  <p className="f-date">September 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
