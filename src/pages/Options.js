import React from "react";
import GearCard from "../components/GearCard";
import "./Options.css";

const gearData = [
  {
    title: "Standard Leashes",
    image: "/assets/standard.jpeg",
    anchor: "leashes",
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
    ]
  },
  {
    title: "Long Lines",
    image: "/assets/custom-longline.jpg",
    anchor: "longlines",
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
      "- Leash Extender for more length options",
    ]
  },
  {
    title: "The Tallulah",
    image: "/assets/tallulah-sage2.JPG",
    anchor: "tallulah",
    items: [
      "**Description**",
      "- Multi-functional hands-free leash/long line system",
      "- Wear crossbody, around waist, or handheld",

      "**Features**",
      "- Multiple D-ring positions",
      "- Sliding D-rings & O-ring for hands-free use",
      "- Built-in traffic handle",
      "- Comes with matching leash extendor",

      "**Customization**",
      "- Custom color, length, handle layout"
    ]
  },
  {
    title: "Safety Straps",
    image: "/assets/saftystrapparacord.jpeg",
    anchor: "accessories",
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
    ]
  },
  {
    title: "Leash Extenders",
    image: "/assets/leashextender.jpg",
    anchor: "accessories",
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
    ]
  },
  {
    title: "Traffic Handles",
    image: "/assets/traffichandle.jpg",
    anchor: "accessories",
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
    ]
  },
  {
    title: "Collars",
    image: "/assets/collar1.jpg",
    anchor: "collars",
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
    ]
  },
  {
    title: "Ball Holders",
    image: "/assets/ballholderSW.jpeg",
    anchor: "accessories",
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
    ]
  },
  // {
  //   title: "Harnesses (Custom Only)",
  //   image: "/assets/sdharness.jpg",
  //   anchor: "harnesses",
  //   items: [
  //     "**Details**",
  //     "- Fully handmade Biothane harness",
  //     "- Custom fitted to your dog",
  //     "- Service-dog appropriate",

  //     "**How to Order**",
  //     "- Reach out to start your design",

  //     "**Pricing**",
  //     "- $60 to $150+ depending on complexity and features"
  //   ]
  // },
  {
    title: "Customization",
    image: "/assets/customname.jpg",
    anchor: "addons",
    items: [
      "**Options**",
      "- Add names, phrases, or contact info",

      "**Material**",
      "- HTV (heat transfer vinyl) application",

      "**Usable On**",
      "- Personalize leashes, collars, harnesses, etc."
    ]
  },
  {
    title: "Starter Sets",
    image: "/assets/set2.jpeg",
    anchor: "",
    items: [
      "**Colors**",
      "- 1–2 solid colors",
      "- Two-tone optional",
      
      "**Options**",
      "- Includes: Collar + Leash + Ball Holder",
      "- Custom layouts, colors, and handle styles available"
    ]
  }
];

const Options = () => {
  return (
    <div className="options-page">
      <h1>Gear Options</h1>
      <p>Explore our range of customizable gear options for your pets. All of my leashes are made with 5/8" Biothane webbing for durability and comfort. Custom widths are available upon request. Custom designs are welcome!</p>
      <div className="gear-card-list">
        {gearData.map((gear, index) => (
          <GearCard key={index} {...gear} />
        ))}
      </div>
    </div>
  );
};

export default Options;
