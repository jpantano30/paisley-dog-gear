import React, { useState } from "react";
import "./TrainingForm.css";

const TrainingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dogName: "",
    dogBreed: "",
    dogAge: "",
    location: "",
    interest: "",
    availability: "",
    notes: ""
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/mjkrolwr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => {
        if (res.ok) setShowModal(true);
        else alert("Something went wrong.");
      })
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <div className="training-form">
      <h1>Dog Training Request</h1>
      <p>Please tell me about your pup and what you're looking for!</p>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" required onChange={handleChange} />

        <label>Email</label>
        <input name="email" type="email" required onChange={handleChange} />

        <label>Dog’s Name</label>
        <input name="dogName" onChange={handleChange} />

        <label>Dog’s Breed</label>
        <input name="dogBreed" onChange={handleChange} />

        <label>Dog’s Age</label>
        <input name="dogAge" onChange={handleChange} />

        <label>Location (City or neighborhood)</label>
        <input name="location" onChange={handleChange} />

        <label>What are you looking for?</label>
        <select name="interest" required onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Trick Training">Trick Training</option>
          <option value="Freestyle / Dance">Freestyle / Dance</option>
          <option value="Obedience / Manners">Obedience / Manners</option>
          <option value="Behavior Help">Behavior Help</option>
          <option value="Service Dog Task Work">Service Dog Task Work</option>
          <option value="Other">Other</option>
        </select>

        <label>Preferred Days/Times</label>
        <input name="availability" onChange={handleChange} />

        <label>Additional Notes</label>
        <textarea name="notes" onChange={handleChange} />

        <button type="submit">Submit Request</button>
      </form>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Thank you!</h2>
            <p>I’ll follow up with you shortly.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingForm;
