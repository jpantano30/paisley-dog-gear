// src/pages/QuickOrder.jsx
import { Link } from "react-router-dom";
import "./QuickOrder.css";
import PRICING from "../components/pricingConfig"; // make sure this path matches your tree

const PRESETS = [
  {
    name: "Everyday Leash",
    desc: '6 ft · 5/8" · Loop handle · Swivel snap',
    qp: "productType=leash&lengthFt=6&gripHandle=loop&snap=swivelSnap&hardware=standard",
    img: "/assets/navy_brown.JPG"
  },
  // {
  //   name: "Long Line (Recall)",
  //   desc: '20 ft · 3/8" · No handle + O-ring · Swivel snap',
  //   qp: "productType=longLine&lengthFt=20&gripHandle=noHandle&floatingORing=true&snap=swivelSnap&hardware=standard",
  //   img: "/assets/leashpicsNvids/red&bluebuckle.JPG"
  // },
  {
    name: "Hands-Free System",
    desc: "Adjustable cross-body system with swivel snap",
    qp: "productType=handsFreeSystem&hardware=standard",
    img: "/assets/handsfree-redandblack2.JPG"
  },
  {
    name: "Traffic Handle",
    desc: '10–12 in · 5/8" · Loop handle · Swivel snap',
    qp: "productType=trafficLead&lengthIn=12&gripHandle=loop&hardware=standard",
    img: "/assets/pink_purple_traffic_handle.jpg"
  },
  {
    name: "Collar — Buckle",
    desc: 'Choose size · 5/8" or 3/4" · Silver or Black',
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

/* ---------- helpers: qs <-> obj ---------- */
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

/* ---------- pricing math using pricingConfig ---------- */
function num(v, fallback = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}
function calcEstimateFromParams(p) {
  let total = 0;
  const key = p.productType;

  switch (key) {
    case "leash": {
      total += PRICING.base.leash;
      const baseFt = PRICING.baseLengthFt.leash;
      const lenFt = num(p.lengthFt, baseFt);
      total += Math.max(0, lenFt - baseFt) * PRICING.perFoot.leash;
      break;
    }
    case "longLine": {
      total += PRICING.base.longLine;
      const baseFt = PRICING.baseLengthFt.longLine;
      const lenFt = num(p.lengthFt, baseFt);
      total += Math.max(0, lenFt - baseFt) * PRICING.perFoot.longLine;
      break;
    }
    case "trafficLead": {
      total += PRICING.base.trafficLead;
      const baseIn = PRICING.baseLengthIn.trafficLead;
      const lenIn = num(p.lengthIn, baseIn);
      total += Math.max(0, lenIn - baseIn) * PRICING.perInch.trafficLead;
      break;
    }
    case "leashExtender": {
      total += PRICING.base.leashExtender;
      const baseIn = PRICING.baseLengthIn.leashExtender;
      const lenIn = num(p.lengthIn, baseIn);
      total += Math.max(0, lenIn - baseIn) * PRICING.perInch.leashExtender;
      break;
    }
    case "safetyStrapBiothane": {
      total += PRICING.base.safetyStrapBiothane;
      const baseIn = PRICING.baseLengthIn.safetyStrap;
      const lenIn = num(p.lengthIn, baseIn);
      total += Math.max(0, lenIn - baseIn) * PRICING.perInch.safetyStrapBiothane;
      break;
    }
    case "safetyStrapParacord": {
      total += PRICING.base.safetyStrapParacord;
      const baseIn = PRICING.baseLengthIn.safetyStrap;
      const lenIn = num(p.lengthIn, baseIn);
      total += Math.max(0, lenIn - baseIn) * PRICING.perInch.safetyStrapParacord;
      break;
    }
    case "handsFreeSystem": {
      total += PRICING.base.handsFreeSystem;
      const baseFt = PRICING.baseLengthFt.handsFreeSystem ?? 8;
      const lenFt = num(p.lengthFt, baseFt);
      total += Math.max(0, lenFt - baseFt) * (PRICING.perFoot.handsFreeSystem ?? 0);
      break;
    }
    case "collarBuckle": {
      const size = (p.collarSize || "m").toLowerCase();
      total += PRICING.collar.sizeBase[size] ?? PRICING.collar.sizeBase.m;
      const cw = p.collarWidth || '5/8"';
      total += PRICING.collar.widthUpcharge[cw] ?? 0;

      // Optional buckle/hardware adjustments if you ever pass them
      if (p.buckleType === "metalBlack") total += PRICING.collar.buckleTypeAdj.metalBlack ?? 0;
      else if (p.buckleType === "plasticQR") total += PRICING.collar.buckleTypeAdj.plasticQR ?? 0;
      else total += PRICING.collar.buckleTypeAdj.metalSilver ?? 0;

      if (p.collarHardwareBlack === "true") total += PRICING.collar.blackHardwareSurcharge ?? 0;
      break;
    }
    case "collarQuickRelease": {
      const size = (p.collarSize || "m").toLowerCase();
      total += PRICING.collar.sizeBase[size] ?? PRICING.collar.sizeBase.m;
      const cw = p.collarWidth || '5/8"';
      total += PRICING.collar.widthUpcharge[cw] ?? 0;
      total += PRICING.collar.buckleTypeAdj.plasticQR ?? 0;
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

  // Hardware finish (non-collar)
  if (!key?.startsWith("collar")) {
    const hw = p.hardware || "standard";
    total += PRICING.hardware[hw] ?? 0;
  }

  // Snap surcharge (if present)
  if (p.snap) total += PRICING.snap[p.snap] ?? 0;

  // If you ever set handsFreeConversion flag on presets (not Tallulah base)
  if (p.handsFreeConversion === "true") total += PRICING.addons.handsFreeConversion ?? 0;

  return Math.round(total);
}

/* ---------- enforce swivel + add estPrice ---------- */
function withEstimate(qp) {
  const p = qsToObj(qp);

  // Force swivel on these two so there is NO upcharge from Quick Order
  if (p.productType === "handsFreeSystem" || p.productType === "trafficLead") {
    p.snap = "swivelSnap";
  }

  // Compute estimate
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
        content="Pick a proven setup and request a quote—still made to order. Fast, no-fuss presets for leashes, long lines, collars, and more."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/quick-order" />

      <header className="qo-hero">
        <h1>Quick Order (Presets)</h1>
        <p>Still made to order—just fewer choices. Pick a proven setup, tweak colors later if you want.</p>
        <div className="qo-actions">
          <Link to="/builder" className="qo-btn">Prefer full control? Use the Builder</Link>
        </div>
      </header>

      <section className="qo-grid">
        {PRESETS.map((p, i) => (
          <article key={i} className="qo-card">
            <img src={p.img} alt={p.name} />
            <div className="qo-body">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <Link
                to={`/order?${withEstimate(p.qp)}`}
                className="qo-cta"
                aria-label={`Request quote for ${p.name}`}
              >
                Request this
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
