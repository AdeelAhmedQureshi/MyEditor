import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css"; // Navbar-specific styles

const Navbar = ({ isDarkMode }) => {
  return (
    <nav className={`navbar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="logo">
        <span className="logo-my">My</span>
        <span className="logo-editor">Editor</span>
      </div>
      <ul className="navlist">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
