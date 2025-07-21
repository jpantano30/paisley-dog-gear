import React, { useState } from "react";
import "./Colors.css";

const colorData = [
  { name: "amethyst-orchid-purple-524", category: "purple" },
  { name: "beta-gold-521", category: "yellow" },
  { name: "black-520", category: "neutral" },
  { name: "blue-522", category: "blue" },
  { name: "blue-52f", category: "blue" },
  { name: "blue-52h", category: "blue" },
  { name: "blue-521", category: "blue" },
  { name: "brown-521", category: "brown" },
  { name: "brown-522", category: "brown" },
  { name: "brown-523", category: "brown" },
  { name: "chili-red-523", category: "red" },
  { name: "coyote-brown-521", category: "brown" },
  { name: "deep-sea-523", category: "blue" },
  { name: "dusty-turquoise-tu521", category: "teal" },
  { name: "grape-pu527", category: "purple" },
  { name: "green-52k", category: "green" },
  { name: "green-522", category: "green" },
  { name: "green-525", category: "green" },
  { name: "green-528", category: "green" },
  { name: "grey-523", category: "neutral" },
  { name: "magenta-pink-526", category: "pink" },
  { name: "olive-drab-521", category: "green" },
  { name: "orange-522", category: "orange" },
  { name: "orange-529", category: "orange" },
  { name: "periwinkle-bu525", category: "blue" },
  { name: "pink-521", category: "pink" },
  { name: "pink-523", category: "pink" },
  { name: "pink-coral-524", category: "pink" },
  { name: "purple-522", category: "purple" },
  { name: "red-522", category: "red" },
  { name: "sagegreen-527", category: "green" },
  { name: "tan-525", category: "neutral" },
  { name: "teal-521", category: "teal" },
  { name: "violet-521", category: "purple" },
  { name: "white-521", category: "neutral" },
  { name: "wine-521", category: "red" },
  { name: "yellow-521", category: "yellow" },
  { name: "yellow-527", category: "yellow" },
];

const formatName = (str) =>
  str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const Colors = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [modalImg, setModalImg] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);

  const handleFavorite = (name) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name]
    );
  };

  const handleColorSelect = (name) => {
    if (selectedColors.includes(name)) {
      setSelectedColors(selectedColors.filter((c) => c !== name));
    } else if (selectedColors.length < 3) {
      setSelectedColors([...selectedColors, name]);
    } else {
      alert("You can only select up to 3 colors.");
    }
  };

  const clearSelection = () => {
    setSelectedColors([]);
  };

  const categories = ["all", ...new Set(colorData.map((c) => c.category))];

  return (
    <div className="colors-page">
      <h1 className="colors-heading">Biothane Color Options</h1>
      <p>
        Select up to <strong>3 colors</strong>. Two-tone adds <strong>+$8</strong>. <br /> 
        Click the <strong>★</strong> to favorite a color — your selected colors will appear together below in the preview section! <br /> 
        Let me know if you want help choosing!
      </p>

      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="swatch-grid">
        {colorData
          .filter((c) => selectedCategory === "all" || c.category === selectedCategory)
          .map((color, i) => (
            <div
              key={i}
              className={`swatch ${selectedColors.includes(color.name) ? "selected" : ""}`}
              onClick={() => handleColorSelect(color.name)}
            >
              <div
                className="swatch-img-wrapper"
                onClick={(e) => {
                  e.stopPropagation();
                  setModalImg(`/assets/colors/${color.name}.png`);
                }}
              >
                <img
                  src={`/assets/colors/${color.name}.png`}
                  alt={formatName(color.name)}
                />
              </div>
              <span>{formatName(color.name)}</span>
              <button
                className={`favorite-btn ${favorites.includes(color.name) ? "favorited" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleFavorite(color.name);
                }}
              >
                {favorites.includes(color.name) ? "★" : "☆"}
              </button>
            </div>
          ))}
      </div>

      {selectedColors.length > 0 && (
        <div className="preview-section">
          <h2>Your Color Selection</h2>
          <div className="selected-colors">
            {selectedColors.map((name, index) => (
              <img
                key={index}
                src={`/assets/colors/${name}.png`}
                alt={formatName(name)}
              />
            ))}
          </div>
          <button className="clear-btn" onClick={clearSelection}>
            Clear Selection
          </button>
        </div>
      )}
      
      {favorites.length > 0 && (
        <div className="favorites-preview-section">
          <h2>Preview These Together</h2>
          <div className="selected-colors">
            {favorites.map((name, index) => (
              <img
                key={index}
                src={`/assets/colors/${name}.png`}
                alt={formatName(name)}
              />
            ))}
          </div>
        </div>
      )}

      {modalImg && (
        <div className="modal-overlay" onClick={() => setModalImg(null)}>
          <div className="modal-content">
            <img src={modalImg} alt="Preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Colors;
