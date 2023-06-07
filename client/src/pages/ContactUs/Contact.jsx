import React from "react";
import { Link } from "react-router-dom";
import "./Contact.styles.css";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contactheading">Contact Us</h1>
      <hr />
      <div className="contactbody">
        <p>
          <span className="contacttext">
            We love our customers, so feel free to contact us during normal
            business hours.
          </span>
        </p>
        <span>
          <br />
        </span>
        <Link to="mailto:swapnilkole7500@gmail.com">
          <p className="contactlink">swapnilkole7500@gmail.com</p>
        </Link>
      </div>
      <div className="contactbottom">
        <p>
          <span className="contactbottomtext">Blockenzyme</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
