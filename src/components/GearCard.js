import React from "react";
import { Link } from "react-router-dom";
import "./GearCard.css";

const GearCard = ({ title, image, items, anchor }) => {
  return (
    <div className="gear-card">
      <img src={image} alt={title} className="gear-card-image" />
      <h3 className="gear-card-title">{title}</h3>
      <ul className="gear-card-list">
        {items.map((item, i) => {
          if (item.startsWith("**") && item.endsWith("**")) {
            const cleanText = item.replace(/\*\*/g, "");
            return (
              <li key={i} className="gear-section-header">
                {cleanText}
              </li>
            );
          }
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Link to={`/pricing#${anchor}`} className="pricing-button">
        See Pricing
      </Link>
    </div>
  );
};

export default GearCard;
