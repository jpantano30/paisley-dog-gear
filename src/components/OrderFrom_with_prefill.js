// src/pages/OrderForm_with_prefill.js
import React, { useEffect, useMemo, useState } from "react";
import "./OrderForm.css";
import { useSearchParams } from "react-router-dom";

// Map builder product keys to your public-facing labels
const PRODUCT_LABELS = {
  leash: "Standard Leash",
  longLine: "Long Line",
  handsFreeSystem: "The Tallulah (Hands-Free)",
  trafficLead: "Traffic Handle",
  leashExtender: "Leash Extender",
  pullTab: "Pull Tab",
  collarBuckle: "Collar",
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
  if (lengthFt) length = `${lengthFt}ft`;
  else if (lengthIn) length = `${lengthIn}in`;

  // Colors
  const colors = [params.get("colorPrimary"), params.get("colorSecondary")]
    .filter(Boolean)
    .join(", ");

  // Hardware (builder uses 'standard'|'black')
  const hwMap = { standard: "Silver", black: "Black" };
  const hardware = hwMap[params.get("hardware")] || "";

  // Snap mapping
  const snapMap = { swivelSnap: "Swivel Snap", lockingCarabiner: "Locking Carabiner" };
  const snapType = snapMap[params.get("snap")] || "";

  // Handle mapping: builder grip only
  const gripMap = { loop: "Loop Handle", noHandle: "No Handle + D-ring" };
  const handleType = gripMap[params.get("gripHandle")] || "";

  // Notes: assemble special flags so they carry over
  const notesPieces = [];
  if (params.get("handsFreeConversion") === "true") notesPieces.push("Hands-free conversion.");
  if (params.get("trafficHandleBuiltIn") === "true") {
    const mat = params.get("trafficHandleMaterial") || "biothane";
    const placement = params.get("trafficHandlePlacement") || "base";
    notesPieces.push(`Built-in traffic handle (${mat}), placement: ${placement}.`);
  }
  if (params.get("twoTone") === "true") notesPieces.push("Two-tone color.");
  if (params.get("oRing") === "true") notesPieces.push("Add O-ring.");
  if (params.get("dRing") === "true") notesPieces.push("Add D-ring.");
  if (params.get("floatingORing") === "true") notesPieces.push("Add floating O-ring.");
  if (params.get("stopper") === "true") notesPieces.push("Add stopper.");

  // Collar flags
  if (productKey === "collarBuckle") {
    const collarSize = params.get("collarSize");
    const collarWidth = params.get("collarWidth");
    const buckleType = params.get("buckleType");
    const collarTwoTone = params.get("collarTwoTone") === "true";
    const collarHardwareBlack = params.get("collarHardwareBlack") === "true";
    const collarFishtail = params.get("collarParacordFishtail") === "true";
    const htvOption = params.get("htvOption");

    if (collarSize) notesPieces.push(`Collar size: ${collarSize.toUpperCase()}.`);
    if (collarWidth) notesPieces.push(`Collar width: ${collarWidth}.`);
    if (buckleType) notesPieces.push(`Buckle: ${buckleType}.`);
    if (collarTwoTone) notesPieces.push("Two-tone O-ring split.");
    if (collarHardwareBlack) notesPieces.push("Metal hardware in Black.");
    if (collarFishtail) notesPieces.push("Paracord fishtail overlay (+$15).");
    if (htvOption && htvOption !== "none") notesPieces.push(`HTV: ${htvOption}.`);
  } else {
    const htvGear = params.get("htvGearOption");
    if (htvGear && htvGear !== "none") notesPieces.push(`HTV: ${htvGear}.`);
  }

  const estPrice = params.get("estPrice");
  if (estPrice) notesPieces.push(`Builder estimate: $${estPrice}.`);

  const userNotes = params.get("notes") || "";
  const notes = [userNotes, notesPieces.join(" ")].filter(Boolean).join("\n");

  return { productType, length, colors, hardware, snapType, handleType, notes, estPrice };
}

export default function OrderForm_with_prefill() {
  const [searchParams] = useSearchParams();
  const prefill = useMemo(() => normalizeFromBuilder(searchParams), [searchParams]);

  const [formData, setFormData] = useState({
    name: "", email: "",
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
    setFormData(f => ({ ...f, ...prefill }));
  }, [prefill]);

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === "file" ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/xdkdnggn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }).then(r => {
      if (r.ok) setShowModal(true);
      else alert("Submission failed.");
    });
  };

  return (
    <div className="order-form">
      <h1>Custom Order Request</h1>
      <p><strong>Estimated from Builder:</strong> {formData.estPrice ? `$${formData.estPrice}` : "—"}</p>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" required value={formData.name} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" required value={formData.email} onChange={handleChange} />

        <label>Product Type:</label>
        <input type="text" name="productType" readOnly value={formData.productType} />

        <label>Length:</label>
        <input type="text" name="length" value={formData.length} onChange={handleChange} />

        <label>Color(s):</label>
        <input type="text" name="colors" value={formData.colors} onChange={handleChange} />

        <label>Hardware:</label>
        <input type="text" name="hardware" value={formData.hardware} onChange={handleChange} />

        <label>Snap Type:</label>
        <input type="text" name="snapType" value={formData.snapType} onChange={handleChange} />

        <label>Handle Type:</label>
        <input type="text" name="handleType" value={formData.handleType} onChange={handleChange} />

        <label>Notes / Customization:</label>
        <textarea name="notes" value={formData.notes} onChange={handleChange} />

        <button type="submit">Submit Request</button>
      </form>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Thank you!</h2>
            <p>Your request has been received. I’ll follow up via email soon.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}