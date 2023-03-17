import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
   
      <div>
        <h3>Ohh! Page not found</h3>
        <p>We cant seem to find the page youre looking for</p>
        <Link to="/">back home</Link>
      </div>
   
  );
}

export default Error