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
      "- 6ft: Everyday walks / training",
      "- 8–10ft: Relaxed walks, hiking, recall",
      "- 15–20ft: Training (not for crowded areas)",

      "**Colors**",
      "- 1–3 solid colors",
      "- Two-tone: +$8",
      "- Three-color: custom pricing",

      "**Hardware**",
      "- Silver or Black (black +$3–$5)",
      "- Snaps: Locking Carabiner (+$8) or Swivel Snap",

      "**Handle Styles**",
      "- Loop Handle (standard)",
      "- Snap + O-Ring (Hands-Free System): +$10",
      "- No Handle + Fixed D-Ring or O-Ring",

      "**Add-ons**",
      "- Built-in Traffic Handle (12\", 18\", or 24\"): +$5",
      "- Paracord Fishtail Handle: +$10–$18 (based on size)"
    ],
    pricing: [
      "4–6 ft: $30–$35",
      "8–10 ft: $38–$42",
      "15–20 ft: $45–$55",
      "Two-tone upgrade: +$8",
      "Locking carabiner: +$8",
      "Traffic handle: +$5",
      "Paracord handle: +$10–$18",
      "Hands-free system upgrade: +$10"
    ]
  },
  {
    title: "Long Lines",
    image: "/assets/leashpicsNvids/longlinerolled.JPG",
    anchor: "longlines",
    description: "Perfect for recall training, hiking, or decompression walks. Choose your length and extras like handles or rings.",
    bestFor: "Recall training • Hiking • Decompression walks",
    items: [
      "**Length Options**",
      "- 10ft, 12ft, 15ft, 20ft, 25ft, 30ft",

      "**Colors**",
      "- 1–3 solid colors",
      "- Two-tone: +$8",

      "**Hardware**",
      "- Silver or Black",
      "- Snaps: Locking Carabiner or Swivel Snap",

      "**Add-ons**",
      "- Traffic Handle: +$5",
      "- Hands-free Ring: +$8",
      "- Leash Extender: +$10–$16",
      "- Custom lengths available"
    ], 
    pricing: [
      "10–15 ft: $40–$50",
      "20–30 ft: $55–$65",
      "Two-tone: +$8",
      "Handle or accessory add-ons: +$5–$18"
    ]
  },
  {
    title: "The Tallulah",
    image: "/assets/tallulah-sage2.JPG",
    anchor: "tallulah",
    description: "A hands-free leash system designed for training, multitasking, and public access work. Wear it crossbody, at your waist, or handheld.",
    bestFor: "Hands-free walking • Training • Public access work",
    items: [
      "**Description**",
      "- Multi-functional hands-free leash/long line system",
      "- Wear crossbody, around waist, or handheld",

      "**Features**",
      "- Sliding D/O-rings and multiple fixed D-rings",
      "- Built-in traffic handle",
      "- Includes matching leash extender",

      "**Customization**",
      "- Color layout, length, and hardware placement"
    ],
    pricing: [
      "Base system: $65–$75",
      "Includes extender, traffic handle, sliding rings",
      "Upgrades (two-tone, black hardware, paracord): add-on"
    ]
  },
  {
    title: "Collars",
    image: "/assets/leashpicsNvids/IMG_5129.JPG",
    anchor: "collars",
    description: "Strong, stylish, and built for comfort. Custom sizing, hardware, and HTV personalization available.",
    bestFor: "Daily wear • Personalized fit • Add-on ready",
    items: [
      "**Widths**",
      "- 5/8\" (default)",
      "- 1\" available on request",
      "- Other custom widths (e.g. 1.5\") on request — longer shipping",

      "**Styles**",
      "- Buckle or Quick Release Buckle",
      "- Optional O-ring split for two-tone",

      "**Add-ons**",
      "- D-ring, O-ring, HTV personalization, handle, etc."
    ],
    pricing: [
      "5/8\" Buckle or Quick Release: $22–$28",
      "1\" Width (by request): $28–$35",
      "O-Ring Split (two-tone): +$8",
      "HTV personalization: +$5–$10",
      "Black hardware: +$2–$5"
    ]
  },
  {
    title: "Traffic Handles",
    image: "/assets/leashpicsNvids/traffichandleedit.JPG",
    anchor: "accessories",
    description: "Short grab handles for quick control in tight spaces. Great for heel work or crowded areas.",
    bestFor: "Heel work • Crowded areas • Quick control • Large dogs",
    items: [
      "**Sizes**",
      "- 8\", 10\", 12\", 15\", 18\"",

      "**Styles**",
      "- Flat Biothane or Paracord Fishtail",
      "- With or without D-ring/O-ring attachment",

      "**Colors & Hardware**",
      "- 1–2 solid colors",
      "- Two-tone: +$5",
      "- Black hardware: +$3"
    ], 
    pricing: [
      "Standard Biothane: $12–$18",
      "Two-tone: +$5",
      "Paracord Fishtail: +$10–$18"
    ]
  },
  {
    title: "Leash Extenders",
    image: "/assets/leashextender.jpg",
    anchor: "accessories",
    description: "Give your dog more freedom or create double-dog setups with these flexible extenders.",
    bestFor: "Adding length • Double-dog walking • Attachment flexibility",
    items: [
      "**Sizes**",
      "- 6–24 inches (custom lengths available)",

      "**Upgrades**",
      "- Two-tone color: +$5",
      "- Built-in traffic handle: +$5",
      "- Floating or fixed O-ring: +$3"
    ],
    pricing: [
      "Base: $10–$16",
      "Add-ons: +$3–$10"
    ]
  },
  {
    title: "Ball Holders",
    image: "/assets/leashpicsNvids/ballholder3.JPG",
    anchor: "accessories",
    description: "A must-have for fetch lovers. Keep hands and bags clean. Clips to any leash, belt, or bag.",
    bestFor: "Fetch sessions • Clean carry • Hands-free convenience",
    items: [
      "**Fit**",
      "- Fits standard ChuckIt or tennis balls",
      "- Custom sizing available",

      "**Attachment Options**",
      "- D-ring or clip-on style",
      "- Two-tone upgrade optional"
    ],
    pricing: [
      "Standard: $12–$15",
      "Two-tone: +$4",
      "Custom sizing: quoted"
    ]
  },
  {
    title: "Safety Straps",
    image: "/assets/saftystrapparacord.jpeg",
    anchor: "accessories",
    description: "A backup strap for added security during car rides or off-leash work.",
    bestFor: "Backup connection • Seatbelt clip • Double-clip setups",
    items: [
      "**Sizes**",
      "- 3–10 inches",

      "**Styles**",
      "- Biothane or Paracord Weave",
      "- Optional D-ring",

      "**Hardware**",
      "- Silver or Black, Swivel or Carabiner"
    ], 
    pricing: [
      "Biothane: $10–$12",
      "Paracord upgrade: +$10–$15"
    ]
  },
  {
    title: "Customization",
    image: "/assets/leashpicsNvids/IMG_5191.JPG",
    anchor: "addons",
    description: "Add names, phrases, or emergency contact info to any gear using heat transfer vinyl (HTV).",
    bestFor: "Personalization • Safety info • Service dog gear",
    items: [
      "**Style**",
      "- Custom font, layout, and placement",
      "- Can be applied to most flat gear"
    ], 
    pricing: [
      "HTV personalization: $5–$10 per item"
    ]
  },
  {
    title: "Starter Sets",
    image: "/assets/set2.jpeg",
    anchor: "startersets",
    description: "Matching collar, leash, and ball holder — perfect for gifting or new dog setups.",
    bestFor: "Gift bundles • First-time dog owners • Style sets",
    items: [
      "**Includes**",
      "- 5/8\" collar, standard leash, and ball holder",
      "- Matching or coordinating color themes"
    ],
    pricing: [
      "Bundle: $60–$75",
      "Upgrades (two-tone, paracord, locking snap): varies"
    ]
  }
];


const Options = () => {
  return (
    <div className="options-page">
      <h1>Gear Options</h1>
      <p>
        Explore our range of customizable gear options for your pets. All leashes are made with 5/8" Beta Biothane® — a waterproof, odor-resistant material known for its durability, flexibility, and comfort in hand. This size offers a pull strength of around 600–750 lbs, depending on hardware and configuration. Each piece is assembled using high-quality Chicago screws with threadlock for added security.
        <br />
        <br />
        If you need something heavier-duty, 3/4" and 1" Biothane is available for leashes by request — ideal for larger dogs or handlers looking for a wider grip and added strength. Collars can be made in widths up to 1.5" on request, which is perfect for large dogs or bold statement styles. 
        <br />
        <br />
        <strong> Custom designs are encouraged!</strong>
      </p>
      <p>
        <strong>Note:</strong> Prices are subject to change based on customization options and materials.
      </p>

      <p> Gear Demo Videos:
        <Link to="/videos#gear-demos" className="gear-video-link">
          Watch Gear Demo Videos
        </Link>
      </p>

      <div className="colors-button-wrapper">
        <Link to="/colors" className="colors-button">
          🎨 View Color Options
        </Link>
      </div>

      <div className="gear-card-list">
        {gearData.map((gear, index) => (
          <GearCard key={index} {...gear} />
        ))}
      </div>

      <div className="pricing-button-wrapper">
        <Link to="/pricing" className="pricing-button2">
          See Pricing Page
        </Link>
      </div>
    </div>
  );
};

export default Options;
