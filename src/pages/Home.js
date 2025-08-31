// ===== HOME PAGE =====
// /src/pages/Home.js
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

// ===== HERO IMAGES =====
// Swap these paths for your actual hero images
const HERO_IMAGES = [
  { src: "/assets/leashpicsNvids/set3.JPG", alt: "Hands-free biothane dog leash" },
  { src: "/assets/leashpicsNvids/red&bluebuckle.JPG", alt: "Biothane buckle dog collar" },
  { src: "/assets/leashpicsNvids/ballholder3.JPG", alt: "Biothane ball holder" },
];

const Home = () => {
  return (
    <>
      {/* ===== HERO STRIP (full-bleed under navbar) ===== */}
      <section className="hero-strip" aria-label="Featured photos">
        <div className="hero-grid">
          {HERO_IMAGES.slice(0, 3).map((img, i) => (
            <div className="hero-tile" key={i}>
              <img
                src={img.src}
                alt={img.alt}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Bottom-left bar (opposite of Strange Tails) */}
        <div className="hero-bottombar" role="presentation">
          <div className="hero-bar-inner">
            <div className="hero-bar-text">
              <p className="hero-kicker">Handmade in Boston</p>
              <h1 className="hero-heading">Custom Biothane Dog Gear & Training</h1>
              <p className="hero-sub">
                Durable, waterproof gear and balanced training built for real life.
              </p>
            </div>

            <div className="hero-actions">
              <Link to="/builder" className="cta-button cta-primary">Design Your Own</Link>
              <Link to="/training" className="cta-button cta-ghost">Training</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="home">
        {/* ===== INTRO BLOCK BELOW HERO ===== */}
        <div className="hero">
          <img src="/assets/logo.jpg" alt="Paisley Dog Logo" className="hero-logo" />
          <h1>Paisley Dog Gear & Training</h1>
          <h2 className="tagline">Custom Biothane Dog Gear & Trick Training in Boston, MA</h2>
          <p>Functional. Custom. Made for Adventure.</p>
        </div>

        {/* ===== ABOUT ===== */}
        <section className="about">
          <h2>About the Maker</h2>
          <p>
            Hi, I’m Jena, maker, dog trainer, software engineer, and former pastry chef. I started Paisley Dog Gear & Training to build gear that actually works. My first service dog, Paisley, still inspires everything I make, and Tallulah, my energetic Bordoodle, service dog in training, and demo dog, helps field-test it in freestyle and service work. Every piece is designed to be functional, comfortable, and good-looking.
          </p>
        </section>

        {/* ===== DOGS ===== */}
        <section className="dogs">
          <h2>Meet the Dogs</h2>
          <div className="dog-profiles">
            <div className="dog-card">
              <img src="/assets/tully.jpeg" alt="Tallulah the Bordoodle" />
              <h3>Tallulah</h3>
              <p>
                My energetic SDiT and demo dog. Smart, sassy, and training in freestyle
                and service work.
                <br /><br />
                Follow her adventures on Instagram:
                <br />
                <a href="https://www.instagram.com/tullytornado" target="_blank" rel="noopener noreferrer">
                  @TullyTornado
                </a>
              </p>
            </div>
            <div className="dog-card">
              <img src="/assets/paisley.jpg" alt="Paisley the Cavachon" />
              <h3>Paisley</h3>
              <p>
                The OG service dog. Sweet, calm, and retired — but still the inspiration behind it all. My first dog ever and the reason I fell in love with training, canine communication, and the power of a true bond. Paisley supported me through some of the hardest years of my life. She worked with quiet confidence, always by my side, always steady. Though she’s now enjoying retirement (and plenty of naps), her legacy lives on in every leash I make and every dog I help train. None of this would exist without her.
                <br /><br />
                Follow her journey on Instagram:
                <br />
                <a href="https://www.instagram.com/paisleyisbeautiful" target="_blank" rel="noopener noreferrer">
                  @PaisleyIsBeautiful
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ===== FEATURED (kept for later, still commented out) =====
        <section className="featured">
          <h2>Featured Gear</h2>
          <div className="product-grid">
            <div className="product-card">
              <img
                src="/assets/tallulah-sage2.JPG"
                alt="The Tallulah hands-free leash"
              />
              <h3>The Tallulah</h3>
              <p>
                Our signature hands-free leash system — versatile, strong, and designed
                for real life.
              </p>
            </div>
            <div className="product-card">
              <img
                src="/assets/leashpicsNvids/ballholder3.JPG"
                alt="Biothane Ball Holder"
              />
              <h3>Biothane Ball Holder</h3>
              <p>Clips to your gear and fits ChuckIt or standard balls. D-ring or snap clip.</p>
            </div>
            <div className="product-card">
              <img src="/assets/custom-longline.jpg" alt="Custom Biothane Long Line" />
              <h3>Custom Long Line</h3>
              <p>
                Durable, colorful long lines up to 20ft — ideal for recall, hiking, and
                adventure training.
              </p>
            </div>
          </div>
        </section>
        ===== END FEATURED ===== */}

        {/* ===== TRAINING INQUIRY ===== */}
        <section className="training-inquiry">
          <h2>Dog Training Inquiries</h2>
          <p>
            I offer trick training, freestyle, and behavior support in the Boston area.
            Interested in training or private coaching? Fill out the contact form.
          </p>
          <Link to="/training" className="cta-button cta-secondary">
            Training Request Form
          </Link>
          <br /><br />
          {/* <p> Or direct message me on Instagram.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/tullytornado" target="_blank" rel="noopener noreferrer">
              @TullyTornado
            </a>
            <br />
            <a href="https://www.instagram.com/eatwellandeatdessert" target="_blank" rel="noopener noreferrer">
              @eatwellandeatdessert
            </a>
          </div> */}
        </section>
      </section>
    </>
  );
};

export default Home;
