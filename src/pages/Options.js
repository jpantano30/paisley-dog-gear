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
      "- Silver or Black (black +$3-$5)",
      "- Snaps: Locking Carabiner (+$8) or Swivel Snap",

      "**Handle Styles**",
      "- Loop Handle (standard)",
      "- Snap + O-Ring (Hands-Free System): +$10",
      "- No Handle + Fixed D-Ring or O-Ring",

      "**Add-ons**",
      "- Built-in Traffic Handle (12\", 18\", or 24\"): +$5",
      "- Paracord Fishtail Handle: +$10-$20 (based on size)"
    ],
    pricing: [
      "Base: $25–$35 (depends on length)",
      "Locking carabiner: +$8",
      "Black hardware: +$3–$5",
      "Two-tone: +$8",
      "Traffic handle add-on: +$5",
      "Paracord handle: +$10–$20",
      "Hands-free upgrade: +$10"
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
      "- 8ft, 10ft, 15ft, 20ft",

      "**Colors**",
      "- 1–3 solid colors",
      "- Two-tone: +$8",

      "**Hardware**",
      "- Silver or Black",
      "- Snaps: Locking Carabiner or Swivel Snap",

      "**Add-ons**",
      "- Traffic Handle",
      "- Hands-free Ring",
      "- Leash Extender for more length options"
    ], 
    pricing: [
      "Base: $35–$50 (based on length)",
      "Two-tone: +$8",
      "Paracord or handle add-ons: $5–$20"
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
      "- Multiple D-ring positions",
      "- Sliding D-rings & O-ring for hands-free use",
      "- Built-in traffic handle",
      "- Comes with matching leash extender",

      "**Customization**",
      "- Custom color, length, handle layout"
    ],
    pricing: [
      "Base system: $60–$75",
      "Includes matching leash extender",
      "Black hardware or added traffic handle may increase price"
    ]
  },
  {
    title: "Safety Straps",
    image: "/assets/saftystrapparacord.jpeg",
    anchor: "accessories",
    description: "A backup strap for extra security on collars, harnesses, or seat belts. Perfect for car rides or off-leash work.",
    bestFor: "Backup security • Car rides • Off-leash work",
    items: [
      "**Length Options**",
      "- 3\", 4\", 6\", 8\", 10\"",

      "**Colors**",
      "- 1–2 solid colors",
      "- Two-tone: +$8",

      "**Hardware**",
      "- Silver or Black",
      "- Snaps: Locking Carabiner or Swivel Snap",
      "- Optional: D-Ring",

      "**Upgrade**",
      "- Weaved Paracord Safety Strap: +$10–$20 (based on length)"
    ], 
    pricing: [
      "Standard: $8–$12",
      "Paracord upgrade: +$10–$20"
    ]
  },
  {
    title: "Leash Extenders",
    image: "/assets/leashextender.jpg",
    anchor: "accessories",
    description: "Give your dog more freedom or create double-dog setups with these flexible extenders.",
    bestFor: "Giving dogs more room • Double-dog walking",
    items: [
      "**Length Options**",
      "- 6\", 10\", 12\", 15\", 18\", 24\"",

      "**Colors**",
      "- 1–2 solid colors",
      "- Two-tone: +$8",

      "**Hardware**",
      "- Silver or Black",
      "- Snaps: Locking Carabiner or Swivel Snap",

      "**Add-ons**",
      "- Traffic Handle",
      "- D-Ring",
      "- Custom Writing (HTV)",

      "**Use Case**",
      "- Adds length, freedom, or space for double-dog setups"
    ],
    pricing: [
      "Base: $10–$16",
      "Add-ons: $3–$10"
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

      "**Colors**",
      "- 1–2 solid colors",
      "- Two-tone: +$8",

      "**Hardware**",
      "- Silver or Black",
      "- Snaps: Locking Carabiner or Swivel Snap",

      "**Add-ons**",
      "- Fixed D-Ring",
      "- Floating O-Ring",

      "**Upgrade**",
      "- Paracord Fishtail Handle: +$10–$20 (based on size)",

      "**Use Case**",
      "- Used for quick control in crowds or for tall handlers"
    ], 
    pricing: [
      "Standard: $10–$15",
      "Two-tone: +$5",
      "Paracord upgrade: +$10–$20"
    ]
  },
  {
    title: "Collars",
    image: "/assets/leashpicsNvids/IMG_5129.JPG",
    anchor: "collars",
    description: "Strong, stylish, and built for comfort. Custom sizing, hardware, and HTV personalization available.",
    bestFor: "Daily wear • Personalized fit • Add-on ready",
    items: [
      "**Styles**",
      "- Buckle or Quick Release Buckle",

      "**Colors**",
      "- 1–2 solid colors",
      "- O-ring split for two-tone",

      "**Hardware**",
      "- Silver or Black",

      "**Widths**",
      "- 5/8\", 1\"",

      "**Sizes**",
      "- Small (9–12\")",
      "- Medium (12–16\")",
      "- Large (15–20\")",
      "- XL (20–25\")",

      "**Add-ons**",
      "- D-Ring, O-Ring, Custom Writing (HTV), Handle, etc.",
      "- Custom sizes available upon request"
    ], 
    pricing: [
      "Base: $20–$28",
      "HTV personalization: +$5",
      "Black hardware: +$2–$4",
      "Handle or specialty add-ons: custom"
    ]
  },
  {
    title: "Ball Holders",
    image: "/assets/leashpicsNvids/ballholder3.JPG",
    anchor: "accessories",
    description: "A must-have for fetch lovers. Keep hands & bags clean. Clip to any leash, belt, or bag. Fits ChuckIt or standard tennis balls.",
    bestFor: "Fetch sessions • Ball-crazy dogs • On-the-go storage • Clean storage",
    items: [
      "**Colors**",
      "- 1–2 solid colors",
      "- Two-tone optional",

      "**Attachment Options**",
      "- D-Ring",
      "- Clip",

      "**Fit**",
      "- Fits standard tennis or ChuckIt balls",
      "- Custom sizes available",

      "**Use Case**",
      "- Clip to belt, leash, or bag"
    ], 
    pricing: [
      "Standard: $10–$15",
      "Two-tone: +$4",
      "Custom sizes: quoted"
    ]
  },
  {
    title: "Customization",
    image: "/assets/leashpicsNvids/IMG_5119.JPG",
    anchor: "addons",
    description: "Personalize your gear with names, phrases, or emergency contact info. Cute and functional.",
    bestFor: "Personalizing gear • Emergency info • Cute upgrades • Service dog gear",
    items: [
      "**Options**",
      "- Add names, phrases, or contact info",

      "**Material**",
      "- HTV (heat transfer vinyl) application",

      "**Usable On**",
      "- Personalize leashes, collars, harnesses, etc."
    ], 
    pricing: [
      "HTV personalization: $5-$10 per item",
      "Font, size, color: fully customizable"
    ]
  },
  {
    title: "Starter Sets",
    image: "/assets/set2.jpeg",
    anchor: "startersets",
    description: "The full setup — includes a matching leash, collar, and ball holder. Great for new pups or gift sets.",
    bestFor: "Gifting • First dog setups • Stylish matching sets",
    items: [
      "**Colors**",
      "- 1–2 solid colors",
      "- Two-tone optional",

      "**Options**",
      "- Includes: Collar + Leash + Ball Holder",
      "- Custom layouts, colors, and handle styles available"
    ],
    pricing: [
      "Base bundle: $55–$75",
      "Upgrades (two-tone, hardware, add-ons): varies"
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
