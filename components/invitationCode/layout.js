import React from "react";
import { LayoutHeader } from "./header";
import '../../styles/invitaionCode/layout.scss'

export const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <LayoutHeader />
      {children}
    </div>
  );
};
