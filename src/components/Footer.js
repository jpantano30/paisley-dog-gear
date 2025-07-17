import React from "react";
import "./Footer.css";
import { FaPaw } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Paisley Dog Gear & Training <FaPaw /> </p>
      <div className="contact-info">
        <a href="mailto:paisleygearandtraining@gmail.com">paisleygearandtraining@gmail.com</a>
        <span> | </span>
        <a href="https://instagram.com/eatwellandeatdessert" target="_blank" rel="noreferrer">
          Instagram - Gear
        </a>
        <span> | </span>
        <a href="https://instagram.com/tullytornado" target="_blank" rel="noreferrer">
          Instagram - Training
        </a>
      </div>
    </footer>
  );
};

export default Footer;
