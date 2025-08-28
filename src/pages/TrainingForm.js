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

  // {/* <br /><br />
  //         I also offer help with <strong>manners, obedience, and behavior</strong> using a balanced, communication-focused approach.
  //         Tools like prong collars or e-collars may be used if needed and are introduced thoughtfully and with consent.
  //         Training is tailored to each dog and handler — let’s build a plan that fits your goals. */}

  return (
    <div className="training-form-container">
      <h1>Dog Training Request</h1>

      <section className="training-intro">
        <h2>Dog Training</h2>
        <p className="notes one">
          I specialize in <strong>freestyle and trick training</strong> — teaching everything from spins, weaves, and jumps to advanced routines.
          It's all about movement, creativity, and building a stronger bond with your dog through fun and focus.
        </p>
        <p className="notes one">
          I also offer help with <strong>manners, obedience, and behavior</strong> using a balanced, communication-focused approach. Training is tailored to each dog and handler. Let’s build a plan that fits your goals.
        </p>

        <p className="notes">
          <strong>How training works:</strong><br />
          Sessions are flexible and tailored to your dog’s needs and your goals:  
          <br />
          • <strong>In-Home:</strong> I come to you for training in your dog’s everyday environment.<br />
          • <strong>Local Park Meet-Up:</strong> We meet at a park near you for trick training, recall, leash work, or general skills.<br />
          • <strong>Field Trip Sessions:</strong> We train at dog-friendly stores like Home Depot or Lowe’s to practice focus, manners, and public skills. Additionally, this can include freestyle training in scenic locations.<br />
          • <strong>Boston Option:</strong> Join me at my training spot in Boston, or at public locations.<br />
          • <strong>Online Check-Ins (Virtual):</strong> 30 min Zoom or Google Meet for trick tune-ups, routine planning, or behavior Q&amp;A. You can send videos or questions ahead of time. <em>See rates below.</em><br />   
        </p>
        {/* such as the Seaport, Esplanade, or Greenway. */}

        <p className="notes two">
          Every dog and owner is different — training is personalized so we can set you and your dog up for success wherever you are most comfortable.
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
          {/* Meet-Up (Boston or agreed location) */}
          <div className="price-card">
            <h3>Private Training — Meet-Up</h3>
            <ul>
              <li>One 60 min session: <strong>$50</strong></li>
              <li>No travel fee at Boston spots or other agreed meet-up locations</li>
              <li>Perfect for freestyle, tricks, recall, or behavior work</li>
            </ul>
          </div>

          {/* In-Home / Local Park / Field Trip */}
          <div className="price-card">
            <h3>Private Training — In-Home, Local Park, or Field Trip</h3>
            <ul>
              <li>One 60 min session: <strong>$50</strong> <em>+ travel (see policy)</em></li>
              <li>Options include: your home, a local park near you, or a field trip to Home Depot/Lowe’s</li>
              <li>Great for puppies, behavior work, and real-world training</li>
            </ul>
          </div>

          {/* Packages */}
          <div className="price-card">
            <h3>Training Packages</h3>
            <ul>
              <li>3 Sessions (1 hr each): <strong>$135 total</strong> ($45/session)</li>
              <li>5 Sessions (1 hr each): <strong>$200 total</strong> ($40/session)</li>
              <li>Includes progress tracking and goal planning</li>
              <li><strong>Note:</strong> Package discounts apply to training time only; travel (if any) is charged per visit.</li>
            </ul>
          </div>

          {/* Virtual */}
          <div className="price-card">
            <h3>Virtual Coaching</h3>
            <ul>
              <li>30 min Zoom or Google Meet: <strong>$30–$45</strong></li>
              <li>Ideal for trick tune-ups, routines, or behavior Q&amp;A</li>
              <li>Submit videos or questions ahead of time if you'd like</li>
            </ul>
          </div>

          {/* Intro */}
          <div className="price-card">
            <h3>Intro Consult</h3>
            <ul>
              <li>Free 15–20 minute call</li>
              <li>Tell me about your dog and your goals</li>
              <li>Schedule via the <Link to="/booking">Booking Page</Link></li>
            </ul>
          </div>

          {/* Travel Policy */}
          <div className="price-card policy">
            <h3>Travel Policy (for In-Home, Park, or Field Trip Sessions)</h3>
            <ul>
              <li>First <strong>40 minutes round-trip</strong> of travel are included.</li>
              <li>After that: <strong>$0.75 per minute (round-trip)</strong>, billed in 10-minute increments.</li>
              <li>Travel is calculated per visit from our Boston location (North End); meet-ups in Boston have <strong>no travel fee</strong>.</li>
              <li>Example: ~50 min each way (≈100 min round-trip) → 60 billable minutes × $0.75 = <strong>$45 travel</strong>.</li>
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
