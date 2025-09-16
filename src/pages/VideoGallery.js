// src/pages/VideoGallery.js
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./VideoGallery.css";
import "../components/page-intro.css";

// Keep the data here (simple) — each video has a stable slug for its watch page.
const videos = [
  {
    youtubeId: "AkBTQhUKgao",
    title: "Tully’s freestyle training session. Focus on backwards weaving.",
    description:
      "Tully practices backwards weaves and focus work in a real environment. Simple patterns, short reps, high reward rate.",
    type: "training",
    slug: "tully-freestyle-backwards-weave",
  },
  {
    youtubeId: "wJ6vECs0Cu4",
    title: "Tully’s freestyle practice under the Rowes Wharf Arch.",
    description:
      "Freestyle session under the Rowes Wharf Arch. Handling, arousal control, and chaining tricks with distractions.",
    type: "training",
    slug: "tully-freestyle-rowes-wharf-arch",
  },
  {
    youtubeId: "LsJ_rdnYVlY",
    title: "How the Gear Works: Hands-Free Leash (3 Colors)",
    description:
      "Hands-free leash demo. How to wear it, adjust lengths, and switch configurations for walking or training.",
    type: "gear",
    slug: "hands-free-leash-demo",
  },
  {
    youtubeId: "lmv88apu7RM",
    title: "How the Gear Works: Ball Holder",
    description:
      "Ball holder attachment demo. Where it clips, how it carries the ball securely, and quick access during training.",
    type: "gear",
    slug: "ball-holder-demo",
  },
  {
    youtubeId: "5zaoEDiXv_E",
    title: "Tully’s freestyle training session.",
    description:
      "Freestyle highlights with spins, weaves, and position changes. Short reps to keep motivation high.",
    type: "training",
    slug: "tully-freestyle-session-highlights",
  },
];

const VideoGallery = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
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
      <link
        rel="canonical"
        href="https://paisleydoggearandtraining.com/videos"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Dog Trick Tutorials and Gear Demos" />
      <meta
        property="og:description"
        content="Quick videos with trick breakdowns, training tips and gear demos to help you choose and train."
      />
      <meta
        property="og:url"
        content="https://paisleydoggearandtraining.com/videos"
      />

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

        <h2 className="video-section-title">Training Videos</h2>
        <div className="videos-grid">
          {videos
            .filter((v) => v.type === "training")
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
                    frameBorder="0"
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

        <div id="gear-demos">
          <h2 className="video-section-title">Gear Demos</h2>
          <div className="videos-grid">
            {videos
              .filter((v) => v.type === "gear")
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
                      frameBorder="0"
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
