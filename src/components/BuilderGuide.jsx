import React from "react";
import { Link } from "react-router-dom";
import "./BuilderGuide.css";

/** Images live in /public/assets/...  */
const PRODUCT_MEDIA = {
  leash: {
    src: "/assets/leashpicsNvids/b&pstandard.JPG",
    alt: "Custom biothane leash with swivel snap and loop handle",
    credit: "Leash example",
  },
  longLine: {
    src: "/assets/leashpicsNvids/longlinerolled.JPG",
    alt: "Long line example",
    credit: "Long line example",
  },
  handsFreeSystem: {
    src: "/assets/hands-free-coral_Navy.JPG",
    alt: "Hands-free leash system - Standard",
    credit: "Hands-free leash system - Standard",
  },
  trafficLead: {
    src: "/assets/duke.JPG",
    alt: "Traffic handle / short lead",
    credit: "Traffic handle example",
  },
  leashExtender: {
    src: "/assets/leashextender.jpg",
    alt: "Leash extender with snap and ring",
    credit: "Leash extender example",
  },
  ballHolder: {
    src: "/assets/leashpicsNvids/ballholder3.JPG",
    alt: "Ball holder accessory",
    credit: "Ball holder example",
  },
  collarBuckle: {
    src: "/assets/collars_custom.JPG",
    alt: "Biothane collar with metal buckle",
    credit: "Collar example",
  },
  safetyStrapBiothane: {
    src: "/assets/saftystrapparacord.jpeg",
    alt: "Biothane safety strap",
    credit: "Safety strap (Biothane)",
  },
  safetyStrapParacord: {
    src: "/assets/saftystrapparacord.jpeg",
    alt: "Paracord safety strap",
    credit: "Safety strap (Paracord weave)",
  },
};

const StandardList = ({ productType }) => {
  if (productType === "leash") {
    return (
      <ul className="guide-list">
        <li>Width: <strong>5/8″</strong></li>
        <li>Snap: <strong>Swivel snap</strong></li>
        <li>Grip: <strong>Loop handle</strong></li>
        <li>Hardware: <strong>Silver</strong></li>
        <li>Two-tone: <strong>Off</strong></li>
      </ul>
    );
  }

  if (productType === "longLine") {
    return (
      <ul className="guide-list">
        <li>Width: <strong>5/8″</strong></li>
        <li>Snap: <strong>Swivel snap</strong></li>
        <li>Grip: <strong>Loop handle</strong></li>
        <li>Hardware: <strong>Silver</strong></li>
        <li>Two-tone: <strong>Off</strong></li>
        <li>Base length: <strong>12 ft</strong></li>
      </ul>
    );
  }


  if (productType === "handsFreeSystem") {
    return (
      <ul className="guide-list">
        <li>Width: <strong>5/8″</strong></li>
        <li>Adjusters: <strong>Sliding O/D-rings</strong></li>
        <li>Carry: <strong>Handheld / cross-body / waist</strong></li>
        <li>Two-tone: <strong>Optional</strong></li>
      </ul>
    );
  }

  if (productType === "trafficLead") {
    return (
      <ul className="guide-list">
        <li>Typical length: <strong>8–12″</strong></li>
        <li>Width: <strong>5/8″</strong></li>
        <li>Snap: <strong>Swivel or carabiner</strong></li>
        <li>Hardware: <strong>Silver</strong></li>
        <li>Two-tone: <strong>Optional</strong></li>
      </ul>
    );
  }

  if (productType === "leashExtender") {
    return (
      <ul className="guide-list">
        <li>Ends: <strong>Snap + O-ring</strong></li>
        <li>Use: <strong>Extend leash / quick hands-free</strong></li>
        <li>Typical length: <strong>6–18″</strong></li>
        <li>Two-tone: <strong>Optional</strong></li>
      </ul>
    );
  }

  if (productType?.startsWith("safetyStrap")) {
    return (
      <ul className="guide-list">
        <li>Purpose: <strong>Backup from collar to harness</strong></li>
        <li>Ends: <strong>Two snaps</strong></li>
        <li>Typical length: <strong>3–8″</strong></li>
        <li>Material: <strong>{productType === "safetyStrapParacord" ? "Paracord weave" : "Biothane"}</strong></li>
      </ul>
    );
  }

  if (productType === "ballHolder") {
    return (
      <ul className="guide-list">
        <li>Fits: <strong>Standard ChuckIt ball</strong></li>
        <li>Attach: <strong>D-ring + carabiner</strong></li>
        <li>Width: <strong>5/8″</strong></li>
        <li>Two-tone: <strong>Optional</strong></li>
      </ul>
    );
  }

  if (productType === "collarBuckle") {
    return (
      <ul className="guide-list">
        <li>Buckle: <strong>Metal double-bar</strong> (black or silver)</li>
        <li>Widths: <strong>5/8″</strong> or <strong>1″</strong></li>
        <li>Options: <strong>Two-tone</strong>, <strong>HTV name/phone</strong></li>
      </ul>
    );
  }

  return (
    <ul className="guide-list">
      <li>Pick a product to see tips.</li>
      <li>You can always <Link to="/options">review options</Link> first.</li>
    </ul>
  );
};

export default function BuilderGuide({ form }) {
  const type = form?.productType || "";
  const media = PRODUCT_MEDIA[type];

  return (
    <aside className="guide-card" aria-label="Builder Guide">
      <div className="guide-header">
        <span className="guide-bulb" aria-hidden>💡</span>
        <div>
          <h4 className="guide-title">Builder Guide</h4>
          <div className="guide-sub">Tips for picking sizes and options</div>
        </div>
      </div>

      {media && (
        <figure className="guide-figure">
          <img src={media.src} alt={media.alt} />
          <figcaption>{media.credit}</figcaption>
        </figure>
      )}

      <section className="guide-section">
        <h5>Standard Picks</h5>
        <StandardList productType={type} />
      </section>

      {(type === "leash" || type === "longLine") && (
        <>
          <section className="guide-section">
            <h5>Hands-free Conversion</h5>
            <p>
              Converts a standard leash into a hands-free setup with clip points for handheld,
              cross-body, or waist carry—easy to shorten on the fly. Recommended lengths:
              <strong> 7–10 ft</strong>.
            </p>
          </section>

          <section className="guide-section">
            <h5>Built-in Traffic Handle</h5>
            <p>
              Adds a close-control handle near the snap for busy areas or crossings. Choose
              <strong> Biothane</strong> (flat) or a <strong>Paracord</strong> overlay for extra
              grip, then set the placement: <em>Base</em> (by the snap) or <em>12″/18″/24″</em> above.
            </p>
          </section>
        </>
      )}

      <section className="guide-section">
        <h5>Two-tone Colors</h5>
        <p>
          Pick a primary plus an accent for a clean, custom look. Need help choosing?
          Open the <a href="/colors" target="_blank" rel="noopener noreferrer">color chart</a>.
        </p>
      </section>

      {(type === "leash" || type === "longLine" || type === "handsFreeSystem" || type === "leashExtender") && (
        <section className="guide-section">
          <h5>Rings & Extras</h5>
          <p>
            Add O/D-rings for clip points, a floating O-ring for quick hands-free,
            or a stopper to hold a sliding ring in place.
          </p>
        </section>
      )}
    </aside>
  );
}
