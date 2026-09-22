import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "../components/page-intro.css";
import "@fontsource/cormorant-garamond/700.css";
import "./WebsiteBanner.css";

const Parade_IMG = "/assets/Show.jpeg";
const YT_ID = "wJ6vECs0Cu4";
const REVIEWS_WIDGET_SRC = "https://hub.apexmediasol.com/w/reviews/Pkd3yhMxtW9IHZXv9jRS1nXniTiKhVQxg63Ewveq.js";

const handleImageFallback = (event, fallbackSrc) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackSrc;
};

const Home = () => {
  const reviewsWidgetRef = useRef(null);
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  useEffect(() => {
    const widgetContainer = reviewsWidgetRef.current;
    if (!widgetContainer) return undefined;

    const script = document.createElement("script");
    script.src = REVIEWS_WIDGET_SRC;
    script.async = true;
    widgetContainer.appendChild(script);

    return () => {
      widgetContainer.replaceChildren();
    };
  }, []);

  useEffect(() => {
    if (!lightboxPhoto) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setLightboxPhoto(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxPhoto]);

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
      <title>Boston Dog Trainer & Custom Biothane Leashes | Paisley Dog Gear & Training</title>
      <meta name="description"
            content="Day training, private dog training, AKC CGC testing, and Trick Dog title evaluations in Boston, plus handmade waterproof BioThane leashes and collars." />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/" />
      {/* Structured Data */}
      <script type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLD) }} />

      {/* ===== BRANDED WEBSITE BANNER ===== */}
      <section className="website-banner" aria-label="Paisley Dog Gear and Training">
        <img
          src="/assets/paisley-website-banner.webp"
          alt="Paisley Dog Gear and Training with Paisley wearing custom gear and a selection of handmade BioThane products"
          className="website-banner-image"
          loading="eager"
          decoding="async"
        />
      </section>

      {/* Keep the important heading and links as real text for accessibility and search engines. */}
      <section className="website-hero-intro" aria-labelledby="homepage-heading">
        <div className="website-hero-inner">
          <div className="website-hero-copy">
            <p className="website-hero-kicker">Handmade in Boston</p>
            <h1 id="homepage-heading">Custom BioThane Dog Gear &amp; Training</h1>
            <p>
              Durable, waterproof gear and balanced training built for real life.
            </p>
          </div>

          <div className="website-hero-actions" aria-label="Homepage actions">
            <a
              href="https://www.etsy.com/shop/PaisleyDogGear"
              className="cta-button cta-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop on Etsy
            </a>
            <Link to="/training" className="cta-button cta-ghost">
              Training
            </Link>
            <Link to="/akc-titles" className="cta-button cta-ghost">
              AKC Titles
            </Link>
            <Link to="/gallery" className="cta-button cta-ghost">
              Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="daytraining-spotlight" aria-labelledby="daytraining-title">
        <div className="dt-inner">
          <div className="dt-copy">
            <span className="pill">Now enrolling</span>
            <h2 id="daytraining-title">Day Training is open</h2>
            <p className="dt-sub">
              Your dog spends a structured half or full day with me working on
              your goals through focused training, rest breaks, and real-world practice.
            </p>
            <ul className="dt-highlights">
              <li>Half-day, full-day, and multi-day package options</li>
              <li>Practice at parks, neighborhoods, and dog-friendly stores</li>
              <li>Photo or video updates and a same-day summary</li>
            </ul>
            <div className="dt-cta-row">
              <Link to="/training?service=day-training" className="cta-button cta-secondary">
                See pricing &amp; request Day Training
              </Link>
            </div>
          </div>

          <div className="dt-media">
            <img
              src="/assets/daytraining.jpg"
              alt="A dog practicing during a Paisley Dog Gear and Training day training session"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="home">

        {/* Site intro */}
        <div className="hero">
          <p className="links-container1"><a href="/boston-dog-trainer-north-end">Boston</a> <a href="/biothane-dog-leashes-boston">Biothane</a></p>
          <img src={Parade_IMG} alt="Parade" className="parade-img" />
          <p className="featured-in">Featured in The Boston Globe October 2025</p>
        </div>

        <section className="tully-instagram tully-instagram-home" aria-label="Tully on Instagram">
          <div>
            <p className="tully-instagram-eyebrow">Follow Tully’s adventures</p>
            <h2>See Tully’s latest posts</h2>
            <p>Training clips, tricks, freestyle, and everyday life with the Paisley crew.</p>
          </div>
          <a
            href="https://www.instagram.com/tullytornado/"
            target="_blank"
            rel="noopener noreferrer"
            className="tully-instagram-link"
          >
            View Tully’s Instagram posts →
          </a>
        </section>

        {/* About the maker */}
        <section className="maker" aria-label="About the maker photo">
          <div className="maker-card">
            <div className="maker-layout">
              <div className="maker-photo-stack" aria-label="Jena and the Paisley crew">
                <img
                  src="/assets/jandtul.jpg"
                  alt="Jena with Tallulah"
                  loading="lazy"
                  decoding="async"
                  onError={(event) => handleImageFallback(event, "/assets/Jena_hero.jpg")}
                />
                <button
                  type="button"
                  className="maker-photo-button"
                  onClick={() => setLightboxPhoto({
                    src: "/assets/splitwhite.jpg",
                    alt: "Jena training with one of her dogs"
                  })}
                  aria-label="Enlarge photo of Jena training with one of her dogs"
                >
                  <img
                    src="/assets/splitwhite.jpg"
                    alt="Jena training with one of her dogs"
                    loading="lazy"
                    decoding="async"
                    onError={(event) => handleImageFallback(event, "/assets/tully.jpeg")}
                  />
                  <span aria-hidden="true">View larger</span>
                </button>
                <button
                  type="button"
                  className="maker-photo-button"
                  onClick={() => setLightboxPhoto({
                    src: "/assets/headjumppink.jpg",
                    alt: "Jena and her dog performing a trick together"
                  })}
                  aria-label="Enlarge photo of Jena and her dog performing a trick together"
                >
                  <img
                    src="/assets/headjumppink.jpg"
                    alt="Jena and her dog performing a trick together"
                    loading="lazy"
                    decoding="async"
                    onError={(event) => handleImageFallback(event, "/assets/paisley.JPG")}
                  />
                  <span aria-hidden="true">View larger</span>
                </button>
              </div>
              <div className="maker-info">
                <p className="maker-eyebrow">Trainer • Maker • Dog person</p>
                <h2 className="maker-name">Hi, I’m Jena</h2>
                <p className="maker-lead">
                  I’m the founder of Paisley Dog Gear &amp; Training in Boston. I help dogs and their people build practical skills, clearer communication, and a stronger relationship.
                </p>

                <div className="maker-details">
                  <div>
                    <h3>Thoughtful, real-life training</h3>
                    <p>
                      I specialize in trick training and canine freestyle while also working on puppy foundations, manners, leash skills, obedience, behavior support, and confidence. My background in health sciences and psychology helps me create clear, step-by-step plans built around behavior, learning, and stress.
                    </p>
                  </div>
                  <div>
                    <h3>Gear made for everyday adventures</h3>
                    <p>
                      Paisley, my retired service dog, inspired the business. Tallulah is my trick and freestyle demo dog and service dog in training, while Tucker is building foundations for tricks, freestyle, and agility. My pastry-chef background brings precision and creativity to every durable, functional piece of gear I make.
                    </p>
                  </div>
                </div>

                <div className="maker-credentials" aria-label="Professional credentials">
                  <span>AKC Approved CGC Evaluator</span>
                  <span>APDT Member</span>
                  <span>IACP Associate Member</span>
                  <span>Working toward CPDT-KA</span>
                </div>
          </div>
        </div>
      </div>
    </section>

        {lightboxPhoto && (
          <div
            className="maker-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged maker photo"
            onClick={() => setLightboxPhoto(null)}
          >
            <button
              type="button"
              className="maker-lightbox-close"
              onClick={() => setLightboxPhoto(null)}
              aria-label="Close enlarged photo"
            >
              ×
            </button>
            <img
              src={lightboxPhoto.src}
              alt={lightboxPhoto.alt}
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}

        {/* AKC testing and titling */}
        <section className="akc-home-feature" aria-labelledby="akc-home-title">
          <img
            src="/assets/akc-cgc-evaluator-logo.jpg"
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
                <img
                  src="/assets/tully.jpg"
                  alt="Tallulah the Bordoodle"
                  loading="lazy"
                  onError={(event) => handleImageFallback(event, "/assets/tully.jpeg")}
                />
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
              </div>
            </article>

            <article className="dog-card dog-card-tucker">
              <div className="dog-photo">
                <img
                  src="/assets/tucker.jpeg"
                  alt="Tucker"
                  loading="lazy"
                  onError={(event) => {
                    handleImageFallback(event, "/assets/tucker.jpg");
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
              </div>
            </article>

            <article className="dog-card">
              <div className="dog-photo">
                <img
                  src="/assets/pais.jpeg"
                  alt="Paisley the Cavachon"
                  loading="lazy"
                  onError={(event) => handleImageFallback(event, "/assets/paisley.JPG")}
                />
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

        <section className="intro-video" aria-label="Tully training video">
          <div className="video-frame">
            <iframe
              title="Tully tricks"
              src={`https://www.youtube.com/embed/${YT_ID}?autoplay=0&mute=0&controls=1&loop=0&playsinline=1&modestbranding=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>

        <section className="reviews-section" aria-labelledby="reviews-title">
          <div className="reviews-heading">
            <p className="reviews-eyebrow">Training &amp; handmade gear</p>
            <h2 id="reviews-title">What Clients Are Saying</h2>
            <p>Reviews from dog-training clients and Paisley Dog Gear customers.</p>
          </div>
          <div className="reviews-widget" ref={reviewsWidgetRef} />
        </section>

        {/* Training CTA (kept) */}
        <section className="training-inquiry">
          <h2>Dog Training Inquiries</h2>
          <p>
            Day Training enrollment is open. I also offer private training, trick
            training, freestyle, behavior support, AKC CGC testing, and Trick Dog
            title evaluations in the Boston area. Virtual Trick Dog video evaluations
            are available nationwide.
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
