import React from "react";
import 'boxicons';
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.foot}>
      <div className={styles.footer}>
        <span className="footer-text">Copyright © 2023 Blockenzyme</span>
        <span className="footer-icons">
          <a href="https://www.linkedin.com/company/blockenzyme/">
            <box-icon type="logo" name="linkedin" color="azure"></box-icon>
          </a>
          <a href="https://instagram.com/blockenzyme_meta?igshid=ZDc4ODBmNjlmNQ==">
            <box-icon type="logo" name="instagram" color="azure"></box-icon>
          </a>
          <a href="https://www.facebook.com/profile.php?id=10009250a href">
            <box-icon type="logo" name="facebook" color="azure"></box-icon>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
