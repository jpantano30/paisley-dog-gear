import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "../components/page-intro.css";

const HERO_IMAGES = [
  { src: "/assets/leashpicsNvids/set3.JPG", alt: "Hands-free biothane dog leash" },
  { src: "/assets/leashpicsNvids/red&bluebuckle.JPG", alt: "Biothane buckle dog collar" },
  { src: "/assets/leashpicsNvids/ballholder3.JPG", alt: "Biothane ball holder" },
];

const Home = () => {
  return (
    <>
      <title>Custom Biothane Dog Gear | Paisley</title>
      <meta
        name="description"
        content="Handmade biothane leashes and collars plus private training. Build your gear, request a quote, or book a free 15-minute consult."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/" />

      {/* ===== HERO STRIP ===== */}
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

        {/* Bottom-left bar */}
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
              <Link to="/options" className="cta-button cta-ghost">View Options</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEW: DAY TRAINING SPOTLIGHT ===== */}
      <section className="daytraining-spotlight" aria-label="Day Training">
        <div className="dt-inner">
          <div className="dt-copy">
            <p className="pill">New</p>
            <h2>Day Training — structured “day care while training”</h2>
            <p className="dt-sub">
              Drop-off or pick-up (depending on location). Real-world field trips, focused
              training blocks, and rest. Great for manners, leash skills, recall, confidence,
              and freestyle foundations.
            </p>

            <ul className="dt-highlights">
              <li><strong>$75</strong> half-day · <strong>$100</strong> full day</li>
              <li>
                Packages (full day): <strong>3-Day $270</strong>, <strong>5-Day $425</strong>,
                <strong> 10-Day $800</strong> <span className="save">save up to $200</span>
              </li>
              <li>Optional 20–30 min handoff lesson: <strong>+$20</strong></li>
            </ul>

            <div className="dt-cta-row">
              <Link to="/training" className="cta-button cta-primary">Book Day Training</Link>
              <Link to="/training#rates" className="cta-button cta-secondary">See Rates</Link>
            </div>
          </div>

          <div className="dt-media" aria-hidden="true">
            <img src="/assets/TPJ.jpeg" alt="Day training field trip" />
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="home">
        <div className="hero">
          <img src="/assets/logo.jpg" alt="Paisley Dog Logo" className="hero-logo" />
          <h1>Paisley Dog Gear & Training</h1>
          <h2 className="tagline">Custom Biothane Dog Gear & Trick Training in Boston, MA</h2>
          <p>Functional. Custom. Made for Adventure.</p>
        </div>

        <section className="about">
          <h2>About the Maker</h2>
          <p>
            Hi, I’m Jena, maker, dog trainer, software engineer, and former pastry chef. I started Paisley Dog Gear & Training to build gear that actually works. My first service dog, Paisley, still inspires everything I make, and Tallulah, my energetic Bordoodle, service dog in training, and demo dog, helps field-test it in freestyle and service work. Every piece is designed to be functional, comfortable, and good-looking.
          </p>
        </section>

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

        <section className="training-inquiry">
          <h2>Dog Training Inquiries</h2>
          <p>
            I offer trick training, freestyle, and behavior support in the Boston area.
            Interested in training or private coaching? Fill out the contact form.
          </p>
          <Link to="/training" className="cta-button cta-secondary">
            Training Request Form
          </Link>
        </section>

        <section aria-label="Quick links" style={{marginTop: 16}} className="page-intro">
          <p>
            Ready to design gear? <a href="/builder">Use the Gear Builder</a>.{" "} <br />
            Know what you want? <a href="/order">Request a quote</a>.{" "}
            <br />
            Want help with behavior or tricks? <a href="/training">Request training</a>{" "}
            or <a href="/booking">book a free 15-minute consult</a>.{" "}
            <br />
            Explore our <a href="/gallery">gallery</a>, <a href="/colors">colors</a>,{" "}
            <a href="/options">options</a>, and <a href="/videos">videos</a>.
          </p>
        </section>
      </section>
    </>
  );
};

export default Home;
