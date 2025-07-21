import React, { useState } from "react";
import "./GearOptionSection.css";

const GearOptionSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="gear-option">
      <h2 onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className="toggle">{isOpen ? "▲" : "▼"}</span>
      </h2>
      {isOpen && <div className="gear-details">{children}</div>}
    </section>
  );
};

export default GearOptionSection;

