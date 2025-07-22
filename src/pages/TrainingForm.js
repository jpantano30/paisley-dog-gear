import React, { useState } from "react";
import "./TrainingForm.css";

const TrainingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dogName: "",
    goals: "",
    experience: ""
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
    <div className="training-form-container">
      <h1>Dog Training Request</h1>

      <section className="training-intro">
        <h2>Dog Training</h2>
        <p className="notes">
          I specialize in <strong>freestyle and trick training</strong> — teaching everything from spins, weaves, and jumps to advanced routines.
          It's all about movement, creativity, and building a stronger bond with your dog through fun and focus.
          {/* <br /><br />
          I also offer help with <strong>manners, obedience, and behavior</strong> using a balanced, communication-focused approach.
          Tools like prong collars or e-collars may be used if needed and are introduced thoughtfully and with consent.
          Training is tailored to each dog and handler — let’s build a plan that fits your goals. */}
        </p>
      </section>
  
      <br />
      <h2 className="form-heading">Please tell me about your pup and what you're looking for!</h2>

      <form onSubmit={handleSubmit} className="training-form">
        <label>Your Name:</label>
        <input type="text" name="name" required onChange={handleChange} value={formData.name} />

        <label>Email Address:</label>
        <input type="email" name="email" required onChange={handleChange} value={formData.email} />

        <label>Dog's Name:</label>
        <input type="text" name="dogName" onChange={handleChange} value={formData.dogName} />

        <label>Dog's Age:</label>
        <input type="text" name="dogAge" onChange={handleChange} value={formData.dogAge} />

        <label>Dog's Breed:</label>
        <input type="text" name="dogBreed" onChange={handleChange} value={formData.dogBreed} />

        <label>What are your training goals?</label>
        <textarea name="goals" required onChange={handleChange} value={formData.goals}></textarea>

        <label>Any prior training experience or notes?</label>
        <textarea name="experience" onChange={handleChange} value={formData.experience}></textarea>

        <label>How did you hear about me?</label>
        <input type="text" name="referral" onChange={handleChange} value={formData.referral} />

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
