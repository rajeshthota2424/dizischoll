import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = (props) => {

  return (
    <div className= 'dashboard-container' >
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" className="img-container" >
        <Navbar.Brand className="me-auto" href="#home">
          <img
            className="navbar-logo"
            alt="nav-logo"
            src="http://192.168.0.116:8080/images/logo_small.png"
          />
        </Navbar.Brand>
      
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto list-item">
          
            <Nav.Link href="#home" className="list-name">HOME</Nav.Link>
            <Nav.Link href="#about" className="list-name">ABOUT</Nav.Link>
            <Nav.Link href="#features" className="list-name">FEATURES</Nav.Link>
            <Nav.Link href="#screens" className="list-name">SCREENS</Nav.Link>
            <Nav.Link href="#download" className="list-name">DOWNLOAD</Nav.Link>
            <Nav.Link href="#contact" className="list-name">CONTACT</Nav.Link>
            <Link className="nav-link list-name" to="/registration">
              REGISTRATION
            </Link>
            <Link className="nav-link list-name" to="/login">
              SIGN IN
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr className="hr-line"/>
    </div>
  );
};

export default NavBar;