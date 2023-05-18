import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Blockenzyme</Link>
        <Link to="/find-jobs">Find Jobs</Link>
        <Link to="/hire-employees">Hire Employees</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Navbar