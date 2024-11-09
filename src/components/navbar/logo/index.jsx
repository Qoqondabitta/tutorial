import React from "react";
import "./logo.css";
import logo from "../../../assets/logos/logo.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <div className="center cursor">
          <img className="logo-image" src={logo} />
          <h3 className="column-center gap-5">
            <p className="h3">XON</p>
            <p className="h3">GYM</p>
            {/* <p>X</p>O<p>N</p> */}
          </h3>
        </div>
      </NavLink>
    </>
  );
};

export default Logo;
