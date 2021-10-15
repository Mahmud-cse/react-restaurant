import React from 'react';
import {Button, Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import image from '../img/logo.png'
import './NavBar.css';

const NavBar = () => {
    return (
        // <div>
        //     <Navbar bg="dark">
        //       <Container>
        //         <Navbar.Brand href="#home">
        //           <img
        //             src={image}
        //             width="180"
        //             className="d-inline-block align-top"
        //             alt="React Bootstrap logo"
        //           />
        //         </Navbar.Brand>
        //       </Container>
        //       <i class="fas fa-shopping-cart"></i>
        //       </Navbar>
        // </div>
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                <NavLink to="/login" className="f-13"   activeStyle={{
                  fontWeight: "bold",
                  color: "white"
                }}>Login</NavLink>
                <NavLink to="/signup" className="f-13"   activeStyle={{
                  color: "white"
                }}>
                     <Button variant="danger" className="rounded-pill">Sign Up</Button>
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