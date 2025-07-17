import React from "react";
import { Link } from "react-router-dom";
import "./GearCard.css";

const GearCard = ({ title, image, items, anchor }) => {
  return (
    <div className="gear-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <ul>
        {items.map((item, i) => {
          if (item.startsWith("**") && item.endsWith("**")) {
            const cleanText = item.replace(/\*\*/g, "");
            return (
              <li key={i} style={{ fontWeight: "bold", marginTop: "1rem" }}>
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
