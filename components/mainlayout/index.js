import React from "react";
import "../../styles/mainlayout/index.scss";

export const Container = ({ children }) => (
  <div className="main-container">
    <div className="main-container-child">{children}</div>
  </div>
);
