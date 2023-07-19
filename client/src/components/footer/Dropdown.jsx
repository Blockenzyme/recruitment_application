import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
import styles from './Footer.module.css';

function DropdownComp({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex pb-2">
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
        direction={direction}
      >
        <DropdownToggle className={styles.dropdownButton} caret>
          Language
        </DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem>English</DropdownItem>
          <DropdownItem>Other Language</DropdownItem>
          <DropdownItem>Other Language</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

DropdownComp.propTypes = {
  direction: PropTypes.string,
};

export default DropdownComp;
