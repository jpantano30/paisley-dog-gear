import React from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="pricing-page">
      <h1>Pricing</h1>

      <section className="pricing-section">
        <h2>Custom Biothane Gear</h2>
        <p className="notes">
          Most items are made with 5/8″ standard Beta Biothane. 1″ width available upon request and may affect price and shipping time. <br />
          Shipping is included in your custom quote from me. USPS rates typically range from $5–$9 depending on size and destination. Pick up is available in the local area (Boston, MA) for free. I also do drop offs for a small fee if you're in the area. <br />
        </p>

        <div className="pricing-grid">
          <div className="price-card" id="leashes">
            <h3>Standard Leashes</h3>
            <ul>
              <li>4–6 ft: $30–$35</li>
              <li>8–10 ft: $38–$42</li>
              <li>15–20 ft: $45–$55</li>
              <li>Convertible + O-Ring (hands-free): +$10</li>
              <li>Built-in Traffic Handle: +$5</li>
              <li>Paracord Fishtail Handle: +$10-$18</li>
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
              <li>Safety Strap (Paracord Weave): $20–$30</li>
              <li>Leash Extender: $15–$22</li>
              <li>Traffic Handle: $14–$20</li>
              <li>Paracord Traffic Handle (Fishtail or Weaved): +$10+</li>
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

      <section className="training-pricing">
              <h2>Training Rates</h2>
      
              <div className="pricing-grid training-pricing-grid">
                {/* Meet-Up (Boston or agreed location) */}
                <div className="price-card">
                  <h3>Private Training — Meet-Up</h3>
                  <ul>
                    <li>One 60 min session: <strong>$50</strong></li>
                    <li>No travel fee at Boston spots or other agreed meet-up locations</li>
                    <li>Perfect for freestyle, tricks, recall, or behavior work</li>
                  </ul>
                </div>
      
                {/* In-Home / Local Park / Field Trip */}
                <div className="price-card">
                  <h3>Private Training — In-Home, Local Park, or Field Trip</h3>
                  <ul>
                    <li>One 60 min session: <strong>$50</strong> <em>+ travel (see policy)</em></li>
                    <li>Options include: your home, a local park near you, or a field trip to Home Depot/Lowe’s</li>
                    <li>Great for puppies, behavior work, and real-world training</li>
                  </ul>
                </div>
      
                {/* Packages */}
                <div className="price-card">
                  <h3>Training Packages</h3>
                  <ul>
                    <li>3 Sessions (1 hr each): <strong>$135 total</strong> ($45/session)</li>
                    <li>5 Sessions (1 hr each): <strong>$200 total</strong> ($40/session)</li>
                    <li>Includes progress tracking and goal planning</li>
                    <li><strong>Note:</strong> Package discounts apply to training time only; travel (if any) is charged per visit.</li>
                  </ul>
                </div>
      
                {/* Virtual */}
                <div className="price-card">
                  <h3>Virtual Coaching</h3>
                  <ul>
                    <li>30 min Zoom or Google Meet: <strong>$30–$45</strong></li>
                    <li>Ideal for trick tune-ups, routines, or behavior Q&amp;A</li>
                    <li>Submit videos or questions ahead of time if you'd like</li>
                  </ul>
                </div>
      
                {/* Intro */}
                <div className="price-card">
                  <h3>Intro Consult</h3>
                  <ul>
                    <li>Free 15–20 minute call</li>
                    <li>Tell me about your dog and your goals</li>
                    <li>Schedule via the <Link to="/booking">Booking Page</Link></li>
                  </ul>
                </div>
      
                {/* Travel Policy */}
                <div className="price-card policy">
                  <h3>Travel Policy (for In-Home, Park, or Field Trip Sessions)</h3>
                  <ul>
                    <li>First <strong>40 minutes round-trip</strong> of travel are included.</li>
                    <li>After that: <strong>$0.75 per minute (round-trip)</strong>, billed in 10-minute increments.</li>
                    <li>Travel is calculated per visit from our Boston location (North End); meet-ups in Boston have <strong>no travel fee</strong>.</li>
                    <li>Example: ~50 min each way (≈100 min round-trip) → 60 billable minutes × $0.75 = <strong>$45 travel</strong>.</li>
                  </ul>
                </div>
              </div>
            </section>


    </div>
  );
};

export default Pricing;
