import React from 'react'
import { Link } from 'react-router-dom';
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src="" alt="not found" />
        <h3>Ohh! Page not found</h3>
        <p>We cant seem to find the page youre looking for</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
}

export default Error