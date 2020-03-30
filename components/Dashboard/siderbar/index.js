import React, { createRef } from "react";
import Link from "next/link";
import { Nav } from "reactstrap";
import { routes } from "../dashboardRoutes";
import { useRouter } from "next/router";

export const SideBar = () => {
  const sidebar = createRef();
  const router = useRouter();
  return (
    <div className="sidebar" data-color="red" data-active-color="white">
      <div className="logo" style={{ color: "black" }}>
        <a
          href="#"
          className="simple-text logo-normal"
          style={{ color: "white" }}
        >
          Community Dashboard
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar} style={{ color: "black" }}>
        <Nav>
          {routes.map((prop, key) => {
            return (
              <li key={key}>
                <Link
                  href="/dashboard/[user]/[role]"
                  as={`/dashboard/user/${prop.path}`}
                >
                  <div
                    className="nav-link"
                    style={
                      router.query.role === prop.path
                        ? { background: "#296", marginTop: "25px" }
                        : { marginTop: "25px" }
                    }
                  >
                    <i
                      className={prop.icon}
                      style={{
                        color: "white",
                        minWidth: "20px",
                        fontSize: "18px"
                      }}
                    ></i>
                    <p
                      style={{
                        color: "white",
                        minWidth: "30px",
                        width: "100%"
                      }}
                    >
                      {prop.name}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
};
