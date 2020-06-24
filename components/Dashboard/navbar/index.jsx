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
import { Image } from "react-bootstrap";
import "../../../styles/navbar/index.scss";
import NotificationList from "../notificationList";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      dropdownOpenNotification: false,
      color: "transparent",
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.sidebarToggle = React.createRef();
  }
  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent",
      });
    } else {
      this.setState({
        color: "dark",
      });
    }
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  dropdownToggleNotification(e) {
    this.setState({
      dropdownOpenNotification: !this.state.dropdownOpenNotification,
    });
  }

  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  }

  render() {
    const {
      profileReducer: { getProfile },
    } = this.props;

    console.log(this.props, "profileReducerr");
    return (
      <Navbar expand="lg" className={"navbar-absolute fixed-top nav-bar-main"}>
        <Container fluid className="container" style={{}}>
          <div className="divContainer">
            <div
              className="navbar-wrapper"
              style={{ display: "flex", flexBasis: "10%" }}
            >
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
            </div>
            <Nav
              navbar
              style={{
                display: "flex",
                flexBasis: "90%",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {/* <Dropdown
                  nav
                  isOpen={this.state.dropdownOpenNotification}
                  toggle={(e) => this.dropdownToggleNotification(e)}
                >
                  <DropdownToggle nav style={{ color: "black" }}>
                    <Image
                      className="roundedCircle"
                      src="/assets/mockup/Notifications.png"
                    />
                  </DropdownToggle>
                  
                  <DropdownMenu right className="">
                    <DropdownItem tag="a">Action</DropdownItem>
                    <DropdownItem tag="a">Another Action</DropdownItem>
                    <DropdownItem tag="a" onClick={this.props._signout}>
                      Sign Out
                    </DropdownItem>

                  </DropdownMenu>
                </Dropdown> */}
                <NotificationList />

                <NavItem
                  style={{
                    width: "38px",
                    height: "38px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "100%",
                  }}
                >
                  <Image
                    className="roundedCircle"
                    style={{ width: 38, height: 38, borderRadius: 19 }}
                    src="/assets/mockup/img10.png"
                  />
                </NavItem>
                <NavItem>
                  <div className="nav-link btn-magnify">
                    <span className="profileName">{getProfile.fullName}</span>
                  </div>
                </NavItem>
                <Dropdown
                  nav
                  isOpen={this.state.dropdownOpen}
                  toggle={(e) => this.dropdownToggle(e)}
                >
                  <DropdownToggle
                    caret
                    nav
                    style={{ color: "black" }}
                  ></DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag="a">Action</DropdownItem>
                    <DropdownItem tag="a">Change Password</DropdownItem>
                    <DropdownItem tag="a" onClick={this.props._signout}>
                      Sign Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </Nav>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
