// src/components/BuilderGuide.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./BuilderGuide.css";

// Small helpers
const Li = ({ children }) => <li className="guide-li">{children}</li>;
const Section = ({ title, children }) => (
  <section className="guide-section">
    <h4>{title}</h4>
    <p>{children}</p>
  </section>
);

/**
 * Returns the guide content (title, subtitle, bullets, sections)
 * based on the selected product type.
 */
function getGuideContent(form) {
  const type = form?.productType;

  // Defaults (shown before a product is selected)
  let heading = "Builder Guide";
  let subheading = "Tips for picking sizes and options";
  let bullets = [
    "Width: 5/8″",
    "Snap: Swivel snap",
    "Grip: Loop handle",
    "Hardware: Silver",
    "Two-tone: Off",
  ];
  let sections = [
    {
      title: "Hands-free Conversion",
      body:
        "Converts a standard leash into a hands-free setup with clip points for handheld, cross-body, or waist carry — easy to shorten on the fly. Recommended lengths: 7–10 ft.",
    },
    {
      title: "Built-in Traffic Handle",
      body:
        'Adds a close-control handle near the snap for busy areas or crossings. Choose Biothane (flat) or a Paracord overlay for extra grip, then set the placement: <em>Base</em> (by the snap) or <em>12″/18″/24″</em> above.',
    },
    {
      title: "Two-tone Colors",
      body:
        `Pick a primary plus an accent for a clean, custom look. Need help choosing? Open the <a href="/colors" target="_blank" rel="noopener noreferrer">color chart</a>.`,
    },
    {
      title: "Rings & Extras",
      body:
        "Add O/D-rings for clip points, a floating O-ring for quick hands-free, or a stopper to hold a sliding ring in place.",
    },
  ];

  switch (type) {
    case "leash":
      bullets = [
        "Width: 5/8″ — standard for most dogs.",
        "Snap: Swivel snap — locking carabiner adds security.",
        "Grip: Loop handle — choose “No Handle” if adding a separate traffic handle.",
        "Hardware: Silver",
        "Two-tone: Optional",
      ];
      sections = [
        {
          title: "Hands-free Conversion",
          body:
            "Turns a leash into a cross-body/waist option with extra clip points to shorten quickly. Requires 7 ft minimum.",
        },
        {
          title: "Built-in Traffic Handle",
          body:
            'Quick grab point near the clip. Pick Biothane (flat) or Paracord overlay for extra grip, then place it at <em>Base</em> (by the snap) or <em>12″/18″/24″</em> above.',
        },
        {
          title: "Two-tone Colors",
          body:
            `Primary + accent looks clean and customizable. See the <a href="/colors" target="_blank" rel="noopener noreferrer">color chart</a>.`,
        },
        {
          title: "Rings & Extras",
          body:
            "Add O/D-rings, a floating O-ring for quick hands-free, or a stopper to hold a sliding ring in place.",
        },
      ];
      break;

    case "longLine":
      bullets = [
        "Common lengths: 10–30 ft.",
        "Width: 5/8″ — easy to handle; 3/4″ for bigger dogs.",
        "Snap: Swivel snap — locking carabiner adds security.",
        "Handle: With or without loop (your call).",
        "Hardware: Silver",
      ];
      sections = [
        {
          title: "Built-in Traffic Handle",
          body:
            'Optional quick-grab handle near the snap. Choose material (Biothane or Paracord overlay) and placement (<em>Base</em> or <em>12″/18″/24″</em>).',
        },
        {
          title: "Training Use",
          body:
            "Great for recall practice and roaming while staying connected. Consider brighter colors for visibility.",
        },
        {
          title: "Two-tone & Extras",
          body:
            `Accent colors help ID direction/ends. See the <a href="/colors" target="_blank" rel="noopener noreferrer">color chart</a>. Add rings if you want anchor/clip points.`,
        },
      ];
      break;

    case "trafficLead":
      bullets = [
        "Length: 8–12″ is most popular.",
        "Width: 5/8″ standard; 3/4″ for large breeds.",
        "Snap: Swivel snap; locking carabiner adds security.",
        "Hardware: Silver",
        "Two-tone: Optional",
      ];
      sections = [
        {
          title: "Purpose",
          body:
            "Short, easy-grab handle for busy environments and heel work.",
        },
        {
          title: "Options",
          body:
            "Choose width, snap style, and color(s). You can add a D-ring or floating O-ring if you want clip points.",
        },
      ];
      break;

    case "leashExtender":
      bullets = [
        "Common sizes: 6–18″.",
        "Ends: Snap + O-ring (standard).",
        "Width: 5/8″; upgrade for bigger gear if desired.",
        "Hardware: Silver",
      ];
      sections = [
        {
          title: "How it’s used",
          body:
            "Extend any leash, create quick hands-free clips, or use as a short traffic tab.",
        },
        {
          title: "Extras",
          body:
            "Floating O-ring is handy for on-the-fly clip-ups or adjusting length.",
        },
      ];
      break;

    case "safetyStrapBiothane":
      bullets = [
        "Length: 3–8″ typical.",
        "Two snaps — one to collar, one to harness/leash.",
        "Material: Biothane (waterproof, easy to clean).",
        "Hardware: Silver",
      ];
      sections = [
        {
          title: "Purpose",
          body:
            "Backup connection between gear points for extra security.",
        },
        {
          title: "Options",
          body:
            "Pick length, width, snap style, and colors. Two-tone is available.",
        },
      ];
      break;

    case "safetyStrapParacord":
      bullets = [
        "Length: 2–8″ typical.",
        "Two snaps — backup connection.",
        "Material: Paracord weave overlay.",
        "Hardware: Silver",
      ];
      sections = [
        {
          title: "Grip & Look",
          body:
            "Paracord adds texture and an accent look. Choose any color combo (subject to availability).",
        },
      ];
      break;

    case "handsFreeSystem":
      heading = "Builder Guide";
      subheading = "The Tallulah — multi-point hands-free system";
      bullets = [
        "Wear cross-body, at the waist, or handheld.",
        "Sliding rings for quick length changes.",
        "Includes a matching 1 ft extender.",
        "Built-in traffic handle included.",
        "Typical lengths: 7–10 ft.",
      ];
      sections = [
        {
          title: "Fit & Adjust",
          body:
            "Use sliding O/D-rings to go from handheld to cross-body or waist carry. Shorten quickly for street crossings.",
        },
        {
          title: "Handle Placement",
          body:
            'Built-in handle is included — choose <em>Base</em> (near the clip) or <em>12″/18″/24″</em> above for your reach.',
        },
        {
          title: "Colors & Extras",
          body:
            `Pick two-tone for a clean accent, then add rings if you want more clip points. See the <a href="/colors" target="_blank" rel="noopener noreferrer">color chart</a>.`,
        },
      ];
      break;

    case "ballHolder":
      bullets = [
        "Holds a standard ChuckIt ball.",
        "Attachment: D-ring + carabiner.",
        "Width: 5/8″.",
        "Two-tone: Optional",
      ];
      sections = [
        {
          title: "Use",
          body:
            "Clip to a leash, belt, or bag. Waterproof and easy to rinse.",
        },
      ];
      break;

    case "collarBuckle":
    case "collarQuickRelease":
      bullets = [
        "Sizing: pick the range that fits your dog’s neck.",
        "Width: 5/8″ for small/medium; 1″ for larger dogs.",
        "Buckle: metal double-bar (silver or black) or plastic quick-release.",
        "Two-tone split: optional at the O-ring.",
      ];
      sections = [
        {
          title: "Personalization",
          body:
            "Add HTV name/phone or a short phrase. Paracord fishtail overlay is available for a textured accent.",
        },
        {
          title: "Fit",
          body:
            "Measure snug-to-comfortable; you want adjustment room up and down.",
        },
      ];
      break;

    default:
      break;
  }

  return { heading, subheading, bullets, sections };
}

export default function BuilderGuide({ form, spec }) {
  const { heading, subheading, bullets, sections } = getGuideContent(form);

  return (
    <aside className="guide-card" aria-label="Builder guide">
      <div className="guide-head">
        <div className="guide-emoji" aria-hidden>💡</div>
        <div>
          <h3 className="guide-title">{heading}</h3>
          <div className="guide-sub">{subheading}</div>
        </div>
      </div>

      <div className="guide-divider" />

      {/* “Standard Picks” list (or product-specific quick picks) */}
      {bullets?.length > 0 && (
        <div className="guide-list">
          <h4>Standard Picks</h4>
          <ul className="guide-ul">
            {bullets.map((b, i) => <Li key={i}>{/* allow simple <em> injects later */}{b}</Li>)}
          </ul>
        </div>
      )}

      {/* Detail sections */}
      {sections?.map((s, i) => (
        <React.Fragment key={i}>
          <div className="guide-divider subtle" />
          <Section title={s.title}>
            {/* allow a few <em>/<a> tags */}
            <span dangerouslySetInnerHTML={{ __html: s.body }} />
          </Section>
        </React.Fragment>
      ))}
    </aside>
  );
}
