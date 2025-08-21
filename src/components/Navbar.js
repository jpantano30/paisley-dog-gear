import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img
            src="/assets/logo.jpg"
            alt="Paisley Dog Gear Logo"
            className="nav-logo"
          />
          <span className="site-name">Paisley Dog Gear & Training</span>
        </Link>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/options" onClick={closeMenu}>Gear Options</Link></li>
        {/* <li><Link to="/colors" onClick={closeMenu}>Colors</Link></li> */}
        {/* <li><Link to="/pricing" onClick={closeMenu}>Pricing</Link></li> */}
        <Link to="/builder" onClick={closeMenu}>Builder</Link>
        <li><Link to="/order" onClick={closeMenu}>Order</Link></li>
        <li><Link to="/training" onClick={closeMenu}>Training</Link></li>
        <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
};

export default Navbar;
