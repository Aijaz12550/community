import React, { useEffect } from "react";
import { SideBar } from "./sidebar";
import NavBar from "./navbar";
import { routes } from "./dashboardRoutes";
import { useRouter } from "next/router";
import { getProfile, getAvatar, getCommunity } from "$middleware";
export * from "./viewResidents";

export const DashBoard = (props) => {
  const router = useRouter();
  const {
    dispatch,
    AuthReducer: {
      user: { communityId, access_token },
    },
  } = props;

  useEffect(() => dispatch(getProfile(`bearer ${access_token}`)), [
    props?.profileReducer?.getProfile?.email,
  ]);

  // useEffect(() => dispatch(getAvatar(`bearer ${access_token}`)), [
  //   props?.profileReducer?.getAvatar?.,
  // ]);

  useEffect(
    () =>
      dispatch(
        getCommunity({ Authorization: `bearer ${access_token}`, communityId })
      ),
    [props?.CommunityReducer?.getCommunity?.locationId]
  );

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
