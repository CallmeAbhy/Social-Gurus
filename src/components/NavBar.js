import React, { createContext } from 'react'
import Login from './Login';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './Landing';
const NavBar = () => {
  
  return (
    
    <div>
      
     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="">Organization</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={ Link } to="/Posting">Posting</Nav.Link>
            <Nav.Link as={ Link } to="/SearchSec">Profile</Nav.Link>
            
          </Nav>
          <Nav className="size-fix">
            <Nav.Link as={Link} to="/Login" >Login</Nav.Link>
            <NavDropdown title="Register" id="collasible-nav-dropdown">
              
              <NavDropdown.Item as={Link} to="/Employee">
                Employee
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Organization">Organization</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    

    
  )
}

export default NavBar
