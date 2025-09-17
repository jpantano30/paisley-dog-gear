// src/pages/ProductBuilder.js
import React, { useEffect, useMemo, useState } from "react";
import "./ProductBuilder.css";
import PRICING from "../components/pricingConfig";
import { useNavigate } from "react-router-dom";
import "../components/page-intro.css";
import BuilderGuide from "../components/BuilderGuide";


// Simple in-file color catalog
const COLOR_CATALOG = [
  { id: "purple-524", code: "Amethyst Orchid Purple 524", name: "Amethyst Orchid Purple / Medium Purple (524)"},
  { id: "grape-pu527", code: "Grape Pu527", name: "Grape Purple (Pu527)" },
  { id: "purple-522", code: "Purple 522", name: "Light Purple (522)" },
  { id: "violet-521", code: "Violet 521", name: "Violet / Dark Purple (521)" },
  { id: "gold-521", code: "Beta Gold 521", name: "Gold (521)" },
  { id: "yellow-521", code: "Yellow 521", name: "Yellow (521)" },
  { id: "yellow-527", code: "Yellow 527", name: "Bright/Neon Yellow (527)" },
  { id: "black-520", code: "Black 520", name: "Black (520)" },
  { id: "grey-523", code: "Grey 523", name: "Grey (523)" },
  { id: "tan-525", code: "Tan 525", name: "Tan (525)" },
  { id: "white-521", code: "White 521", name: "White (521)" },
  { id: "deep-sea-523", code: "Deep Sea 523", name: "Deep Sea/ Dark Blue (523)" },
  { id: "blue-522", code: "Blue 522", name: "Royal Blue (522)" },
  { id: "periwinkle-bu525", code: "Periwinkle Bu525", name: "Periwinkle Blue (Bu525)" },
  { id: "blue-521", code: "Blue 521", name: "Classic Blue (521)" },
  { id: "blue-52h", code: "Blue 52h", name: "Sky Blue (52h)" },
  { id: "blue-52f", code: "Blue 52f", name: "Turquoise Blue (52f)" },
  { id: "dusty-turquoise-tu521", code: "Dusty Turquoise Tu521", name: "Dusty Turquoise (Tu521)" },
  { id: "teal-521", code: "Teal 521", name: "Teal (521)" },
  { id: "green-52k", code: "Green 52k", name: "Aqua Green (52K)" },
  { id: "green-522", code: "Green 522", name: "Forest Green (522)" },
  { id: "green-525", code: "Green 525", name: "Lime Green (525)" },
  { id: "green-528", code: "Green 528", name: "Bright Green (528)" },
  { id: "olive-drab-521", code: "Olive Drab 521", name: "Olive Drab (521)" },
  { id: "sagegreen-527", code: "Sagegreen 527", name: "Sage Green (527)" },
  { id: "orange-522", code: "Orange 522", name: "Bright/Neon Orange (522)" },
  { id: "orange-529", code: "Orange 529", name: "Light Orange (529)" },
  { id: "pink-521", code: "Pink 521", name: "Light Pink (521)" },
  { id: "pink-523", code: "Pink 523", name: "Medium Pink (523)" },
  { id: "pink-coral-524", code: "Pink Coral 524", name: "Coral Pink (524)" },
  { id: "magenta-pink-526", code: "Magenta Pink 526", name: "Magenta Pink (526)" },
  { id: "brown-521", code: "Brown 521", name: "Light Brown (521)" },
  { id: "brown-522", code: "Brown 522", name: "Medium Brown (522)" },
  { id: "brown-523", code: "Brown 523", name: "Dark Brown (523)" },
  { id: "coyote-brown-521", code: "Coyote Brown 521", name: "Coyote Brown (521)" },
  { id: "red-522", code: "Red 522", name: "Red (522)" },
  { id: "chili-red-523", code: "Chili Red 523", name: "Chili Red (523)" },
  { id: "wine-521", code: "Wine 521", name: "Wine / Maroon (521)" },
];

// Fast lookups
const COLOR_BY_ID = Object.fromEntries(COLOR_CATALOG.map(c => [c.id, c]));
const colorLabel = (id) => {
  const c = COLOR_BY_ID[id];
  return c ? `${c.code} — ${c.name}` : "";
};

const money = (n) => Math.round(n * 100) / 100;

// Safe helpers (avoid undefined reads from PRICING)
const HW = PRICING?.hardware || {};
const WIDTH = PRICING?.width || {};
const ADDONS = PRICING?.addons || {};
const SNAP = PRICING?.snap || {};
const HANDLE = PRICING?.handle || {};
const COLOR = PRICING?.color || {};
const BASE = PRICING?.base || {};
const BASE_FT = PRICING?.baseLengthFt || {};
const PER_FT = PRICING?.perFoot || {};
const BASE_IN = PRICING?.baseLengthIn || {};
const PER_IN = PRICING?.perInch || {};
// HTV options (used for non-collar Biothane gear)
const HTV = PRICING?.htv || { name: 5, namePhone: 8, phraseLarge: 10, custom: null };
// For dropdown labels: show “+$5” or “quote” (when price is null/undefined)
const htvPriceTag = (v) => (v == null ? "quote" : `+$${v}`);
const COLLAR = PRICING?.collar || { htv: {}, sizeBase: {}, widthUpcharge: {}, buckleTypeAdj: {} };

/**
 * Product-aware UI spec
 */
const PRODUCT_SPEC = {
  leash: {
    label: "Leash",
    units: "ft",
    sizePresets: [4, 5, 6, 8, 10, 15, 20],
    sizeBounds: { min: 2, max: 50 },
    include: [
      '5/8" Beta Biothane (standard width)',
      "Swivel snap (locking carabiner upgrade available)",
      "Loop handle with 1 D-ring (choose “No Handle” if you plan to attach a separate traffic handle - it will come with an O-ring on the end.)",
      "Silver hardware"
    ],
    fields: {
      width: true,
      snap: true,
      gripHandle: true,
      handsFreeConversion: true,
      trafficHandleBuiltIn: true,
      trafficHandleMaterial: true,
      trafficHandlePlacement: true,
      hardwareFinish: true,
      colors: true
    },
    addons: { twoTone: true, oRing: true, dRing: true, floatingORing: true, stopper: true }
  },

  longLine: {
    label: "Long Line",
    units: "ft",
    sizePresets: [10, 12, 15, 20, 25, 30],
    sizeBounds: { min: 10, max: 50 },
    include: [
      '5/8" Beta Biothane (standard width)',
      "Swivel snap (locking carabiner upgrade available)",
      "Silver hardware",
      "Loop handle with 1 D-ring"
    ],
    fields: {
      width: true, snap: true, gripHandle: true, handsFreeConversion: true,
      trafficHandleBuiltIn: true, trafficHandleMaterial: true, trafficHandlePlacement: true,
      hardwareFinish: true, colors: true
    },
    addons: { twoTone: true, oRing: true, dRing: true, floatingORing: true, stopper: true }
  },

  trafficLead: {
    label: "Traffic Handle (standalone)",
    units: "in",
    sizePresets: [8, 10, 12, 15, 18],
    sizeBounds: { min: 6, max: 24 },
    include: [
      "Short, easy-grab handle",
      'Biothane 5/8" (standard width)',
      "Swivel snap (locking carabiner upgrade available)",
      "Silver hardware"
    ],
    fields: {
      width: true, snap: true, gripHandle: false,
      handsFreeConversion: false, trafficHandleBuiltIn: false,
      trafficHandleMaterial: true, trafficHandlePlacement: false,
      hardwareFinish: true, colors: true
    },
    addons: { twoTone: true, oRing: false, dRing: true, floatingORing: true, stopper: true }
  },

  leashExtender: {
    label: "Leash Extender",
    units: "in",
    sizePresets: [6, 12, 18, 24],
    sizeBounds: { min: 6, max: 30 },
    include: [
      "Biothane strap with snap on one end and O-ring on the other",
      "Silver hardware",
      "Swivel snap (locking carabiner upgrade available)"
    ],
    fields: {
      width: true, snap: true,
      gripHandle: false, handsFreeConversion: false,
      trafficHandleBuiltIn: true, trafficHandleMaterial: true, trafficHandlePlacement: true,
      hardwareFinish: true, colors: true
    },
    addons: { twoTone: true, oRing: false, dRing: false, floatingORing: true, stopper: false }
  },

  safetyStrapBiothane: {
    label: "Safety Strap — Biothane",
    units: "in",
    sizePresets: [3, 4, 6, 8, 10],
    sizeBounds: { min: 3, max: 18 },
    include: [
      "Biothane backup strap",
      "2 Swivel snaps (locking carabiner upgrade available)",
      "Silver hardware"
    ],
    fields: {
      width: true, snap: true, gripHandle: false,
      handsFreeConversion: false, trafficHandleBuiltIn: false,
      trafficHandleMaterial: false, trafficHandlePlacement: false,
      hardwareFinish: true, colors: true
    },
    addons: { twoTone: true, oRing: false, dRing: true, floatingORing: false, stopper: false }
  },

  safetyStrapParacord: {
    label: "Safety Strap — Paracord Weave",
    units: "in",
    sizePresets: [2, 3, 4, 6, 8, 10],
    sizeBounds: { min: 2, max: 18 },
    include: [
      "Short backup strap (Paracord weave)",
      "2 Swivel snaps",
      "Silver hardware",
      "Choose from any color you can think of (subject to availability)"
    ],
    fields: {
      width: false, snap: true, gripHandle: false,
      handsFreeConversion: false, trafficHandleBuiltIn: false,
      trafficHandleMaterial: false, trafficHandlePlacement: false,
      hardwareFinish: true, colors: true
    },
    addons: { twoTone: true, oRing: false, dRing: true, floatingORing: false, stopper: false }
  },

  handsFreeSystem: {
    label: "Hands-free System / The Tallulah",
    units: "ft",
    sizePresets: [7, 8, 9, 10, 12],
    sizeBounds: { min: 7, max: 20 },
    include: [
      "Multi-point leash (wear crossbody, at waist, or handheld)",
      "Sliding O/D-rings for quick adjustments",
      "Swivel snap (locking carabiner upgrade available)",
      "Built-in traffic handle (choose location)",
      "Matching extender 1ft (included)",
      "Silver hardware"
    ],
    fields: {
      width: true, snap: true, gripHandle: false,
      handsFreeConversion: false,
      trafficHandleBuiltIn: true, trafficHandleMaterial: true, trafficHandlePlacement: true,
      hardwareFinish: true, colors: true
    },
    locked: { trafficHandleBuiltIn: true },
    addons: { twoTone: true, oRing: true, dRing: true, floatingORing: true, stopper: true }
  },

  ballHolder: {
    label: "Ball Holder",
    units: "none",
    include: [
      "Holds a standard ChuckIt ball",
      "D-ring + carabiner for attachment",
      "Silver hardware",
      '5/8" width'
    ],
    fields: {
      width: false, snap: false, gripHandle: false, handsFreeConversion: false,
      trafficHandleBuiltIn: false, trafficHandleMaterial: false, trafficHandlePlacement: false,
      hardwareFinish: true, colors: true
    },
    addons: { twoTone: true }
  },

  // Single collar product
  collarBuckle: {
    label: "Collar",
    units: "none",
    include: ["Biothane collar", "Metal double-bar buckle", "Silver hardware"],
    fields: { colors: true }
  }
};

const PRODUCT_TYPES = [
  { value: "leash", label: PRODUCT_SPEC.leash.label },
  { value: "longLine", label: PRODUCT_SPEC.longLine.label },
  { value: "trafficLead", label: PRODUCT_SPEC.trafficLead.label },
  { value: "leashExtender", label: PRODUCT_SPEC.leashExtender.label },
  { value: "safetyStrapBiothane", label: PRODUCT_SPEC.safetyStrapBiothane.label },
  { value: "safetyStrapParacord", label: PRODUCT_SPEC.safetyStrapParacord.label },
  { value: "handsFreeSystem", label: PRODUCT_SPEC.handsFreeSystem.label },
  { value: "collarBuckle", label: "Collar" },
  { value: "ballHolder", label: PRODUCT_SPEC.ballHolder.label }
];


export default function ProductBuilder() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    productType: "",
    notes: "",

    // lengths
    lengthFt: 6,
    lengthIn: 8,

    // shared look/feel
    width: '5/8"',
    colorPrimaryId: "",
    colorSecondaryId: "",
    useTwoTone: false,
    hardware: "standard",

    // leash-only
    snap: "swivelSnap",
    gripHandle: "loop",
    handsFreeConversion: false,

    // built-in traffic handle
    trafficHandleBuiltIn: false,
    trafficHandleMaterial: "biothane",
    trafficHandlePlacement: "base",

    // rings & misc
    oRing: false,
    dRing: false,
    floatingORing: false,
    stopper: false,

    // biothane gear personalization (non-collar)
    htvGearOption: "none",

    // collar-only
    collarSize: "m",
    collarWidth: '5/8"',
    buckleType: "metalSilver",
    collarTwoTone: false,
    collarHardwareBlack: false,
    htvOption: "none",
    collarParacordFishtail: false,
    collarParacordWeave: false
  });

  // helpers
  const isInchItem = ["trafficLead", "leashExtender", "safetyStrapBiothane", "safetyStrapParacord"].includes(form.productType);
  const isSmallAccessory = ["trafficLead", "ballHolder", "leashExtender", "pullTab"].includes(form.productType);
  const isCollarType = ["collarBuckle", "collarQuickRelease"].includes(form.productType);
  const spec = PRODUCT_SPEC[form.productType] || null;
  const isLocked = (key) => !!spec?.locked?.[key];

  // Load saved form on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("builderFormV2");
      if (raw) {
        const saved = JSON.parse(raw);
        const next = { ...saved };
        if (saved.colorPrimary && !saved.colorPrimaryId) next.colorPrimaryId = saved.colorPrimary;
        if (saved.colorSecondary && !saved.colorSecondaryId) next.colorSecondaryId = saved.colorSecondary;
        setForm((f) => ({ ...f, ...next }));
      }
    } catch {}
  }, []);

  // Save on every change
  useEffect(() => {
    try {
      localStorage.setItem("builderFormV2", JSON.stringify(form));
    } catch {}
  }, [form]);

  // Keep 7ft minimum when hands-free conversion is on for a leash
  useEffect(() => {
    if (form.productType === "leash" && form.handsFreeConversion && Number(form.lengthFt) < 7) {
      setForm((f) => ({ ...f, lengthFt: 7 }));
    }
  }, [form.productType, form.handsFreeConversion, form.lengthFt]);

  // Enforce locked fields whenever product changes
  useEffect(() => {
    if (isLocked("trafficHandleBuiltIn") && !form.trafficHandleBuiltIn) {
      setForm((f) => ({ ...f, trafficHandleBuiltIn: true }));
    }
  }, [form.productType]); // eslint-disable-line

  const { total, lines } = useMemo(() => {
    if (!form.productType) return { total: 0, lines: [] };
    const L = [];
    let sum = 0;

    // Collars
    if (isCollarType) {
      const col = COLLAR;
      const base = col.sizeBase?.[form.collarSize] || 0;
      L.push([`Collar base (${(form.collarSize || "").toUpperCase()})`, base]); sum += base;

      const widthUp = col.widthUpcharge?.[form.collarWidth] || 0;
      if (widthUp) { L.push([`Width ${form.collarWidth}`, widthUp]); sum += widthUp; }

      const buckleAdj = col.buckleTypeAdj?.[form.buckleType] || 0;
      if (buckleAdj) { L.push(["Buckle type", buckleAdj]); sum += buckleAdj; }

      const isMetal = form.buckleType === "metalSilver" || form.buckleType === "metalBlack";
      if (isMetal && form.collarHardwareBlack) {
        const hw = col.blackHardwareSurcharge || 0;
        if (hw) { L.push(["Black hardware (metal set)", hw]); sum += hw; }
      }

      if (form.collarTwoTone) {
        const two = col.twoToneORingSplit || 0;
        if (two) { L.push(["Two-tone (O-ring split)", two]); sum += two; }
      }

      if (form.collarParacordFishtail) {
        const up = col.paracordFishtailUpcharge || 0;
        if (up) { L.push(["Paracord fishtail overlay", up]); sum += up; }
      }

      if (form.htvOption && form.htvOption !== "none") {
        const h = col.htv?.[form.htvOption] || 0;
        if (h) { L.push(["HTV " + form.htvOption, h]); sum += h; }
      }

      return { total: money(sum), lines: L };
    }

    // Base for non-collar items
    const basePrice = BASE?.[form.productType] || 0;
    L.push(["Base", basePrice]); sum += basePrice;

    // Length pricing
    if (["leash", "longLine"].includes(form.productType)) {
      const baseFt = BASE_FT?.[form.productType] || 0;
      const ft = Number(form.lengthFt || 0);
      if (ft > baseFt) {
        const per = PER_FT?.[form.productType] || 0;
        const over = ft - baseFt;
        const add = over * per;
        L.push([`Length over ${baseFt} ft (${over} ft @ $${per}/ft)`, add]); sum += add;
      }
    } else if (isInchItem) {
      const baseIn =
        BASE_IN?.[form.productType] ??
        (form.productType.startsWith("safetyStrap") ? BASE_IN?.safetyStrap : 0);

      const per =
        PER_IN?.[form.productType] ??
        (form.productType.startsWith("safetyStrap") ? PER_IN?.[form.productType] : 0);

      const inches = Number(form.lengthIn || 0);
      if (inches > baseIn && (per || 0) > 0) {
        const over = inches - baseIn;
        const add = over * (per || 0);
        L.push([`Length over ${baseIn}″ (${over}″ @ $${per}/in)`, add]); sum += add;
      }
    }

    // Width (non-collar)
    const w = WIDTH?.[form.width] || 0;
    if (!isCollarType && w) { L.push([`Width ${form.width}`, w]); sum += w; }

    // Hardware finish (non-collar)
    const hware = HW?.[form.hardware] || 0;
    if (!isCollarType && hware) { L.push([`Hardware ${form.hardware}`, hware]); sum += hware; }

    // Snap price — apply to any product that exposes the snap field
    if (spec?.fields?.snap) {
      const s = SNAP?.[form.snap] || 0;
      if (s) { L.push([`Snap ${form.snap}`, s]); sum += s; }
    }

    // Grip handle (leash only)
    const g = HANDLE?.[form.gripHandle] || 0;
    if (form.productType === "leash" && g) { L.push([`Grip ${form.gripHandle}`, g]); sum += g; }

    // Built-in traffic handle
    if (["leash", "longLine"].includes(form.productType) && form.trafficHandleBuiltIn) {
      const baseAdd = ADDONS?.trafficHandleBuiltIn || 0;
      if (baseAdd) { L.push(["Built-in traffic handle", baseAdd]); sum += baseAdd; }

      const matAdd = ADDONS?.trafficHandleMaterial?.[form.trafficHandleMaterial] || 0;
      if (matAdd) { L.push([`Traffic handle material (${form.trafficHandleMaterial})`, matAdd]); sum += matAdd; }

      L.push([`Traffic handle placement (${form.trafficHandlePlacement})`, 0]);
    }

    // Hands-free conversion (leash only)
    if (form.productType === "leash" && form.handsFreeConversion) {
      const hf = ADDONS?.handsFreeConversion || 0;
      if (hf) { L.push(["Hands-free conversion", hf]); sum += hf; }
    }

    // Two-tone
    if (form.useTwoTone) {
      const add = isSmallAccessory ? (COLOR?.twoToneSmallAccessory || 0) : (COLOR?.twoToneLeashOrLine || 0);
      if (add) { L.push(["Two-tone color", add]); sum += add; }
    }

    // HTV for Biothane gear (exclude paracord-only item)
    if (!isCollarType && form.productType !== "safetyStrapParacord" && form.htvGearOption !== "none") {
      const htvAmt = HTV?.[form.htvGearOption];
      if (Number.isFinite(htvAmt) && htvAmt > 0) {
        L.push([`HTV ${form.htvGearOption}`, htvAmt]); sum += htvAmt;
      } else {
        L.push([`HTV ${form.htvGearOption} (quoted)`, 0]);
      }
    }

    // Rings & misc (only where allowed)
    const allowAddon = (key) => spec?.addons?.[key];

    if (allowAddon("oRing") && form.oRing) { L.push(["O-ring", ADDONS?.oRing || 0]); sum += ADDONS?.oRing || 0; }
    if (allowAddon("dRing") && form.dRing) { L.push(["D-ring", ADDONS?.dRing || 0]); sum += ADDONS?.dRing || 0; }
    if (allowAddon("floatingORing") && form.floatingORing) { L.push(["Floating O-ring", ADDONS?.floatingORing || 0]); sum += ADDONS?.floatingORing || 0; }
    if (allowAddon("stopper") && form.stopper) { L.push(["Stopper", ADDONS?.stopper || 0]); sum += ADDONS?.stopper || 0; }

    return { total: money(sum), lines: L };
  }, [form, isInchItem, isCollarType, isSmallAccessory, spec]);

  // Centralized updater that also enforces locked fields
  const update = (patch) =>
    setForm((prev) => {
      const next = { ...prev, ...patch };
      if (PRODUCT_SPEC[next.productType]?.locked?.trafficHandleBuiltIn) {
        next.trafficHandleBuiltIn = true;
      }
      return next;
    });

  const setPreset = (val) => {
    if (!spec) return;
    if (spec.units === "ft") update({ lengthFt: val });
    if (spec.units === "in") update({ lengthIn: val });
  };

  const goToOrderForm = () => {
    const lockedTHB = PRODUCT_SPEC[form.productType]?.locked?.trafficHandleBuiltIn ? true : form.trafficHandleBuiltIn;

    const params = new URLSearchParams({
      productType: form.productType,

      // lengths
      lengthFt: ["leash", "longLine", "handsFreeSystem"].includes(form.productType) ? String(form.lengthFt) : "",
      lengthIn: isInchItem ? String(form.lengthIn) : "",

      // shared
      width: form.width,
      colorPrimary: form.colorPrimaryId,
      colorPrimaryName: colorLabel(form.colorPrimaryId),
      colorSecondary: form.useTwoTone ? form.colorSecondaryId : "",
      colorSecondaryName: form.useTwoTone ? colorLabel(form.colorSecondaryId) : "",
      hardware: form.hardware,

      // leash/line/hands-free
      snap: ["leash", "longLine", "handsFreeSystem"].includes(form.productType) ? form.snap : "",
      gripHandle: form.productType === "leash" ? form.gripHandle : "",
      handsFreeConversion: String(form.handsFreeConversion),

      // built-in traffic
      trafficHandleBuiltIn: String(lockedTHB),
      trafficHandleMaterial: form.trafficHandleMaterial,
      trafficHandlePlacement: lockedTHB ? form.trafficHandlePlacement : "",

      // rings & misc
      oRing: String(form.oRing),
      dRing: String(form.dRing),
      floatingORing: String(form.floatingORing),
      stopper: String(form.stopper),

      // two-tone
      twoTone: String(form.useTwoTone),

      // HTV on gear (non-collar)
      htvGearOption: !isCollarType ? form.htvGearOption : "",

      // collar
      collarSize: isCollarType ? form.collarSize : "",
      collarWidth: isCollarType ? form.collarWidth : "",
      buckleType: isCollarType ? form.buckleType : "",
      collarTwoTone: isCollarType ? String(form.collarTwoTone) : "",
      collarHardwareBlack: isCollarType ? String(form.collarHardwareBlack) : "",
      htvOption: isCollarType ? form.htvOption : "",

      // summary
      estPrice: String(total),
      notes: form.notes
    }).toString();

    navigate(`/order?${params}`);
  };

  const allow = (k) => !!spec?.addons?.[k];

  const SizePicker = () => {
    if (!spec) return null;
    if (spec.units === "ft") {
      const baseFt = BASE_FT?.[form.productType] || 0;
      return (
        <div className="form-row">
          <div>
            <label>Length (feet)</label>
            <input
              type="number"
              min={spec.sizeBounds.min}
              max={spec.sizeBounds.max}
              step={1}
              value={form.lengthFt}
              onChange={(e) => update({ lengthFt: Number(e.target.value || 0) })}
            />
            <div className="small">Base covers {baseFt} ft.</div>
            {form.productType === "leash" && form.handsFreeConversion && (
              <div className="notice">Hands-free needs at least 7 ft. Length will be set to 7 ft if shorter.</div>
            )}
          </div>
          {spec.sizePresets?.length ? (
            <div>
              <label>Quick picks</label>
              <div className="chips">
                {spec.sizePresets.map(v => (
                  <button type="button" key={v} onClick={() => setPreset(v)}>{v} ft</button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      );
    }
    if (spec.units === "in") {
      const baseIn =
        BASE_IN?.[form.productType] ??
        (form.productType.startsWith("safetyStrap") ? BASE_IN?.safetyStrap : 0);
      return (
        <div className="form-row">
          <div>
            <label>Length (inches)</label>
            <input
              type="number"
              min={spec.sizeBounds.min}
              max={spec.sizeBounds.max}
              step={1}
              value={form.lengthIn}
              onChange={(e) => update({ lengthIn: Number(e.target.value || 0) })}
            />
            <div className="small">Base covers {baseIn}″.</div>
          </div>
          {spec.sizePresets?.length ? (
            <div>
              <label>Quick picks</label>
              <div className="chips">
                {spec.sizePresets.map(v => (
                  <button type="button" key={v} onClick={() => setPreset(v)}>{v} in</button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      );
    }
    return null;
  };

  // Context-aware “included” list
  const derivedIncluded = useMemo(() => {
    const base = spec?.include ? [...spec.include] : [];
    if (form.productType === "leash" && form.trafficHandleBuiltIn) {
      base.push(`Built-in traffic handle (${form.trafficHandleMaterial === "biothane" ? "Biothane" : "Paracord"})`);
    }
    if (form.productType === "longLine" && form.trafficHandleBuiltIn) {
      base.push(`Built-in traffic handle (${form.trafficHandleMaterial === "biothane" ? "Biothane" : "Paracord"})`);
    }
    if (form.productType === "handsFreeSystem") {
      base.push("Built-in traffic handle (included)");
    }
    return base;
  }, [spec, form.productType, form.trafficHandleBuiltIn, form.trafficHandleMaterial]);

  return (
    <>
      {/* SEO for the Builder page */}
      <title>Build Your Custom Biothane Leash or Collar</title>
      <meta
        name="description"
        content="Choose length, width, hardware and colors. Then send your build to the order form to request a final quote."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/builder" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Build Your Custom Biothane Leash or Collar" />
      <meta property="og:description" content="Pick length, width, color and hardware. Waterproof, easy to clean and made to last." />
      <meta property="og:url" content="https://paisleydoggearandtraining.com/builder" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Build Your Custom Biothane Leash or Collar" />
      <meta name="twitter:description" content="Pick length, width, color and hardware. Waterproof, easy to clean and made to last." />

      <div className="builder-container">
        <header className="builder-header">
          <h1>Build Your Gear</h1>
          <p>Start by choosing a product type. The available options and add-ons will update automatically.</p>
        </header>

        <div className="page-intro" aria-label="About the Gear Builder">
          <h2>Build your custom biothane gear</h2>
          <p>
            Choose the exact length, width, hardware, and colors for your leash, long line, collar, or accessories. 
            You’ll see an estimated price as you go. When you’re ready, click <strong>Send to Order Page</strong>—
            I’ll review your specs and reply with a final quote and timeline.
          </p>
          <p className="small">
            Materials are waterproof, odor-resistant, and easy to clean—great for daily walks, muddy hikes, or training sessions.
            Not sure what to pick? <a href="/options">See options</a>.
          </p>
        </div>

        <div className="builder-grid">
          {/* LEFT: Options */}
          <div className="card">
            <h3>Choose Options</h3>

            {/* Product */}
            <div className="form-row">
              <div>
                <label>Product Type</label>
                <select value={form.productType} onChange={(e) => update({ productType: e.target.value })}>
                  <option value="">Select…</option>
                  {PRODUCT_TYPES.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                </select>
              </div>

              {/* Hardware (non-collar) */}
              {!isCollarType && (
                <div>
                  <label>Hardware </label>
                  <select value={form.hardware} onChange={(e) => update({ hardware: e.target.value })}>
                    <option value="standard">Silver — Standard</option>
                    <option value="black">Black (+${HW?.black || 0})</option>
                  </select>
                </div>
              )}

              {/* Width (non-collar where applicable) */}
              {!isCollarType && spec?.fields?.width && (
                <div>
                  <label>Width </label>
                  <select value={form.width} onChange={(e) => update({ width: e.target.value })}>
                    <option>5/8" - Standard</option>
                    <option>3/4"</option>
                    <option>1"</option>
                  </select>
                </div>
              )}
            </div>

            {/* Size */}
            {spec && <SizePicker />}

            {/* Snaps / Grip / Hands-free */}
            {spec?.fields?.snap && (
              <div className="form-row">
                <div>
                  <label>Snap </label>
                  <select value={form.snap} onChange={(e) => update({ snap: e.target.value })}>
                    <option value="swivelSnap">Swivel Snap — Standard</option>
                    <option value="lockingCarabiner">Locking Carabiner (+${SNAP?.lockingCarabiner || 0})</option>
                  </select>
                </div>
                {spec?.fields?.gripHandle && (
                  <div>
                    <label>Grip/Handle </label>
                    <select value={form.gripHandle} onChange={(e) => update({ gripHandle: e.target.value })}>
                      <option value="loop">Loop — Standard</option>
                      <option value="noHandle">No Handle</option>
                    </select>
                  </div>
                )}
                {spec?.fields?.handsFreeConversion && (
                  <div>
                    <label>Hands-free Conversion</label>
                    <select
                      value={form.handsFreeConversion ? "yes" : "no"}
                      onChange={(e) => update({ handsFreeConversion: e.target.value === "yes" })}
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes (+${ADDONS?.handsFreeConversion || 0})</option>
                    </select>
                    <div className="small">
                      Hands-free leash option: includes a snap on the end and clip points for
                      regular leash, cross-body, or waist carry, with quick ways to shorten the leash.
                      Requires 7 ft minimum.
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Built-in Traffic Handle */}
            {spec?.fields?.trafficHandleBuiltIn && (
              <>
                <div className="form-row">
                  <div>
                    {isLocked("trafficHandleBuiltIn") ? (
                      <label className="locked-option" aria-label="Built-in traffic handle included">
                        <input type="checkbox" checked disabled />
                        <span>Built-in Traffic Handle <em>(included)</em></span>
                      </label>
                    ) : (
                      <>
                        <label>Built-in Traffic Handle</label>
                        <select
                          value={form.trafficHandleBuiltIn ? "yes" : "no"}
                          onChange={(e) => update({ trafficHandleBuiltIn: e.target.value === "yes" })}
                        >
                          <option value="no">No</option>
                          <option value="yes">Yes (+${ADDONS?.trafficHandleBuiltIn || 0})</option>
                        </select>
                        {form.trafficHandleBuiltIn && (
                          <div className="small">
                            Standard builds do <strong>not</strong> include a traffic handle. Turn this on
                            to add a close-control handle near the snap. Pick Biothane (flat) or a Paracord
                            overlay for grip and color, then choose the placement.
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {(form.trafficHandleBuiltIn || isLocked("trafficHandleBuiltIn")) && spec?.fields?.trafficHandleMaterial && (
                    <div>
                      <label>Traffic Handle Material</label>
                      <select
                        value={form.trafficHandleMaterial}
                        onChange={(e) => update({ trafficHandleMaterial: e.target.value })}
                      >
                        <option value="biothane">Biothane (+$0)</option>
                        <option value="paracordFishtail">Paracord Fishtail (+${ADDONS?.trafficHandleMaterial?.paracordFishtail || 0})</option>
                        <option value="paracordWeave">Paracord Weave (+${ADDONS?.trafficHandleMaterial?.paracordWeave || 0})</option>
                      </select>
                    </div>
                  )}
                </div>

                {(form.trafficHandleBuiltIn || isLocked("trafficHandleBuiltIn")) && spec?.fields?.trafficHandlePlacement && (
                  <div className="form-row">
                    <div>
                      <label>Traffic Handle Placement</label>
                      <select
                        value={form.trafficHandlePlacement}
                        onChange={(e) => update({ trafficHandlePlacement: e.target.value })}
                      >
                        <option value="base">At base of leash</option>
                        <option value="12in">12″ above base</option>
                        <option value="18in">18″ above base</option>
                        <option value="24in">24″ above base</option>
                      </select>
                      <div className="small">
                        Choose where you want to grab quickly. “Base” is by the snap; 12″/18″/24″ are higher up for a natural reach.
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Collars */}
            {isCollarType && (
              <>
                <div className="form-row">
                  <div>
                    <label>Collar Size</label>
                    <select value={form.collarSize} onChange={(e) => update({ collarSize: e.target.value })}>
                      <option value="xs">XS (8–11")</option>
                      <option value="s">S (10–13")</option>
                      <option value="m">M (12–16")</option>
                      <option value="l">L (15–20")</option>
                      <option value="xl">XL (20–25")</option>
                    </select>
                  </div>
                  <div>
                    <label>Width</label>
                    <select value={form.collarWidth} onChange={(e) => update({ collarWidth: e.target.value })}>
                      <option value={'5/8"'}>5/8"</option>
                      <option value={'1"'}>1"</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label>Buckle Type</label>
                    <select value={form.buckleType} onChange={(e) => update({ buckleType: e.target.value })}>
                      <option value="metalSilver">Metal Double-bar — Silver</option>
                      <option value="metalBlack">Metal Double-bar — Black (+$2)</option>
                      <option value="plasticQR">Plastic Quick-Release — Black (−$2)</option>
                    </select>
                  </div>
                  <div>
                    <label>Two-tone (O-ring split)</label>
                    <select value={form.collarTwoTone ? "yes" : "no"} onChange={(e) => update({ collarTwoTone: e.target.value === "yes" })}>
                      <option value="no">No</option>
                      <option value="yes">Yes (+${COLLAR?.twoToneORingSplit || 0})</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label>Metal Hardware Finish</label>
                    <select
                      value={form.collarHardwareBlack ? "black" : "silver"}
                      onChange={(e) => update({ collarHardwareBlack: e.target.value === "black" })}
                      disabled={form.buckleType === "plasticQR"}
                    >
                      <option value="silver">Silver</option>
                      <option value="black">Black (+$3)</option>
                    </select>
                    <div className="small">Applies to metal buckle/D-ring/keeper.</div>
                  </div>

                  <div>
                    <label>Collar Style</label>
                    <select
                      value={form.collarParacordFishtail ? "fishtail" : "standard"}
                      onChange={(e) => update({ collarParacordFishtail: e.target.value === "fishtail" })}
                    >
                      <option value="standard">Standard Biothane</option>
                      <option value="fishtail">Paracord Fishtail Overlay (+${COLLAR?.paracordFishtailUpcharge || 0})</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label>HTV Personalization</label>
                    <select value={form.htvOption} onChange={(e) => update({ htvOption: e.target.value })}>
                      <option value="none">None</option>
                      <option value="name">Name ({htvPriceTag(COLLAR?.htv?.name)})</option>
                      <option value="namePhone">Name + Phone ({htvPriceTag(COLLAR?.htv?.namePhone)})</option>
                      <option value="phraseLarge">Phrase / Large ({htvPriceTag(COLLAR?.htv?.phraseLarge)})</option>
                      <option value="custom">Custom ({htvPriceTag(COLLAR?.htv?.custom)})</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* Colors */}
            {spec?.fields?.colors && (
              <div className="form-row">
                <div>
                  <label>Primary Color</label>
                  <select
                    value={form.colorPrimaryId}
                    onChange={(e) => update({ colorPrimaryId: e.target.value })}
                  >
                    <option value="">Select color…</option>
                    {COLOR_CATALOG.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.code} — {c.name}
                      </option>
                    ))}
                  </select>
                  <p>
                    <em>
                      Want to see the full chart?{" "}
                      <a href="/colors" target="_blank" rel="noopener noreferrer">Open colors in a new tab</a>
                    </em>
                  </p>
                </div>

                <div>
                  <label>Two-tone <span className="muted">(Standard: No)</span></label>
                  <select
                    value={form.useTwoTone ? "yes" : "no"}
                    onChange={(e) => update({ useTwoTone: e.target.value === "yes" })}
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                  {!isCollarType && (
                    <div className="small">
                      +${isSmallAccessory ? (COLOR?.twoToneSmallAccessory || 0) : (COLOR?.twoToneLeashOrLine || 0)}
                    </div>
                  )}
                </div>
              </div>
            )}

            {form.useTwoTone && spec?.fields?.colors && (
              <div className="form-row">
                <div>
                  <label>Secondary Color</label>
                  <select
                    value={form.colorSecondaryId}
                    onChange={(e) => update({ colorSecondaryId: e.target.value })}
                  >
                    <option value="">Select color…</option>
                    {COLOR_CATALOG.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.code} — {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* HTV personalization — Biothane items only (exclude Paracord strap) */}
            {(!isCollarType && form.productType !== "safetyStrapParacord") && (
              <div className="form-row">
                <div>
                  <label>HTV Personalization (Biothane)</label>
                  <select
                    value={form.htvGearOption}
                    onChange={(e)=>update({ htvGearOption: e.target.value })}
                  >
                    <option value="none">None</option>
                    <option value="name">Name ({htvPriceTag(HTV?.name)})</option>
                    <option value="namePhone">Name + Phone ({htvPriceTag(HTV?.namePhone)})</option>
                    <option value="phraseLarge">Phrase / Large ({htvPriceTag(HTV?.phraseLarge)})</option>
                    <option value="custom">Custom ({htvPriceTag(HTV?.custom)})</option>
                  </select>

                  <div className="small">Applied to Biothane surfaces only. Not available on Paracord weaves.</div>
                </div>
              </div>
            )}

            {/* Add-ons */}
            {spec && (allow("oRing") || allow("dRing") || allow("floatingORing") || allow("stopper")) && (
              <div className="form-row">
                <div>
                  <label>Add-ons</label>
                  <div className="help">
                    {allow("oRing") && (
                      <>
                        <label><input type="checkbox" checked={form.oRing} onChange={(e) => update({ oRing: e.target.checked })} /> O-ring (+${ADDONS?.oRing || 0})</label>
                        <div className="addon-explain">Fixed O-ring near the handle or base. Clip a poop bag holder, keys, or a carabiner for quick hands-free.</div>
                      </>
                    )}
                    {allow("dRing") && (
                      <>
                        <br />
                        <label><input type="checkbox" checked={form.dRing} onChange={(e) => update({ dRing: e.target.checked })} /> D-ring (+${ADDONS?.dRing || 0})</label>
                        <div className="addon-explain">Fixed D-ring (flat side). Handy anchor point near the handle/base.</div>
                      </>
                    )}
                    {allow("floatingORing") && (
                      <>
                        <br />
                        <label><input type="checkbox" checked={form.floatingORing} onChange={(e) => update({ floatingORing: e.target.checked })} /> Floating O-ring (+${ADDONS?.floatingORing || 0})</label>
                        <div className="addon-explain">Slides along the leash. Great for quick hands-free clips or shortening.</div>
                      </>
                    )}
                    {allow("stopper") && (
                      <>
                        <br />
                        <label><input type="checkbox" checked={form.stopper} onChange={(e) => update({ stopper: e.target.checked })} /> Stopper (+${ADDONS?.stopper || 0})</label>
                        <div className="addon-explain">Keeps a sliding ring from moving past a set point.</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* What's included */}
            {derivedIncluded.length ? (
              <div className="included">
                <h4>What’s included</h4>
                <ul>{derivedIncluded.map((t, i) => <li key={i}>{t}</li>)}</ul>
              </div>
            ) : null}

            <div>
              <label>Notes for Maker</label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => update({ notes: e.target.value })}
                placeholder="Anything special I should know…"
              />
            </div>
          </div>

          {/* MIDDLE: Dynamic Builder Guide */}
          <BuilderGuide form={form} />

          {/* RIGHT : Estimate */}
          <div className="card estimate-card">
            <h3>Estimate & Breakdown</h3>
            <div className="summary">
              <div className="price-badge">${total.toFixed(2)}</div>
              <h4>Line items</h4>
              <ul>
                {lines.map(([label, amt], i) => (
                  <li key={i}>{label}: ${amt.toFixed(2)}</li>
                ))}
              </ul>

              <div className="cta-row">
                <button onClick={goToOrderForm}>Send to Order Page</button>
                <button className="secondary" onClick={() => window.print()}>Print</button>
              </div>
              <br />
              <p>You’ll receive a custom quote with final pricing after you submit the form.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
