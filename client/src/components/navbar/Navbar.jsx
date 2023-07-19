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
import UserTypeComponent from "../usertype/UserTypeModal";
import styles from "./Navbar.module.css";
import logo from "./Blockenzyme.svg";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  // const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  const toggleLoginModal = () => setLoginModalOpen(!loginModalOpen);
  const toggleSignupModal = () => setSignupModalOpen(!signupModalOpen);
  const toggleSuccessModal = () => setSuccessModalOpen(!successModalOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" className="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={`${styles.nav} mx-auto`} navbar>
            <NavItem className="px-4">
              <Link
                to="/find-jobs"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                Find Jobs
              </Link>
            </NavItem>
            <NavItem className="px-4">
              <Link
                to="/hire-employees"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                Hire Employees
              </Link>
            </NavItem>
            <NavItem className="px-4">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                About
              </Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem className="px-3">
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "none",
                }}
                onClick={toggleSignupModal}
              >
                Sign Up
              </Button>
            </NavItem>
            <NavItem>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "2px solid #5540C7",
                }}
                onClick={toggleLoginModal}
              >
                Login
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Modal isOpen={loginModalOpen} toggle={toggleLoginModal} centered>
        <ModalHeader toggle={toggleLoginModal}>Login</ModalHeader>
        <ModalBody>
          <LoginForm />
        </ModalBody>
      </Modal>

      <Modal isOpen={signupModalOpen} toggle={toggleSignupModal} centered>
        <ModalHeader toggle={toggleSignupModal}>Sign Up</ModalHeader>
        <ModalBody>
          <SignUpForm />
        </ModalBody>
      </Modal>

      <Modal isOpen={successModalOpen} toggle={toggleSuccessModal} centered>
        <ModalHeader toggle={toggleSuccessModal}>Success!</ModalHeader>
        <ModalBody>
          <UserTypeComponent />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default NavbarComponent;
