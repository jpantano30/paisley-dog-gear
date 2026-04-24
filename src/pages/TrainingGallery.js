import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TrainingGallery.css";
import "../components/page-intro.css";

const trainingMedia = [
  {
    type: "video",
    title: "Confidence Building",
    src: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    caption: "Confidence-building session using movement, engagement, and reward-based choices."
  },
  {
    type: "video",
    title: "Loose Leash Walking",
    src: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    caption: "Loose leash work with clear leash pressure, engagement, and release."
  },
  {
    type: "image",
    title: "Public Manners",
    src: "/assets/training/public-manners.jpg",
    caption: "Practicing calm behavior and handler focus in a real-world environment."
  },
  {
    type: "image",
    title: "Trick Training",
    src: "/assets/training/trick-training.jpg",
    caption: "Trick and freestyle foundations for confidence, body awareness, and engagement."
  }
];

export default function TrainingGallery() {
  const [modalItem, setModalItem] = useState(null);

  return (
    <>
      <title>Training Gallery | Paisley Dog Gear & Training</title>
      <meta
        name="description"
        content="Training photos and videos showing obedience, leash skills, confidence building, public manners, tricks, and service dog foundations."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/training-gallery" />

      <div className="training-gallery-page">
        <h1>Training Gallery</h1>

        <p>
          A look at real training sessions, including leash skills, confidence building, public manners,
          puppy foundations, tricks, and service dog task foundations.
        </p>

        <section className="page-intro">
          <h2>Real dogs, real training</h2>
          <p>
            This gallery is separate from the gear gallery so training examples are easier to find.
            For custom gear photos, visit the <Link to="/gallery">gear gallery</Link>.
          </p>
        </section>

        <div className="training-media-grid">
          {trainingMedia.map((item, index) => (
            <article className="training-media-card" key={index}>
              <div className="training-media-frame">
                {item.type === "video" ? (
                  <iframe
                    src={item.src}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    onClick={() => setModalItem(item)}
                  />
                )}
              </div>

              <div className="training-media-copy">
                <h2>{item.title}</h2>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>

        {modalItem && (
          <div className="training-modal" onClick={() => setModalItem(null)}>
            <div className="training-modal-content">
              <img src={modalItem.src} alt={modalItem.title} />
              <p>{modalItem.caption}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}