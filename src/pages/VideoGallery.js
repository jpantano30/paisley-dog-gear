
import React from "react";
import "./VideoGallery.css";

const videoFiles = [
  {
    youtubeId: "AkBTQhUKgao",
    title: "Tully’s freestyle training session. Focus on backwards weaving.",
  },
  {
    youtubeId: "LsJ_rdnYVlY",
    title: "How the Gear Works: Hands-Free Leash (3 Colors)",
  },
  {
    youtubeId: "lmv88apu7RM",
    title: "How the Gear Works: Ball Holder",
  },
];

const VideoGallery = () => (
  <div className="video-page container">
    <h1>Training & Gear Videos</h1>
    <p>Here are some of our favorite training moments and gear demos!</p>

    <div className="videos-grid">
      {videoFiles.map(({ youtubeId, title }) => (
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
);

export default VideoGallery;

