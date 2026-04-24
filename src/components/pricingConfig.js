// // src/components/pricingConfig.js
// // Exact menu math. USD.

// const PRICING = {
//   // What base length covers (for ft-based items)
//   baseLengthFt: {
//     leash: 4,        // base covers up to 4 ft
//     longLine: 12,     // base covers up to 12 ft
//     handsFreeSystem: 7 // base covers up to 7 ft (adjustable)
//   },

//   // Base prices (menu-facing)
//   base: {
//     leash: 25,                 // 4 ft leash
//     longLine: 42,              // 12 ft line
//     trafficLead: 14,           // standalone traffic handle (Biothane) at 8"
//     leashExtender: 12,         // 6" base
//     safetyStrapBiothane: 12,   // 3" base
//     safetyStrapParacord: 20,   // 3" base
//     handsFreeSystem: 47,       // Tallulah base
//     collarBuckle: 20,          // not used directly (we do size-based below)
//     collarQuickRelease: 22,    // not used directly (we do size-based below)
//     ballHolder: 12,
//     pullTab: 10
//   },

//   // Per-foot over base for ft items
//   perFoot: {
//     leash: 2,
//     longLine: 1.5,
//     handsFreeSystem: 2
//   },

//   // Inch-based items: base lengths & overage rates
//   baseLengthIn: {
//     trafficLead: 8,   // base price is for 8"
//     leashExtender: 6, // base price is for 6"
//     safetyStrap: 3    // base price is for 3" (used by both variants)
//   },
//   perInch: {
//     trafficLead: 0.5,          // e.g., 8"→$14 up to ~18"→$19–$20
//     leashExtender: 0.5,        // 6"→$12 up to ~24"→$21
//     safetyStrapBiothane: 0.5,  // 3"→$12 up to 10"→~$15.5
//     safetyStrapParacord: 1.5   // 3"→$20, scales higher due to labor
//   },

//   // Global width upcharges for leashes/lines (collars have their own below)
//   width: {
//     '5/8"': 0,
//     '1"': 6
//   },

//   // Hardware finish (non-collar)
//   hardware: {
//     standard: 0, // Silver
//     black: 1     // set to 2–5 as you like
//   },

//   // Snap types for leashes/long lines
//   snap: {
//     swivelSnap: 0,
//     lockingCarabiner: 8
//   },

//   // Leash grip type (not traffic handle!)
//   handle: {
//     loop: 0,
//     noHandle: 0
//   },

//   // Functional add-ons (apply to the base product)
//   addons: {
//     // Built-in traffic handle + material choice (for leashes/long lines)
//     trafficHandleBuiltIn: 5,         // base
//     trafficHandleMaterial: {         // extra *on top of* built-in
//       biothane: 0,
//       paracordFishtail: 12,          // mid of $10–$18
//       paracordWeave: 10              // woven but not fishtail
//     },

//     handsFreeConversion: 10,         // snap + O-ring conversion on a leash

//     // Rings & misc
//     oRing: 3,
//     dRing: 3,
//     floatingORing: 3,
//     stopper: 2,

//     htv: { name: 5, namePhone: 7, phraseLarge: 10, custom: null }
//   },

//   // Color & personalization
//   color: {
//     twoToneLeashOrLine: 2,
//     twoToneSmallAccessory: 1
//   },

//   personalization: {
//     nameHTV: { min: 5, max: 10 }
//   },

//   // ------- COLLARS (exact size menu) -------
//   collar: {
//     // base price by size (5/8" width, metal double-bar silver)
//     sizeBase: {
//       xs: 20, // 8–11"
//       s: 22,  // 10–13"
//       m: 24,  // 12–16"
//       l: 26,  // 15–20"
//       xl: 30  // 20–25"
//     },
//     // width upcharge for collars
//     widthUpcharge: { '5/8"': 0, '1"': 6 },

//     // buckle styles
//     buckleTypeAdj: {
//       metalSilver: 0,
//       metalBlack: 2,
//       plasticQR: -2
//     },

//     // metal hardware set in black (buckle/D-ring/loop)
//     blackHardwareSurcharge: 2,

//     // Two-tone via O-ring split
//     twoToneORingSplit: 3,

//     // HTV options
//     htv: { name: 5, namePhone: 7, phraseLarge: 10 , custom: null},

//     // NEW: paracord fishtail overlay (labor)
//     paracordFishtailUpcharge: 15
//   }
// };

// export default PRICING;



///////////////////////////


// src/components/pricingConfig.js
// Updated from current Etsy shop pricing.
// Uses regular list prices, not temporary sale/bundle pricing.
// USD.

const PRICING = {
  // ---------------------------------------------------------------------------
  // LEGACY / GENERALIZED FIELDS
  // Keep these if other parts of the app already depend on them.
  // ---------------------------------------------------------------------------

  // What base length covers
  baseLengthFt: {
    leash: 4,                 // Etsy: 4 ft = $20
    longLine: 12,             // no active Etsy listing found, left as-is
    handsFreeSystem: 6,       // Etsy Tallulah starts at 6 ft = $45
    braidedLeash: 4,          // Etsy braided leash starts at 4 ft = $40
    braidedHandsFreeSystem: 5 // Etsy braided hands-free starts at 5 ft = $58
  },

  // Base prices
  base: {
    leash: 20,
    longLine: 42,               // unchanged; no active Etsy listing found
    trafficLead: 16,            // same product family as pull tab / traffic handle
    leashExtender: 14,
    safetyStrapBiothane: 12,    // unchanged; no active Etsy listing found
    safetyStrapParacord: 20,    // unchanged; no active Etsy listing found
    handsFreeSystem: 45,
    braidedLeash: 40,
    braidedHandsFreeSystem: 58,
    utilityBelt: 30,
    collarBuckle: 18,           // generalized 5/8" solid collar starting point
    collarQuickRelease: 18,     // generalized 5/8" plastic QR starting point
    ballHolder: 14,
    pullTab: 16
  },

  // Per-foot over base
  perFoot: {
    leash: 2,
    longLine: 1.5,                // unchanged; no active Etsy listing found
    handsFreeSystem: 2,
    braidedLeash: 2,
    braidedHandsFreeSystem: 2
  },

  // Inch-based items
  baseLengthIn: {
    trafficLead: 8,   // Etsy pull tab starts at 8"
    leashExtender: 6, // Etsy extender starts at 6"
    safetyStrap: 3    // unchanged; no active Etsy listing found
  },

  perInch: {
    trafficLead: 0.5,
    leashExtender: 0.5,
    safetyStrapBiothane: 0.5,  // unchanged
    safetyStrapParacord: 1.5   // unchanged
  },

  // Global width upcharges where formula still works
  width: {
    '5/8"': 0,
    '1"': 6, 
    '1.5"' : 7
  },

  // Hardware finish
  // Etsy menus currently show Silver / Brass / Black coated as included
  // for leash/pull tab/hands-free color selections, so no surcharge here.
  hardware: {
    standard: 0, // Silver
    brass: 0,
    black: 0
  },

  // Snap types
  snap: {
    swivelSnap: 0,
    lockingCarabiner: 10,
    frogClip: 10
  },

  handle: {
    loop: 0,
    noHandle: 0
  },

  addons: {
    // Leash / hands-free add-ons
    trafficHandleBuiltIn: 5,
    trafficHandleMaterial: {
      biothane: 0,
      paracordFishtail: 10,
      paracordWeave: 10
    },

    handsFreeConversion: 10, // keep if used internally
    collarHandle: 15.5,

    // Rings / misc
    // Etsy pull-tab listing presents floating O-ring as an included choice, not
    // a separate priced dropdown, so set to 0 here.
    oRing: 3,
    dRing: 3,
    floatingORing: 0,
    stopper: 2,

    quickReleaseBelt: 3,

    // HTV add-on listing starts at $5 on Etsy.
    // Keeping your tiered structure for app compatibility.
    htv: {
      flat: 5,
      name: 5,
      namePhone: 7,
      phraseLarge: 10,
      custom: null
    }
  },

  // Etsy currently includes two-tone coloring in the relevant live listings
  color: {
    twoToneLeashOrLine: 0,
    twoToneSmallAccessory: 0
  },

  personalization: {
    nameHTV: { min: 5, max: 10 }
  },

  // ---------------------------------------------------------------------------
  // LEGACY COLLAR FIELDS
  // These are only approximate/general-purpose now.
  // Exact Etsy collar math is below in exactMenus.collars.
  // ---------------------------------------------------------------------------
  collar: {
    sizeBase: {
      xs: 18,
      s: 20,
      m: 22,
      l: 24,
      xl: 28,
      xxl: 32
    },

    widthUpcharge: {
      '5/8"': 0,
      '1"': 6
    },

    // Approximate/general only.
    // For exact Etsy collar math, use exactMenus.collars.
    buckleTypeAdj: {
      metalSilver: 3,
      metalBlack: 4,
      plasticQR: 0
    },

    blackHardwareSurcharge: 0,
    twoToneORingSplit: 2,

    htv: {
      flat: 5,
      name: 5,
      namePhone: 7,
      phraseLarge: 10,
      custom: null
    },

    paracordFishtailUpcharge: 10,
    collarHandle: 15.5
  },
  ballHolderMenu: {
    small: {
      label: 'Small 2"',
      holderOnly: 14,
      withBall: 17
    },
    medium: {
      label: 'Medium 2.5"',
      holderOnly: 15.5,
      withBall: 18.5
    },
    large: {
      label: 'Large 3"',
      holderOnly: 17,
      withBall: 20
    },
    kongLarge: {
      label: 'Kong L 3.25"',
      holderOnly: 17.5,
      withBall: 26
    },
    chuckitXL: {
      label: 'ChuckIt XL 3.5"',
      holderOnly: 18,
      withBall: 30.5
    }
  },

  // ---------------------------------------------------------------------------
  // EXACT ETSY MENUS
  // Use these anywhere you need the pricing to match Etsy exactly.
  // ---------------------------------------------------------------------------
  exactMenus: {
    leash: {
      width: ['5/8"'],
      hardwareFinishIncluded: ['silver', 'brass', 'black'],
      lengthFt: {
        4: 20,
        6: 24,
        8: 28,
        10: 32,
        12: 36
      }
    },

    braidedLeash: {
      width: ['5/8"'],
      hardwareFinishIncluded: ['silver', 'brass', 'black'],
      lengthFt: {
        4: 40,
        6: 44,
        8: 48,
        10: 52,
        12: 56
      }
    },

    handsFreeSystem: {
      hardwareFinishIncluded: ['silver', 'brass', 'black'],
      lengthFt: {
        6: 45,
        7: 47,
        8: 49,
        9: 51,
        10: 53,
        11: 55,
        12: 57,
        13: 59,
        14: 61,
        15: 63
      }
    },

    braidedHandsFreeSystem: {
      hardwareFinishIncluded: ['silver', 'brass', 'black'],
      lengthFt: {
        5: 58,
        6: 60,
        7: 62,
        8: 64,
        9: 66,
        10: 68,
        11: 70,
        12: 72,
        13: 74,
        14: 76,
        15: 78
      }
    },

    leashExtender: {
      hardwareFinishIncluded: ['silver', 'brass', 'black'],
      endHardwareOptions: ['swivelSnap+ring', 'ring+ring'],
      byWidth: {
        '5/8"': {
          6: 14,
          12: 17,
          18: 20,
          24: 23,
          30: 26,
          36: 29,
          42: 32
        },
        '1"': {
          6: 18,
          12: 21,
          18: 24,
          24: 27,
          30: 30,
          36: 33,
          42: 36
        },
        '1.5"': {
          6: 25,
          12: 28,
          18: 31,
          24: 34,
          30: 37,
          36: 40,
          42: 43
        }
      }
    },

    trafficHandlePullTab: {
      hardwareFinishIncluded: ['silver', 'brass', 'black'],
      floatingORingIncluded: true,
      byWidth: {
        '5/8"': {
          8: 16,
          10: 17,
          12: 18,
          15: 19.5,
          18: 21,
          20: 22,
          22: 23,
          24: 24
        },
        '1"': {
          8: 22,
          10: 23,
          12: 24,
          15: 25.5,
          18: 27,
          20: 28,
          22: 29,
          24: 30
        }
      }
    },

    ballHolder: {
      materialWidth: '5/8"',
      holderOnly: {
        'Small 2"': 14,
        'Medium 2.5"': 15.5,
        'Large 3"': 17,
        'Kong L 3.25"': 17.5,
        'ChuckIt XL 3.5"': 18
      },
      withBall: {
        'Small 2"': 17,
        'Medium 2.5"': 18.5,
        'Large 3"': 20,
        'Kong L 3.25"': 26,
        'ChuckIt XL 3.5"': 30.5
      }
    },

    utilityBelt: {
      byWidth: {
        '5/8"': {
          'XS 22-30"': 30,
          'S 28-37"': 34,
          'M 35-45"': 38,
          'L 43-53"': 42,
          'XL 51-61"': 46,
          'XXL 59-70"': 50
        },
        '1"': {
          'XS 22-30"': 36,
          'S 28-37"': 40,
          'M 35-45"': 44,
          'L 43-53"': 48,
          'XL 51-61"': 52,
          'XXL 59-70"': 56
        }
      },
      addOns: {
        quickReleaseBuckle: 3
      }
    },

    collars: {
      solid58: {
        sizeBase: {
          xs: 18,
          s: 20,
          m: 22,
          l: 24,
          xl: 28,
          xxl: 32
        },
        hardwareBuckleAdj: {
          plasticSideRelease: 0,
          blackSideRelease: 1,
          silverSideRelease: 1,
          brassSideRelease: 9,
          silverBarBuckle: 3,
          blackBarBuckle: 4,
          brassBarBuckle: 4
        }
      },

      solid1: {
        sizeBase: {
          xs: 24,
          s: 26,
          m: 28,
          l: 30,
          xl: 34,
          xxl: 36
        },
        hardwareBuckleAdj: {
          plasticSideRelease: 0,
          blackSideRelease: 3,
          silverSideRelease: 4,
          brassSideRelease: 10,
          silverBarBuckle: 3,
          blackBarBuckle: 4,
          brassBarBuckle: 4
        }
      },

      twoToneORing58: {
        sizeBase: {
          xs: 20,
          s: 22,
          m: 24,
          l: 26,
          xl: 30
        },
        hardwareBuckleAdj: {
          plasticQuickRelease: 0,
          blackQuickRelease: 1,
          silverQuickRelease: 1,
          brassQuickRelease: 10,
          silverBarBuckle: 3,
          brassBarBuckle: 3,
          blackBarBuckle: 4
        }
      },

      twoLayer1Base58Overlay: {
        sizeBase: {
          xs: 30,
          s: 32,
          m: 35,
          l: 38,
          xl: 43
        },
        hardwareBuckleAdj: {
          plasticSideRelease: 0,
          blackSideRelease: 1,
          silverSideRelease: 1,
          brassSideRelease: 10,
          silverBarBuckle: 4,
          brassBarBuckle: 4,
          blackBarBuckle: 4.5
        }
      },

      personalizedNamePlate1: {
        sizeBase: {
          xs: 32,
          s: 34,
          m: 37,
          l: 40,
          xl: 45
        },
        hardwareBuckleAdj: {
          plasticSideRelease: 0,
          blackSideRelease: 3,
          silverSideRelease: 4,
          brassSideRelease: 10,
          silverBarBuckle: 3,
          blackBarBuckle: 4,
          brassBarBuckle: 4
        }
      },

      addOns: {
        htvFlat: 5,
        collarHandle: 15.5
      }
    }
  }
};

export default PRICING;