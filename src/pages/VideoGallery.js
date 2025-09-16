// src/pages/VideoGallery.js
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./VideoGallery.css";
import "../components/page-intro.css";
import { videos } from "../data/Videos"; // <- single source of truth

const VideoGallery = () => {
  const location = useLocation();

  // preserve your smooth scroll-to-hash behavior
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  return (
    <>
      {/* SEO tags for Video Gallery page */}
      <title>Dog Trick Tutorials and Gear Demos</title>
      <meta
        name="description"
        content="Quick videos with trick breakdowns, training tips and gear demos to help you choose and train."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/videos" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Dog Trick Tutorials and Gear Demos" />
      <meta
        property="og:description"
        content="Quick videos with trick breakdowns, training tips and gear demos to help you choose and train."
      />
      <meta property="og:url" content="https://paisleydoggearandtraining.com/videos" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dog Trick Tutorials and Gear Demos" />
      <meta
        name="twitter:description"
        content="Quick videos with trick breakdowns, training tips and gear demos to help you choose and train."
      />

      <div className="video-page container">
        <h1>Training &amp; Gear Videos</h1>
        <p>Here are some of our favorite training moments and gear demos!</p>

        <section aria-label="About these videos" className="page-intro">
          <h2>What you’ll find here</h2>
          <p>
            Quick clips of real training sessions and short demos of our custom
            biothane gear. Training videos show handling, tricks, and how we build
            confidence in busy places. Gear demos walk through features like the
            hands-free system and ball holder so you can see how they attach and why
            they’re useful.
          </p>
          <p>
            If a demo helps you decide, you can <a href="/builder">build your gear</a>{" "}
            and then <a href="/order">request a quote</a>.
          </p>
        </section>

        {/* TRAINING SECTION */}
        <h2 className="video-section-title">Training Videos</h2>
        <div className="videos-grid">
          {videos
            .filter(v => v.type === "training")
            .map(({ youtubeId, title, slug }) => (
              <div className="video-card" key={youtubeId}>
                <Link
                  to={`/videos/${slug}`}
                  className="video-wrapper"
                  aria-label={`Watch ${title}`}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title={title}
                    loading="lazy" 
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </Link>
                <p className="video-title">
                  <Link to={`/videos/${slug}`}>{title}</Link>
                </p>
              </div>
            ))}
        </div>

        {/* GEAR SECTION */}
        <div id="gear-demos">
          <h2 className="video-section-title">Gear Demos</h2>
          <div className="videos-grid">
            {videos
              .filter(v => v.type === "gear")
              .map(({ youtubeId, title, slug }) => (
                <div className="video-card" key={youtubeId}>
                  <Link
                    to={`/videos/${slug}`}
                    className="video-wrapper"
                    aria-label={`Watch ${title}`}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeId}`}
                      title={title}
                      loading="lazy" 
                      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  </Link>
                  <p className="video-title">
                    <Link to={`/videos/${slug}`}>{title}</Link>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoGallery;
