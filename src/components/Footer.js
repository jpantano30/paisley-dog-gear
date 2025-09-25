import React from "react";
import "./Footer.css";
import { FaPaw, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <p className="footer-title">
        © {year} Paisley Dog Gear &amp; Training <FaPaw aria-hidden="true" />
      </p>

      {/* Contact + Social */}
      <div className="footer-rows">
        <div className="contact-row">
          <a
            href="mailto:paisleygearandtraining@gmail.com"
            className="email-link"
          >
            paisleygearandtraining@gmail.com
          </a>
        </div>

        <nav className="social-row" aria-label="Social links">
          {/* Future business IG — uncomment & update when ready */}
          {/*
          <a
            href="https://www.instagram.com/YOUR_BUSINESS_HANDLE"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            aria-label="Instagram (Business)"
            title="Instagram (Business)"
          >
            <FaInstagram />
          </a>
          */}

          {/* Current training IG — Tully’s tricks */}
          <a
            href="https://www.instagram.com/tullytornado/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            aria-label="Instagram (Training)"
            title="Instagram (Training)"
          >
            <FaInstagram />
          </a>

          {/* Facebook page */}
          <a
            href="https://www.facebook.com/PaisleyGearandTraining"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            aria-label="Facebook - Paisley Gear & Training"
            title="Facebook - Paisley Gear & Training"
          >
            <FaFacebook />
          </a>
        </nav>
      </div>

      {/* IACP membership */}
      <div className="iacp-membership">
        <img
          src="/assets/IACP-2024-logo.png"
          alt="IACP Member Logo"
          className="iacp-logo"
        />
        <p className="iacp-text">
          Associate Member of the{" "}
          <strong>International Association of Canine Professionals</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
