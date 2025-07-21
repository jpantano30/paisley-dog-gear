import { useState, useEffect } from "react";
import "./Gallery.css";

const galleryImages = [
  
  { filename: "tallulah-sage.JPG", caption: "The Tallulah in Sage & White" },
  { filename: "handsfree-redandblack2.JPG", caption: "Hands-Free Standard Red and Black" },
  { filename: "leashextender.jpg", caption: "Leash Extender (Sage & White with Black Hardware)" },
  { filename: "custom-longline.jpg", caption: "Custom Long Line " },
  { filename: "sageNwhitecollar.jpg", caption: "Sage & White Collar" },
  { filename: "sageNwhiteCollar2.jpg", caption: "Sage & White Collar With Plastic Buckle" },
  { filename: "saftystrapparacord.jpeg", caption: "Safety Strap (Paracord)" },
  { filename: "tallulah-sage2.JPG", caption: "Sage (Alternate View)" },
  { filename: "set2.JPEG", caption: "Sage & white set" },
  // { filename: "sdharness.jpg", caption: "Standard SD Harness in Pink and Black" },
  { filename: "ballholder.jpg", caption: "Ball Holder" },
  { filename: "ballholderSW.jpeg", caption: "Ball Holder (Sage & White)" },
  // { filename: "sdharness2.jpg", caption: "SD Harness (Side View)" },
  // { filename: "customSDharness.jpg", caption: "Custom SD Harness" },
  { filename: "handsfree-redandblack1.JPG", caption: "Hands-Free Red/Black" },
  { filename: "customname.jpg", caption: "Custom Name (HTV)" },
  { filename: "Set.JPG", caption: "Sage & White set" },
  { filename: "traffichandle.jpg", caption: "Traffic Handle" },
  { filename: "CustumTrafficHandle-leash extendor.jpg", caption: "Another Traffic Handle" },
  { filename: "thetallulah.jpg", caption: "The Tallulah" },
  { filename: "standard.JPEG", caption: "Standard 6 ft in Pink & Black and Sage & White" },
  { filename: "tullyw-customtraffichandle2.jpg", caption: "Custom Leash Extendor with Built-In Paracord Fishtail Traffic Handle" },
  { filename: "fishtail2.jpg", caption: "Fishtail Braid" },
  { filename: "collar3.JPG", caption: "Collar" },
  { filename: "collar2.JPG", caption: "Collar" },
  { filename: "collar1.JPG", caption: "Collar" },
  { filename: "rolled-standard.JPG", caption: "Rolled Standard Leash" },
  { filename: "leashextendorastraffichandle2.jpg", caption: "Leash extender as traffic handle" },
  { filename: "leashextendorastraffichandle.jpg", caption: "Extender as Traffic Handle" },
  { filename: "tullyontheTallulah.jpg", caption: "Tully on The Tallulah as a Long Line" },
  { filename: "tullystrap.jpg", caption: "Tully's Safety Strap (Paracord)" },
  { filename: "PaisleyCollar.jpg", caption: "Paisley in a Sage & White Collar" },
  { filename: "PaisleyCollar2.jpg", caption: "Paisley in a Sage & White Collar" },
  { filename: "TullySaftyStrapParacord.jpg", caption: "Tully's Safety Strap (Paracord)" },
];

const Gallery = () => {
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (index) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalIndex !== null) {
        if (e.key === "ArrowRight") {
          setModalIndex((modalIndex + 1) % (galleryImages.length + 2));
        } else if (e.key === "ArrowLeft") {
          setModalIndex((modalIndex - 1 + galleryImages.length + 2) % (galleryImages.length + 2));
        } else if (e.key === "Escape") {
          setModalIndex(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIndex]);

  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      <p>Check out examples of past leashes, collars, ball holders, and more!</p>

      <div className="section-divider">
        <h2>Gear Highlights</h2>
      </div>

      <div className="gallery-grid">
        {galleryImages.map(({ filename, caption }, i) => (
          <div className="gallery-card" key={i} onClick={() => openModal(i)}>
            <img src={`/assets/${filename}`} alt={caption} />
            <p className="caption">{caption}</p>
          </div>
        ))}
      </div>

      <div className="section-divider">
        <h2>Hardware Colors</h2>
        <p className="section-note">
          These are our standard hardware colors. Curious about how different Biothane colors look together? You can preview your favorites on the <a href="/colors">Colors page</a> by clicking the ⭐ icon. Your selected colors will show up below the swatches!
        </p>
      </div>


      <div className="hardware-colors">
        <div className="gallery-item" onClick={() => openModal(galleryImages.length)}>
          <img src="/assets/silverharware.jpg" alt="Silver Hardware" />
          <p>Silver Hardware</p>
        </div>
        <div className="gallery-item" onClick={() => openModal(galleryImages.length + 1)}>
          <img src="/assets/blackhardware.jpg" alt="Black Hardware" />
          <p>Black Hardware</p>
        </div>
      </div>

      {modalIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>

            <button
              className="modal-arrow left"
              onClick={() =>
                setModalIndex(
                  (modalIndex - 1 + galleryImages.length + 2) %
                    (galleryImages.length + 2)
                )
              }
            >
              ❮
            </button>

            <img
              src={
                modalIndex < galleryImages.length
                  ? `/assets/${galleryImages[modalIndex].filename}`
                  : modalIndex === galleryImages.length
                  ? "/assets/silverharware.jpg"
                  : "/assets/blackhardware.jpg"
              }
              alt={
                modalIndex < galleryImages.length
                  ? galleryImages[modalIndex].caption
                  : modalIndex === galleryImages.length
                  ? "Silver Hardware"
                  : "Black Hardware"
              }
            />

            <button
              className="modal-arrow right"
              onClick={() =>
                setModalIndex((modalIndex + 1) % (galleryImages.length + 2))
              }
            >
              ❯
            </button>

            <p className="modal-caption">
              {modalIndex < galleryImages.length
                ? galleryImages[modalIndex].caption
                : modalIndex === galleryImages.length
                ? "Silver Hardware"
                : "Black Hardware"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
