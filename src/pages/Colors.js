import React from "react";
import "./Colors.css";

const colorFiles = [
  "amethyst-orchid-purple-524",
  "beta-gold-521",
  "black-520",
  "blue-522",
  "blue-52f",
  "blue-52h",
  "blue-521",
  "brown-521",
  "brown-522",
  "brown-523",
  "chili-red-523",
  "coyote-brown-521",
  "deep-sea-523",
  "dusty-turquoise-tu521",
  "grape-pu527",
  "green-52k",
  "green-522",
  "green-525",
  "green-528",
  "grey-523",
  "magenta-pink-526",
  "olive-drab-521",
  "orange-522",
  "orange-529",
  "periwinkle-bu525",
  "pink-521",
  "pink-523",
  "pink-coral-524",
  "purple-522",
  "red-522",
  "sagegreen-527",
  "tan-525",
  "teal-521",
  "violet-521",
  "white-521",
  "wine-521",
  "yellow-521",
  "yellow-527"
];

const formatName = (str) => {
  return str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

const Colors = () => {
  return (
    <div className="colors-page">
      <h1>Biothane Color Options</h1>
      <p>Select up to 3 colors. Two-tone is +$8. Let me know if you want help picking!</p>

      <div className="swatch-grid">
        {colorFiles.map((file, i) => (
          <div key={i} className="swatch">
            <img src={`/assets/colors/${file}.png`} alt={formatName(file)} />
            <span>{formatName(file)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
