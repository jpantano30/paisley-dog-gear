// src/pages/Pricing.jsx
import "../components/page-intro.css";
import "./Pricing.css";
import PRICING from "../components/pricingConfig";

const dollars = (n) => Number.isInteger(n) ? n : n.toFixed(2);

const Pricing = () => {
  const leashBaseFt = PRICING.baseLengthFt.leash;
  const leashBasePrice = PRICING.base.leash;
  const leash6ft = leashBasePrice + Math.max(0, 6 - leashBaseFt) * PRICING.perFoot.leash;
  const leash8ft = leashBasePrice + Math.max(0, 8 - leashBaseFt) * PRICING.perFoot.leash;
  const leash10ft = leashBasePrice + Math.max(0, 10 - leashBaseFt) * PRICING.perFoot.leash;

  const llBaseFt = PRICING.baseLengthFt.longLine;
  const llBasePrice = PRICING.base.longLine;
  const ll15ft = llBasePrice + Math.max(0, 15 - llBaseFt) * PRICING.perFoot.longLine;
  const ll20ft = llBasePrice + Math.max(0, 20 - llBaseFt) * PRICING.perFoot.longLine;
  const ll30ft = llBasePrice + Math.max(0, 30 - llBaseFt) * PRICING.perFoot.longLine;

  const thBaseIn = PRICING.baseLengthIn.trafficLead;
  const thBasePrice = PRICING.base.trafficLead;
  const th12in = thBasePrice + Math.max(0, 12 - thBaseIn) * PRICING.perInch.trafficLead;
  const th18in = thBasePrice + Math.max(0, 18 - thBaseIn) * PRICING.perInch.trafficLead;
  const th24in = thBasePrice + Math.max(0, 24 - thBaseIn) * PRICING.perInch.trafficLead;

  const leBaseIn = PRICING.baseLengthIn.leashExtender;
  const leBasePrice = PRICING.base.leashExtender;
  const le12in = leBasePrice + Math.max(0, 12 - leBaseIn) * PRICING.perInch.leashExtender;
  const le24in = leBasePrice + Math.max(0, 24 - leBaseIn) * PRICING.perInch.leashExtender;
  const le42in = leBasePrice + Math.max(0, 42 - leBaseIn) * PRICING.perInch.leashExtender;

  const ssBaseIn = PRICING.baseLengthIn.safetyStrap;
  const ssBioBase = PRICING.base.safetyStrapBiothane;
  const ssBio6in = ssBioBase + Math.max(0, 6 - ssBaseIn) * PRICING.perInch.safetyStrapBiothane;
  const ssParaBase = PRICING.base.safetyStrapParacord;
  const ssPara6in = ssParaBase + Math.max(0, 6 - ssBaseIn) * PRICING.perInch.safetyStrapParacord;

  const collar = PRICING.collar;
  const ballHolder = PRICING.ballHolderMenu;

  return (
    <>
      <title>Pricing | Gear and Training Packages</title>
      <meta
        name="description"
        content="Current pricing for custom Biothane gear and dog training."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/pricing" />

      <section aria-label="How our pricing works" className="page-intro">
        <h2>Custom gear, clear pricing</h2>
        <p>
          These prices now follow the same math as the current Etsy listings for the gear that is already on the website.
          If you pick a custom option that is not in the standard builder flow, I will still confirm everything before final payment.
        </p>
        <p>
          Standard leashes go up to 10 ft here. Anything 12 ft and up is still priced as a long line on the site.
        </p>
      </section>

      <div className="pricing-page">
        <h1>Pricing</h1>

        <section className="pricing-section">
          <h2>Custom Biothane Gear</h2>
          <p className="notes">
            Silver, brass, and black hardware are all included on the current website-supported Etsy gear listings.
            Shipping is added at checkout or in your final quote, and local pickup in Boston is free.
          </p>

          <div className="pricing-grid">
            <div className="price-card" id="leashes">
              <h3>Standard Leashes</h3>
              <ul>
                <li>4 ft: ${dollars(leashBasePrice)}</li>
                <li>6 ft: ${dollars(leash6ft)}</li>
                <li>8 ft: ${dollars(leash8ft)}</li>
                <li>10 ft: ${dollars(leash10ft)}</li>
                <li>Add hands-free conversion: +${dollars(PRICING.addons.handsFreeConversion)}</li>
                <li>Add built-in traffic handle: +${dollars(PRICING.addons.trafficHandleBuiltIn)}</li>
                <li>Add paracord fishtail traffic handle: +${dollars(PRICING.addons.trafficHandleMaterial.paracordFishtail)}</li>
                <li>Two-tone color: included</li>
              </ul>
            </div>

            <div className="price-card" id="longlines">
              <h3>Long Lines</h3>
              <ul>
                <li>12 ft: ${dollars(llBasePrice)}</li>
                <li>15 ft: ${dollars(ll15ft)}</li>
                <li>20 ft: ${dollars(ll20ft)}</li>
                <li>30 ft: ${dollars(ll30ft)}</li>
                <li>Traffic handle add-on: +${dollars(PRICING.addons.trafficHandleBuiltIn)}</li>
                <li>Extra O-ring / D-ring: +${dollars(PRICING.addons.oRing)}</li>
              </ul>
            </div>

            <div className="price-card" id="tallulah">
              <h3>Hands-Free System (The Tallulah)</h3>
              <ul>
                <li>6 ft: ${dollars(PRICING.base.handsFreeSystem)}</li>
                <li>7 ft: ${dollars(PRICING.base.handsFreeSystem + PRICING.perFoot.handsFreeSystem)}</li>
                <li>8 ft: ${dollars(PRICING.base.handsFreeSystem + (2 * PRICING.perFoot.handsFreeSystem))}</li>
                <li>10 ft: ${dollars(PRICING.base.handsFreeSystem + (4 * PRICING.perFoot.handsFreeSystem))}</li>
                <li>Extra feet over 6 ft: +${dollars(PRICING.perFoot.handsFreeSystem)} each</li>
                <li>Add built-in traffic handle: +${dollars(PRICING.addons.trafficHandleBuiltIn)}</li>
                <li>Two-tone color: included</li>
              </ul>
            </div>

            <div className="price-card" id="collars">
              <h3>Collars</h3>
              <ul>
                <li>5/8 inch base prices: XS ${collar.sizeBase.xs}, S ${collar.sizeBase.s}, M ${collar.sizeBase.m}, L ${collar.sizeBase.l}, XL ${collar.sizeBase.xl}, XXL ${collar.sizeBase.xxl}</li>
                <li>1 inch width add-on: +${dollars(collar.widthUpcharge['1"'])}</li>
                <li>Plastic quick-release: included in base prices</li>
                <li>Metal double-bar silver: +${dollars(collar.buckleTypeAdj.metalSilver)}</li>
                <li>Metal double-bar black: +${dollars(collar.buckleTypeAdj.metalBlack)}</li>
                <li>Two-tone O-ring split: +${dollars(collar.twoToneORingSplit)}</li>
                <li>Paracord fishtail overlay: +${dollars(collar.paracordFishtailUpcharge)}</li>
                <li>HTV name: +${dollars(collar.htv.name)}</li>
              </ul>
            </div>

            <div className="price-card" id="accessories">
              <h3>Accessories</h3>
              <ul>
                <li>Ball holder small: ${dollars(ballHolder.small.holderOnly)} or ${dollars(ballHolder.small.withBall)} with ball</li>
                <li>Ball holder medium: ${dollars(ballHolder.medium.holderOnly)} or ${dollars(ballHolder.medium.withBall)} with ball</li>
                <li>Ball holder large: ${dollars(ballHolder.large.holderOnly)} or ${dollars(ballHolder.large.withBall)} with ball</li>
                <li>Kong Large holder: ${dollars(ballHolder.kongLarge.holderOnly)} or ${dollars(ballHolder.kongLarge.withBall)} with ball</li>
                <li>Chuckit XL holder: ${dollars(ballHolder.chuckitXL.holderOnly)} or ${dollars(ballHolder.chuckitXL.withBall)} with ball</li>
                <li>Leash extender 6 in: ${dollars(leBasePrice)}</li>
                <li>Leash extender 12 in: ${dollars(le12in)}</li>
                <li>Leash extender 24 in: ${dollars(le24in)}</li>
                <li>Leash extender 42 in: ${dollars(le42in)}</li>
                <li>Traffic handle 8 in: ${dollars(thBasePrice)}</li>
                <li>Traffic handle 12 in: ${dollars(th12in)}</li>
                <li>Traffic handle 18 in: ${dollars(th18in)}</li>
                <li>Traffic handle 24 in: ${dollars(th24in)}</li>
                <li>Safety strap (Biothane): ${dollars(ssBioBase)} to ${dollars(Math.ceil(ssBio6in))}</li>
                <li>Safety strap (Paracord): ${dollars(ssParaBase)} to ${dollars(Math.ceil(ssPara6in))}</li>
              </ul>
            </div>

            <div className="price-card" id="addons">
              <h3>Add-ons</h3>
              <ul>
                <li>Built-in traffic handle: +${dollars(PRICING.addons.trafficHandleBuiltIn)}</li>
                <li>Paracord fishtail traffic handle: +${dollars(PRICING.addons.trafficHandleMaterial.paracordFishtail)}</li>
                <li>Locking carabiner: +${dollars(PRICING.snap.lockingCarabiner)}</li>
                <li>Extra O-ring or D-ring: +${dollars(PRICING.addons.oRing)}</li>
                <li>Floating O-ring: ${PRICING.addons.floatingORing ? `+$${dollars(PRICING.addons.floatingORing)}` : 'included where offered'}</li>
                <li>HTV name: +${dollars(PRICING.addons.htv.name)}</li>
                <li>HTV name + phone: +${dollars(PRICING.addons.htv.namePhone)}</li>
                <li>Large phrase: +${dollars(PRICING.addons.htv.phraseLarge)}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing
