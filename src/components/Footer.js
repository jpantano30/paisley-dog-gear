import React from "react";
import "./Footer.css";
import { FaPaw, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
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
          <br />
          <br />
          <address>
            <strong>Paisley Dog Gear &amp; Training</strong><br />
            Boston-based service-area dog training<br />
            Serving Boston, Cambridge, Somerville, Medford, Brookline,
            Everett, Winchester, Woburn, and Newton<br />
            <a href="tel:+16178721749">(617) 872-1749</a>
          </address>
          {/* SEO/UX: quiet text links to important pages */}
          <nav className="footer-mini" aria-label="Quick links">
            <a className="mini-link" href="/boston-dog-trainer-north-end">Boston Dog Trainer</a>
            <span aria-hidden="true"> · </span>
            <a className="mini-link" href="/biothane-dog-leashes-boston">Biothane Leashes &amp; Collars</a>
            <p className="footer-mini-links">
              <Link to="/order">Biothane Gear: Request a Quote</Link>
              <br />
              <Link to="/training">Dog Training Services</Link>
            </p>

          </nav>

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
      
      <div className="membership-badges">
        {/* AKC Approved CGC Evaluator */}
        <div className="akc-membership">
          <a
            href="https://www.akc.org/products-services/training-programs/canine-good-citizen/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/akc-cgc-evaluator-logo.png"
              alt="AKC Approved CGC Evaluator logo"
              className="akc-logo"
            />
          </a>

          <p className="akc-text">
            <strong>AKC Approved CGC Evaluator</strong>
            <br />
            Jena Pantano · Evaluator #116472
          </p>
        </div>
        {/* IACP membership */}
        <div className="iacp-membership">
          <a href="https://iacpdogs.org/" target="_blank" rel="noreferrer">
            <img
              src="/assets/IACP-2024-logo.png"
              alt="IACP Member Logo"
              className="iacp-logo"
            />
          </a>
          <p className="iacp-text">
            Associate Member of the{" "}
            <strong>International Association of Canine Professionals</strong>
          </p>
        </div>
        {/* APDT membership */}
        <div className="apdt-membership">
          <a href="https://apdt.com/" target="_blank" rel="noreferrer">
            <img
              src="/assets/APDT-Badge.png"
              alt="APDT Member Badge"
              className="apdt-logo"
            />
          </a>
          <p className="apdt-text">
            Member of the <strong>Association of Professional Dog Trainers (APDT)</strong>
          </p>
        </div>
        {/* Pet CPR & First Aid Certification */}
        <div className="pet-cpr-membership">
          <a
            href="https://petemergencyeducation.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/PEE-logo-certified.png"
              alt="Pet Emergency Education Certified Pet CPR and First Aid logo"
              className="pet-cpr-logo"
            />
          </a>

          <p className="pet-cpr-text">
            <strong>Pet CPR &amp; First Aid Certified</strong>
            <br />
            Certified in Canine &amp; Feline CPR and First Aid through Pet Emergency Education
          </p>
        </div>
      </div>
      {/* Commitment to standards text */}
      <p className="commitment-text">Committed to ongoing education and professional standards across the dog training industry.</p>
    </footer>
  );
};

export default Footer;
