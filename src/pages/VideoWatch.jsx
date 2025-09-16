import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { videos } from "../data/Videos";
import "./VideoGallery.css";

const site = "https://paisleydoggearandtraining.com";

const VideoWatch = () => {
  const { slug } = useParams();
  const video = videos.find(v => v.slug === slug);

  useEffect(() => {
    if (!video) return;
    // Basic SEO tags for the page
    const title = `${video.title} | Training and Gear Videos`;
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDesc.setAttribute("name", "description");
    metaDesc.setAttribute("content", video.description);
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    const linkCanonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    linkCanonical.setAttribute("rel", "canonical");
    linkCanonical.setAttribute("href", `${site}/videos/${video.slug}`);
    if (!linkCanonical.parentNode) document.head.appendChild(linkCanonical);

    // JSON-LD VideoObject
    const existingLd = document.getElementById("video-jsonld");
    if (existingLd) existingLd.remove();

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
      "uploadDate": "2025-09-01",
      "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`,
      "contentUrl": `${site}/videos/${video.slug}`,
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
      <nav style={{marginTop:"1rem"}}><Link to="/videos">← Back to all videos</Link></nav>
      <article>
        <h1>{video.title}</h1>
        <p>{video.description}</p>

        <div className="video-wrapper" style={{aspectRatio:"16 / 9"}}>
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            loading="lazy" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <section aria-label="About this video" style={{marginTop:"1rem"}}>
          <h2>About</h2>
          <p>
            This is a dedicated watch page so search engines can index the video.
            If you want more like this, check the full gallery or gear builder.
          </p>
          <p>
            <Link to="/videos">See more videos</Link> · <a href="/builder">Build your gear</a> · <a href="/order">Request a quote</a>
          </p>
        </section>
      </article>
    </div>
  );
};

export default VideoWatch;
