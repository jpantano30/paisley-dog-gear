import React, { useEffect, useMemo, useState } from "react";
import "./OrderForm.css";
import { useSearchParams } from "react-router-dom";
import "../components/page-intro.css";

// Map builder product keys to your public-facing labels
const PRODUCT_LABELS = {
  leash: "Standard Leash",
  longLine: "Long Line",
  handsFreeSystem: "The Tallulah",
  trafficLead: "Traffic Handle",
  leashExtender: "Leash Extender",
  pullTab: "Pull Tab",
  collarBuckle: "Collar — Buckle",
  collarQuickRelease: "Collar — Quick Release",
  ballHolder: "Ball Holder",
  safetyStrapBiothane: "Safety Strap — Biothane",
  safetyStrapParacord: "Safety Strap — Paracord Weave"
};

// Normalize builder values to your form’s fields
function normalizeFromBuilder(params) {
  const productKey = params.get("productType") || "";
  const productType = PRODUCT_LABELS[productKey] || "";

  // Length: prefer ft, else inches, else raw length string
  let length = "";
  const lengthFt = params.get("lengthFt");
  const lengthIn = params.get("lengthIn");
  const lengthRaw = params.get("length");
  if (lengthFt) length = `${lengthFt}ft`;
  else if (lengthIn) length = `${lengthIn}in`;
  else if (lengthRaw) length = lengthRaw;

  // Colors
  const colorPrimary = params.get("colorPrimary") || "";
  const colorSecondary = params.get("colorSecondary") || "";
  const colors = [colorPrimary, colorSecondary].filter(Boolean).join(", ");

  // Hardware (builder uses 'standard'|'black')
  const hwMap = {
    standard: "Silver",
    black: "Black"
  };
  const hardware = hwMap[params.get("hardware")] || "";

  // Snap mapping
  const snapMap = {
    swivelSnap: "Swivel Snap",
    lockingCarabiner: "Locking Carabiner"
    // frogClip: "Frog Clip"
  };
  const snapType = snapMap[params.get("snap")] || "";

  // Handle mapping: builder grip only (not traffic handle)
  const gripMap = {
    loop: "Loop Handle",
    noHandle: "No Handle + D-ring"
  };
  const handleType = gripMap[params.get("gripHandle")] || "";

  // Notes: assemble special flags so they carry over
  const notesPieces = [];
  if (params.get("handsFreeConversion") === "true") notesPieces.push("Hands-free conversion.");
  if (params.get("trafficHandleBuiltIn") === "true") {
    const mat = params.get("trafficHandleMaterial") || "biothane";
    notesPieces.push(`Built-in traffic handle (${mat}).`);
  }
  if (params.get("twoTone") === "true") notesPieces.push("Two-tone color.");
  if (params.get("oRing") === "true") notesPieces.push("Add O-ring.");
  if (params.get("dRing") === "true") notesPieces.push("Add D-ring.");
  if (params.get("floatingORing") === "true") notesPieces.push("Add floating O-ring.");
  if (params.get("stopper") === "true") notesPieces.push("Add stopper.");

  // Collar flags — just add to notes so you see them in the order
  const collarSize = params.get("collarSize");
  const collarWidth = params.get("collarWidth");
  const buckleType = params.get("buckleType");
  const collarTwoTone = params.get("collarTwoTone") === "true";
  const collarHardwareBlack = params.get("collarHardwareBlack") === "true";
  const htvOption = params.get("htvOption");

  if (collarSize) notesPieces.push(`Collar size: ${collarSize.toUpperCase()}.`);
  if (collarWidth) notesPieces.push(`Collar width: ${collarWidth}.`);
  if (buckleType) notesPieces.push(`Buckle: ${buckleType}.`);
  if (collarTwoTone) notesPieces.push("Collar two-tone (O-ring split).");
  if (collarHardwareBlack) notesPieces.push("Collar metal hardware: Black.");
  if (htvOption && htvOption !== "none") notesPieces.push(`HTV: ${htvOption}.`);

  const estPrice = params.get("estPrice");
  if (estPrice) notesPieces.push(`Builder estimate: $${estPrice}.`);

  const userNotes = params.get("notes") || "";
  const notes = [userNotes, notesPieces.join(" ")].filter(Boolean).join("\n");

  return {
    productType,
    length,
    colors,
    hardware,
    snapType,
    handleType,
    notes,
    estPrice
  };
}

export default function OrderForm() {
  const [searchParams] = useSearchParams();
  const prefill = useMemo(() => normalizeFromBuilder(searchParams), [searchParams]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productType: prefill.productType || "",
    length: prefill.length || "",
    colors: prefill.colors || "",
    hardware: prefill.hardware || "",
    snapType: prefill.snapType || "",
    handleType: prefill.handleType || "",
    notes: prefill.notes || "",
    estPrice: prefill.estPrice || "",
    file: null
  });

  useEffect(() => {
    setFormData((f) => ({
      ...f,
      productType: prefill.productType || f.productType,
      length: prefill.length || f.length,
      colors: prefill.colors || f.colors,
      hardware: prefill.hardware || f.hardware,
      snapType: prefill.snapType || f.snapType,
      handleType: prefill.handleType || f.handleType,
      notes: prefill.notes || f.notes,
      estPrice: prefill.estPrice || f.estPrice
    }));
  }, [prefill]);

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      productType: formData.productType,
      length: formData.length,
      colors: formData.colors,
      hardware: formData.hardware,
      snapType: formData.snapType,
      handleType: formData.handleType,
      notes: formData.notes,
      estPrice: formData.estPrice
      // File upload would require a multipart/form-data handler (e.g., Formspree upgrade or your own backend)
    };

    fetch("https://formspree.io/f/xdkdnggn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then((response) => {
        if (response.ok) setShowModal(true);
        else alert("There was an issue submitting your form. Please try again.");
      })
      .catch((error) => {
        console.error("Submission error:", error);
        alert("Something went wrong. Please email me directly.");
      });
  };

  // const isLeashType = ["Standard Leash", "Long Line", "Traffic Handle", "Pull Tab"].includes(formData.productType);

  return (
    <>
      {/* SEO tags for Order Form page */}
      <title>Request a Quote | Custom Biothane Gear</title>
      <meta
        name="description"
        content="Send your selections for custom Biothane leashes, long lines, collars and accessories. We review, confirm details, and email a final quote. Payment is handled separately via Venmo or PayPal."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/order" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Request a Quote | Custom Biothane Gear" />
      <meta
        property="og:description"
        content="Share your specs—length, width, hardware, colors—and we’ll follow up with a final quote and timeline."
      />
      <meta property="og:url" content="https://paisleydoggearandtraining.com/order" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Request a Quote | Custom Biothane Gear" />
      <meta
        name="twitter:description"
        content="Share your specs—length, width, hardware, colors—and we’ll follow up with a final quote and timeline."
      />

      {/* Structured data: clarifies there’s no checkout here */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom Biothane Gear — Quote Request",
        "provider": { "@type": "Organization", "name": "Paisley Dog Gear & Training" },
        "areaServed": "Boston, MA",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Quote provided after request." },
        "paymentAccepted": "PayPal, Venmo"
      })}</script>

      {/* Hero */}
      <div className="order-hero">
        <h1>Custom Order Request</h1>
        <p className="order-sub">
          Share the details for your custom gear and I’ll send a quote. If you used the Builder, your selections will
          appear below automatically.
        </p>
        <div className="est-badge">
          Estimated from Builder:{" "}
          <strong>{formData.estPrice ? `$${formData.estPrice}` : "—"}</strong>
        </div>
      </div>

      {/* Context box (SEO-friendly, same style used elsewhere) */}
      <section className="page-intro" aria-label="How quotes work">
        <h2>How quotes work</h2>
        <p>
          We review your measurements and options, confirm any details, and email your
          quote with timing. Payment happens separately via Venmo or PayPal after you
          approve the quote. Shipping or local pickup will be included in our reply.
        </p>
      </section>

      {/* Form card */}
      <div className="order-form card">
        <form onSubmit={handleSubmit} className="order-grid">
          {/* Column A */}
          <div>
            <label>Name</label>
            <input type="text" name="name" required onChange={handleChange} value={formData.name} />

            <label>Email</label>
            <input type="email" name="email" required onChange={handleChange} value={formData.email} />

            <label>Product Type</label>
            <select name="productType" required onChange={handleChange} value={formData.productType}>
              <option value="">-- Select --</option>
              <option>Standard Leash</option>
              <option>Long Line</option>
              <option>The Tallulah</option>
              <option>Safety Strap — Biothane</option>
              <option>Safety Strap — Paracord Weave</option>
              <option>Leash Extender</option>
              <option>Traffic Handle</option>
              <option>Collar — Buckle</option>
              <option>Collar — Quick Release</option>
              <option>Ball Holder</option>
              <option>Pull Tab</option>
              <option>Other</option>
            </select>

            <label>Length (if applicable)</label>
            <input
              type="text"
              name="length"
              placeholder='e.g., "6ft" or "12in"'
              onChange={handleChange}
              value={formData.length}
            />

            <label>Color(s)</label>
            <input
              type="text"
              name="colors"
              placeholder="List 1–3 colors (two-tone available)"
              onChange={handleChange}
              value={formData.colors}
            />
          </div>

          {/* Column B */}
          <div>
            <label>Hardware Finish</label>
            <select name="hardware" onChange={handleChange} value={formData.hardware}>
              <option value="">-- Optional --</option>
              <option value="Silver">Silver</option>
              <option value="Black">Black</option>
              <option value="BlackPlastic">Black Plastic (collars)</option>
            </select>

            <label>Snap Type (if applicable)</label>
            <select name="snapType" onChange={handleChange} value={formData.snapType}>
              <option value="">-- Optional --</option>
              <option value="Locking Carabiner">Locking Carabiner</option>
              <option value="Swivel Snap">Swivel Snap</option>
            </select>

            <label>Handle Style (for leashes)</label>
            <select name="handleType" onChange={handleChange} value={formData.handleType}>
              <option value="">-- Optional --</option>
              <option value="Loop Handle">Loop Handle (standard)</option>
              <option value="No Handle + D-ring">No Handle + D-ring / O-ring</option>
            </select>

            <label>Notes or Custom Requests</label>
            <textarea
              name="notes"
              placeholder="Special placements, HTV text, collar size/width, buckle style, extra rings, etc."
              onChange={handleChange}
              value={formData.notes}
            />

            <button type="submit">Submit Request</button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Thanks — got it!</h2>
            <p>Your request was received. I’ll follow up by email with your quote and timing.</p>
            <p>Payment is by Venmo or PayPal after you approve the quote.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>

  );
}