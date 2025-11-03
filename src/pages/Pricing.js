// src/pages/Pricing.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../components/page-intro.css";
import "./Pricing.css";
import PRICING from "../components/pricingConfig";

const Pricing = () => {
  // LEASHES
  const leashBaseFt = PRICING.baseLengthFt.leash; // 4
  const leashBasePrice = PRICING.base.leash; // 25
  const leash6ft = leashBasePrice + Math.max(0, 6 - leashBaseFt) * PRICING.perFoot.leash; // 29
  const leash8ft = leashBasePrice + Math.max(0, 8 - leashBaseFt) * PRICING.perFoot.leash; // 33
  const leash10ft = leashBasePrice + Math.max(0, 10 - leashBaseFt) * PRICING.perFoot.leash; // 37

  // LONG LINES
  const llBaseFt = PRICING.baseLengthFt.longLine; // 12
  const llBasePrice = PRICING.base.longLine; // 37
  const ll15ft = llBasePrice + Math.max(0, 15 - llBaseFt) * PRICING.perFoot.longLine; // 41.5 -> 42
  const ll20ft = llBasePrice + Math.max(0, 20 - llBaseFt) * PRICING.perFoot.longLine; // 49
  const ll30ft = llBasePrice + Math.max(0, 30 - llBaseFt) * PRICING.perFoot.longLine; // 64

  // TRAFFIC HANDLE (8 in base)
  const thBaseIn = PRICING.baseLengthIn.trafficLead; // 8
  const thBasePrice = PRICING.base.trafficLead; // 14
  const th12in = thBasePrice + Math.max(0, 12 - thBaseIn) * PRICING.perInch.trafficLead; // 16
  const th18in = thBasePrice + Math.max(0, 18 - thBaseIn) * PRICING.perInch.trafficLead; // 19

  // LEASH EXTENDER
  const leBaseIn = PRICING.baseLengthIn.leashExtender; // 6
  const leBasePrice = PRICING.base.leashExtender; // 12
  const le12in = leBasePrice + Math.max(0, 12 - leBaseIn) * PRICING.perInch.leashExtender; // 15
  const le24in = leBasePrice + Math.max(0, 24 - leBaseIn) * PRICING.perInch.leashExtender; // 21

  // SAFETY STRAPS
  const ssBaseIn = PRICING.baseLengthIn.safetyStrap; // 3
  const ssBioBase = PRICING.base.safetyStrapBiothane; // 12
  const ssBio6in =
    ssBioBase + Math.max(0, 6 - ssBaseIn) * PRICING.perInch.safetyStrapBiothane; // ≈14
  const ssParaBase = PRICING.base.safetyStrapParacord; // 20
  const ssPara6in =
    ssParaBase + Math.max(0, 6 - ssBaseIn) * PRICING.perInch.safetyStrapParacord; // ≈25

  // COLLARS (menu says size based)
  const collar = PRICING.collar;

  return (
    <>
      <title>Pricing | Gear and Training Packages</title>
      <meta
        name="description"
        content="Current pricing for custom Biothane gear and dog training. All numbers below come from the live pricing config."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/pricing" />

      <section aria-label="How our pricing works" className="page-intro">
        <h2>Custom gear, clear pricing</h2>
        <p>
          Leash and long-line prices are based on length, width, hardware, and any add-ons.
          The price you see in your quote is the price you pay – no surprise fees.
        </p>
        <p>
          Standard leashes go up to 10 ft; anything 12 ft and up counts as a long line.
        </p>
      </section>


      <div className="pricing-page">
        <h1>Pricing</h1>

        <section className="pricing-section">
          <h2>Custom Biothane Gear</h2>
          <p className="notes">
            Base is 5/8 inch Beta. 3/4 and 1 inch add the width upcharge from the config.
            Black hardware is usually +${PRICING.hardware.black}. Shipping is added to the
            quote but local pickup in Boston is free.
          </p>

          <div className="pricing-grid">
            {/* LEASHES */}
            <div className="price-card" id="leashes">
              <h3>Standard Leashes</h3>
              <ul>
                <li>4 ft (base): ${leashBasePrice}</li>
                <li>6 ft: ${leash6ft}</li>
                <li>8 ft: ${leash8ft}</li>
                <li>10 ft: ${leash10ft}</li>
                <li>
                  Add hands-free conversion: +${PRICING.addons.handsFreeConversion}
                </li>
                <li>
                  Add built-in traffic handle: +${PRICING.addons.trafficHandleBuiltIn}
                </li>
                <li>Two-tone leash: +${PRICING.color.twoToneLeashOrLine}</li>
              </ul>
              <p>
                Standard leashes cover 4–10 ft. Anything 12 ft or longer is priced as a long line,
                so check the long line section for those lengths.
              </p>

            </div>

            {/* LONG LINES */}
            <div className="price-card" id="longlines">
              <h3>Long Lines</h3>
              <ul>
                <li>12 ft (base): ${llBasePrice}</li>
                <li>15 ft: ${Math.round(ll15ft)}</li>
                <li>20 ft: ${ll20ft}</li>
                <li>30 ft: ${ll30ft}</li>
                <li>Traffic handle add-on: +${PRICING.addons.trafficHandleBuiltIn}</li>
                <li>Floating O-ring or D-ring: +${PRICING.addons.floatingORing}</li>
              </ul>
            </div>

            {/* HANDS FREE */}
            <div className="price-card" id="tallulah">
              <h3>Hands-Free System (The Tallulah)</h3>
              <ul>
                <li>Base system (up to {PRICING.baseLengthFt.handsFreeSystem} ft): ${PRICING.base.handsFreeSystem}</li>
                <li>Extra feet over base: +${PRICING.perFoot.handsFreeSystem} per ft</li>
                <li>Two-tone: +${PRICING.color.twoToneLeashOrLine}</li>
              </ul>
            </div>

            {/* COLLARS */}
            <div className="price-card" id="collars">
              <h3>Collars</h3>
              <ul>
                <li>XS: ${collar.sizeBase.xs}</li>
                <li>S: ${collar.sizeBase.s}</li>
                <li>M: ${collar.sizeBase.m}</li>
                <li>L: ${collar.sizeBase.l}</li>
                <li>XL: ${collar.sizeBase.xl}</li>
                <li>1 inch width add: +${collar.widthUpcharge['1"']}</li>
                <li>Plastic quick release: {collar.buckleTypeAdj.plasticQR >= 0 ? "+" : ""}{collar.buckleTypeAdj.plasticQR}</li>
                <li>Black metal hardware set: +${collar.blackHardwareSurcharge}</li>
                <li>Two-tone O-ring split: +${collar.twoToneORingSplit}</li>
              </ul>
            </div>

            {/* ACCESSORIES */}
            <div className="price-card" id="accessories">
              <h3>Accessories</h3>
              <ul>
                <li>Ball holder: ${PRICING.base.ballHolder}</li>
                <li>
                  Safety strap (Biothane): ${ssBioBase} to ${Math.ceil(ssBio6in)}
                </li>
                <li>
                  Safety strap (Paracord): ${ssParaBase} to ${Math.ceil(ssPara6in)}
                </li>
                <li>
                  Leash extender 6 in: ${leBasePrice}
                </li>
                <li>
                  Leash extender 12 in: ${le12in}
                </li>
                <li>
                  Leash extender 24 in: ${le24in}
                </li>
                <li>
                  Traffic handle 8 in: ${thBasePrice}
                </li>
                <li>
                  Traffic handle 12 in: ${th12in}
                </li>
                <li>
                  Traffic handle 18 in: ${th18in}
                </li>
              </ul>
            </div>

            {/* ADD ONS */}
            <div className="price-card" id="addons">
              <h3>Add-ons</h3>
              <ul>
                <li>Two-tone leash/line: +${PRICING.color.twoToneLeashOrLine}</li>
                <li>Two-tone small accessory: +${PRICING.color.twoToneSmallAccessory}</li>
                <li>Extra O-ring or D-ring: +${PRICING.addons.oRing}</li>
                <li>HTV name: +${PRICING.addons.htv.name}</li>
                <li>HTV name + phone: +${PRICING.addons.htv.namePhone}</li>
                <li>Large phrase: +${PRICING.addons.htv.phraseLarge}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Training section stays the same */}
        {/* ... your training pricing from before ... */}
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
    </>
  );
};

export default Pricing;
