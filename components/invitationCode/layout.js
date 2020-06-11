import React from "react";
import { LayoutHeader } from "./header";

export const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <LayoutHeader />
      {children}
    </div>
  );
};
