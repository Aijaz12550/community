import React from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";
import { Image } from 'react-bootstrap';


import "../../../styles/navbar/index.scss";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent"
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.sidebarToggle = React.createRef();
  }
  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent"
      });
    } else {
      this.setState({
        color: "dark"
      });
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  }

  render() {
    return (
      <Navbar
        expand="lg"
        className={"navbar-absolute fixed-top nav-bar-main"}>
        <Container fluid style={this.state.isOpen ? { marginTop: 7, padding: '0 10px 0 10px' } : { margin: 0, padding: '0 10px 0 10px' }}>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref={this.sidebarToggle}
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            {/* <NavbarBrand href="/">
              <p style={{ color: "black" }}>{this.props.heading}</p>
            </NavbarBrand> */}
          </div>


          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="justify-content-end"
            style={this.state.isOpen ? { marginTop: 19, background: '#fff' } : { margin: 0 }}
          >

            <Nav navbar>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <NavItem style={{ marginRight: 25, }}>
                  {/* <Link href="/"> */}
                  <div className="nav-link btn-magnify" style={{}}>
                    <Image className="roundedCircle" src='/assets/mockup/Notifications.png' />
                  </div>
                  {/* </Link> */}
                </NavItem>
                <NavItem style={{
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '100%',
                }}>
                  {/* <Link href="/"> */}
                  <Image className="roundedCircle" style={{ width: 38, height: 38, borderRadius: 19 }} src='/assets/mockup/img10.png' />
                  {/* </Link> */}
                </NavItem>
                <NavItem>
                  <div className="nav-link btn-magnify">
                    <span className='profileName'>Bradley Robin</span>
                  </div>
                </NavItem>
                <Dropdown
                  nav
                  isOpen={this.state.dropdownOpen}
                  toggle={e => this.dropdownToggle(e)}
                >
                  <DropdownToggle caret nav style={{ color: 'black' }}>

                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag="a">Action</DropdownItem>
                    <DropdownItem tag="a">Another Action</DropdownItem>
                    <DropdownItem tag="a" onClick={this.props._signout}>Sign Out</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </Nav>
          </Collapse>
        </Container>
      </Navbar >
    );
  }
}

export default Header;
