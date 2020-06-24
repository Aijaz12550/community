import React, { useEffect } from "react";
import { SideBar } from "./sidebar";
import NavBar from "./navbar";
import { routes } from "./dashboardRoutes";
import { useRouter } from "next/router";
import { getProfile } from "$middleware";
export * from "./viewResidents";

export const DashBoard = (props) => {
  const router = useRouter();

  useEffect(() => {
    const { dispatch } = props;
    dispatch(getProfile());
  }, [props?.profileReducer?.getProfile?.email]);

  return (
    <div className="wrapper">
      <SideBar />
      <div
        className="main-panel"
        style={{ background: "#F6F7FB", height: "100%" }}
      >
        <NavBar {...props} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {routes().map((val, key) => {
            if (router?.query?.role === val.path) {
              return (
                <div key={key} style={{ padding: "10px" }}>
                  <val.component {...props} />
                </div>
              );
            }
          })}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};
