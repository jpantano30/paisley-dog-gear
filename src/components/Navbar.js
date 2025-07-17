import React from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";
// import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-link">
          <img src="/assets/logo.jpg" alt="Paisley Dog Gear Logo" className="nav-logo" />
          <span className="site-name">Paisley Dog Gear & Training</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/options">Gear Options</Link></li>
        <li><Link to="/colors">Colors</Link></li>
        <li><Link to="/pricing">Pricing</Link></li> 
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/training">Training</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
