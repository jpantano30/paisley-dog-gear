import React from "react";
import { Link } from "react-router-dom";
// import Banner from "../components/Banner";
import "../components/Banner.css";
import "./TrickFreestyleTraining.css";

const TrickFreestyleTraining = () => {
  return (
    <>
      {/* <Banner /> */}

      <title>Trick & Freestyle Dog Training in Boston | Paisley Dog Gear & Training</title>
      <meta
        name="description"
        content="Reward-based trick and freestyle dog training in Boston. Build confidence, focus, body awareness, engagement, and fun routines with your dog."
      />
      <link
        rel="canonical"
        href="https://paisleydoggearandtraining.com/trick-freestyle-training"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Trick & Freestyle Dog Training in Boston"
      />
      <meta
        property="og:description"
        content="Reward-based trick and freestyle dog training for confidence, focus, body awareness, engagement, and fun routines."
      />
      <meta
        property="og:url"
        content="https://paisleydoggearandtraining.com/trick-freestyle-training"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Trick & Freestyle Foundations",
            description:
              "A reward-based trick and freestyle dog training program focused on confidence, focus, body awareness, engagement, and beginner routine building.",
            provider: {
              "@type": "Organization",
              name: "Paisley Dog Gear & Training",
              sameAs: "https://paisleydoggearandtraining.com"
            },
            educationalLevel: "Beginner to intermediate",
            teaches: [
              "Trick training",
              "Canine freestyle foundations",
              "Body awareness",
              "Marker training",
              "Confidence building",
              "Trick chaining",
              "Routine building"
            ],
            courseMode: ["In person", "Private training", "Virtual coaching"]
          })
        }}
      />

      <main className="trick-page">
        <section className="trick-hero">
          <p className="eyebrow">Reward-based trick training</p>

          <h1>Trick & Freestyle Dog Training in Boston</h1>

          <p className="hero-subtitle">
            Fun, confidence-building dog training for teams who want better focus,
            body awareness, engagement, and creative skills they can actually use.
          </p>

          <div className="hero-buttons">
            <a href="/training?service=trick-training#training-form" className="primary-btn">
              Request trick training
            </a>

            <Link to="/videos" className="secondary-btn">
              Watch training videos
            </Link>
          </div>
        </section>

        <section className="trick-section intro-grid">
          <div className="intro-copy">
            <h2>More than cute tricks</h2>

            <p>
              Trick training is not just about teaching your dog to spin or wave.
              It builds communication, confidence, focus, coordination, and a stronger
              relationship between you and your dog.
            </p>

            <p>
              This program is especially helpful for dogs who need more mental
              enrichment, puppies learning how to learn, shy dogs who need confidence,
              high-energy dogs who need an outlet, and handlers who want to do
              something fun and creative with their dog.
            </p>

            <p className="demo-dog-note">
              <strong>I practice these skills with my own dogs, too:</strong> Tallulah works on
              more advanced tricks and freestyle, while Tucker is learning the same foundations
              from puppyhood before building into freestyle and agility.
            </p>
          </div>

          <div className="method-card">
            <h3>Training approach</h3>

            <p>
              Trick and freestyle skills are taught with reward-based methods,
              including food, toys, play, marker training, luring, shaping,
              capturing, and clear releases.
            </p>

            <p>
              I do not use e-collar or prong collar corrections for trick or
              freestyle work.
            </p>
          </div>
        </section>

        <section className="trick-section">
          <h2>Program options</h2>

          <div className="program-grid">
            <article className="program-card">
              <span className="program-tag">Level 1</span>
              <h3>Trick Foundations</h3>
              <p>
                Best for beginners, puppies, shy dogs, and dogs who need more
                confidence or enrichment.
              </p>

              <ul>
                <li>Marker timing and engagement</li>
                <li>Touch, spin, paws up, and hand targets</li>
                <li>Perch work and body awareness</li>
                <li>Intro to leg weaves, bow, and simple trick chains</li>
              </ul>
            </article>

            <article className="program-card">
              <span className="program-tag">Level 2</span>
              <h3>Trick Skills & Transitions</h3>
              <p>
                Best for dogs who already know a few tricks and need cleaner cues,
                smoother transitions, and more fluency.
              </p>

              <ul>
                <li>Fading food lures</li>
                <li>Cleaner verbal and hand cues</li>
                <li>Trick combinations</li>
                <li>Short polished sequences</li>
              </ul>
            </article>

            <article className="program-card">
              <span className="program-tag">Level 3</span>
              <h3>Freestyle Foundations</h3>
              <p>
                Best for teams who want to turn tricks into movement, flow,
                handler connection, and beginner routines.
              </p>

              <ul>
                <li>Handler movement and dog positions</li>
                <li>Leg weaves, circles, spins, pivots, and direction changes</li>
                <li>Props and confidence-building games</li>
                <li>30 to 60 second routine planning</li>
              </ul>
            </article>

            <article className="program-card">
              <span className="program-tag">Level 4</span>
              <h3>Trick Title & Video Prep</h3>
              <p>
                Best for teams working toward AKC or Do More With Your Dog trick
                title goals, social media videos, or performance-style routines.
              </p>

              <ul>
                <li>Trick list planning</li>
                <li>Video setup and filming help</li>
                <li>Polishing tricks for clearer performances</li>
                <li>Building confidence on camera</li>
              </ul>

              <Link to="/akc-titles#trick-dog-titles" className="program-title-link">
                See AKC Trick Dog titling →
              </Link>
            </article>
          </div>
        </section>

        <section className="trick-section split-section">
          <div>
            <h2>Good fit for</h2>

            <ul className="paw-list">
              <li>Dogs who love to learn</li>
              <li>Puppies and adolescent dogs</li>
              <li>High-energy dogs who need a mental outlet</li>
              <li>Shy dogs who need confidence</li>
              <li>Handlers who want better engagement</li>
              <li>Dogs working toward trick titles or fun routines</li>
            </ul>
          </div>

          <div>
            <h2>Not the best fit for</h2>

            <ul className="paw-list">
              <li>Dogs who are highly stressed around other dogs</li>
              <li>Dogs who cannot safely work in a group setting yet</li>
              <li>Dogs with pain or mobility concerns that have not been cleared</li>
              <li>Owners looking for behavior modification instead of trick work</li>
            </ul>
          </div>
        </section>

        <section className="trick-section pricing-preview">
          <h2>How sessions can work</h2>

          <div className="session-grid">
            <div className="session-card">
              <h3>Private trick lesson</h3>
              <p>
                Best for one dog and handler team who wants personalized coaching.
              </p>
              <strong>$90 / 60 minutes</strong>
            </div>

            <div className="session-card featured">
              <h3>4-week starter program</h3>
              <p>
                Best for teams who want structure, homework, and a clear progression.
              </p>
              <strong>$280 to $300</strong>
            </div>

            <div className="session-card">
              <h3>Virtual trick coaching</h3>
              <p>
                Best for video review, routine planning, or trick tune-ups from home.
              </p>
              <strong>$30 to $45</strong>
            </div>
          </div>

          <p className="price-note">
            Final pricing depends on format, location, travel, and goals. Group or
            beta options may be available.
          </p>
        </section>

        <section className="trick-section final-cta">
          <h2>Want to build something fun with your dog?</h2>

          <p>
            Tell me about your dog, your goals, and what kind of tricks or routine
            you want to work toward. I’ll help you choose the best starting point.
          </p>

          <div className="hero-buttons">
            <a href="/training?service=trick-training#training-form" className="primary-btn">
              Request trick training
            </a>
            <Link to="/akc-titles#trick-dog-titles" className="secondary-btn">
              AKC Trick Dog Titles
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default TrickFreestyleTraining;