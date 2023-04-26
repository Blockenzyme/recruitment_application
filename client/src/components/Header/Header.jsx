import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className={styles.Navbar} expand="md">
        <NavbarBrand href="/" className={styles.brandname}>BLOCKENZYME</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/" className={styles.home}>HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" className={styles.about}>ABOUT US</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" className={styles.contact}>CONTACT US</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;