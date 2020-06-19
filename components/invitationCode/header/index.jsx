import React from "react";
import { Image } from "react-bootstrap";
import '../../../styles/invitaionCode/header.scss'
import Link from 'next/link'

export const LayoutHeader = ({ children }) => {
  return (
    <div className="layout-header">
      <Link href='/'>
      <Image  src="/assets/mockup/logoAndTitle.png" />
      </Link>
      <div>{children}</div>
    </div>
  );
};
