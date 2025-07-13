import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-page">
      <h1>Pricing</h1>

      <section className="pricing-section">
        <h2>Custom Biothane Gear</h2>

        <div className="pricing-grid">
          <div className="price-card">
            <h3>Standard Leashes</h3>
            <ul>
              <li>4–6 ft: $30–$40</li>
              <li>8–10 ft: $35–$45</li>
              <li>Convertible Handle: +$10</li>
            </ul>
          </div>

          <div className="price-card">
            <h3>Long Lines</h3>
            <ul>
              <li>10–15 ft: $40</li>
              <li>20 ft: $50</li>
              <li>Traffic Handle: +$8</li>
            </ul>
          </div>

          <div className="price-card">
            <h3>The Tallulah</h3>
            <ul>
              <li>Multi-functional system: $60–$80</li>
              <li>Fully customizable length, D-rings, handles</li>
            </ul>
          </div>

          <div className="price-card">
            <h3>Collars</h3>
            <ul>
              <li>Basic: $18–$25</li>
              <li>Quick Release: $20–$30</li>
              <li>Two-tone Split: +$8</li>
            </ul>
          </div>

          <div className="price-card">
            <h3>Harnesses</h3>
            <ul>
              <li>Standard: $45–$65</li>
              <li>Service/Custom Fit: $60–$150</li>
            </ul>
          </div>

          <div className="price-card">
            <h3>Accessories</h3>
            <ul>
              <li>Ball Holder: $15–$20</li>
              <li>Safety Strap: $10–$15</li>
              <li>Leash Extender: $15–$20</li>
              <li>Traffic Handle: $12–$18</li>
            </ul>
          </div>

          <div className="price-card">
            <h3>Add-ons</h3>
            <ul>
              <li>Two-tone or Three-tone: +$8–$15</li>
              <li>HTV Name/Label: +$5–$10</li>
              <li>Extra D-rings/O-rings: +$2–$5</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <h2>Dog Training</h2>
        <div className="pricing-grid">
          <div className="price-card">
            <h3>Private Training</h3>
            <ul>
              <li>45–60 min session: $65–$90</li>
              <li>Great for trick training, obedience, and SD task coaching</li>
            </ul>
          </div>

          <div className="price-card">
            <h3>Packages</h3>
            <ul>
              <li>3 Sessions: $180–$250</li>
              <li>5 Sessions: $300–$400</li>
              <li>Custom plans available</li>
            </ul>
          </div>

          <div className="price-card">
            <h3>Virtual Training</h3>
            <ul>
              <li>30 min session: $30–$45</li>
              <li>Perfect for trick check-ins or planning routines</li>
            </ul>
          </div>

          <div className="price-card">
            <h3>Initial Consult</h3>
            <ul>
              <li>Optional intro call: Free or $25</li>
              <li>Cost applies toward package if booked</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
