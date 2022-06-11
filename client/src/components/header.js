import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Navbar,Nav,Container} from 'react-bootstrap'
// import { useLocation } from "react-router-dom";
// import { useSelector } from 'react-redux';




const Header = () => {

  // const location = useLocation();

  const gotohome = () => {
    window.location.href = "/"
  }
  
  const gotoabout = () => {
    window.location.href = "/about"
  }
  
  const gotocontact = () => {
    window.location.href = "/contact"
  }
  const gotolog = () => {
    const data = localStorage.getItem("userLogin")
    if(!data){
      window.location.href = "/login"
    }
    else{
      alert("You are already logged in")
    }
  
  }
  
  const gotoreg = () => {
    window.location.href = "/register"
  }
  const logout = () =>{
     localStorage.removeItem("userLogin")
     window.location.href = "/"
  }

  

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#" onClick={gotohome}>Hotel Management</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" onClick={gotohome}>Home</Nav.Link>
          <Nav.Link href="#" onClick={gotoabout}>About</Nav.Link>
          <Nav.Link href="#" onClick={gotocontact}>Contact</Nav.Link> 
          
          {/* <span>cart count: {items.length}</span> */}
        </Nav>
        <Nav>
          <Nav.Link href="#" onClick={gotolog}>Login</Nav.Link>
          
          <Nav.Link eventKey={2} href="#" onClick={gotoreg}>Register</Nav.Link>
          <Nav.Link href="#" onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    )

}

export default Header;