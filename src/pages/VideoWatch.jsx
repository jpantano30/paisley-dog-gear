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

export default function VideoWatch() {
  const { slug } = useParams();
  const video = videos.find(v => v.slug === slug);

  useEffect(() => {
    if (!video) return;

    const pageUrl = `${SITE}/videos/${video.slug}`;
    const youtubeWatchUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${video.youtubeId}`;
    // hqdefault.jpg is safe; maxres isn’t guaranteed for all uploads
    const thumb = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;

    // <title>
    const previousTitle = document.title;
    document.title = `${video.title} | Training and Gear Videos`;

    // <meta name="description">
    const metaDesc = setOrCreate('meta[name="description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    });
    const prevDesc = metaDesc.getAttribute("content");
    metaDesc.setAttribute("content", video.description);

    // <link rel="canonical">
    const canonical = setOrCreate('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    });
    const prevCanon = canonical.getAttribute("href");
    canonical.setAttribute("href", pageUrl);

    // Open Graph
    // const og = (p, c) => {
    //   const sel = `meta[property="${p}"]`;
    //   const el = setOrCreate(sel, () => {
    //     const m = document.createElement("meta");
    //     m.setAttribute("property", p);
    //     return m;
    //   });
    //   el.setAttribute("content", c);
    //   return el;
    // };
    // const ogTitle = og("og:title", video.title);
    // const ogDesc  = og("og:description", video.description);
    // const ogType  = og("og:type", "video.other");
    // const ogUrl   = og("og:url", pageUrl);
    // const ogImg   = og("og:image", thumb);

    // Twitter
    // const tw = (n, c) => {
    //   const sel = `meta[name="${n}"]`;
    //   const el = setOrCreate(sel, () => {
    //     const m = document.createElement("meta");
    //     m.setAttribute("name", n);
    //     return m;
    //   });
    //   el.setAttribute("content", c);
    //   return el;
    // };
    

    // JSON-LD VideoObject — replace any prior instance
    const existing = document.getElementById("video-jsonld");
    if (existing) existing.remove();

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "video-jsonld";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": video.title,
      "description": video.description,
      "thumbnailUrl": [thumb],
      "uploadDate": video.uploadDate,   // YYYY-MM-DD
      "duration": video.duration,       // ISO 8601 (e.g., PT1M16S)
      "embedUrl": youtubeEmbedUrl,
      "contentUrl": youtubeWatchUrl,    // where the video can be watched
      "url": pageUrl,
      "publisher": {
        "@type": "Organization",
        "name": "Paisley Dog Gear & Training"
      }
    });
    document.head.appendChild(ld);

    // Cleanup on unmount or slug change: restore previous head state where possible
    return () => {
      document.title = previousTitle;
      if (prevDesc) metaDesc.setAttribute("content", prevDesc);
      if (prevCanon) canonical.setAttribute("href", prevCanon);
      ld.remove();
      // leave OG/Twitter tags in place (safe for SPA), they’ll be overwritten by next page
    };
  }, [slug, video]);

  if (!video) {
    return (
      <div className="container" style={{padding:"32px 16px"}}>
        <h1>Video not found</h1>
        <p><Link to="/videos">Back to all videos</Link></p>
      </div>
    );
  }

  return (
    <div className="container stack-lg">
      <nav style={{ marginTop: "1rem" }}>
        <Link to="/videos">← Back to all videos</Link>
      </nav>

      <article>
        <h1 style={{ marginBottom: 0 }}>{video.title}</h1>
        <p style={{ color: "#475569" }}>{video.description}</p>

        <div className="video-wrapper" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: 0, borderRadius: "12px" }}
          />
        </div>

        <section aria-label="About this video" style={{ marginTop: "1rem" }}>
          <h2>About</h2>
          <p>
            This video shows how the hands-free leash system works in real life, including
            how to wear it, adjust the setup, and use the different connection points.
          </p>
          <p>
            <Link to="/videos">See more videos</Link> ·{" "}
            <Link to="/builder">Build your leash</Link> ·{" "}
            <Link to="/order">Request a quote</Link>
          </p>
        </section>
      </article>
    </div>
  );
}
