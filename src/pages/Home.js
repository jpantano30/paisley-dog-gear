import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "../components/page-intro.css";
import "@fontsource/cormorant-garamond/700.css";
// import Banner from "../components/Banner";
import "../components/Banner.css";

const HERO_IMAGES = [
  { src: "/assets/leashpicsNvids/set3.JPG", alt: "Hands-free biothane dog leash" },
  { src: "/assets/leashpicsNvids/red&bluebuckle.JPG", alt: "Biothane buckle dog collar" },
  { src: "/assets/leashpicsNvids/ballholder3.JPG", alt: "Biothane ball holder" },
];

const Parade_IMG = "/assets/Show.jpeg";

const YT_ID = "wJ6vECs0Cu4"; // Shorts id

const Home = () => {

  const businessLD = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://paisleydoggearandtraining.com/#business",
    "name": "Paisley Dog Gear & Training",
    "url": "https://paisleydoggearandtraining.com/",
    "logo": "https://paisleydoggearandtraining.com/logoPng.png",
    "image": "https://paisleydoggearandtraining.com/logoPng.png",
    "telephone": "+1-617-872-1749",
    "email": "paisleygearandtraining@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Boston",
      "addressRegion": "MA",
      "addressCountry": "US"
    },
    "areaServed": [
      "Boston, MA",
      "Cambridge, MA",
      "Somerville, MA",
      "Medford, MA",
      "Brookline, MA",
      "Everett, MA",
      "Winchester, MA",
      "Woburn, MA",
      "Newton, MA"
    ],
    "sameAs": [
      "https://www.facebook.com/PaisleyGearandTraining/",
      "https://www.instagram.com/tullytornado/",
      "https://www.etsy.com/shop/PaisleyDogGear"
    ]
  };

  return (
    <>
      {/* <Banner /> */}
      <title>Boston Dog Trainer & Custom Biothane Leashes | Paisley Dog Gear & Training</title>
      <meta name="description"
            content="Private dog training, AKC CGC testing, and virtual or in-person Trick Dog title evaluations in Boston, plus handmade waterproof BioThane leashes and collars." />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/" />
      {/* Structured Data */}
      <script type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLD) }} />

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
                I started Paisley Dog Gear &amp; Training to combine thoughtful training with durable, functional gear that is tested daily by my own dogs. Paisley, my retired service dog, inspired the business. Tallulah is my trick and freestyle demo dog and service dog in training, and Tucker is growing up with foundations for tricks, freestyle, and agility. My background as a pastry chef means I am used to precision, aesthetics, and working with my hands, and that now goes into every leash, long line, and tab I make: strong materials, secure hardware, and creative color pairings that still make sense for real training. The goal is gear that feels good in your hands, holds up to daily use, and reflects your dog’s personality.
                <br /><br />
                I am an <strong>AKC Approved Canine Good Citizen Evaluator</strong>, a member of the <strong>Association of Professional Dog Trainers (APDT)</strong>, and an <strong>Associate Member of the International Association of Canine Professionals (IACP)</strong>. I am also actively working toward CPDT-KA certification and am committed to ongoing education, ethics, and clear communication with every dog and handler I work with.
              </p>
          </div>
        </div>
      </div>
    </section>

        {/* AKC testing and titling */}
        <section className="akc-home-feature" aria-labelledby="akc-home-title">
          <img
            src="/assets/akc-cgc-evaluator-logo.png"
            alt="AKC Approved CGC Evaluator logo"
            className="akc-home-logo"
            loading="lazy"
            onError={(event) => {
              const feature = event.currentTarget.closest(".akc-home-feature");
              feature?.classList.add("akc-logo-missing");
              event.currentTarget.remove();
            }}
          />

          <div className="akc-home-copy">
            <p className="akc-eyebrow">AKC Approved CGC Evaluator</p>
            <h2 id="akc-home-title">CGC • S.T.A.R. Puppy • Trick Dog Titles</h2>
            <p>
              In-person CGC, CGCA, and CGCU testing in the Boston area, virtual
              Trick Dog and Virtual Home Manners evaluations, CGC prep, and a
              future small-group S.T.A.R. Puppy program. <strong>Title Day
              evaluations start at $25.</strong>
            </p>
            <Link to="/akc-titles" className="cta-button akc-home-button">
              Explore AKC Titles &amp; Testing
            </Link>
          </div>
        </section>

        {/* Meet the dogs */}
        <section className="dogs">
          <div className="dogs-heading">
            <p className="dogs-eyebrow">The Paisley crew</p>
            <h2>Meet the Dogs</h2>
            <p>
              The dogs behind the gear, the training, and a lot of the ideas you see here.
            </p>
          </div>

          <div className="dog-profiles">
            <article className="dog-card">
              <div className="dog-photo">
                <img src="/assets/tully.jpeg" alt="Tallulah the Bordoodle" loading="lazy" />
              </div>
              <div className="dog-card-copy">
                <p className="dog-role">Demo dog • Tricks • Freestyle</p>
                <h3>Tallulah</h3>
                <p>
                  My energetic SDiT and primary demo dog for trick training and canine freestyle.
                  Tully has earned AKC Novice, Intermediate, and Advanced Trick Dog titles, plus
                  Do More With Your Dog titles from Novice through Expert. We also train in
                  agility and keep building toward more advanced trick and performance goals.
                </p>
                <a
                  className="dog-social"
                  href="https://www.instagram.com/tullytornado"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow Tully &amp; Tucker @TullyTornado →
                </a>
              </div>
            </article>

            <article className="dog-card dog-card-tucker">
              <div className="dog-photo">
                <img
                  src="/assets/tucker.jpg"
                  alt="Tucker"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    const fallback = event.currentTarget.nextElementSibling;
                    if (fallback) fallback.hidden = false;
                  }}
                />
                <div className="dog-photo-fallback" hidden>
                  <span aria-hidden="true">🐾</span>
                  <strong>Tucker</strong>
                  <small>Photo coming soon</small>
                </div>
              </div>
              <div className="dog-card-copy">
                <p className="dog-role">Puppy in training • Future sport dog</p>
                <h3>Tucker</h3>
                <p>
                  The newest member of the Paisley crew. Tucker is learning engagement,
                  confidence, body awareness, and how to learn from the very beginning. As he
                  grows, we’ll be training in tricks, canine freestyle, and agility—so you’ll
                  get to see his progress from puppy foundations onward.
                </p>
                <a
                  className="dog-social"
                  href="https://www.instagram.com/tullytornado"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow Tully &amp; Tucker @TullyTornado →
                </a>
              </div>
            </article>

            <article className="dog-card">
              <div className="dog-photo">
                <img src="/assets/paisley.jpg" alt="Paisley the Cavachon" loading="lazy" />
              </div>
              <div className="dog-card-copy">
                <p className="dog-role">The original Paisley • Retired service dog</p>
                <h3>Paisley</h3>
                <p>
                  The original Paisley and the reason this business exists. My first dog and
                  retired service dog, she taught me how much thoughtful training, communication,
                  and a strong dog-handler relationship can matter. These days she is enjoying
                  retirement, but her legacy is behind every dog I train and every piece of gear I make.
                </p>
                <a
                  className="dog-social"
                  href="https://www.instagram.com/paisleyisbeautiful"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow Paisley @PaisleyIsBeautiful →
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Training CTA (kept) */}
        <section className="training-inquiry">
          <h2>Dog Training Inquiries</h2>
          <p>
            I offer trick training, freestyle, behavior support, AKC CGC testing,
            and Trick Dog title evaluations in the Boston area. Virtual Trick Dog
            video evaluations are available nationwide.
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
            Ready for a CGC test or Trick Dog title? <a href="/akc-titles">View AKC titles &amp; testing.</a>{" "}
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