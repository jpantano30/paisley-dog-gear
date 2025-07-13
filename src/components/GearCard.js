import React from "react";
import "./GearCard.css";

const GearCard = ({ title, image, items }) => {
  return (
    <div className="gear-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GearCard;
