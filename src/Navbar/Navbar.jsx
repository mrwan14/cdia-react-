import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "../images/Cdia logo.png";
import "./navbar.css";
export default function Navigationbar() {
  return (
    <div>
      {["lg"].map((expand) => (
        <Navbar key={expand} sticky="top" expand={expand} className="bg-black">
          <Container>
            <Navbar.Brand href="/" className="logo">
              <img src={logo} alt="" className="w-100" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand} `}
              className=" bg-warning "
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className=" bg-black"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}  `}
                  className=" text-white"
                >
                  <h3>Cdia</h3>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3   ">
                  <Nav.Link className="ul-text-color fs-2 mt-3" href="/">
                    Home
                  </Nav.Link>
                  <Nav.Link className="ul-text-color fs-2 mt-3" href="/about">
                    About
                  </Nav.Link>
                  <NavDropdown
                    title={
                      <span className="ul-text-color fs-2  ">Services</span>
                    }
                    id={` offcanvasNavbarDropdown-expand-${expand}`}
                    className="mt-3 "
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider className="bg-warning" />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    className="ul-text-color fs-2 mt-3"
                    href="/contact-us"
                  >
                    Cotact us
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
