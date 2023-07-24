import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import "../styles/Navbar.css";
import logo from "../assets/escape_logo.jpeg";

function Navbar() {
  return (
    <ul id="navbar">
      <div className="navbarLogo-container">
        <img id="navbarLogo" src={logo} alt="Escape Logo" />
      </div>
      <div className="navbarItem-container">
        <ScrollLink
          className="navbarItem"
          to="about"
          smooth={true}
          duration={500}
        >
          About
        </ScrollLink>
        <ScrollLink
          className="navbarItem"
          to="features"
          smooth={true}
          duration={500}
        >
          Features
        </ScrollLink>
        <ScrollLink
          className="navbarItem"
          to="footer"
          smooth={true}
          duration={500}
        >
          Contact Us
        </ScrollLink>
      </div>
    </ul>
  );
}

export default Navbar;
