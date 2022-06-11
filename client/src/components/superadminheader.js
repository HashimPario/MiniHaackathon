import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Navbar,Nav,Container} from 'react-bootstrap'
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';




const SuperAdminHeader = () => {

  const location = useLocation();

  const superadminpanel = () => {
    window.location.href = "/superadminpanel"
  }
  
  const hotelsadmin = () => {
    window.location.href = "/hotelsadmin"
  }
  
  const services = () => {
    window.location.href = "/hotelsadmin"
  }
  
  const users = () => {
    window.location.href = "/hotelsadmin"
  }
  
  const logout = () => {
    window.location.href = "/adminlogin"
  }
  
  

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#" onClick={superadminpanel}>Hotel Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" onClick={hotelsadmin}>Hotels Admin</Nav.Link>
          <Nav.Link href="#" onClick={services}>Services</Nav.Link>
          <Nav.Link href="#" onClick={users}>Users</Nav.Link> 
        </Nav>
        <Nav>
          <Nav.Link href="#" onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    )

}

export default SuperAdminHeader;