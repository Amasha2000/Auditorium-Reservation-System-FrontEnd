import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import bellIcon from '../Img/bell-icon.png'; 
import userIcon from '../Img/user-icon.png';
import Logo from '../Img/logo.png';
import '../App.css';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
    return (
        <Navbar variant="dark" expand="md" className="custom-navbar px-3">
  <Navbar.Brand href="#home" className="d-flex align-items-center">
    <img src={Logo} alt="University Logo" className="navbar-logo" />
    <span className="navbar-text ms-2">UNIVERSITY OF RUHUNA</span>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#">Upcoming Events</Nav.Link>
      <Nav.Link href="#past">Past Events</Nav.Link>
      <Nav.Link href="#contact">Contact Us</Nav.Link>
      <Nav.Link href="#notifications" className="nav-icon">
        <img src={bellIcon} alt="Bell Icon" className="icon" />
      </Nav.Link>
      <Nav.Link href="#profile" className="nav-icon">
        <img src={userIcon} alt="User Icon" className="icon" />
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}

export default CustomNavbar;
