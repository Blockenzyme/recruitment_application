import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className={styles.Navbar} expand="lg">
        <NavbarToggler onClick={toggle} className={styles.navbarToggler}/>
        <NavbarBrand href="/" className={styles.brandname}>
          BLOCKENZYME
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem className={styles.navItem}>
              <Link
                to="/"
                className={styles.home}
                style={{ textDecoration: "none" }}
              >
                HOME
              </Link>
            </NavItem>
            <NavItem className={styles.navItem}>
              <Link
                to="/about"
                className={styles.about}
                style={{ textDecoration: "none" }}
              >
                ABOUT US
              </Link>
            </NavItem>
            <NavItem className={styles.navItem}>
              <Link
                to="/contact"
                className={styles.contact}
                style={{ textDecoration: "none" }}
              >
                CONTACT US
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;