import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import SignUpForm from "../SignupForm";
import LoginForm from "../LoginForm";

import Auth from "../../utils/auth";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className="brand">
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to="/home"
            >
              NO<span style={{ color: "#558C8F" }}>FOMO</span>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-5">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#558C8F" : "black",
                  textDecoration: "none",
                })}
                to="/home"
                className="nav"
              >
                Home
              </NavLink>
              {/* <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#558C8F" : "black",
                  textDecoration: "none",
                })}
                to="/categories"
                className="nav"
              >
                Categories
              </NavLink> */}

              {/* <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#558C8F" : "black",
                  textDecoration: "none",
                })}
                to="/reviews"
                className="nav"
              >
                Reviews
              </NavLink> */}

              {Auth.loggedIn() ? (
                <>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#558C8F" : "black",
                      textDecoration: "none",
                    })}
                    to="/dashboard"
                    className="nav"
                  >
                    Dashboard
                  </NavLink>
                </>
              ) : (
                <></>
              )}
              <div className="logout">
                {Auth.loggedIn() ? (
                  <>
                    <NavLink className="nav signup" onClick={Auth.logout}>
                      Logout
                    </NavLink>
                  </>
                ) : (
                  <NavLink
                    className="nav signup"
                    onClick={() => setShowModal(true)}
                  >
                    Login/Sign Up
                  </NavLink>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link
                    eventKey="login"
                    style={{ backgroundColor: "#558C8F", marginRight: 10 }}
                    active={{ color: "#558C8F", backgroundColor: "white" }}
                  >
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="signup"
                    style={{ backgroundColor: "#558C8F" }}
                    active={{ color: "#558C8F", backgroundColor: "white" }}
                  >
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default Navigation;
