import React, { useState } from "react";
import { Navbar, Nav, Button, Modal, Container } from "react-bootstrap";
import logo from "../assets/logo.jpg";
import "../Styles/NavbarSection.css";
import Member from "../components/Membership/Member";

const NavbarSection = () => {
  const [showMember, setShowMember] = useState(false);
  const handleShowMember = () => setShowMember(true);
  const handleCloseMember = () => setShowMember(false);

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className="custom-navbar"
        collapseOnSelect
      >
        <Container fluid>
          
          <Navbar.Brand href="/" className="navbar-brand">
            <img src={logo} alt="NHRC Logo" className="navbar-logo" />
          </Navbar.Brand>

          
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" />

         
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="navbar-center mx-auto">
              <Nav.Link href="#home" className="nav-link-custom fw-bold">
                Home
              </Nav.Link>

              
              <div className="nav-item-with-dropdown">
                <Nav.Link href="#about" className="nav-link-custom fw-bold">
                  About
                </Nav.Link>
                <div className="dropdown-hover-menu">
                  <a href="#board-members" className="dropdown-item-hover">
                    Board Members
                  </a>
                  <a href="#benefits" className="dropdown-item-hover">
                    Board Member Benefits
                  </a>
                </div>
              </div>

           
              <div className="nav-item-with-dropdown">
                <Nav.Link href="#services" className="nav-link-custom fw-bold">
                  Services
                </Nav.Link>
                <div className="dropdown-hover-menu">
                  <a href="#global" className="dropdown-item-hover">
                    Global Networking
                  </a>
                  <a href="#knowledge" className="dropdown-item-hover">
                    Knowledge Sharing
                  </a>
                  <a href="#skills" className="dropdown-item-hover">
                    Update Skills & Training
                  </a>
                  <a href="#jobs" className="dropdown-item-hover">
                    Jobs & Job Fairs
                  </a>
                  <a href="#talent" className="dropdown-item-hover">
                    Talent Publication
                  </a>
                </div>
              </div>

              <Nav.Link href="#current-job" className="nav-link-custom fw-bold">
                Current Job
              </Nav.Link>
              <Nav.Link href="#events" className="nav-link-custom fw-bold">
                CSR Events
              </Nav.Link>
             
              <Nav.Link href="#chapters" className="nav-link-custom fw-bold">
                Chapters
              </Nav.Link>
               <Nav.Link href="#profile" className="nav-link-custom fw-bold">
                Block Profile
              </Nav.Link>
              
              <Nav.Link href="#contact" className="nav-link-custom fw-bold">
                Contact Us
              </Nav.Link>
            </Nav>

          
            <div className="navbar-right">
              <Button
                variant="outline-success"
                className="btn-custom-green"
                onClick={handleShowMember}
              >
                MEMBERSHIP
              </Button>

              <Button
                variant="outline-danger"
                className="btn-outline-danger-custom"
              >
                LOGIN
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <Modal
        show={showMember}
        onHide={handleCloseMember}
        centered
        size="xl"
        backdrop="static"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold text-primary">
            Membership Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3">
          <Member />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarSection;
