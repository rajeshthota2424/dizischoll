import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import './NavBar.css';

const NavBar = (props) => {
  const { displayOrHide } = props;

  return (
    <div className={`nav-container`} style={{top:displayOrHide}}>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand className="me-auto" href="#home">
          <img
            className="navbar-logo"
            alt="nav-logo"
            src="http://192.168.0.116:8080/images/logo_small.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-list-item-home">HOME</Nav.Link>
            <Nav.Link href="#about" className="nav-list-item-home">ABOUT</Nav.Link>
            <Nav.Link href="#features" className="nav-list-item-home">FEATURES</Nav.Link>
            <Nav.Link href="#screens" className="nav-list-item-home">SCREENS</Nav.Link>
            <Nav.Link href="#download" className="nav-list-item-home">DOWNLOAD</Nav.Link>
            <Nav.Link href="#contact" className="nav-list-item-home">CONTACT</Nav.Link>
            <Link className="nav-link nav-list-item-home" to="/registration">
              REGISTRATION
            </Link>
            <Link className="nav-link nav-list-item-home" to="/login">
              SIGN IN
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <hr classNameName="hr-line" /> */}
    </div>
  );
};

export default NavBar;