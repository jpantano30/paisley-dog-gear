import React, { useState } from "react";
import "./Gallery.css";

const galleryImages = [
  "thetallulah.jpg",
  "tullyontheTallulah.jpg",
  "leashextender.jpg",
  "leashextendorastraffichandle.jpg",
  "leashextendorastraffichandle2.jpg",
  "ballholder.jpg",
  "sdharness.jpg",
  "sdharness2.jpg",
  "customSDharness.jpg",
  "custom-longline.jpg",
  "customname.jpg",
  "traffichandle.jpg",
  "CustumTrafficHandle.jpg",
];

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      <p>Check out examples of past leashes, collars, harnesses, and more!</p>

      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <img
            key={i}
            src={`/assets/${img}`}
            alt={`Dog gear ${i + 1}`}
            onClick={() => setModalImage(`/assets/${img}`)}
          />
        ))}
      </div>

      <h2>Hardware Colors</h2>
      <div className="hardware-colors">
        <div className="gallery-item" onClick={() => setModalImage("/assets/silverharware.jpg")}>
          <img src="/assets/silverharware.jpg" alt="Silver Hardware" />
          <p>Silver Hardware</p>
        </div>
        <div className="gallery-item" onClick={() => setModalImage("/assets/blackhardware.jpg")}>
          <img src="/assets/blackhardware.jpg" alt="Black Hardware" />
          <p>Black Hardware</p>
        </div>
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content">
            <img src={modalImage} alt="Full Preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
