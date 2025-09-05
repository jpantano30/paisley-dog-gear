import { useState, useEffect } from "react";
import "./Gallery.css";
import { Link } from "react-router-dom";

const galleryImages = [
  { filename: "paisley_leashCollar_ocean.jpeg", caption: "Paisley wearing her custom leash and two tone collar!", type: "image" },
  { filename: "painted.JPG", caption: "Custom Painted Collar", type: "image" },

  { filename: "tallulah-sage.JPG", caption: "The Tallulah in Sage & White", type: "image" },
  { filename: "handsfree-redandblack2.JPG", caption: "Hands-free standard red and black", type: "image" },

  { filename: "Turbo_gym.JPEG", caption: "Custom Collar with Name Plate", type: "image" },

  { filename: "/leashpicsNvids/IMG_5191.JPG", caption: "Custom 2 Tone Collar", type: "image" },
  { filename: "PurpleTrafficNCollar_ocean.jpg", caption: "Amythest Purple traffic handle/ pull tab and collar.", type: "image" },

  { filename: "/leashpicsNvids/rwb.jpg", caption: "Hands-free 8ft red, white and blue (3-tone) leash and matching adjustable collar", type: "image" },
  { filename: "collars_custom.JPG", caption: "Custom Collars", type: "image" },

  { filename: "leashextender.jpg", caption: "Leash extender (sage & white with black hardware)", type: "image" },
  { filename: "/leashpicsNvids/bella.jpg", caption: "Custom hands-free leash in amethyst purple and violet", type: "image" },

  { filename: "Turbo_painted.jpg", caption: "Turbo rocking a hand painted collar!", type: "image" },

  { filename: "/leashpicsNvids/Pan.jpg", caption: "Custom hands-free leash in blue 522 and deep sea", type: "image" },
  { filename: "custom-longline.jpg", caption: "Custom Leash in Violet", type: "image" },
  { filename: "Littleone_collar.jpg", caption: "Little one in her custom collar in Amythest Orichid Purple", type: "image" },

  { filename: "sageNwhitecollar.jpg", caption: "Sage & white collar", type: "image" },
  { filename: "/leashpicsNvids/red&bluecollar.JPG", caption: "Red & blue collar with silver buckle", type: "image" },
  { filename: "IMG_5366 copy.JPG", caption: "Custom Collar Designs", type: "image" },
  { filename: "sageNwhiteCollar2.jpg", caption: "Sage & white collar with plastic quick release buckle", type: "image" },

  { filename: "/leashpicsNvids/red&bluebuckle.JPG", caption: "Red & blue collar with silver buckle", type: "image" },

  { filename: "Leash_extender_ocean.jpg", caption: "Leash Extender", type: "image" },

  { filename: "pinkblackleash_ocean.jpg", caption: "Pink & Black Leash", type: "image" },

  { filename: "rwb_ocean2.jpg", caption: "Hands-free leash", type: "image" },


  { filename: "/leashpicsNvids/hardware.JPG", caption: "Black and silver hardware", type: "image" },
  { filename: "saftystrapparacord.jpeg", caption: "Safety Strap (Paracord)", type: "image" },
  { filename: "/leashpicsNvids/leashes.jpg", caption: "Example leash colors and styles", type: "image" },
  { filename: "tallulah-sage2.JPG", caption: "The Tallulah system (Alternate View)", type: "image" },
  { filename: "/leashpicsNvids/traffichandleEdit.jpg", caption: "Pink and Black Traffic Handle", type: "image" },
  
  { filename: "/leashpicsNvids/leashes2.jpg", caption: "Example leash colors and styles", type: "image" },
  { filename: "set2.JPEG", caption: "Sage & white set", type: "image" },
  // { filename: "sdharness.jpg", caption: "Standard SD Harness in Pink and Black" },
  { filename: "ballholder.jpg", caption: "Ball Holder", type: "image" },
  { filename: "/leashpicsNvids/handsfreebasic.JPG", caption: "Custom hands-free leash in amethyst purple and Violet", type: "image" },
  { filename: "/leashpicsNvids/ballholder3.JPG", caption: "Sage & white ball holder with snap and clip", type: "image" },
  { filename: "/leashpicsNvids/longlinerolled.JPG", caption: "Long Line (Rolled)", type: "image" },
  { filename: "/leashpicsNvids/customtraffichandle3.JPG", caption: "Custom Leash Extendor with Built-In Paracord Fishtail Traffic Handle", type: "image" },
  { filename: "/leashpicsNvids/b&pstandard.JPG", caption: "Black and pink standard leash", type: "image" },
  // { filename: "sdharness2.jpg", caption: "SD Harness (Side View)" },
  // { filename: "customSDharness.jpg", caption: "Custom SD Harness" },
  { filename: "handsfree-redandblack1.JPG", caption: "Hands-free red/black", type: "image" },
  { filename: "customname.jpg", caption: "Custom Name (HTV)", type: "image" },
  { filename: "Set.JPG", caption: "Sage & white set", type: "image" },
  { filename: "/leashpicsNvids/IMG_5161.JPG", caption: "Traffic Handle", type: "image" },
  { filename: "thetallulah.jpg", caption: "The Tallulah", type: "image" },
  { filename: "standard.JPEG", caption: "Standard 6 ft in Pink & black and Sage & white", type: "image" },
  { filename: "/leashpicsNvids/set3.jpg", caption: "Sage & white set", type: "image" },
  { filename: "tullyw-customtraffichandle2.jpg", caption: "Custom leash extendor with built-in paracord fishtail traffic handle", type: "image" },
  { filename: "fishtail2.jpg", caption: "Fishtail Braid", type: "image" },
  { filename: "rolled-standard.JPG", caption: "Rolled Standard Leash", type: "image" },
  { filename: "/leashpicsNvids/IMG_5139.JPG", caption: "Fishtail braid", type: "image" },
  { filename: "collar3.JPG", caption: "Collar", type: "image" },
  { filename: "collar2.JPG", caption: "Collar", type: "image" },
  { filename: "collar1.JPG", caption: "Collar", type: "image" },
  { filename: "leashextendorastraffichandle2.jpg", caption: "Leash extender as traffic handle", type: "image" },
  { filename: "leashextendorastraffichandle.jpg", caption: "Extender as Traffic Handle", type: "image" },
  { filename: "tullyontheTallulah.jpg", caption: "Tully on The Tallulah as a Long Line", type: "image" },
  { filename: "tullystrap.jpg", caption: "Tully's Safety Strap (Paracord)", type: "image" },
  { filename: "PaisleyCollar.jpg", caption: "Paisley in a Sage & White Collar", type: "image" },
  { filename: "PaisleyCollar2.jpg", caption: "Paisley in a Sage & White Collar", type: "image" },
  { filename: "TullySaftyStrapParacord.jpg", caption: "Tully's Safety Strap (Paracord)", type: "image" },
  { filename: "lo_collarleash.jpg", caption: "", type: "image" },
  { filename: "Turbo_collar.jpg", caption: "", type: "image" },
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
    <>
    {/* SEO tags for Gallery page */}
    <title>Gallery | Biothane Gear and Training</title>
    <meta name="description" content="Real dogs using our custom biothane gear plus training clips and before and after moments." />
    <link rel="canonical" href="https://paisleydoggearandtraining.com/gallery" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="Gallery | Biothane Gear and Training" />
    <meta property="og:description" content="Real dogs using our custom biothane gear plus training clips and before and after moments." />
    <meta property="og:url" content="https://paisleydoggearandtraining.com/gallery" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Gallery | Biothane Gear and Training" />
    <meta name="twitter:description" content="Real dogs using our custom biothane gear plus training clips and before and after moments." />

    <div className="gallery-page">
      <h1>Gallery</h1>
      <p>Check out examples of past leashes, collars, ball holders, and more!</p>

      <p>View our <Link to="/videos">video gallery</Link> for more inspiration.</p>

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
    </>
  );
};

export default Gallery;
