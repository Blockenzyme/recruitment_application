import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import LoginForm from "../forms/login/LoginForm";
import SignUpForm from "../forms/signup/SignUpForm";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleLoginModal = () => setLoginModalOpen(!loginModalOpen);
  const toggleSignupModal = () => setSignupModalOpen(!signupModalOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Blockenzyme</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem className="px-4">
              <Link to="/find-jobs" style={{ textDecoration: "none" }}>
                Find Jobs
              </Link>
            </NavItem>
            <NavItem className="px-4">
              <Link to="/hire-employees" style={{ textDecoration: "none" }}>
                Hire Employees
              </Link>
            </NavItem>
            <NavItem className="px-4">
              <Link to="/about" style={{ textDecoration: "none" }}>
                About
              </Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem className="px-4">
              <Button  onClick={toggleLoginModal}>
                Login
              </Button>
            </NavItem>
            <NavItem>
              <Button color="primary" onClick={toggleSignupModal}>
                Sign Up
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Modal isOpen={loginModalOpen} toggle={toggleLoginModal} centered>
        <ModalHeader toggle={toggleLoginModal}>Login</ModalHeader>
        <ModalBody><LoginForm/></ModalBody>
      </Modal>

      <Modal isOpen={signupModalOpen} toggle={toggleSignupModal} centered>
        <ModalHeader toggle={toggleSignupModal}>Sign Up</ModalHeader>
        <ModalBody><SignUpForm/></ModalBody>
      </Modal>
    </div>
  );
};

export default NavbarComponent;



