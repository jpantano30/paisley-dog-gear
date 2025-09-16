// src/pages/VideoWatch.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { videos } from "../data/Videos";

const SITE = "https://paisleydoggearandtraining.com";

const setOrCreate = (selector, create) => {
  let el = document.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

const VideoWatch = () => {
  const { slug } = useParams();
  const video = videos.find(v => v.slug === slug);

  useEffect(() => {
    if (!video) return;

    // <title>
    document.title = `${video.title} | Training and Gear Videos`;

    // <meta name="description">
    const metaDesc = setOrCreate('meta[name="description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    });
    metaDesc.setAttribute("content", video.description);

    // <link rel="canonical">
    const canonical = setOrCreate('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    });
    canonical.setAttribute("href", `${SITE}/videos/${video.slug}`);

    // JSON-LD VideoObject
    const existing = document.getElementById("video-jsonld");
    if (existing) existing.remove();

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "video-jsonld";
    const thumb = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": video.title,
      "description": video.description,
      "thumbnailUrl": [thumb],
      "uploadDate": video.uploadDate,     // NEW
      "duration": video.duration,         // NEW (ISO 8601, e.g. PT1M10S)
      "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`,
      "contentUrl": `${SITE}/videos/${video.slug}`,
      "publisher": {
        "@type": "Organization",
        "name": "Paisley Dog Gear and Training"
      }
    });
    document.head.appendChild(ld);
  }, [video]);

  if (!video) {
    return (
      <div className="container">
        <h1>Video not found</h1>
        <p><Link to="/videos">Back to all videos</Link></p>
      </div>
    );
  }

  return (
    <div className="container">
      <nav style={{ marginTop: "1rem" }}>
        <Link to="/videos">← Back to all videos</Link>
      </nav>

      <article>
        <h1>{video.title}</h1>
        <p>{video.description}</p>

        <div className="video-wrapper" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <section aria-label="About this video" style={{ marginTop: "1rem" }}>
          <h2>About</h2>
          <p>
            This dedicated watch page helps search engines index the video.
            Want more like this? Explore the full gallery or build your gear.
          </p>
          <p>
            <Link to="/videos">See more videos</Link> ·{" "}
            <a href="/builder">Build your gear</a> ·{" "}
            <a href="/order">Request a quote</a>
          </p>
        </section>
      </article>
    </div>
  );
};

export default VideoWatch;
