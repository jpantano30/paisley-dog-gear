import React, { useState } from "react";
import "./TrainingForm.css";
import { Link } from "react-router-dom";

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

      <section className="training-videos">
        <h2>Training Videos</h2>
        <p>Check out some of my training videos to see my methods in action!</p>
        <Link to="/videos" className="nav-link">🎥 Training Videos</Link>

      </section>

      <section className="training-pricing">
        <h2>Training Rates</h2>

        <div className="pricing-grid training-pricing-grid">
            <div className="price-card">
              <h3>Private Training</h3>
              <ul>
                <li>One 60 min session: $50</li>
                <li>Great for freestyle, tricks, recall, or behavior work</li>
                <li>Held locally or in select public locations</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Training Packages</h3>
              <ul>
                <li>3 Sessions (1 hr each): $135 total ($45/session)</li>
                <li>5 Sessions (1 hr each): $200 total ($40/session)</li>
                <li>Includes progress tracking and goal planning</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Virtual Coaching</h3>
              <ul>
                <li>30 min Zoom or Google Meet: $30 to $45</li>
                <li>Ideal for trick tune-ups, routines, or behavior Q&A</li>
                <li>Submit videos or questions ahead of time if you'd like</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Intro Consult</h3>
              <ul>
                <li>Free 15 to 20 minute call</li>
                <li>Tell me about your dog and your goals</li>
                <li>Schedule via the <Link to="/booking">Booking Page</Link></li>
              </ul>
            </div>
          </div>
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
