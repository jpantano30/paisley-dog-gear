import React from "react";
import GearCard from "../components/GearCard";
import "./Options.css";

const gearData = [
  {
    title: "Standard Leashes",
    image: "/assets/standardleash.jpg",
    items: [
      "Colors: 1–3 (Two-tone +$8, Three-color depends on design)",
      "Lengths: 4ft, 6ft, 8ft, 10ft",
      "Hardware: Silver, Black",
      "Snaps: Locking Carabiner, Swivel Snap",
      "Handle Options: Loop, Convertible + O-Ring, or No Handle + D-Ring",
      "Add-ons: Built-in Traffic Handle (base, 12”, 18”, 24”)",
      "4ft – City walks / high-traffic areas",
      "6ft – Everyday walks / training",
      "8–10ft – Relaxed walks, hiking, recall",
      "15–20ft – Training, not for crowded areas"
    ]
  },
  {
    title: "Long Lines",
    image: "/assets/custom-longline.jpg",
    items: [
      "Lengths: 8ft, 10ft, 15ft, 20ft",
      "Colors: 1–3 (Two-tone +$8)",
      "Hardware: Silver, Black",
      "Snaps: Locking Carabiner, Swivel Snap",
      "Optional Add-ons: Traffic Handle, Hands-free Ring"
    ]
  },
  {
    title: "The Tallulah",
    image: "/assets/thetallulah.jpg",
    items: [
      "Multi-functional hands-free leash system",
      "Wear crossbody, around waist, or handheld",
      "Multiple D-ring positions",
      "Sliding O-ring handle",
      "Built-in traffic handles",
      "Custom color, length, handle layout"
    ]
  },
  {
    title: "Safety Straps",
    image: "/assets/safetystrap.jpg",
    items: [
      'Lengths: 3", 4", 6", 8", 10"',
      "Colors: 1–2 (Two-tone +$8)",
      "Hardware: Silver, Black",
      "Snaps: Locking Carabiner, Swivel Snap",
      "Optional: D-Ring",
      "Use as backup between collar & harness"
    ]
  },
  {
    title: "Leash Extenders",
    image: "/assets/leashextender.jpg",
    items: [
      'Lengths: 6", 10", 12", 15", 18", 24"',
      "Colors: 1–2 (Two-tone +$8)",
      "Hardware: Silver, Black",
      "Snaps: Locking Carabiner, Swivel Snap",
      "Add-ons: Traffic Handle, D-Ring",
      "Adds length, freedom, or space for double-dog setups"
    ]
  },
  {
    title: "Traffic Handles",
    image: "/assets/traffichandle.jpg",
    items: [
      'Sizes: 8", 10", 12", 15", 18"',
      "Colors: 1–2 (Two-tone +$8)",
      "Hardware: Silver, Black",
      "Snaps: Locking Carabiner, Swivel Snap",
      "Add-ons: Fixed D-Ring or Floating O-Ring",
      "Great for quick control in crowds or tall handler setups"
    ]
  },
  {
    title: "Collars",
    image: "/assets/collar.jpg",
    items: [
      "Buckle or Quick Release Buckle",
      "Colors: 1–2 (O-ring split for two-tone)",
      "Hardware: Silver, Black",
      "Widths: 5/8\", 3/4\", 1\"",
      "Sizes: Small (9–12\"), Medium (12–16\"), Large (15–20\"), XL (20–25\")"
    ]
  },
  {
    title: "Ball Holders",
    image: "/assets/ballholder.jpg",
    items: [
      "Colors: 1–2 (Two-tone optional)",
      "Attachment: D-Ring or Clip",
      "Fits standard tennis or ChuckIt balls",
      "Clip to belt, leash, or bag"
    ]
  },
  {
    title: "Harnesses (Custom Only)",
    image: "/assets/sdharness.jpg",
    items: [
      "Fully handmade Biothane harness",
      "Custom fitted to your dog",
      "Service-dog appropriate",
      "Reach out to start your design"
    ]
  },
  {
    title: "Customization",
    image: "/assets/customname.jpg",
    items: [
      "Add names, phrases, or contact info",
      "HTV (heat transfer vinyl) application",
      "Personalize leashes, collars, harnesses, etc."
    ]
  }
];

const Options = () => {
  return (
    <div className="options-page">
      <h1>Gear Options</h1>
      <div className="gear-card-list">
        {gearData.map((gear, index) => (
          <GearCard key={index} {...gear} />
        ))}
      </div>
    </div>
  );
};

export default Options;
