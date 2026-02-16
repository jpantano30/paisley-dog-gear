// src/pages/VideoGallery.js
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./VideoGallery.css";
import "../components/page-intro.css";
import { videos } from "../data/Videos"; // single source of truth
import { useHead } from "../utils/useHead";

const VideoGallery = () => {
  const location = useLocation();

  useHead({
    title: "Training and Gear Videos | Paisley Dog Gear and Training",
    description: "Quick videos with trick breakdowns, training tips, and gear demos.",
    canonical: "https://paisleydoggearandtraining.com/videos",
    metas: [
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Training and Gear Videos" },
      {
        property: "og:description",
        content: "Quick videos with trick breakdowns, training tips, and gear demos.",
      },
      { property: "og:url", content: "https://paisleydoggearandtraining.com/videos" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Training and Gear Videos" },
      {
        name: "twitter:description",
        content: "Quick videos with trick breakdowns, training tips, and gear demos.",
      },
    ],
  });

  // preserve smooth scroll-to-hash behavior
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  const training = videos.filter((v) => v.type === "training");
  const gear = videos.filter((v) => v.type === "gear");

  return (
    <div className="video-page container">
      <h1>Training &amp; Gear Videos</h1>
      <p>Here are some of our favorite training moments and gear demos!</p>

      <section aria-label="About these videos" className="page-intro">
        <h2>What you’ll find here</h2>
        <p>
          Quick clips of real training sessions and short demos of our custom biothane gear.
          Training videos show handling, tricks, and how we build confidence in busy places.
          Gear demos walk through features like the hands-free system and ball holder so you
          can see how they attach and why they’re useful.
        </p>
        <p>
          If a demo helps you decide, you can <Link to="/builder">build your gear</Link> and
          then <Link to="/order">request a quote</Link>.
        </p>
      </section>

      <h2 className="video-section-title">Training Videos</h2>
      <div className="videos-grid">
        {training.map(({ youtubeId, title, slug }, idx) => (
          <div className="video-card" key={youtubeId}>
            <div className="video-wrapper" aria-label={`Watch ${title}`}>
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={title}
                // eager-load a few so crawlers / QA see real content immediately
                loading={idx < 3 ? "eager" : "lazy"}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="video-title">
              <Link to={`/videos/${slug}`}>{title}</Link>
            </p>
          </div>
        ))}
      </div>

      <div id="gear-demos">
        <h2 className="video-section-title">Gear Demos</h2>
        <div className="videos-grid">
          {gear.map(({ youtubeId, title, slug }, idx) => (
            <div className="video-card" key={youtubeId}>
              <div className="video-wrapper" aria-label={`Watch ${title}`}>
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={title}
                  loading={idx < 2 ? "eager" : "lazy"}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <p className="video-title">
                <Link to={`/videos/${slug}`}>{title}</Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;