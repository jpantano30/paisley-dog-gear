import React from "react";
import GearCard from "../components/GearCard";
import "./Options.css";
import { Link } from "react-router-dom";

const gearData = [
  {
    title: "Standard Leashes",
    image: "/assets/leashpicsNvids/leashes.JPG",
    anchor: "leashes",
    description: "Custom everyday leashes made to fit your walk style. Choose the length, snap type, and color combo that works best for you.",
    bestFor: "Everyday walking • City environments • Training",
    items: [
      "**Length Options**",
      "- 4ft: City walks / high-traffic areas",
      "- 5–6ft: Everyday walks / training",
      "- 8–10ft: Relaxed walks, hiking, recall",
      "- 15–20ft: Training (open spaces only)",
      "**Colors**",
      "- 1–3 solid colors",
      "- Two-tone: +$8",
      "**Hardware**",
      "- Silver or Black (+$3)",
      "- Snaps: Locking Carabiner (+$8) or Swivel Snap",
      "**Handle Styles**",
      "- Loop Handle (standard) or No Handle",
      "- Hands-free conversion (+$10)",
      "**Add-ons**",
      "- Built-in Traffic Handle (12\", 18\", or 24\"): +$5",
      "- Paracord handle upgrade: +$10–$18"
    ],
    pricing: [
      "4–6 ft: $30–$35",
      "8–10 ft: $38–$42",
      "15–20 ft: $45–$55",
      "Two-tone: +$8 • Locking: +$8 • Traffic: +$5 • Hands-free: +$10"
    ]
  },
  {
    title: "Long Lines",
    image: "/assets/leashpicsNvids/longlinerolled.JPG",
    anchor: "longlines",
    description: "Perfect for recall training, hiking, or decompression walks. Choose your length and extras like rings or a grab handle.",
    bestFor: "Recall training • Hiking • Decompression walks",
    items: [
      "**Length Options**",
      "- 10ft, 12ft, 15ft, 20ft, 25ft, 30ft",
      "**Colors**",
      "- 1–3 solid colors",
      "- Two-tone: +$8",
      "**Hardware**",
      "- Silver or Black (+$3)",
      "- Snaps: Locking Carabiner (+$8) or Swivel Snap",
      "**Add-ons**",
      "- Built-in grab/traffic handle (+$5; paracord +$10–$12)",
      "- Rings (fixed or floating) (+$3 each)",
      "- Custom lengths available"
    ],
    pricing: [
      "10–15 ft: $45–$65",
      "20–30 ft: $55–$75",
      "Two-tone: +$8 • Locking: +$8 • Handle: +$5 (+paracord)"
    ]
  },
  {
    title: "The Tallulah",
    image: "/assets/tallulah-sage2.JPG",
    anchor: "tallulah",
    description: "A hands-free leash system for training, multitasking, and public access work. Wear it crossbody, at your waist, or handheld.",
    bestFor: "Hands-free walking • Training • Public access work",
    items: [
      "**Description**",
      "- Multi-functional hands-free leash/long line system",
      "- Wear crossbody, around waist, or handheld",
      "**Features**",
      "- Sliding D/O-rings and multiple fixed D-rings",
      "- Built-in traffic handle",
      "- Includes matching extender",
      "**Customization**",
      "- Color layout, length, and hardware placement"
    ],
    pricing: [
      "Base system: $65–$85",
      "Includes extender, traffic handle, sliding rings",
      "Upgrades (two-tone, black hardware): add-on"
    ]
  },
  {
    title: "Collars",
    image: "/assets/leashpicsNvids/IMG_5129.JPG",
    anchor: "collars",
    description: "Strong, stylish, and built for comfort. Choose your size band, width, buckle, and optional two-tone or HTV.",
    bestFor: "Daily wear • Personalized fit",
    items: [
      "**Sizes (measured fit)**",
      "- XS: 8–11\" — from $22",
      "- S: 10–13\" — from $24",
      "- M: 12–16\" — from $26",
      "- L: 15–20\" — from $28",
      "- XL: 20–25\" — from $32",
      "**Buckle Options**",
      "- Metal double-bar (Silver or Black +$2)",
      "- Plastic quick-release (Black, −$2)",
      "**Width**",
      "- 5/8\" standard • 1\" +$8",
      "**Style Upgrades**",
      "- Two-tone O-ring split: +$8",
      "- Black metal hardware set: +$3",
      "- HTV: Name $5 • Name+Phone $8 • Large $10"
    ],
    pricing: [
      "Price varies by size band and options selected."
    ]
  },
  {
    title: "Traffic Handles",
    image: "/assets/leashpicsNvids/traffichandleedit.JPG",
    anchor: "accessories",
    description: "Short grab handles for quick control in tight spaces. Choose Biothane or a paracord weave.",
    bestFor: "Heel work • Crowded areas • Large dogs",
    items: [
      "**Sizes**",
      "- 8\", 10\", 12\", 15\", 18\"",
      "**Styles**",
      "- Biothane (standard) or Paracord (fishtail/weave)",
      "**Colors & Hardware**",
      "- 1–2 colors • Two-tone +$5",
      "- Silver hardware (Black +$3)"
    ],
    pricing: [
      "Biothane: $12–$18 • Paracord: +$10–$12",
      "Two-tone: +$5"
    ]
  },
  {
    title: "Leash Extenders",
    image: "/assets/leashextender.jpg",
    anchor: "extenders",
    description: "Add length or create double-dog setups. Comes with a snap and ring.",
    bestFor: "Adding length • Double-dog walking",
    items: [
      "**Sizes**",
      "- 6–24 inches (custom available)",
      "**Includes**",
      "- Snap + attachment ring",
      "**Upgrades**",
      "- Two-tone +$5 • Black hardware +$3"
    ],
    pricing: [
      "Base: $12–$16 depending on size",
      "Two-tone: +$5"
    ]
  },
  {
    title: "Ball Holders",
    image: "/assets/leashpicsNvids/ballholder3.JPG",
    anchor: "ballholder",
    description: "A must-have for fetch lovers. Clips to any leash, belt, or bag.",
    bestFor: "Fetch sessions • Hands-free carry",
    items: [
      "**Fit**",
      "- Fits standard ChuckIt/tennis balls",
      "- Custom sizing available",
      "**Includes**",
      "- Ring/clip attachment • Silver hardware",
      "**Options**",
      "- Two-tone +$5 • Black hardware +$3"
    ],
    pricing: [
      "Standard: $12–$15",
      "Two-tone: +$5"
    ]
  },
  {
    title: "Safety Straps",
    image: "/assets/saftystrapparacord.jpeg",
    anchor: "safety",
    description: "Backup strap for car rides or double-clip setups.",
    bestFor: "Backup connection • Seatbelt clip",
    items: [
      "**Sizes**",
      "- 3–10 inches",
      "**Styles**",
      "- Biothane (standard) or Paracord weave (+labor)",
      "**Includes**",
      "- Snap + ring • Silver hardware"
    ],
    pricing: [
      "Biothane: $12–$15 • Paracord: $20–$30",
      "Two-tone: +$5"
    ]
  }
];

const Options = () => {
  return (

    <>
      {/* SEO tags for Options page */}
      
    <title>Colors, Hardware and Sizing Options</title>
    <meta name="description" content="See color swatches, hardware choices, widths and sizing tips so you order exactly what you need." />
    <link rel="canonical" href="https://paisleydoggearandtraining.com/options" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="Colors, Hardware and Sizing Options" />
    <meta property="og:description" content="See color swatches, hardware choices, widths and sizing tips so you order exactly what you need." />
    <meta property="og:url" content="https://paisleydoggearandtraining.com/options" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Colors, Hardware and Sizing Options" />
    <meta name="twitter:description" content="See color swatches, hardware choices, widths and sizing tips so you order exactly what you need." />


    <div className="options-page">
      <h1>Gear Options</h1>
      <p>
        All leashes are made with 5/8" Beta Biothane® by default — durable, waterproof, and comfortable in-hand.
        3/4" and 1" widths available for bigger dogs or wider grip. Each piece is assembled using Chicago screws with threadlock.
      </p>
      <p><strong>Note:</strong> Prices vary with options; final quotes confirm shipping and details.</p>

      <p>Gear Demo Videos:{" "}
        <Link to="/videos#gear-demos" className="gear-video-link">Watch Gear Demo Videos</Link>
      </p>

      <div className="colors-button-wrapper">
        <Link to="/colors" className="colors-button">🎨 View Color Options</Link>
      </div>

      <div className="gear-card-list">
        {gearData.map((gear, index) => (
          <GearCard key={index} {...gear} />
        ))}
      </div>

      <div className="pricing-button-wrapper">
        <Link to="/pricing" className="pricing-button2">See Pricing Page</Link>
      </div>
    </div>
    </>
  );
};

export default Options;
