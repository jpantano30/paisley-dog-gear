import React, { useState } from "react";
import "./GearCard.css";

const GearCard = ({ title, image, items, anchor, description, bestFor, pricing }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  return (
    <div className="gear-card">
      <img src={image} alt={title} className="gear-card-image" />
      <h3 className="gear-card-title">{title}</h3>
      {description && <p className="gear-description">{description}</p>}
      {bestFor && <p className="gear-bestfor"><strong>Best for:</strong> {bestFor}</p>}

      <button className="toggle-button" onClick={() => setShowOptions(!showOptions)}>
        {showOptions ? "Hide Custom Options" : "Show Custom Options"}
      </button>

      {showOptions && (
        <ul className="gear-card-list">
          {items.map((item, i) =>
            item.startsWith("**") && item.endsWith("**") ? (
              <li key={i} className="gear-section-header">{item.replace(/\*\*/g, "")}</li>
            ) : (
              <li key={i}>{item}</li>
            )
          )}
        </ul>
      )}

      <button className="pricing-button" onClick={() => setShowPricing(!showPricing)}>
        {showPricing ? "Hide Pricing" : "See Pricing"}
      </button>

      {showPricing && (
        <ul className="gear-pricing-list">
          {pricing?.map((price, i) => (
            <li key={i}>{price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GearCard;
