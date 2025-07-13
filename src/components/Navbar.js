import React from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Paisley Dog Gear & Training</Link>
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
