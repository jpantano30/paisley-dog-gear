import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import "@fontsource/cormorant-garamond/700.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gearOpen, setGearOpen] = useState(false);
  const { pathname } = useLocation();

  // close panels on route change
  useEffect(() => {
    setMenuOpen(false);
    setGearOpen(false);
  }, [pathname]);

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  return (
    <nav className="navbar" role="navigation" aria-label="Main">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img src="/assets/logo.jpg" alt="" className="brand-logo" />
          <span className="brand-name">Paisley Dog Gear & Training</span>
        </Link>

        <ul id="primary-links" className={`links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link className={`link ${pathname === "/" ? "active" : ""}`} to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          {/* Desktop dropdown */}
          <li
            className={`has-dropdown ${gearOpen ? "open" : ""}`}
            onMouseEnter={() => setGearOpen(true)} // hover opens
          >
            <button
              type="button"
              className="trigger nav-btn-reset"
              aria-haspopup="true"
              aria-expanded={gearOpen}
              onClick={() => setGearOpen(v => !v)}
              onTouchMove={() => setGearOpen(v => !v)}   // click also toggles
              onMouseLeave={() => setGearOpen(false)} // hover closes
            >
              Gear <span className="caret">▾</span>
            </button>
            <div className="dropdown" role="menu" onClick={() => setGearOpen(false)}>
              <Link className="drop-link" role="menuitem" to="/builder" onClick={() => setMenuOpen(false)}>Builder (Custom)</Link>
              <Link className="drop-link" role="menuitem" to="/quick-order" onClick={() => setMenuOpen(false)}>Quick Order (Presets)</Link>
              <Link className="drop-link" role="menuitem" to="/options" onClick={() => setMenuOpen(false)}>Gear Options</Link>
              {/* <Link className="drop-link" role="menuitem" to="/biothane-dog-leashes-boston" onClick={() => setMenuOpen(false)}>Biothane Hub</Link> */}
            </div>
          </li>

          {/* Mobile accordion */}
          <li className="mobile-accordion">
            <button
              type="button"
              className="accordion-trigger nav-btn-reset"
              aria-controls="gear-sublist"
              aria-expanded={gearOpen}
              onClick={() => setGearOpen(v => !v)}
            >
              <span className="accordion-title">Gear</span>
              <span className={`accordion-caret ${gearOpen ? "open" : ""}`}>▾</span>
            </button>
            <ul id="gear-sublist" className={`sublist ${gearOpen ? "open" : ""}`}>
              <li><Link className="sub-link" to="/builder" onClick={() => setMenuOpen(false)}>Builder (Custom)</Link></li>
              <li><Link className="sub-link" to="/quick-order" onClick={() => setMenuOpen(false)}>Quick Order (Presets)</Link></li>
              <li><Link className="sub-link" to="/options" onClick={() => setMenuOpen(false)}>Gear Options</Link></li>
            </ul>
          </li>

          <li>
            <Link className={`link ${pathname === "/training" ? "active" : ""}`} to="/training" onClick={() => setMenuOpen(false)}>
              Training
            </Link>
          </li>
          <li>
            <Link className={`link ${pathname === "/gallery" ? "active" : ""}`} to="/gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>
          </li>
          {/* <li>
            <Link className={`link ${pathname === "/boston-dog-trainer-north-end" ? "active" : ""}`}
                  to="/boston-dog-trainer-north-end" onClick={() => setMenuOpen(false)}>
              Boston
            </Link>
          </li>

          <li>
            <Link className={`link ${pathname === "/biothane-dog-leashes-boston" ? "active" : ""}`}
                  to="/biothane-dog-leashes-boston" onClick={() => setMenuOpen(false)}>
              Biothane
            </Link>
          </li> */}

        </ul>

        <button
          type="button"
          className={`hamburger nav-btn-reset ${menuOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          aria-controls="primary-links"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
