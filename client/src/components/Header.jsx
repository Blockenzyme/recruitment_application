import React from "react";
import {Link} from "react-router-dom";
import { Navbar,NavbarBrand,Nav,NavItem} from 'reactstrap';

function Header(){
    return (
        <div>
        <Navbar>
        <Nav className='navbar'>
          <NavItem>
          <Link to="/" className='navitem' id='home'>HOME</Link>
        </NavItem>
        <NavItem>
          <Link to="/about" className='navitem' id='about'>ABOUT US</Link>
        </NavItem>
        <NavbarBrand className="brandname">BLOCKENZYME</NavbarBrand>
          <NavItem>
          <Link to="/contact" className='navitem' id='contact'>CONTACT US</Link>
        </NavItem>
        </Nav>
      </Navbar>
      </div>
    );
}

export default Header;