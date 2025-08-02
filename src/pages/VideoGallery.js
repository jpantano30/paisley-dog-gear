import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./VideoGallery.css";

const videoFiles = [
  {
    youtubeId: "AkBTQhUKgao",
    title: "Tully’s freestyle training session. Focus on backwards weaving.",
    type: "training",
  },
  {
    youtubeId: "LsJ_rdnYVlY",
    title: "How the Gear Works: Hands-Free Leash (3 Colors)",
    type: "gear",
  },
  {
    youtubeId: "lmv88apu7RM",
    title: "How the Gear Works: Ball Holder",
    type: "gear",
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
    <div className="video-page container">
      <h1>Training & Gear Videos</h1>
      <p>Here are some of our favorite training moments and gear demos!</p>

      <h2 className="video-section-title">Training Videos</h2>
      <div className="videos-grid">
        {videoFiles
          .filter(video => video.type === "training")
          .map(({ youtubeId, title }) => (
            <div className="video-card" key={youtubeId}>
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={title}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
              <p className="video-title">{title}</p>
            </div>
          ))}
      </div>

      <div id="gear-demos">
        <h2 className="video-section-title">Gear Demos</h2>
        <div className="videos-grid">
          {videoFiles
            .filter(video => video.type === "gear")
            .map(({ youtubeId, title }) => (
              <div className="video-card" key={youtubeId}>
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title={title}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
                <p className="video-title">{title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
