// src/pages/QuickOrder.jsx
import { Link } from "react-router-dom";
import "./QuickOrder.css";
import PRICING from "../components/pricingConfig";

const PRESETS = [
  {
    name: "Everyday Leash",
    desc: '6 ft · 5/8" · Loop handle · Swivel snap',
    qp: "productType=leash&lengthFt=6&gripHandle=loop&snap=swivelSnap&hardware=standard",
    img: "/assets/navy_brown.JPG"
  },
  {
    name: "Hands-Free System",
    desc: 'Base 7 ft adjustable cross-body · 2 swivel snaps · Silver hardware',
    qp: "productType=handsFreeSystem&lengthFt=7&snap=swivelSnap&hardware=standard",
    img: "/assets/handsfree-redandblack2.JPG"
  },
  {
    name: "Traffic Handle",
    desc: '12 in · 5/8" · Swivel snap · Silver hardware',
    qp: "productType=trafficLead&lengthIn=12&gripHandle=loop&hardware=standard",
    img: "/assets/pink_purple_traffic_handle.jpg"
  },
  {
    name: "Collar — Buckle",
    desc: 'Size M · 5/8" · Silver hardware',
    qp: "productType=collarBuckle&collarSize=m&collarWidth=5/8&hardware=standard",
    img: "/assets/leashpicsNvids/red&bluebuckle.JPG"
  },
  {
    name: "Ball Holder",
    desc: "Standard size · D-ring attachment",
    qp: "productType=ballHolder&hardware=standard",
    img: "/assets/leashpicsNvids/ballholder3.JPG"
  }
];

/* helpers */
function qsToObj(qs) {
  const p = {};
  new URLSearchParams(qs).forEach((v, k) => (p[k] = v));
  return p;
}
function objToQs(o) {
  const q = new URLSearchParams();
  Object.entries(o).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") q.set(k, String(v));
  });
  return q.toString();
}
function num(v, fallback = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

/* pricing using config */
function calcEstimateFromParams(p) {
  let total = 0;
  const key = p.productType;

  switch (key) {
    case "leash": {
      const lenFt = num(p.lengthFt, PRICING.baseLengthFt.leash);

      // Jena rule: if someone asks for a 20 ft leash, price it like a long line
      if (lenFt >= 20) {
        total += PRICING.base.longLine;
        total += Math.max(0, lenFt - PRICING.baseLengthFt.longLine) * PRICING.perFoot.longLine;
      } else {
        total += PRICING.base.leash;
        total += Math.max(0, lenFt - PRICING.baseLengthFt.leash) * PRICING.perFoot.leash;
      }
      break;
    }
    case "longLine": {
      total += PRICING.base.longLine;
      const lenFt = num(p.lengthFt, PRICING.baseLengthFt.longLine);
      total += Math.max(0, lenFt - PRICING.baseLengthFt.longLine) * PRICING.perFoot.longLine;
      break;
    }
    case "trafficLead": {
      total += PRICING.base.trafficLead;
      const lenIn = num(p.lengthIn, PRICING.baseLengthIn.trafficLead);
      total += Math.max(0, lenIn - PRICING.baseLengthIn.trafficLead) * PRICING.perInch.trafficLead;
      break;
    }
    case "leashExtender": {
      total += PRICING.base.leashExtender;
      const lenIn = num(p.lengthIn, PRICING.baseLengthIn.leashExtender);
      total += Math.max(0, lenIn - PRICING.baseLengthIn.leashExtender) * PRICING.perInch.leashExtender;
      break;
    }
    case "safetyStrapBiothane": {
      total += PRICING.base.safetyStrapBiothane;
      const lenIn = num(p.lengthIn, PRICING.baseLengthIn.safetyStrap);
      total += Math.max(0, lenIn - PRICING.baseLengthIn.safetyStrap) * PRICING.perInch.safetyStrapBiothane;
      break;
    }
    case "safetyStrapParacord": {
      total += PRICING.base.safetyStrapParacord;
      const lenIn = num(p.lengthIn, PRICING.baseLengthIn.safetyStrap);
      total += Math.max(0, lenIn - PRICING.baseLengthIn.safetyStrap) * PRICING.perInch.safetyStrapParacord;
      break;
    }
    case "handsFreeSystem": {
      total += PRICING.base.handsFreeSystem;
      const lenFt = num(p.lengthFt, PRICING.baseLengthFt.handsFreeSystem);
      total += Math.max(0, lenFt - PRICING.baseLengthFt.handsFreeSystem) * PRICING.perFoot.handsFreeSystem;
      break;
    }
    case "collarBuckle": {
      const size = (p.collarSize || "m").toLowerCase();
      total += PRICING.collar.sizeBase[size] ?? PRICING.collar.sizeBase.m;
      const cw = p.collarWidth || '5/8"';
      total += PRICING.collar.widthUpcharge[cw] ?? 0;
      total += PRICING.collar.buckleTypeAdj.metalSilver ?? 0;
      break;
    }
    case "ballHolder": {
      total += PRICING.base.ballHolder;
      break;
    }
    case "pullTab": {
      total += PRICING.base.pullTab;
      break;
    }
    default:
      break;
  }

  // hardware (non collar)
  if (!key?.startsWith("collar")) {
    const hw = p.hardware || "standard";
    total += PRICING.hardware[hw] ?? 0;
  }

  // snap
  if (p.snap) total += PRICING.snap[p.snap] ?? 0;

  // hands free conversion, if ever passed
  if (p.handsFreeConversion === "true") total += PRICING.addons.handsFreeConversion ?? 0;

  return Math.round(total);
}

/* attach estimate to query */
function withEstimate(qp) {
  const p = qsToObj(qp);

  // force swivel on these
  if (p.productType === "handsFreeSystem" || p.productType === "trafficLead") {
    p.snap = "swivelSnap";
  }

  const est = calcEstimateFromParams(p);
  p.estPrice = String(est);
  return objToQs(p);
}

export default function QuickOrder() {
  return (
    <>
      <title>Quick Order | Popular Biothane Presets</title>
      <meta
        name="description"
        content="Pick a preset based on the real pricing config and send it to the quote form. No guessing."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/quick-order" />

      <header className="qo-hero">
        <h1>Quick Order (Presets)</h1>
        <p>Still made to order. These use the exact same math as the builder.</p>
        <div className="qo-actions">
          <Link to="/builder" className="qo-btn">
            Prefer full control? Use the Builder
          </Link>
        </div>
      </header>

      <section className="qo-grid">
        {PRESETS.map((p, i) => {
          const fullQs = withEstimate(p.qp);
          const est = new URLSearchParams(fullQs).get("estPrice");
          return (
            <article key={i} className="qo-card">
              <img src={p.img} alt={p.name} />
              <div className="qo-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                {est ? <p className="qo-price">from ${est}</p> : null}
                <Link to={`/order?${fullQs}`} className="qo-cta">
                  Request this
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
