import React from "react";
import { Link } from "react-router-dom";

// css of this file is in header.scss
export const MenuItems = ({ closeDrawer }) => {
  return (
    <>
      <ul>
        <li>
          <Link to="/" onClick={closeDrawer}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/work" onClick={closeDrawer}>
            WORK
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={closeDrawer}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeDrawer}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeDrawer}>
            CONTACT
          </Link>
        </li>
      </ul>
    </>
  );
};
