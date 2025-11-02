// src/components/pricingConfig.js
// Exact menu math. USD.

const PRICING = {
  // What base length covers (for ft-based items)
  baseLengthFt: {
    leash: 6,        // base covers up to 6 ft
    longLine: 10,     // base covers up to 10 ft
    handsFreeSystem: 7 // base covers up to 7 ft (adjustable)
  },

  // Base prices (menu-facing)
  base: {
    leash: 30,                 // 4–6 ft leash
    longLine: 45,              // 10 ft line
    trafficLead: 14,           // standalone traffic handle (Biothane) at 8"
    leashExtender: 12,         // 6" base
    safetyStrapBiothane: 12,   // 3" base
    safetyStrapParacord: 20,   // 3" base
    handsFreeSystem: 47,       // Tallulah base
    collarBuckle: 20,          // not used directly (we do size-based below)
    collarQuickRelease: 22,    // not used directly (we do size-based below)
    ballHolder: 12,
    pullTab: 10
  },

  // Per-foot over base for ft items
  perFoot: {
    leash: 2,
    longLine: 2,
    handsFreeSystem: 2
  },

  // Inch-based items: base lengths & overage rates
  baseLengthIn: {
    trafficLead: 8,   // base price is for 8"
    leashExtender: 6, // base price is for 6"
    safetyStrap: 3    // base price is for 3" (used by both variants)
  },
  perInch: {
    trafficLead: 0.5,          // e.g., 8"→$14 up to ~18"→$19–$20
    leashExtender: 0.5,        // 6"→$12 up to ~24"→$21
    safetyStrapBiothane: 0.5,  // 3"→$12 up to 10"→~$15.5
    safetyStrapParacord: 1.5   // 3"→$20, scales higher due to labor
  },

  // Global width upcharges for leashes/lines (collars have their own below)
  width: {
    '5/8"': 0,
    '3/4"': 2,
    '1"': 6
  },

  // Hardware finish (non-collar)
  hardware: {
    standard: 0, // Silver
    black: 3     // set to 2–5 as you like
  },

  // Snap types for leashes/long lines
  snap: {
    swivelSnap: 0,
    lockingCarabiner: 8
  },

  // Leash grip type (not traffic handle!)
  handle: {
    loop: 0,
    noHandle: 0
  },

  // Functional add-ons (apply to the base product)
  addons: {
    // Built-in traffic handle + material choice (for leashes/long lines)
    trafficHandleBuiltIn: 5,         // base
    trafficHandleMaterial: {         // extra *on top of* built-in
      biothane: 0,
      paracordFishtail: 12,          // mid of $10–$18
      paracordWeave: 10              // woven but not fishtail
    },

    handsFreeConversion: 10,         // snap + O-ring conversion on a leash

    // Rings & misc
    oRing: 3,
    dRing: 3,
    floatingORing: 3,
    stopper: 2,

    htv: { name: 5, namePhone: 7, phraseLarge: 10, custom: null }
  },

  // Color & personalization
  color: {
    twoToneLeashOrLine: 4,
    twoToneSmallAccessory: 3
  },

  personalization: {
    nameHTV: { min: 5, max: 10 }
  },

  // ------- COLLARS (exact size menu) -------
  collar: {
    // base price by size (5/8" width, metal double-bar silver)
    sizeBase: {
      xs: 20, // 8–11"
      s: 22,  // 10–13"
      m: 24,  // 12–16"
      l: 26,  // 15–20"
      xl: 30  // 20–25"
    },
    // width upcharge for collars
    widthUpcharge: { '5/8"': 0, '1"': 6 },

    // buckle styles
    buckleTypeAdj: {
      metalSilver: 0,
      metalBlack: 2,
      plasticQR: -2
    },

    // metal hardware set in black (buckle/D-ring/loop)
    blackHardwareSurcharge: 3,

    // Two-tone via O-ring split
    twoToneORingSplit: 6,

    // HTV options
    htv: { name: 5, namePhone: 7, phraseLarge: 10 , custom: null},

    // NEW: paracord fishtail overlay (labor)
    paracordFishtailUpcharge: 15
  }
};

export default PRICING;
