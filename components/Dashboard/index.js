import React, {useEffect} from "react";
import { SideBar } from "./sidebar";
import NavBar from "./navbar";
import Footer from "./footer";
import { routes } from "./dashboardRoutes";
import { useRouter } from "next/router";
export * from "./viewResidents";

export const DashBoard = ({ users,_signout, _inviteMember, _residents, ResidentsReducer }) => {
  const router = useRouter();

  // function to invite members...
  // _inviteMember("family id")

  /**
   * users contain all users and family members
   */

   console.log('>>>>>>>>>>>>>>residents>>>>>>>',ResidentsReducer)
  return (
    <div className="wrapper">
      <SideBar />
      <div
        className="main-panel"
        style={{ background: "#F6F7FB", height: "100%" }}
      >
        <NavBar _signout={_signout}/>
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
                  {val.component}
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
