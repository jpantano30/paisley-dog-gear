import React from "react";
import { Link } from "react-router-dom";
import "./AkcTitles.css";

const AkcTitles = () => {
  const serviceLD = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://paisleydoggearandtraining.com/akc-titles#service",
    name: "AKC CGC Testing and Trick Dog Evaluations",
    serviceType: "AKC Family Dog testing, title evaluations, and preparation",
    url: "https://paisleydoggearandtraining.com/akc-titles",
    provider: {
      "@id": "https://paisleydoggearandtraining.com/#business"
    },
    areaServed: "Boston, MA"
  };

  return (
    <>
      <title>AKC CGC Testing & Trick Dog Titles in Boston | Paisley Dog Gear & Training</title>
      <meta
        name="description"
        content="AKC CGC, CGCA and CGCU testing in Boston, CGC prep, virtual Trick Dog evaluations nationwide, Virtual Home Manners, and S.T.A.R. Puppy interest."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/akc-titles" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLD) }}
      />

      <main className="akc-page">
        <section className="akc-hero">
          <div className="akc-hero-logo-wrap">
            <img
              src="/assets/akc-cgc-evaluator-logo.png"
              alt="AKC Approved CGC Evaluator logo"
              className="akc-page-logo"
              onError={(event) => {
                event.currentTarget.closest(".akc-hero")?.classList.add("akc-logo-missing");
                event.currentTarget.remove();
              }}
            />
          </div>

          <div className="akc-hero-copy">
            <p className="akc-page-eyebrow">AKC Approved CGC Evaluator</p>
            <h1>Earn an AKC Title With Your Dog</h1>
            <p className="akc-page-lead">
              Whether you want to take a CGC test, earn a Trick Dog title from home,
              or get some training first, I can help you figure out the easiest next step.
            </p>
            <div className="akc-hero-actions">
              <a href="#choose-service" className="akc-primary-btn">
                Choose What You Need
              </a>
            </div>
          </div>
        </section>

        <section
          className="akc-page-section akc-choice-section"
          id="choose-service"
          aria-labelledby="akc-choice-title"
        >
          <div className="akc-section-heading">
            <p className="akc-page-eyebrow">Start here</p>
            <h2 id="akc-choice-title">What would you like to do?</h2>
            <p>You do not need to know all of the AKC abbreviations before contacting me.</p>
          </div>

          <div className="akc-choice-grid">
            <article className="akc-choice-card featured-choice">
              <span className="akc-choice-number">1</span>
              <div>
                <p className="akc-choice-label">In person • Boston area</p>
                <h3>Test My Dog</h3>
                <p>
                  For Canine Good Citizen (CGC), Community Canine (CGCA), or Urban CGC
                  (CGCU). If you are not sure which test you need, I can help.
                </p>
                <div className="akc-simple-prices">
                  <span><strong>$25</strong> scheduled Title Day</span>
                  <span><strong>$50</strong> private appointment</span>
                </div>
                <p className="akc-plain-note">
                  Title Day = pick a time slot on one of my scheduled testing dates.
                  Private = we schedule a testing appointment just for you.
                </p>
              </div>
              <a
                href="/training?service=akc&request=cgc-testing#training-form"
                className="akc-card-link"
              >
                Request a CGC Test
              </a>
            </article>

            <article className="akc-choice-card" id="trick-dog-titles">
              <span className="akc-choice-number">2</span>
              <div>
                <p className="akc-choice-label">Video • Available anywhere</p>
                <h3>Earn a Trick Dog Title</h3>
                <p>
                  Send a video for an AKC Trick Dog evaluation. Novice through Elite
                  Performer levels are available.
                </p>
                <div className="akc-simple-prices">
                  <span><strong>$25</strong> one title</span>
                  <span><strong>$45</strong> two titles • <strong>$60</strong> three titles</span>
                </div>
              </div>
              <div className="akc-card-actions">
                <a
                  href="/training?service=akc&request=trick-dog#training-form"
                  className="akc-card-link"
                >
                  Request a Trick Dog Evaluation
                </a>
                <Link to="/trick-freestyle-training" className="akc-training-link">
                  Need help first? Explore Trick Training →
                </Link>
              </div>
            </article>

            <article className="akc-choice-card">
              <span className="akc-choice-number">3</span>
              <div>
                <p className="akc-choice-label">Training + test</p>
                <h3>Help Me Get Ready</h3>
                <p>
                  Not sure your dog can pass CGC yet? We can work through the skills first,
                  then test when you are ready.
                </p>
                <div className="akc-simple-prices">
                  <span><strong>$115</strong> CGC prep + test</span>
                </div>
              </div>
              <a
                href="/training?service=akc&request=cgc-prep#training-form"
                className="akc-card-link"
              >
                Request CGC Prep
              </a>
            </article>
          </div>
        </section>

        <section className="akc-page-section akc-other-section" aria-labelledby="akc-other-title">
          <div className="akc-section-heading">
            <p className="akc-page-eyebrow">Also available</p>
            <h2 id="akc-other-title">Other AKC Options</h2>
          </div>

          <div className="akc-other-grid">
            <article className="akc-other-card">
              <div>
                <h3>Virtual Home Manners</h3>
                <p>
                  Puppy or Adult evaluation completed by video from home.
                </p>
                <p className="akc-other-price">$25 / title</p>
              </div>
              <a
                href="/training?service=akc&request=home-manners#training-form"
                className="akc-text-link"
              >
                Request Home Manners →
              </a>
            </article>

            <article className="akc-other-card">
              <div>
                <h3>S.T.A.R. Puppy</h3>
                <p>
                  A future 6-week puppy class with the S.T.A.R. Puppy test at the end.
                </p>
                <p className="akc-other-price">Interest list open</p>
              </div>
              <a
                href="/training?service=akc&request=star-puppy#training-form"
                className="akc-text-link"
              >
                Join the Interest List →
              </a>
            </article>
          </div>
        </section>

        <section className="akc-page-section akc-help-box">
          <div>
            <p className="akc-page-eyebrow">Not sure?</p>
            <h2>I can help you choose.</h2>
            <p>
              Tell me what your dog can already do and what title you have heard about.
              I will point you toward the right test, evaluation, or training option.
            </p>
          </div>
          <a
            href="/training?service=akc&request=not-sure#training-form"
            className="akc-secondary-btn"
          >
            I’m Not Sure Yet
          </a>
        </section>

        <section className="akc-page-section akc-mini-note">
          <h2>Already have CGC?</h2>
          <p>
            CGC can also make the Novice Trick Dog pathway easier. If you want to keep
            building fun skills after CGC, trick training is a great next step.
          </p>
          <Link to="/trick-freestyle-training" className="akc-text-link">
            Explore Trick &amp; Freestyle Training →
          </Link>
        </section>

        <section className="akc-disclaimer">
          <strong>Please note:</strong> Paisley Dog Gear &amp; Training’s fee covers the
          testing/evaluation service and evaluator paperwork. Payment does not guarantee
          a passing result. AKC application or recording fees are separate.
        </section>
      </main>
    </>
  );
};

export default AkcTitles;
