import { useState, useEffect } from "react";
import "./Gallery.css";
import { Link } from "react-router-dom";
import "../components/page-intro.css";

const galleryImages = [
  {
    filename: "/new/ball1.jpg",
    caption:
      "Item: Three Large Ball holders | Width: 5/8 in | Colors: Green & White, Teal & White | Hardware: silver",
    type: "image",
  },
  {
    filename: "/new/bluebraid.jpg",
    caption:
      "Item: Custom braided leash & matching keychain | Width: 5/8 in | Colors: Sage & Periwinkle Blue | Hardware: brass",
    type: "image",
  },
  {
    filename: "/new/braidRWB.jpg",
    caption:
      "Item: Special custom braided leash for Westminster Dog Show | Width: 5/8 in | Colors: Red, White, and Deep Sea Blue | Hardware: silver",
    type: "image",
  },
  {
    filename: "/new/braidrolled.jpg",
    caption:
      "Item: Custom braided leash | Width: 5/8 in | Colors: Red & Brown | Hardware: brass",
    type: "image",
  },
  {
    filename: "/new/hotpinkblue.jpg",
    caption:
      "Item: Custom braided leash | Width: 5/8 in | Colors: Hot Pink & Light Blue | Hardware: brass",
    type: "image",
  },
  {
    filename: "/new/braidback.jpg",
    caption:
      "Item: Back side of braided leash before & after sealing | Width: 5/8 in | Colors: Hot Pink & Light Blue | Hardware: brass",
    type: "image",
  },
  {
    filename: "/new/coralteal.jpg",
    caption:
      "Item: Custom braided leash | Width: 5/8 in | Colors: Coral & Teal | Hardware: brass",
    type: "image",
  },
  {
    filename: "/new/customBelt.jpg",
    caption:
      "Item: Custom utility belt | Details: Example custom belt setup with multiple attachment points",
    type: "image",
  },
  {
    filename: "/new/5.8inbelt.jpg",
    caption:
      "Item: 5/8 in utility belt | Width: 5/8 in | Details: Lightweight belt setup with attachment points",
    type: "image",
  },
  {
    filename: "/new/custombelt2.JPG",
    caption:
      "Item: Custom utility belt setup | Details: Example multi-attachment utility belt setup",
    type: "image",
  },
  {
    filename: "/new/CustombeltwBuckle.JPG",
    caption:
      "Item: Utility belt with buckle | Details: Example buckle configuration",
    type: "image",
  },
  {
    filename: "/new/yellowSmallBallHolder.JPG",
    caption:
      "Item: Small ball holder | Details: Example fit for smaller fetch balls",
    type: "image",
  },
  {
    filename: "/new/mando.jpg",
    caption:
      "Item: Custom 3-color hands-free leash | Width: 5/8 in | Colors: Black, Brown, & Royal Blue | Hardware: silver",
    type: "image",
  },
  {
    filename: "/new/willow1.jpg",
    caption:
      "Item: Custom 2-tone O-ring split collar | Width: 5/8 in | Colors: Coral & Teal | Hardware: brass",
    type: "image",
  },
  {
    filename: "/new/willow2.jpg",
    caption:
      "Item: Custom 2-tone O-ring split collar | Width: 5/8 in | Colors: Coral & Teal | Hardware: brass",
    type: "image",
  },
  {
    filename: "/new/TH2.jpg",
    caption:
      "Item: Custom leash extender with built-in traffic handle and paracord woven handle | Width: 5/8 in | Colors: Coral & Teal | Hardware: brass",
    type: "image",
  },
  {
    filename: "/new/TH1.jpg",
    caption:
      "Item: Custom leash extender with built-in traffic handle and paracord woven handle | Width: 5/8 in | Colors: Coral & Teal | Hardware: brass",
    type: "image",
  },
  {
    filename: "/new/2layer1.jpg",
    caption:
      "Item: Custom 2-layer collar with detachable handle | Width: Collar is 1 in & 5/8 in, handle is 5/8 in | Colors: Orange base with Yellow accent | Hardware: silver | Custom: Integrated control handle for extra grip or quick grab, plus name detail",
    type: "image",
  },
  {
    filename: "/new/2layer2.jpg",
    caption:
      "Item: Custom 2-layer collar with detachable handle | Width: Collar is 1 in & 5/8 in, handle is 5/8 in | Colors: Orange base with Yellow accent | Hardware: silver | Custom: Integrated control handle for extra grip or quick grab, plus name detail",
    type: "image",
  },
  {
    filename: "/new/2layer3.jpg",
    caption:
      "Item: Custom 2-layer collar with detachable handle | Width: Collar is 1 in & 5/8 in, handle is 5/8 in | Colors: Orange base with Yellow accent | Hardware: silver | Custom: Integrated control handle for extra grip or quick grab, plus name detail",
    type: "image",
  },
  {
    filename: "/new/2layer4.jpg",
    caption:
      "Item: Custom 2-layer collar with detachable handle | Width: Collar is 1 in & 5/8 in, handle is 5/8 in | Colors: Orange base with Yellow accent | Hardware: silver | Custom: Integrated control handle for extra grip or quick grab, plus name detail",
    type: "image",
  },
  {
    filename: "/new/hfcoral.jpg",
    caption:
      "Item: Custom braided hands-free leash | Width: 5/8 in | Colors: Coral & Teal | Hardware: brass",
    type: "image",
  },
  {
    filename: "/new/braid3color.jpg",
    caption:
      "Item: Custom braided leash | Width: 5/8 in | Colors: Sage, Dark Brown, & Wine | Hardware: brass",
    type: "image",
  },
  {
    filename: "/new/bdbbraid.jpg",
    caption:
      "Item: Custom braided hands-free leash | Width: 5/8 in | Colors: Black & Dark Brown | Hardware: silver",
    type: "image",
  },
  {
    filename: "paisley_leashCollar_ocean.jpeg",
    caption:
      "Item: Custom leash + two-tone collar set | Width: 5/8 in | Colors: Sage & White leash, matching two-tone collar | Hardware: silver",
    type: "image",
  },
  {
    filename: "painted.JPG",
    caption:
      "Item: Custom hand-painted collar | Width: 1 in with 5/8 in buckle | Colors: Deep Sea base with hand-painted mountain landscape | Hardware: silver | Custom: Hand-painted design sealed for durability",
    type: "image",
  },
  {
    filename: "/hands-free-coral_Navy.JPG",
    caption:
      "Item: Hands-free system | Length: 7 ft | Width: 5/8 in | Colors: Coral & Deep Sea | Hardware: solid brass",
    type: "image",
  },
  {
    filename: "customhandlecollar.JPG",
    caption:
      "Item: Custom collar with built-in handle | Width: Collar is 1 in, handle is 5/8 in | Colors: Black base with hot-pink accent | Hardware: black | Custom: Integrated control handle for extra grip or quick grab, plus name detail",
    type: "image",
  },
  {
    filename: "IMG_0517.JPG",
    caption:
      "Item: Utility belt and matching ball holder | Size: XXL custom | Width: 1 in | Colors: Deep Sea & Brown 522 | Hardware: black",
    type: "image",
  },
  {
    filename: "IMG_0088.JPG",
    caption:
      "Item: Classic two-tone leash | Length: 6 ft | Width: 5/8 in | Colors: Red & Brown 522 | Hardware: solid brass",
    type: "image",
  },
  {
    filename: "IMG_0489.JPG",
    caption:
      "Item: Utility belt | Size: XXL custom | Width: 1 in | Colors: Deep Sea & Brown 522 | Hardware: black",
    type: "image",
  },
  {
    filename: "b3.jpg",
    caption:
      "Item: Custom buckle collar | Width: 1 in | Colors: Orange 522 | Hardware: silver | Custom: Personalized name and phone; made with holes for an invisible-fence attachment",
    type: "image",
  },
  {
    filename: "tallulah-sage.JPG",
    caption:
      "Item: The Tallulah / hands-free leash system | Length: 7 ft | Width: 5/8 in | Colors: Sage & White | Hardware: silver | Custom: Built-in traffic handle at base and matching leash extender",
    type: "image",
  },
  {
    filename: "duke.JPG",
    caption:
      "Item: Traffic handle / grab tab | Length: 13 in | Width: 5/8 in | Colors: Brown 523 | Hardware: brass | Custom: Short control handle for close work",
    type: "image",
  },
  {
    filename: "handsfree-redandblack2.JPG",
    caption:
      "Item: Hands-free leash system | Length: 7 ft | Width: 5/8 in | Colors: Red & Black | Hardware: black | Custom: Built-in traffic handle 18 in above base",
    type: "image",
  },
  {
    filename: "Turbo_gym.JPEG",
    caption:
      "Item: Custom collar with name plate | Width: 1 in with 5/8 in name plate | Colors: Deep Sea & Blue 52H | Hardware: silver | Custom: Biothane ID name plate",
    type: "image",
  },
  {
    filename: "navy&brown8ft.JPG",
    caption:
      "Item: Classic two-tone leash | Length: 8 ft | Width: 5/8 in | Colors: Deep Sea & Brown 522 | Hardware: silver",
    type: "image",
  },
  {
    filename: "coralnsagehandsfree.JPG",
    caption:
      "Item: Hands-free system | Length: 7 ft | Width: 5/8 in | Colors: Coral & Sage | Hardware: solid brass",
    type: "image",
  },
  {
    filename: "ball&leash.JPG",
    caption:
      "Item: Ball holder + leash set | Width: 5/8 in | Colors: Deep Sea & Brown 522 with matching ball holder | Hardware: silver",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/IMG_5191.JPG",
    caption:
      "Item: Two-tone collar | Width: 5/8 in | Colors: Red & Black | Hardware: black | Custom: HTV name and phrase",
    type: "image",
  },
  {
    filename: "b1.jpg",
    caption:
      "Item: Custom buckle collar | Width: 1 in | Colors: Orange 522 | Hardware: silver | Custom: Personalized name and phone; made with holes for an invisible-fence attachment",
    type: "image",
  },
  {
    filename: "IMG_8753.JPG",
    caption:
      "Item: Ball holder + leash set | Width: 5/8 in | Colors: Deep Sea & Brown 522 with matching ball holder | Hardware: silver",
    type: "image",
  },
  {
    filename: "JetTug.jpeg",
    caption:
      "Item: Custom tether leash | Width: 5/8 in | Colors: Red | Hardware: black | Custom: Made for a gym setup to tether multiple dogs",
    type: "image",
  },
  {
    filename: "PurpleTrafficNCollar_ocean.jpg",
    caption:
      "Item: Traffic handle + collar set | Width: 5/8 in | Colors: Amethyst Purple & Pink 521 | Hardware: silver | Custom: Matching pull tab and collar for quick control",
    type: "image",
  },
  {
    filename: "navy_brown.JPG",
    caption:
      "Item: Classic two-tone leash | Length: 8 ft | Width: 5/8 in | Colors: Deep Sea & Brown 522 | Hardware: silver",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/rwb.jpg",
    caption:
      "Item: Hands-free 8 ft leash + adjustable collar | Length: 8 ft leash | Width: 5/8 in | Colors: Red, White & Blue with Deep Sea | Hardware: silver | Custom: Patriotic set with matching adjustable collar",
    type: "image",
  },
  {
    filename: "IMG_84080.JPG",
    caption:
      "Item: Trick training - hoop jump | Details: Tully demoing freestyle circle trick",
    type: "image",
  },
  {
    filename: "rolled_coral.JPG",
    caption:
      "Item: Hands-free system | Length: 7 ft | Width: 5/8 in | Colors: Coral & Deep Sea | Hardware: solid brass | Custom: Multi-way system shown rolled for storage",
    type: "image",
  },
  {
    filename: "littleone1.jpeg",
    caption:
      "Item: Matching collar + tether leash set | Width: 5/8 in | Colors: Amethyst Purple | Hardware: silver | Custom: HTV name on collar",
    type: "image",
  },
  {
    filename: "IMG_8763.JPG",
    caption:
      "Item: Traffic handle + collar set | Width: 5/8 in | Colors: Amethyst Purple & Pink 521 | Hardware: silver | Custom: Added floating O-ring for attachment",
    type: "image",
  },
  {
    filename: "collars_custom.JPG",
    caption:
      "Item: Custom collar collection | Widths: 5/8 in & 1 in | Colors: Multiple colorways | Hardware: silver | Custom: Examples of different color and style combinations",
    type: "image",
  },
  {
    filename: "b2.jpg",
    caption:
      "Item: Custom buckle collar | Width: 1 in | Colors: Orange 522 | Hardware: silver | Custom: Personalized name and phone; made with holes for an invisible-fence attachment",
    type: "image",
  },
  {
    filename: "leashextender.jpg",
    caption:
      "Item: Leash extender | Width: 5/8 in | Colors: Sage & White | Hardware: black | Use case: Clips between leash and collar to add length",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/bella.jpg",
    caption:
      "Item: Standard leash upgraded with hands-free attachments | Length: 7 ft | Width: 5/8 in | Colors: Amethyst Purple & Violet | Hardware: silver | Custom: Hands-free attachments and HTV name",
    type: "image",
  },
  {
    filename: "tullycircle.JPG",
    caption:
      "Item: Trick training - hoop jump | Details: Tully jumping through hoop arms",
    type: "image",
  },
  {
    filename: "Turbo_painted.jpg",
    caption:
      "Item: Hand-painted collar | Width: 1 in with 5/8 in buckle | Colors: Deep Sea with custom artwork | Hardware: silver | Custom: Hand-painted design",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/Pan.jpg",
    caption:
      "Item: Standard leash upgraded with hands-free attachments | Length: 7 ft | Width: 5/8 in | Colors: Blue 522 & Deep Sea | Hardware: silver | Custom: Hands-free attachments and HTV name",
    type: "image",
  },
  {
    filename: "custom-longline.jpg",
    caption:
      "Item: Custom long line | Length: 12 ft | Width: 5/8 in | Colors: Violet | Hardware: black with locking carabiner | Custom: Built-in traffic handle 18 in above base",
    type: "image",
  },
  {
    filename: "Littleone_collar.jpg",
    caption:
      "Item: Custom collar | Width: 5/8 in | Colors: Amethyst Orchid Purple | Hardware: silver | Custom: HTV name in fancy font",
    type: "image",
  },
  {
    filename: "sageNwhitecollar.jpg",
    caption:
      "Item: Buckle collar | Width: 5/8 in | Colors: Sage & White | Hardware: silver buckle with black plastic quick-release | Custom: Center O-ring",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/red&bluecollar.JPG",
    caption:
      "Item: Quick-release collar | Width: 5/8 in | Colors: Red & Blue | Hardware: silver | Custom: Center O-ring",
    type: "image",
  },
  {
    filename: "IMG_5366 copy.JPG",
    caption:
      "Item: Custom collar designs | Widths: 5/8 in & 1 in | Colors: Amethyst Purple & Deep Sea base | Hardware: silver | Custom: Examples of widths and color layouts",
    type: "image",
  },
  {
    filename: "b4.jpg",
    caption:
      "Item: Custom buckle collar | Width: 1 in | Colors: Orange 522 | Hardware: silver | Custom: Personalized name and phone; made with holes for an invisible-fence attachment",
    type: "image",
  },
  {
    filename: "sageNwhiteCollar2.jpg",
    caption:
      "Item: Buckle collar | Width: 5/8 in | Colors: Sage & White | Hardware: silver buckle with black plastic quick-release | Custom: Center O-ring",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/red&bluebuckle.JPG",
    caption:
      "Item: Buckle collar | Width: 5/8 in | Colors: Red & Blue | Hardware: silver | Custom: Center O-ring split",
    type: "image",
  },
  {
    filename: "Leash_extender_ocean.jpg",
    caption:
      "Item: Leash extender | Width: 5/8 in | Colors: White & Sage | Hardware: silver",
    type: "image",
  },
  {
    filename: "pinkblackleash_ocean.jpg",
    caption:
      "Item: Standard leash | Length: 8 ft | Width: 5/8 in | Colors: Pink & Black | Hardware: black",
    type: "image",
  },
  {
    filename: "rwb_ocean2.jpg",
    caption:
      "Item: Hands-free leash | Length: 8 ft | Width: 5/8 in | Colors: Red, White & Blue with Deep Sea | Hardware: silver | Custom: Convertible patriotic hands-free setup",
    type: "image",
  },
  {
    filename: "saftystrapparacord.jpeg",
    caption:
      "Item: Safety strap | Material: paracord weave | Colors: Hot Pink & Black | Hardware: silver | Custom: Backup connection between collar and prong collar",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/leashes.jpg",
    caption:
      "Item: Sample leash collection | Widths: 5/8 in | Colors: Multiple | Hardware: mixed | Custom: Examples of standard leashes and hands-free setups",
    type: "image",
  },
  {
    filename: "tallulah-sage2.JPG",
    caption:
      "Item: The Tallulah / hands-free leash system | Length: 7 ft | Width: 5/8 in | Colors: Sage & White | Hardware: silver | Custom: Built-in traffic handle at base and matching leash extender",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/traffichandleEdit.jpg",
    caption:
      "Item: Longer traffic handle | Width: 5/8 in | Colors: Pink & Black | Hardware: black | Custom: Floating O-ring plus Biothane slider to close the handle opening while walking to avoid tripping",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/leashes2.jpg",
    caption:
      "Item: Sample leash styles | Widths: 5/8 in | Colors: Multiple | Hardware: mixed | Custom: Side-by-side comparison of color and style options",
    type: "image",
  },
  {
    filename: "set2.JPEG",
    caption:
      "Item: Sage & White set | Includes: Collar + leash + ball holder | Width: 5/8 in | Colors: Sage & White | Hardware: silver | Custom: Matching everyday set",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/handsfreebasic.JPG",
    caption:
      "Item: Standard leashes with hands-free attachments | Length: 7 ft | Width: 5/8 in | Hardware: silver | Custom: Simple multi-clip hands-free configurations",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/ballholder3.JPG",
    caption:
      "Item: Ball holder | Width: 5/8 in | Colors: Sage & White | Hardware: silver",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/longlinerolled.JPG",
    caption:
      "Item: Long line | Length: 12 ft | Width: 5/8 in | Colors: Violet | Hardware: black | Custom: Rolled for storage; ideal for recall training and decompression walks",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/customtraffichandle3.JPG",
    caption:
      "Item: Custom service-dog leash extender with built-in fishtail traffic handle | Width: 1 in | Colors: Black base with paracord fishtail in hot pink and green | Hardware: silver & black mix with special-order lobster-claw swivel snap | Custom: Mixed hardware colors, paracord fishtail traffic handle, and HTV phrase",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/b&pstandard.JPG",
    caption:
      "Item: Standard leash | Length: 8 ft | Width: 5/8 in | Colors: Black & Pink | Hardware: black",
    type: "image",
  },
  {
    filename: "handsfree-redandblack1.JPG",
    caption:
      "Item: Hands-free leash system | Length: 7 ft | Width: 5/8 in | Colors: Red & Black | Hardware: black | Custom: Built-in traffic handle 18 in above base",
    type: "image",
  },
  {
    filename: "customname.jpg",
    caption:
      "Item: Custom HTV name detail | Width: 5/8 in | Colors: Violet with black lettering | Hardware: black | Custom: Heat-transfer vinyl name for personalization",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/IMG_5161.JPG",
    caption:
      "Item: Longer traffic handle | Width: 5/8 in | Colors: Pink & Black | Hardware: black | Custom: Floating O-ring plus Biothane slider to close the handle opening while walking to avoid tripping",
    type: "image",
  },
  {
    filename: "thetallulah.jpg",
    caption:
      "Item: The Tallulah / hands-free leash system | Length: 8 ft | Width: 5/8 in | Colors: Sage & White | Hardware: black | Custom: Built-in traffic handle at base",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/set3.jpg",
    caption:
      "Item: Sage & White set | Includes: Collar + leash + ball holder | Width: 5/8 in | Colors: Sage & White | Hardware: silver | Custom: Matching everyday set",
    type: "image",
  },
  {
    filename: "tullyw-customtraffichandle2.jpg",
    caption:
      "Item: Custom leash extender with paracord fishtail traffic handle | Width: 1 in | Colors: Black base with hot pink and green paracord fishtail | Hardware: silver | Custom: Extender and paracord traffic handle combo used by Tully",
    type: "image",
  },
  {
    filename: "fishtail2.jpg",
    caption:
      "Item: Fishtail braid traffic handle | Material: paracord | Colors: Hot Pink & Green | Custom: Thick fishtail pattern for extra grip",
    type: "image",
  },
  {
    filename: "/leashpicsNvids/IMG_5139.JPG",
    caption:
      "Item: Fishtail braid traffic handle alternate view | Material: paracord | Colors: Hot Pink & Green | Custom: Decorative and functional handle option",
    type: "image",
  },
  {
    filename: "leashextendorastraffichandle2.jpg",
    caption:
      "Item: Leash extender as traffic handle | Width: 5/8 in | Colors: Sage & White | Hardware: black | Custom: Demonstrates extender clipped as a short handle",
    type: "image",
  },
  {
    filename: "leashextendorastraffichandle.jpg",
    caption:
      "Item: Extender used as traffic handle | Width: 5/8 in | Colors: Sage & White | Hardware: black | Custom: Dual-purpose extender/handle setup",
    type: "image",
  },
  {
    filename: "tullyontheTallulah.jpg",
    caption:
      "Item: The Tallulah used as long line | Width: 5/8 in | Colors: Sage & White | Hardware: black | Custom: Example of Tallulah system clipped as a long line for Tully using the additional leash extender",
    type: "image",
  },
  {
    filename: "tullystrap.jpg",
    caption:
      "Item: Safety strap | Material: paracord weave | Colors: Hot Pink & Black | Hardware: silver | Custom: Backup strap between prong collar and regular collar",
    type: "image",
  },
  {
    filename: "PaisleyCollar.jpg",
    caption:
      "Item: Sage & White collar | Width: 5/8 in | Colors: Sage & White | Hardware: silver | Custom: Everyday collar modeled by Paisley",
    type: "image",
  },
  {
    filename: "PaisleyCollar2.jpg",
    caption:
      "Item: Sage & White collar | Width: 5/8 in | Colors: Sage & White | Hardware: silver | Custom: Alternate angle on Paisley's collar fit",
    type: "image",
  },
  {
    filename: "lo_collarleash.jpg",
    caption:
      "Item: Collar + tether leash set | Width: 5/8 in | Colors: Amethyst Purple | Hardware: silver | Custom: Matching set modeled by Little One",
    type: "image",
  },
  {
    filename: "Turbo_collar.jpg",
    caption:
      "Item: Custom collar and tether leash set | Width: 1 in collar & 5/8 in leash | Colors: Deep Sea & Blue 52H | Hardware: silver | Custom: Turbo's everyday custom collar with HTV name plate",
    type: "image",
  },
];

const optionSlides = [
  {
    src: "/assets/new/Belt_Info.png",
    alt: "Utility belt information guide",
    title: "Utility Belt Information",
    caption:
      "Item: Utility Belt Information | Details: Reference guide for utility belt sizing and attachment configurations",
  },
  {
    src: "/assets/new/slidingOring.jpeg",
    alt: "Sliding O-ring example",
    title: "Sliding O-Ring Option",
    caption:
      "Item: Sliding O-Ring Option | Details: Example of a floating or sliding O-ring attachment setup",
  },
  {
    src: "/assets/new/BallholderBallOptions.png",
    alt: "Ball holder ball options",
    title: "Ball Holder Ball Options",
    caption:
      "Item: Ball Holder Ball Options | Details: Ball Options that come with the holder when ordering the ball holder with the ball included.",
  },
  {
    src: "/assets/new/58colors.png",
    alt: "5/8 inch colors in stock",
    title: 'Colors in stock: 5/8" width',
    caption:
      'Item: 5/8" Colors In Stock | Details: Current stocked Biothane colors available in 5/8 inch width',
  },
  {
    src: "/assets/new/ColorsInStock1Width.png",
    alt: "1 inch colors in stock",
    title: 'Colors in stock: 1" width',
    caption:
      'Item: 1" Colors In Stock | Details: Current stocked Biothane colors available in 1 inch width',
  },
  {
    src: "/assets/new/Black.png",
    alt: "1.5 inch colors in stock",
    title: 'Colors in stock: 1.5" width',
    caption:
      'Item: 1.5" Colors In Stock | Details: Current stocked Biothane colors available in 1.5 inch width',
  },
];

const hardwareSlides = [
  {
    src: "/assets/new/buckles1.jpg",
    alt: "Bar buckles hardware options",
    title: "Bar Buckles",
    caption:
      "Item: Bar Buckles | Details: Black, silver, and brass options in 1 in or 5/8 in",
  },
  {
    src: "/assets/new/buckles2.jpg",
    alt: "Side and quick release buckles",
    title: "Side/Quick Release Buckles",
    caption:
      "Item: Side/Quick Release Buckles | Details: Black and silver options in 1 in or 5/8 in",
  },
  {
    src: "/assets/new/screws.jpg",
    alt: "Screws and rivets hardware options",
    title: "Screws & Rivets",
    caption:
      "Item: Screws and Rivets | Details: Black, silver, and powder-coated hardware options",
  },
  {
    src: "/assets/new/SwivelSnaps.png",
    alt: "Swivel snap hardware options",
    title: "Swivel Snap Options",
    caption:
      "Item: Swivel Snap Options | Details: Standard swivel snap, trigger snap, locking carabiner, and frog clip options",
  },
];

const htvFontSlides = [
  {
    src: "/assets/new/fonts1.jpg",
    alt: "HTV font options sheet one",
    title: "Font Options 1",
    caption: "Item: HTV Font Options | Details: Font style reference chart, set 1",
  },
  {
    src: "/assets/new/fonts2.jpg",
    alt: "HTV font options sheet two",
    title: "Font Options 2",
    caption: "Item: HTV Font Options | Details: Font style reference chart, set 2",
  },
  {
    src: "/assets/new/fonts3.jpg",
    alt: "HTV font options sheet three",
    title: "Font Options 3",
    caption: "Item: HTV Font Options | Details: Font style reference chart, set 3",
  },
];

const getGalleryImageSrc = (filename) => {
  const cleanFilename = filename.trim();
  return cleanFilename.startsWith("/")
    ? `/assets${cleanFilename}`
    : `/assets/${cleanFilename}`;
};

function GearCaption({ text }) {
  if (!text) return null;

  const parts = text.split(" | ");
  const [itemPart, ...metaParts] = parts;

  return (
    <div className="caption-card">
      <p className="caption-item">{itemPart.replace(/^Item:\s*/i, "")}</p>

      {metaParts.length > 0 && (
        <ul className="caption-list">
          {metaParts.map((part, idx) => {
            const [label, ...rest] = part.split(": ");
            const value = rest.join(": ");

            return (
              <li key={idx}>
                <span className="caption-label">
                  {label.replace(/:$/, "")}:
                </span>{" "}
                <span className="caption-value">{value}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function Gallery() {
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (index) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);

  const extraSlides = [
    ...optionSlides,
    ...hardwareSlides,
    ...htvFontSlides,
  ];

  const totalSlides = galleryImages.length + extraSlides.length;

  const optionsStartIndex = galleryImages.length;
  const hardwareStartIndex = optionsStartIndex + optionSlides.length;
  const htvStartIndex = hardwareStartIndex + hardwareSlides.length;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalIndex === null) return;

      if (e.key === "ArrowRight") {
        setModalIndex((modalIndex + 1) % totalSlides);
      } else if (e.key === "ArrowLeft") {
        setModalIndex((modalIndex - 1 + totalSlides) % totalSlides);
      } else if (e.key === "Escape") {
        setModalIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIndex, totalSlides]);

  return (
    <>
      <title>Gallery | Biothane Gear and Training</title>
      <meta
        name="description"
        content="Real dogs using our custom biothane gear plus training clips, hardware options, color examples, and before and after moments."
      />
      <link
        rel="canonical"
        href="https://paisleydoggearandtraining.com/gallery"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Gallery | Biothane Gear and Training"
      />
      <meta
        property="og:description"
        content="Real dogs using our custom biothane gear plus training clips, hardware options, color examples, and before and after moments."
      />
      <meta
        property="og:url"
        content="https://paisleydoggearandtraining.com/gallery"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Gallery | Biothane Gear and Training"
      />
      <meta
        name="twitter:description"
        content="Real dogs using our custom biothane gear plus training clips, hardware options, color examples, and before and after moments."
      />

      <div className="gallery-page">
        <h1>Gallery</h1>

        <p>
          See real customer builds, utility belt examples, hardware options,
          color references, leashes, long lines, The Tallulah system, collars,
          traffic handles, and small accessories.
        </p>

        <p>
          Want more? Visit the <Link to="/videos">video gallery</Link>.
        </p>

        <section aria-label="How to use this gallery" className="page-intro compact">
          <h2>How to use this gallery</h2>
          <p>
            Click any photo to enlarge. Note widths, snap styles, attachment
            options, and color pairings. When you are ready, recreate your
            favorite setup in the <Link to="/builder">Gear Builder</Link> or
            request a quote on the <Link to="/order">order page</Link>.
          </p>
        </section>

        <div className="section-divider">
          <h2>Finished Gear Examples</h2>
          <p className="section-note">
            Real builds showing leashes, collars, long lines, hands-free setups,
            traffic handles, ball holders, and custom details.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map(({ filename, caption }, i) => (
            <div className="gallery-card" key={`${filename}-${i}`} onClick={() => openModal(i)}>
              <img
                src={getGalleryImageSrc(filename)}
                alt={caption || "Custom Biothane gear"}
              />
              {caption ? <GearCaption text={caption} /> : null}
            </div>
          ))}
        </div>



        <div className="section-divider">
          <h2>Options & Reference Guides</h2>
          <p className="section-note">
            Reference images showing attachment options, stocked colors, ball
            holder sizing, and setup examples.
          </p>
        </div>

        <div className="hardware-colors">
          {optionSlides.map((slide, index) => (
            <div
              className="gallery-item"
              key={slide.src}
              onClick={() => openModal(optionsStartIndex + index)}
            >
              <img src={slide.src} alt={slide.alt} />
              <p>{slide.title}</p>
            </div>
          ))}
        </div>

        <div className="section-divider">
          <h2>Hardware Options</h2>
          <p className="section-note">
            Buckles, screws, rivets, and snap styles. To preview Biothane color
            combinations, try the <Link to="/colors">Colors</Link> page and
            favorite swatches with the ⭐.
          </p>
        </div>

        <div className="hardware-colors">
          {hardwareSlides.map((slide, index) => (
            <div
              className="gallery-item"
              key={slide.src}
              onClick={() => openModal(hardwareStartIndex + index)}
            >
              <img src={slide.src} alt={slide.alt} />
              <p>{slide.title}</p>
            </div>
          ))}
        </div>

        <div className="section-divider">
          <h2>HTV Font Options</h2>
          <p className="section-note">
            Choose a font style for the HTV writing add-on. Click to enlarge and
            compare options.
          </p>
        </div>

        <div className="hardware-colors">
          {htvFontSlides.map((slide, index) => (
            <div
              className="gallery-item"
              key={slide.src}
              onClick={() => openModal(htvStartIndex + index)}
            >
              <img src={slide.src} alt={slide.alt} />
              <p>{slide.title}</p>
            </div>
          ))}
        </div>

        {modalIndex !== null && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>

              <button
                className="modal-arrow left"
                onClick={() =>
                  setModalIndex((modalIndex - 1 + totalSlides) % totalSlides)
                }
              >
                ❮
              </button>

              {(() => {
                let src = "";
                let alt = "";
                let caption = "";

                if (modalIndex < galleryImages.length) {
                  const item = galleryImages[modalIndex];
                  src = getGalleryImageSrc(item.filename);
                  alt = item.caption || "Custom Biothane gear";
                  caption = item.caption || "Custom Biothane gear";
                } else {
                  const extraSlide = extraSlides[modalIndex - galleryImages.length];
                  src = extraSlide?.src || "";
                  alt = extraSlide?.alt || "Gallery item";
                  caption = extraSlide?.caption || "Gallery item";
                }

                return (
                  <div className="modal-media">
                    <img src={src} alt={alt} />
                    <div className="modal-caption">
                      <GearCaption text={caption} />
                    </div>
                  </div>
                );
              })()}

              <button
                className="modal-arrow right"
                onClick={() => setModalIndex((modalIndex + 1) % totalSlides)}
              >
                ❯
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}