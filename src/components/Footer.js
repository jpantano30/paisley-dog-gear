import React from "react";
import "./Footer.css";
import { FaPaw } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-title">
        © {new Date().getFullYear()} Paisley Dog Gear & Training <FaPaw />
      </p>

      <div className="contact-info">
        <a href="mailto:paisleygearandtraining@gmail.com">
          paisleygearandtraining@gmail.com
        </a>
        <span> | </span>
        <a
          href="https://instagram.com/eatwellandeatdessert"
          target="_blank"
          rel="noreferrer"
        >
          Instagram - Gear
        </a>
        <span> | </span>
        <a
          href="https://instagram.com/tullytornado"
          target="_blank"
          rel="noreferrer"
        >
          Instagram - Training
        </a>
      </div>

      <div className="iacp-membership">
        <img
          src="/assets/IACP-2024-logo.png"
          alt="IACP Member Logo"
          className="iacp-logo"
        />
        <p className="iacp-text">
          Associate Member of the <strong>International Association of Canine Professionals</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
