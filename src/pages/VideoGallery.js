import React from "react";
import "./VideoGallery.css";
import ReactPlayer from 'react-player';

const VideoGallery = () => {
  return (
    <div className="video-page">
      <h1> Training Videos</h1>
      <p>Here are some of our favorite training moments!</p>

      <div className="video-wrapper">
        <iframe
          src="https://drive.google.com/uc?export=preview&id=1s64KlZZu8NPfWTyeuNUoeTBQD_6QBGMf"
          allow="autoplay"
          allowFullScreen
          title="Tully Training Video"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default VideoGallery;
