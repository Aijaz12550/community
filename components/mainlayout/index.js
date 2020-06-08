import React from "react";
import { Navbar, Image } from 'react-bootstrap'

import "../../styles/mainlayout/index.scss";

export const Container = ({ children }) => (
  <div className='main-layout' style={{ backgroundColor: '#F6F7FB' }}>
    <Navbar style={{ backgroundColor: '#F6F7FB' }}>
      <Navbar.Brand>
        <Image className='profile-image' src={'/assets/mockup/bandLogo.png'} />
      </Navbar.Brand>
    </Navbar>
    <div className="main-container">
      <div className="main-container-child">{children}</div>
    </div>
  </div>
);
