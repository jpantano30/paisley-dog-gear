// === /src/components/ProductCard.js ===
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
