import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-page">
      <h1>Pricing</h1>

      <section className="pricing-section">
        <h2>Custom Biothane Gear</h2>
        <p className="notes">
          Most items are made with 5/8″ standard Beta Biothane. 1″ width available upon request and may affect price and shipping time. <br />
          Shipping is included in your custom quote. USPS rates typically range from $5–$9 depending on size and destination.
        </p>

        <div className="pricing-grid">
          <div className="price-card" id="leashes">
            <h3>Standard Leashes</h3>
            <ul>
              <li>4–6 ft: $35–$45</li>
              <li>8–10 ft: $45–$55</li>
              <li>15–20 ft: $55–$65</li>
              <li>Convertible + O-Ring (hands-free): +$10</li>
              <li>Built-in Traffic Handle: +$6–$8</li>
              <li>Paracord Fishtail Handle: +$10+</li>
            </ul>
          </div>

          <div className="price-card" id="longlines">
            <h3>Long Lines</h3>
            <ul>
              <li>10–15 ft: $45–$65</li>
              <li>20 ft: $55–$75</li>
              <li>Traffic Handle Add-on: +$8</li>
              <li>Hands-free System Add-on: +$10</li>
              <li>Custom lengths available</li>
            </ul>
          </div>

          <div className="price-card" id="tallulah">
            <h3>The Tallulah</h3>
            <ul>
              <li>Multi-functional hands-free system: $65–$85</li>
              <li>Includes sliding O-ring, D-rings, custom traffic handles</li>
              <li>Fully customizable layout</li>
            </ul>
          </div>

          <div className="price-card" id="collars">
            <h3>Collars</h3>
            <ul>
              <li><span>Basic Buckle (Brass, 5/8″):</span> $20–$25</li>
              <li><span>Plastic Buckle (Black, 5/8″):</span> $18–$22</li>
              <li><span>Quick Release (Brass, 5/8″):</span> $22–$30</li>
              <li className="upgrade-option"><span className="upgrade">Upgrade to 1″ width:</span> +$8</li>
              <li className="upgrade-option">O-Ring Split for Two-tone: +$8</li>
            </ul>
          </div>

          <div className="price-card" id="accessories">
            <h3>Accessories</h3>
            <ul>
              <li>Ball Holder: $15–$20</li>
              <li>Safety Strap (Biothane): $12–$15</li>
              <li>Safety Strap (Paracord Weave): +$10</li>
              <li>Leash Extender: $15–$22</li>
              <li>Traffic Handle: $14–$20</li>
              <li>Paracord Traffic Handle: +$10+</li>
            </ul>
          </div>

          <div className="price-card" id="addons">
            <h3>Add-ons</h3>
            <ul>
              <li>Two-tone or Three-tone Colors: +$8–$15</li>
              <li>HTV Name / Phrase Customization: +$5–$10</li>
              <li>Extra D-Rings or O-Rings: +$2–$5 each</li>
            </ul>
          </div>

          {/* <div className="price-card" id="harnesses">
            <h3>Harnesses</h3>
            <ul>
              <li>Basic: $55–$75</li>
              <li>Custom Fit / Service Dog: $70–$160+</li>
              <li>Reach out for design options</li>
            </ul>
          </div> */}

          <div className="price-card" id="bundles">
            <h3>Starter Set</h3>
            <ul>
              <li>Includes: Collar + Leash + Ball Holder</li>
              <li>Starting at $60–$80 depending on options</li>
              <li>Custom layouts, colors, and handle styles available</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <h2>Dog Training</h2>
        <p className="notes">
          I specialize in <span className="training-options">freestyle and trick training</span> — teaching everything from spins, weaves, and jumps to advanced routines. It's all about movement, creativity, and building a stronger bond with your dog through fun and focus.<br /><br />
          I also offer help with <span className="training-options"> manners, obedience, and behavior </span> using a balanced, communication-focused approach. Tools like prong collars or e-collars may be used if needed and are introduced thoughtfully and with consent. Training is tailored to each dog and handler — let’s build a plan that fits your goals.
        </p>

        <div className="pricing-grid">
          <div className="price-card">
            <h3>Private Training</h3>
            <ul>
              <li>45–60 min session: $30–$55</li>
              <li>Perfect for freestyle, tricks, or behavior coaching</li>
              <li>Held locally or in select public locations</li>
            </ul>
          </div>

          <div className="price-card">
            <h3>Training Packages</h3>
            <ul>
              <li>3 Sessions (1hr): $140–$160</li>
              <li>5 Sessions (1hr): $220–$275</li>
              <li>Build a custom plan with progress goals</li>
            </ul>
          </div>

          <div className="price-card">
            <h3>Virtual Coaching</h3>
            <ul>
              <li>30 min Zoom/Google Meet: $30–$45</li>
              <li>Great for trick tune-ups, custom routines, or Q&A</li>
              <li>Submit videos or questions before we meet</li>
            </ul>
          </div>

          <div className="price-card">
            <h3>Intro Consult</h3>
            <ul>
              <li>Free 15–20 min call</li>
              <li>Tell me about your dog and your goals</li>
              <li>Schedule via the <a href="/booking">Booking Page</a></li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;
