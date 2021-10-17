import React from 'react';
import {Button, Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import image from '../img/logo2.png'
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
        <Navbar className="fixed-top" style={{backgroundColor:"#CECFD4"}}  collapseOnSelect expand="lg">
          {/* container */}
          <Container>
          <Navbar.Brand href="/home">
                     <img
                        src={image}
                        width="180"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {/* stack */}
            <Stack direction="horizontal" gap={3}>
            <i class="fas fa-shopping-cart"></i>
                <NavLink to="/login" className="f-13" style={{color:"black"}}   activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}>Login</NavLink>
                <NavLink to="/signup" className="f-13"   activeStyle={{
                  color: "white"
                }}>
                     <Button variant="dark" className="rounded-pill">Sign Up</Button>
                </NavLink>
            </Stack>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
    );
};

export default NavBar;