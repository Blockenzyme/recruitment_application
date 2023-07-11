import React from 'react';
import { Link } from "react-router-dom";
import styles from './Footer.module.css';
import logo from "./Logo.jpg";
import Brand from "../navbar/Blockenzyme.svg"
import DropdownComp from './Dropdown';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';
import { FaGoogle, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai"

function Footer(){
  let iconStyle ={ color: "#0b25ad", fontSize: "2rem", padding: "5px"}
    return (
      <div className={styles.footer}>
        <section className={styles.footerbody}>
          <div className={styles.logosection}>
            <img src={logo} alt="company logo" />
            <img src={Brand} alt="brand" className={styles.companyName} />
          </div>
          <div className={styles.linkSection}>
            <ListGroup horizontal className={styles.listgroup}>
              <ListGroupItem className={styles.list}>
                <ListGroupItemHeading>Blockenzyme</ListGroupItemHeading>
                <ListGroupItemText tag="ul">
                  <li>
                    <Link to="#">About</Link>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem className={styles.list}>
                <ListGroupItemHeading>Employeers</ListGroupItemHeading>
                <ListGroupItemText tag="ul">
                  <li>
                    <Link to="#">Get a FREE employer account</Link>
                  </li>
                  <li>
                    <Link to="#">Employer Centre</Link>
                  </li>
                  <li>
                    <Link to="#">Post a job</Link>
                  </li>
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem className={styles.list}>
                <ListGroupItemHeading>Community</ListGroupItemHeading>
                <ListGroupItemText tag="ul">
                  <li>
                    <Link to="#">Help/Contact Guidelines</Link>
                  </li>
                  <li>
                    <Link to="#">Terms of use</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy and cookies</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy centre</Link>
                  </li>
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem className={styles.list}>
                <ListGroupItemHeading>Work with us</ListGroupItemHeading>
                <ListGroupItemText tag="ul">
                  <li>
                    <Link to="#">Advertisers</Link>
                  </li>
                  <li>
                    <Link to="#">Developers</Link>
                  </li>
                  <li>
                    <Link to="#">Careers</Link>
                  </li>
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
            <div className={styles.footerMid}>
              <span className={styles.iconsDiv}>
                <Link to="#">
                  <AiFillInstagram style={iconStyle} />
                </Link>
                <Link to="#">
                  <FaFacebookF style={iconStyle} />
                </Link>
                <Link to="#">
                  <FaLinkedinIn style={iconStyle} />
                </Link>
                <Link to="#">
                  <FaTwitter style={iconStyle} />
                </Link>
                <Link to="#">
                  <FaGoogle style={iconStyle} />
                </Link>
              </span>
              <span className={styles.DropdownComp}>
                <DropdownComp />
              </span>
            </div>
          </div>
        </section>
        <section className={styles.bottomline}>
          <hr />
          <p>
            Copyright © 2008-2023, Blockenzyme, Inc. "Blockenzyme" and logo are
            registered trademarks of Blockenzyme, Inc
          </p>
        </section>
      </div>
    );
}

export default Footer;
