import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoMdArrowDropdown } from "react-icons/io";

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
                    renderMenuOnMount={true}
                    title={
                      <span className="ul-text-color fs-2  ">
                        Services <IoMdArrowDropdown className="fs-1 ms-0" />
                      </span>
                    }
                    id={` offcanvasNavbarDropdown-expand-${expand}`}
                    className="mt-3   "
                  >
                    <NavDropdown.Item href="/digital-marketing">
                      Digital Marketing
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/websites">
                      Websites
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/mobile-apps">
                      Mobile apps
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
