import React from "react";
import GearCard from "../components/GearCard";
import "./Options.css";
import { Link } from "react-router-dom";
import "../components/page-intro.css";

const gearData = [
  {
    title: "Standard Leashes",
    image: "/assets/IMG_0088.JPG",
    anchor: "leashes",
    description: "Custom everyday leashes made to fit your walk style. Choose the length, snap type, and color combo that works best for you.",
    bestFor: "Everyday walking • City environments • Training",
    items: [
      "**Length Options**",
      "- 4ft: City walks / high-traffic areas",
      "- 5–6ft: Everyday walks / training",
      "- 8–10ft: Relaxed walks, hiking, recall",
      "**Colors**",
      "- 1–3 solid colors",
      "- Two-tone: +$2",
      "**Hardware**",
      "- Silver or Black (+$1)",
      "- Snaps: Locking Carabiner (+$8) or Swivel Snap",
      "**Handle Styles**",
      "- Loop Handle (standard) or No Handle",
      "- Hands-free conversion (+$10)",
      "**Add-ons**",
      "- Built-in Traffic Handle (12\", 18\", or 24\"): +$5",
      "- Paracord handle upgrade: +$10–$18"
    ],
    pricing: [
      "4–6 ft: $25–$30",
      "8–10 ft: $33–$40",
      "Two-tone: +$2 • Locking: +$8 • Traffic: +$5 • Hands-free: +$10"
    ]
  },
  {
    title: "Braided Leashes",
    image: "/assets/new/bluebraid.jpg",
    anchor: "braided-leashes",
    description: "A more decorative leash style with a braided BioThane design. Strong, waterproof, and easy to clean, but with a more detailed custom look.",
    bestFor: "Everyday walking • Stylish custom gear • Matching sets",
    items: [
      "**Length Options**",
      "- 4ft, 6ft, 8ft, 10ft, 12ft",
      "**Width**",
      '- 5/8" BioThane',
      "**Colors**",
      "- Choose your main color and braid accent colors",
      "**Hardware**",
      "- Silver, brass, or black hardware",
      "- Swivel snap standard",
      "- Locking carabiner or frog clip upgrade available",
      "**Handle Styles**",
      "- Loop handle standard"
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
      "- 12ft, 15ft, 20ft, 25ft, 30ft",
      "**Colors**",
      "- 1–3 solid colors",
      "- Two-tone: +$2",
      "**Hardware**",
      "- Silver or Black (+$1)",
      "- Snaps: Locking Carabiner (+$8) or Swivel Snap",
      "**Add-ons**",
      "- Built-in grab/traffic handle (+$5; paracord +$10–$12)",
      "- Rings (fixed or floating) (+$3 each)",
      "- Custom lengths available"
    ],
    pricing: [
      "12–15 ft: $42–$47",
      "20–30 ft: $55–$70",
      "Two-tone: +$2 • Locking: +$8 • Handle: +$5 (+paracord)"
    ]
  },
  {
    title: "Hands-Free System (The Tallulah)",
    image: "/assets/tallulah-sage2.JPG",
    anchor: "tallulah",
    description: "A hands-free leash system for training, multitasking, and everyday use. Wear it crossbody, at your waist, handheld, or even shorten it for a custom fit.",
    bestFor: "Hands-free walking • Training • Public access work",
    items: [
      "**Description**",
      "- Multi-functional hands-free leash/long line system",
      "- Wear crossbody, around waist, or handheld",
      "**Features**",
      "- Sliding D/O-rings and multiple fixed D-rings",
      "- Optional built-in traffic handle (location + material)",
      "- Optional matching extender",
      "**Customization**",
      "- Color layout, length, and hardware placement"
    ],
    pricing: [
      "Base system: $47 (base 7ft)",
      "Upgrades (traffic handle, extender, two-tone, black hardware): add-on"
    ]
  },
  {
    title: "Braided Hands-Free Leash",
    image: "/assets/new/braidedhandsfree.jpeg",
    anchor: "braided-hands-free",
    description: "A braided version of the Tallulah hands-free leash system. It can be worn crossbody, around the waist, handheld, or adjusted shorter for training.",
    bestFor: "Hands-free walking • Stylish custom gear • Training • Public access work",
    items: [
      "**Length Options**",
      "- 5ft through 15ft",
      "**Width**",
      '- 5/8" BioThane',
      "**Features**",
      "- Multi-functional hands-free design",
      "- Wear crossbody, around waist, or handheld",
      "- Sliding rings and clip points for adjustability",
      "**Colors**",
      "- Choose your main color and braid accent colors",
      "**Hardware**",
      "- Silver, brass, or black hardware",
      "- Swivel snap standard",
      "- Locking carabiner or frog clip upgrade available"
    ]
  },
  {
    title: "Collars",
    image: "/assets/collars_custom.JPG",
    anchor: "collars",
    description: "Strong, stylish, and built for comfort. Choose your size band, width, buckle, and optional two-tone or HTV.",
    bestFor: "Daily wear • Personalized fit",
    items: [
      "**Sizes (measured fit)**",
      "- XS: 8–11\" — from $20",
      "- S: 10–13\" — from $22",
      "- M: 12–16\" — from $24",
      "- L: 15–20\" — from $26",
      "- XL: 20–25\" — from $30",
      "**Buckle Options**",
      "- Metal double-bar (Silver or Black +$2)",
      "- Plastic quick-release (Black, −$2)",
      "**Width**",
      "- 5/8\" standard • 1\" +$8",
      "**Style Upgrades**",
      "- Two-tone O-ring split: +$2",
      "- Black metal hardware set: +$2",
      "- HTV: Name $5 • Name+Phone $8 • Large $10"
    ],
    pricing: [
      "Price varies by size band and options selected."
    ]
  },
  {
    title: "Traffic Handles",
    image: "/assets/pink_purple_traffic_handle.jpg",
    anchor: "accessories",
    description: "Short grab handles for quick control in tight spaces or quick grab tab for off leash use. Choose Biothane or a paracord weave.",
    bestFor: "Heel work • Crowded areas • Large dogs",
    items: [
      "**Sizes**",
      "- 8\", 10\", 12\", 15\", 18\"",
      "**Styles**",
      "- Biothane (standard) or Paracord (fishtail/weave)",
      "**Colors & Hardware**",
      "- 1–2 colors • Two-tone +$2",
      "- Silver hardware (Black +$1)"
    ],
    pricing: [
      "Biothane: $12–$18 • Paracord: +$10–$12",
      "Two-tone: +$2"
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
      "- Two-tone +$2 • Black hardware +$1"
    ],
    pricing: [
      "Base: $12–$16 depending on size",
      "Two-tone: +$2"
    ]
  },
  {
    title: "Utility Belts",
    image: "/assets/new/5.8inbelt.jpg",
    anchor: "utility-belts",
    description: "A BioThane utility belt for carrying treat pouches, ball holders, keys, leash attachments, and other training gear.",
    bestFor: "Training sessions • Day training • Dog sports • Hands-free carrying",
    items: [
      "**Size Options**",
      '- XS: 22–30"',
      '- S: 28–37"',
      '- M: 35–45"',
      '- L: 43–53"',
      '- XL: 51–61"',
      '- XXL: 59–70"',
      "**Width Options**",
      '- 5/8"',
      '- 1"',
      "**Colors**",
      "- Choose from available BioThane colors",
      "- Two-tone options available",
      "**Hardware**",
      "- Silver, brass, or black hardware",
      "**Add-ons**",
      "- Optional quick-release buckle"
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
      "- Two-tone +$2 • Black hardware +$1"
    ],
    pricing: [
      "Standard: $12–$15",
      "Two-tone: +$2"
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
      "Two-tone: +$2"
    ]
  }
];

const Options = () => {
  return (

    <>
      {/* SEO tags for Options page */}
      <title>Gear Options | Biothane Leashes, Long Lines, Collars & Add-ons</title>
      <meta
        name="description"
        content="See the options for our custom Biothane gear—lengths, widths, hardware finishes, color combinations and add-ons. Browse the sections below, then use the Gear Builder to send your selections for a quote."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/options" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Gear Options | Biothane Leashes, Long Lines, Collars & Add-ons" />
      <meta
        property="og:description"
        content="Browse options for custom Biothane leashes, long lines, collars and accessories: lengths, widths, hardware, colors and upgrades."
      />
      <meta property="og:url" content="https://paisleydoggearandtraining.com/options" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Gear Options | Biothane Leashes, Long Lines, Collars & Add-ons" />
      <meta
        name="twitter:description"
        content="Browse options for custom Biothane leashes, long lines, collars and accessories: lengths, widths, hardware, colors and upgrades."
      />

      <div className="options-page">
        <h1>Gear Options</h1>
        <p>
          Explore the products below to see what’s possible—standard leashes, long lines, the
          Tallulah hands-free system, collars and accessories. Open “Show Custom Options” on any item to view available lengths, widths, hardware, color layouts, and upgrades.
          For current pricing, visit the pricing page or use the Gear Builder for an estimate.
        </p>

        {/* Short, business-friendly context kept for SEO */}
        <section aria-label="About our materials" className="page-intro">
          <h2>Built for everyday training and adventure</h2>
          <p>
            I hand-make gear from Beta Biothane—durable, waterproof and easy to wipe clean. Most
            items are offered in 5/8″ with wider widths available. Choose classic silver hardware or a
            black finish (brass available upon request), and mix up to three Biothane colors (two & three-tone adds a small upcharge). When
            you’re ready, use the <Link to="/builder" >Gear Builder</Link> to pre-fill your selections and
            send them to the <Link to="/order" >order form</Link> for a custom quote.
          </p>
        </section>

        <p>
          Gear Demo Videos:{" "}
          <Link to="/videos#gear-demos" className="gear-video-link">
            Watch Gear Demo Videos
          </Link>
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