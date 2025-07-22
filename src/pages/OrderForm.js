import React, { useState } from "react";
import "./OrderForm.css";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productType: "",
    length: "",
    colors: "",
    hardware: "",
    snapType: "",
    handleType: "",
    notes: "",
    file: null
  });

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
    notes: formData.notes
    // ⚠️ File upload not supported unless using a plugin or upgrade
  };

  fetch("https://formspree.io/f/xdkdnggn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then((response) => {
      if (response.ok) {
        setShowModal(true);
      } else {
        alert("There was an issue submitting your form. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Submission error:", error);
      alert("Something went wrong. Please email me directly.");
    });
};


  return (
    <div className="order-form">
      <h1>Custom Order Request</h1>
      <p>Please fill out the form below. I’ll get back to you shortly with a quote!</p>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" required onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" required onChange={handleChange} />

        <label>Product Type:</label>
        <select name="productType" required onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Standard Leash">Standard Leash</option>
          <option value="Long Line">Long Line</option>
          <option value="The Tallulah">The Tallulah</option>
          {/* <option value="The Paisley">The Paisley</option> */}
          <option value="Safety Strap">Safety Strap</option>
          <option value="Leash Extender">Leash Extender</option>
          <option value="Traffic Handle">Traffic Handle</option>
          <option value="Collar">Collar</option>
          <option value="Ball Holder">Ball Holder</option>
          <option value="Custom Harness">Custom Harness</option>
          <option value="Other">Other</option>
        </select>

        <label>Length (if applicable):</label>
        <select name="length" onChange={handleChange}>
          <option value="">-- Optional --</option>
          <option value="3in">3" (Safety Strap) </option>
          <option value="4in">4" (Safety Strap) </option>
          <option value="5in">5" (Safety Strap) </option>
          <option value="6in">6" (Safety Strap) </option>
          <option value="8in">8" (Safety Strap) </option>
          <option value="10in">10" (Safety Strap) </option>
          <option value="4ft">4ft</option>
          <option value="6ft">6ft</option>
          <option value="8ft">8ft</option>
          <option value="10ft">10ft</option>
          <option value="15ft">15ft</option>
          <option value="20ft">20ft</option>
          <option value="Custom">Custom Length</option>
        </select>

        <label>Color(s) (List custom designs in notes):</label>
        <input
          type="text"
          name="colors"
          placeholder="List 1–3 colors (two-tone is +$6 & 3+ colors is +$10-$20)"
          onChange={handleChange}
        />

        <label>Hardware Color:</label>
        <select name="hardware" onChange={handleChange}>
          <option value="">-- Optional --</option>
          <option value="Silver">Silver</option>
          <option value="Black">Black</option>
          <option value="BlackPlastic">Black Plastic (collars)</option>
        </select>

        <label>Snap Type (if applicable):</label>
        <select name="snapType" onChange={handleChange}>
          <option value="">-- Optional --</option>
          <option value="Locking Carabiner">Locking Carabiner</option>
          <option value="Swivel Snap">Swivel Snap</option>
        </select>

        <label>Handle Type (for leashes)Use Notes for Additional Options:</label>
        <select name="handleType" onChange={handleChange}>
          <option value="">-- Optional --</option>
          <option value="Loop Handle">Loop Handle (Standard) With or Without D-Ring (Use Notes)</option>
          <option value="Convertible with O-ring">Hands-Free System with Snap, Floating O-Ring & Sliding D-Ring or O-Ring </option>
          <option value="No Handle + D-ring">No Handle + D-Ring or O-Ring (Use Case: Attach a separate Traffic handle)</option>
        </select>

        {/* <label>Upload Inspiration (optional):</label>
        <input type="file" name="file" accept="image/*" onChange={handleChange} /> */}

        <label>Notes or Custom Requests:</label>
        <textarea
          name="notes"
          placeholder="Tell me anything else I should know (special placements of built in Traffic Handles, O-Rings, D-Rings, HTV customizations, etc.)"
          onChange={handleChange}
        />

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
};

export default OrderForm;
