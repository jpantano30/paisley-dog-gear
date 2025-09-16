import React from "react";
import { Link } from "react-router-dom";

/**
 * Optional media per product.
 * Put images in /public/assets/guide/ and point to them here.
 * If an entry is missing, the media block is simply hidden.
 */
const PRODUCT_MEDIA = {
  leash: {
    src: "/assets/guide/leash.jpg",
    alt: "Custom biothane leash with swivel snap and loop handle",
    credit: "Leash example"
  },
  longLine: {
    src: "/assets/guide/longline.jpg",
    alt: "Long line example",
    credit: "Long line example"
  },
  handsFreeSystem: {
    src: "/assets/guide/handsfree.jpg",
    alt: "Hands-free leash worn cross-body",
    credit: "Hands-free system shown cross-body"
  },
  trafficLead: {
    src: "/assets/guide/traffic-handle.jpg",
    alt: "Traffic handle / short lead",
    credit: "Traffic handle example"
  },
  leashExtender: {
    src: "/assets/guide/extender.jpg",
    alt: "Leash extender with snap and ring",
    credit: "Leash extender example"
  },
  ballHolder: {
    src: "/assets/guide/ball-holder.jpg",
    alt: "Ball holder accessory",
    credit: "Ball holder example"
  },
  collarBuckle: {
    src: "/assets/guide/collar.jpg",
    alt: "Biothane collar with metal buckle",
    credit: "Collar example"
  },
  safetyStrapBiothane: {
    src: "/assets/guide/safety-strap-bio.jpg",
    alt: "Biothane safety strap",
    credit: "Safety strap (Biothane)"
  },
  safetyStrapParacord: {
    src: "/assets/guide/safety-strap-para.jpg",
    alt: "Paracord safety strap",
    credit: "Safety strap (Paracord weave)"
  }
};

const StandardList = ({ productType }) => {
  // Defaults for most leash/line builds
  const base = [
    <>Width: <strong>5/8″</strong></>,
    <>Snap: <strong>Swivel snap</strong></>,
    <>Grip: <strong>Loop handle</strong></>,
    <>Hardware: <strong>Silver</strong></>,
    <>Two-tone: <strong>Off</strong></>
  ];

  if (productType === "longLine") return <ul className="guide-bullets">{base}</ul>;
  if (productType === "leash") return <ul className="guide-bullets">{base}</ul>;

  if (productType === "handsFreeSystem") {
    return (
      <ul className="guide-bullets">
        <>Width: <strong>5/8″</strong></>
        <>Traffic handle: <strong>Included</strong></>
        <>Adjusters: <strong>Sliding O/D-rings</strong></>
        <>Carry: <strong>Handheld / cross-body / waist</strong></>
        <>Two-tone: <strong>Optional</strong></>
      </ul>
    );
  }

  if (productType === "trafficLead") {
    return (
      <ul className="guide-bullets">
        <>Typical length: <strong>8–12″</strong></>
        <>Width: <strong>5/8″</strong></>
        <>Snap: <strong>Swivel or carabiner</strong></>
        <>Hardware: <strong>Silver</strong></>
        <>Two-tone: <strong>Optional</strong></>
      </ul>
    );
  }

  if (productType === "leashExtender") {
    return (
      <ul className="guide-bullets">
        <>Ends: <strong>Snap + O-ring</strong></>
        <>Use: <strong>Extend leash / quick hands-free</strong></>
        <>Typical length: <strong>6–18″</strong></>
        <>Two-tone: <strong>Optional</strong></>
      </ul>
    );
  }

  if (productType?.startsWith("safetyStrap")) {
    return (
      <ul className="guide-bullets">
        <>Purpose: <strong>Backup from collar to harness</strong></>
        <>Ends: <strong>Two snaps</strong></>
        <>Typical length: <strong>3–8″</strong></>
        <>Material: <strong>{productType === "safetyStrapParacord" ? "Paracord weave" : "Biothane"}</strong></>
      </ul>
    );
  }

  if (productType === "ballHolder") {
    return (
      <ul className="guide-bullets">
        <>Fits: <strong>Standard ChuckIt ball</strong></>
        <>Attach: <strong>D-ring + carabiner</strong></>
        <>Width: <strong>5/8″</strong></>
        <>Two-tone: <strong>Optional</strong></>
      </ul>
    );
  }

  if (productType === "collarBuckle") {
    return (
      <ul className="guide-bullets">
        <>Buckle: <strong>Metal double-bar</strong> (black or silver)</>
        <>Widths: <strong>5/8″</strong> or <strong>1″</strong></>
        <>Options: <strong>Two-tone</strong>, <strong>HTV name/phone</strong></>
      </ul>
    );
  }

  // Fallback if no product chosen
  return (
    <ul className="guide-bullets">
      <>Pick a product to see tips.</>
      <>You can always <Link to="/options">review options</Link> first.</>
    </ul>
  );
};

export default function BuilderGuide({ form }) {
  const type = form?.productType || "";
  const media = PRODUCT_MEDIA[type];

  return (
    <aside aria-label="Builder Help">
      <div className="guide-header">
        <span className="guide-dot" aria-hidden>💡</span>
        <div>
          <h4 className="guide-title">Builder Guide</h4>
          <div className="guide-sub">Tips for picking sizes and options</div>
        </div>
      </div>

      {/* Media (optional) */}
      {media && (
        <figure className="guide-media">
          <img src={media.src} alt={media.alt} />
          <figcaption>{media.credit}</figcaption>
        </figure>
      )}

      <div className="guide-section">
        <h5>Standard Picks</h5>
        <StandardList productType={type} />
      </div>

      {/* Contextual explanations that apply to leash/line items */}
      {(type === "leash" || type === "longLine") && (
        <>
          <div className="guide-section">
            <h5>Hands-free Conversion</h5>
            <p>
              Converts a standard leash into a hands-free setup with clip points for handheld,
              cross-body, or waist carry — easy to shorten on the fly. Recommended lengths:
              <strong> 7–10 ft</strong>.
            </p>
          </div>

          <div className="guide-section">
            <h5>Built-in Traffic Handle</h5>
            <p>
              Adds a close-control handle near the snap for busy areas or crossings. Choose
              <strong> Biothane</strong> (flat) or a <strong>Paracord</strong> overlay for extra
              grip, then set the placement: <em>Base</em> (by the snap) or <em>12″/18″/24″</em> above.
            </p>
          </div>
        </>
      )}

      <div className="guide-section">
        <h5>Two-tone Colors</h5>
        <p>
          Pick a primary plus an accent for a clean, custom look. Need help choosing?
          Open the <a href="/colors" target="_blank" rel="noopener noreferrer">color chart</a>.
        </p>
      </div>

      {(type === "leash" || type === "longLine" || type === "handsFreeSystem" || type === "leashExtender") && (
        <div className="guide-section">
          <h5>Rings & Extras</h5>
          <p>
            Add O/D-rings for clip points, a floating O-ring for quick hands-free,
            or a stopper to hold a sliding ring in place.
          </p>
        </div>
      )}
    </aside>
  );
}
