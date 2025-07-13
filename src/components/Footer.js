import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Paisley Dog Gear & Training</p>
      <div className="contact-info">
        <a href="mailto:paisleydoggear@gmail.com">paisleydoggear@gmail.com</a>
        <span> | </span>
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
