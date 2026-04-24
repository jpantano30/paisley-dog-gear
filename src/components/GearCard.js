import React, { useState } from "react";
import "./GearCard.css";

const GearCard = ({ title, image, items, anchor, description, bestFor }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="gear-card" id={anchor}>
      <img src={image} alt={title} className="gear-card-image" />
      <h3 className="gear-card-title">{title}</h3>

      {description && <p className="gear-description">{description}</p>}
      {bestFor && (
        <p className="gear-bestfor">
          <strong>Best for:</strong> {bestFor}
        </p>
      )}

      <button className="toggle-button" onClick={() => setShowOptions(!showOptions)}>
        {showOptions ? "Hide Custom Options" : "Show Custom Options"}
      </button>

      {showOptions && (
        <ul className="gear-card-list">
          {items.map((item, i) =>
            item.startsWith("**") && item.endsWith("**") ? (
              <li key={i} className="gear-section-header">
                {item.replace(/\*\*/g, "")}
              </li>
            ) : (
              <li key={i}>{item}</li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default GearCard;