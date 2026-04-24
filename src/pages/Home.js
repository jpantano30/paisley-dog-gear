import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "../components/page-intro.css";
import "@fontsource/cormorant-garamond/700.css";
import Banner from "../components/Banner";
import "../components/Banner.css";

const HERO_IMAGES = [
  { src: "/assets/leashpicsNvids/set3.JPG", alt: "Hands-free biothane dog leash" },
  { src: "/assets/leashpicsNvids/red&bluebuckle.JPG", alt: "Biothane buckle dog collar" },
  { src: "/assets/leashpicsNvids/ballholder3.JPG", alt: "Biothane ball holder" },
];

const Parade_IMG = "/assets/Show.jpeg";

const YT_ID = "wJ6vECs0Cu4"; // Shorts id

const Home = () => {

  const orgLD = {
    "@context":"https://schema.org",
    "@type":"Organization",
    "name":"Paisley Dog Gear & Training",
    "url":"https://paisleydoggearandtraining.com",
    "logo":"https://paisleydoggearandtraining.com/assets/logo.jpg",
    "sameAs":["https://www.facebook.com/PaisleyGearandTraining/"]
  };

  return (
    <>
      <Banner />
      <title>Boston Dog Trainer & Custom Biothane Leashes | Paisley Dog Gear & Training</title>
      <meta name="description"
            content="Handmade Biothane leashes & collars plus private dog training in Boston’s North End: puppy foundations, manners & trick training." />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/" />
      {/* Structured Data */}
      <script type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLD) }} />

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
              <div className="hero-actions-row">
                <Link to="/builder" className="cta-button cta-primary" id="herobtn">
                  Design Your Own
                </Link>
                <Link to="/training" className="cta-button cta-ghost" id="herobtn">
                  Training
                </Link>
              </div>

              <div className="hero-actions-row">
                <Link to="/options" className="cta-button cta-ghost" id="herobtn">
                  View Options
                </Link>
                <Link to="/gallery" className="cta-button cta-ghost" id="herobtn">
                  Gallery
                </Link>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="home">

        {/* Site intro */}
        <div className="hero">
          <p className="links-container1"><a href="/boston-dog-trainer-north-end">Boston</a> <a href="/biothane-dog-leashes-boston">Biothane</a></p>
          <img src="/assets/logo.jpg" alt="Paisley Dog Logo" className="hero-logo" />
          <h1>Paisley Dog Gear & Training</h1>
          <h2 className="tagline">Custom Biothane Dog Gear & Training in Boston, MA</h2>
          <p>Functional. Custom. Made for Adventure.</p>
          <img src={Parade_IMG} alt="Parade" className="parade-img" />
          <p className="featured-in">Featured in The Boston Globe October 2025</p>
        </div>

        {/* NEW: Video in main content (responsive) */}
        <section className="intro-video" aria-label="Tully video">
          <div className="video-frame">
            <iframe
              title="Tully tricks"
              src={`https://www.youtube.com/embed/${YT_ID}?autoplay=0&mute=0&controls=1&loop=0&playsinline=1&modestbranding=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          {/* <p className="video-caption">A quick look at the fun, practical training style I use.</p> */}
        </section>
        
        
        {/* NEW: Maker image card ABOVE About the Maker (styled like dog cards) */}
        <section className="maker" aria-label="About the maker photo">
          {/* <h2>About the Maker</h2> */}
          <div className="maker-card">
            <div className="maker-layout">
              <img
                src="/assets/Jena_hero.jpg"
                alt="Jena holding her dog by the water"
                loading="lazy"
                decoding="async"
              />
              <div className="maker-info">
                <h3 className="maker-name">About the Maker</h3>
                <p className="maker-bio">
                Hi, I’m Jena, the founder of Paisley Dog Gear &amp; Training in Boston. I’m a dog trainer with a special focus on trick training and canine freestyle, and I also work on the real-life skills dogs need every day. From puppy foundations and manners to leash skills, obedience, behavior support, and confidence-building tricks, my goal is to help dogs thrive both at home and out in the world.
                <br /><br />
                My education in health sciences and psychology gives me a strong foundation in behavior, learning, and stress. I use that background to create clear, step by step training plans that support both the dog and the person on the other end of the leash.
                <br /><br />
                The relationship between the dog and human is always the priority. My goal is to help teams build better communication, confidence, and trust so everyday life feels easier and you actually enjoy working together. Training is not just about skills. It is about a stronger bond.
                <br /><br />
                I started Paisley Dog Gear &amp; Training to combine thoughtful training with durable, functional gear that is tested daily by my own dogs, Paisley (retired service dog) and Tallulah (Bordoodle and service dog in training). My background as a pastry chef means I am used to precision, aesthetics, and working with my hands, and that now goes into every leash, long line, and tab I make: strong materials, secure hardware, and creative color pairings that still make sense for real training. The goal is gear that feels good in your hands, holds up to daily use, and reflects your dog’s personality.
                <br /><br />
                I am a member of the <strong>Association of Professional Dog Trainers (APDT)</strong> and an <strong>Associate Member of the International Association of Canine Professionals (IACP)</strong>, and I am actively working toward CPDT-KA certification. I am committed to ongoing education, ethics, and clear communication with every dog and handler I work with.
              </p>
          </div>
        </div>
      </div>
    </section>

        {/* Dogs (kept) */}
        <section className="dogs">
          <h2>Meet the Dogs</h2>
          <div className="dog-profiles">
            <div className="dog-card">
              <img src="/assets/tully.jpeg" alt="Tallulah the Bordoodle" />
              <h3>Tallulah</h3>
              <p>
                My energetic SDiT and demo dog. Smart, sassy, and training in freestyle and service work. She has earned her AKC Novice, Intermediate, and Advanced Trick Dog titles.
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
                The OG service dog. Sweet, calm, and retired... but still the inspiration behind it all. My first dog ever and the reason I fell in love with training, canine communication, and the power of a true bond. Paisley supported me through some of the hardest years of my life. She worked with quiet confidence, always by my side, always steady. Though she’s now enjoying retirement (and plenty of naps), her legacy lives on in every leash I make and every dog I help train. None of this would exist without her.
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

        {/* Training CTA (kept) */}
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

        {/* Quick links (kept) */}
        <section aria-label="Quick links" style={{ marginTop: 16 }} className="page-intro">
          <p>
            Ready to design gear? <a href="/builder">Use the Gear Builder</a>.{" "} <br />
            Know what you want? <a href="/order">Request a quote</a>.{" "}
            <br />
            Want help with behavior or tricks? <a href="/training">Request training.</a>{" "}
            <br />
            Explore our <a href="/gallery">gallery</a>, <a href="/colors">colors</a>,{" "}
            <a href="/options">options</a>, and <a href="/videos">videos</a>.
          </p>
        </section>
        <div className="disclaimer">
          <h4>Disclaimer</h4>
          <p>
            * All gear is made to order. Colors and styles may vary slightly from
            photos. Please allow 1-2 weeks for production plus shipping time.
          </p>
          <p>
            ** Training services are provided in Boston’s North End and nearby
            neighborhoods. Training outside of these areas are subject to travel policy. Virtual sessions are available nationwide.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
