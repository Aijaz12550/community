import React from "react";
import { Image } from "react-bootstrap";
import '../../../styles/invitaionCode/header.scss'

export const LayoutHeader = ({ children }) => {
  return (
    <div className="layout-header">
      <Image src="/assets/mockup/logoAndTitle.png" />
      <div>{children}</div>
    </div>
  );
};
