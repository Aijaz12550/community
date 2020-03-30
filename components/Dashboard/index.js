import React from "react";
import { SideBar } from "./siderbar";
import NavBar from "./navbar";
import Footer from "./footer";
import { routes } from "./dashboardRoutes";
import { useRouter } from "next/router";
export * from "./viewResidents";

export const DashBoard = props => {
  const router = useRouter();
  console.log("== redux-state ==>", props);
  return (
    <div className="wrapper">
      <SideBar />
      <div className="main-panel" style={{ background: "#eee" }}>
        <NavBar heading={router?.query?.role?.replace(/_/, " ")} />

        <div style={{ marginTop: "80px", minHeight: "185vh" }}>
          {routes.map((val, key) => {
            if (router?.query?.role === val.path) {
              return (
                <div key={key} style={{ padding: "10px" }}>
                  {val.component}
                </div>
              );
            }
          })}
        </div>

        <Footer />
      </div>
    </div>
  );
};
