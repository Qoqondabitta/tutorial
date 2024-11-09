import React from "react";
import "./navbar.css";
import Logo from "./logo";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="main-common-style navbar-background center border-bottom-main">
      <div className="row-center-between container-common-style">
        <Logo />
        <div className="center gap-20">
          <a className="link">Home</a>
          <a className="link">Exercises</a>
          <a className="link">Contacts</a>
        </div>
        <div className="center gap-20">
          <a
            className="link"
            href="https://www.google.com/maps?q=80+Bloor+West+Street"
            target="_blank"
          >
            <FaMapMarkerAlt size="1.25rem" />
          </a>
          <a className="link" href="#footer">
            <FaPhoneAlt size="1.25rem" />
          </a>
          <a className="link" href="#footer">
            <FaInfo size="1.25rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
