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

      <div className="footer-rows">
        <div className="contact-row">
          <a
            href="mailto:paisleygearandtraining@gmail.com"
            className="email-link"
          >
            paisleygearandtraining@gmail.com
          </a>

          <address>
            <strong>Paisley Dog Gear &amp; Training</strong>
            <br />
            Boston-based service-area dog training
            <br />
            Serving Boston, Cambridge, Somerville, Medford, Brookline, Everett,
            Winchester, Woburn, and Newton
            <br />
            <a href="tel:+16178721749">(617) 872-1749</a>
          </address>

          <nav className="footer-mini" aria-label="Quick links">
            <Link className="mini-link" to="/boston-dog-trainer-north-end">
              Boston Dog Trainer
            </Link>
            <span aria-hidden="true"> · </span>
            <Link className="mini-link" to="/biothane-dog-leashes-boston">
              Biothane Leashes &amp; Collars
            </Link>

            <p className="footer-mini-links">
              <Link to="/order">Biothane Gear: Request a Quote</Link>
              <br />
              <Link to="/training">Dog Training Services</Link>
              <br />
              <a href="/training#akc-testing">AKC Testing &amp; Trick Dog Titles</a>
            </p>
          </nav>
        </div>

        <nav className="social-row" aria-label="Social links">
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
        <div className="iacp-membership">
          <a href="https://iacpdogs.org/" target="_blank" rel="noreferrer">
            <img
              src="/assets/IACP-2024-logo.png"
              alt="IACP Member Logo"
              className="iacp-logo"
              loading="lazy"
            />
          </a>
          <p className="membership-text">
            Associate Member of the{" "}
            <strong>International Association of Canine Professionals</strong>
          </p>
        </div>

        <div className="apdt-membership">
          <a href="https://apdt.com/" target="_blank" rel="noreferrer">
            <img
              src="/assets/APDT-Badge.png"
              alt="APDT Member Badge"
              className="apdt-logo"
              loading="lazy"
            />
          </a>
          <p className="membership-text">
            Member of the{" "}
            <strong>Association of Professional Dog Trainers (APDT)</strong>
          </p>
        </div>

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
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </a>
          <p className="membership-text">
            <strong>AKC Approved CGC Evaluator</strong>
            <br />
            Jena Pantano, approved to conduct Canine Good Citizen and AKC Trick Dog evaluations
          </p>
        </div>

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
              loading="lazy"
            />
          </a>
          <p className="membership-text">
            <strong>Pet CPR &amp; First Aid Certified</strong>
            <br />
            Certified in Canine &amp; Feline CPR and First Aid through Pet
            Emergency Education
          </p>
        </div>
      </div>

      <p className="commitment-text">
        Committed to ongoing education and professional standards across the dog
        training industry.
      </p>
    </footer>
  );
};

export default Footer;