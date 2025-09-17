import React, { useState } from "react";
import "./TrainingForm.css";
import { Link } from "react-router-dom";
import "../components/page-intro.css";

const TrainingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dogName: "",
    dogAge: "",
    dogBreed: "",
    goals: "",
    experience: "",
    referral: "",
    serviceType: "",          // NEW
    dayTrainingPackage: ""    // NEW
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((res) => {
        if (res.ok) setShowModal(true);
        else alert("Something went wrong.");
      })
      .catch(() => alert("Something went wrong. Please try again."));
  };

  const wantsDayTraining =
    formData.serviceType === "Day Training" ||
    formData.serviceType === "Day Training Package";

  return (
    <>
      <title>Request Dog Training | How Our Training Works</title>
      <meta
        name="description"
        content="Tell me about your dog and goals, then I’ll follow up with a plan, pricing, and scheduling options. Read how training works and what to expect."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/training" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Request Dog Training | How Our Training Works" />
      <meta
        property="og:description"
        content="Share your goals, get a tailored plan and pricing. Read the step-by-step training process."
      />
      <meta property="og:url" content="https://paisleydoggearandtraining.com/training" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Request Dog Training | How Our Training Works" />
      <meta
        name="twitter:description"
        content="Share your goals, get a tailored plan and pricing. Read the step-by-step training process."
      />

      {/* FAQ JSON-LD (includes Day Training) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do I need a consult first?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "A free 15-minute consult is optional—great for quick questions or checking fit. You can also submit the training form directly."
                }
              },
              {
                "@type": "Question",
                "name": "How does the training process work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "You share your goals, I review and propose a plan, then we schedule sessions. You’ll get clear homework and progress check-ins."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer Day Training?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Yes. Day Training is a drop-off or pick-up option where your dog spends a structured half or full day with me. We rotate focused training sessions, rest breaks, and real-life field trips to work on your goals. Pick-up/drop-off depends on location and follows the travel policy when applicable."
                }
              }
            ]
          })
        }}
      />

      <div className="training-form-container">
        <h1>Dog Training Request</h1>
        <p style={{ textAlign: "center", marginTop: "-0.25rem" }}>
          Share the details about your dog and goals—I'll send a plan, pricing, and scheduling options.
        </p>

        <section aria-label="How quotes and scheduling work" className="page-intro">
          <h2>How training works</h2>
          <p>
            Share your goals below and I’ll review your information. We’ll connect by email, phone, or a brief video call to confirm fit and discuss whether a
            package or individual sessions is the best approach.
          </p>
          <p>
            If we decide to move forward, I’ll send a short intake form for additional details. After I receive it, you’ll get a tailored plan with pricing and
            scheduling options. Once you approve, we’ll book your first session. Payment is handled separately through Venmo or PayPal.
            Prefer to talk first? <Link to="/booking">Book a free 15-minute consult</Link>.
          </p>
        </section>

        <section className="training-intro">
          <h2>Dog Training</h2>
          <p className="notes one">
            I specialize in <strong>freestyle and trick training</strong>—from spins, weaves, and jumps
            to advanced routines. It’s about movement, creativity, and building a stronger bond through
            fun and focus.
          </p>
          <p className="notes one">
            I also help with <strong>manners, obedience, and behavior</strong> using a balanced,
            communication-focused approach. Training is tailored to each dog and handler—let’s build a
            plan that fits your goals.
          </p>

          <p className="notes">
            <strong>New: Day Training</strong> — Drop off your dog (or I can do pick-up depending on location) for a structured
            “day care while training.” We’ll rotate focused sessions and rest, plus field trips to practical places
            (parks, neighborhood walks, dog-friendly stores) to work goals like loose-leash walking, recall,
            public manners, confidence, and freestyle foundations.
          </p>

          <p className="notes">
            <strong>Where we can train:</strong><br />
            • <strong>In-Home:</strong> Training in your dog’s everyday environment.<br />
            • <strong>Local Park Meet-Up:</strong> Trick training, recall, leash work, or general skills.<br />
            • <strong>Field Trips:</strong> Dog-friendly stores (Home Depot/Lowe’s) for focus, manners, and public skills; scenic spots for freestyle.<br />
            • <strong>Boston Option:</strong> Meet at my Boston training area or public locations.<br />
            • <strong>Virtual Check-Ins:</strong> 30-minute Zoom/Google Meet for trick tune-ups, routine planning, or behavior Q&amp;A. <em>See rates below.</em>
          </p>

          <p className="notes two">
            Every dog and owner is different—training is personalized so we set you both up for success,
            wherever you’re most comfortable.
          </p>
        </section>

        <section className="training-videos">
          <h2>Training Videos</h2>
          <p>See my methods in action.</p>
          <Link to="/videos" className="nav-link">🎥 Training Videos</Link>
        </section>

        {/* Pricing */}
        <section className="training-pricing">
          <h2>Training Rates</h2>

          <div className="pricing-grid training-pricing-grid">
            {/* Day Training */}
            <div className="price-card">
              <h3>Day Training (Drop-off / Pick-up)</h3>
              <ul>
                <li>Half-day (≈2–3 hrs incl. rest): <strong>$75</strong></li>
                <li>Full day (≈4–5 hrs incl. field trip): <strong>$100</strong></li>
                <li>Real-world practice at parks, neighborhoods, or dog-friendly stores.</li>
                <li>Includes short photo/video updates and a same-day summary.</li>
                <li>Optional 20–30 min handoff lesson with you: <strong>+$20</strong>.</li>
                <li>Pick-up / drop-off depends on location; outside Boston follows the travel policy.</li>
                <li>Subject to availability and scheduling.</li>
              </ul>
            </div>

            {/* NEW: Day Training Packages */}
            <div className="price-card">
              <h3>Day Training Packages — Full Day</h3>
              <ul>
                <li>
                  3-Day Pack: <strong>$270</strong> <span className="savings-badge">Save $30</span>
                  <em> ($90/day)</em>
                </li>
                <li>
                  5-Day Pack: <strong>$425</strong> <span className="savings-badge">Save $75</span>
                  <em> ($85/day)</em>
                </li>
                <li>
                  10-Day Pack: <strong>$800</strong> <span className="savings-badge">Save $200</span>
                  <em> ($80/day)</em>
                </li>
                <li>Use within 6 months. Can split as half-days (two half-days = one full day).</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Private Training — Meet-Up</h3>
              <ul>
                <li>One 60-min session: <strong>$50</strong></li>
                <li>No travel fee at Boston spots or other agreed meet-up locations</li>
                <li>Great for freestyle, tricks, recall, or behavior work</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Private Training — In-Home, Local Park, or Field Trip</h3>
              <ul>
                <li>One 60-min session: <strong>$50</strong> <em>+ travel (see policy)</em></li>
                <li>Your home, a local park, or a field trip to Home Depot/Lowe’s</li>
                <li>Perfect for puppies, behavior work, and real-world practice</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Training Packages</h3>
              <ul>
                <li>3 sessions (1 hr each): <strong>$135 total</strong> ($45/session)</li>
                <li>5 sessions (1 hr each): <strong>$200 total</strong> ($40/session)</li>
                <li>Includes progress tracking and goal planning</li>
                <li><strong>Note:</strong> Package discounts apply to training time only; travel is billed per visit if applicable.</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Virtual Coaching</h3>
              <ul>
                <li>30-min Zoom/Google Meet: <strong>$30–$45</strong></li>
                <li>Ideal for trick tune-ups, routines, or behavior Q&amp;A</li>
                <li>Send videos or questions ahead of time if you’d like</li>
              </ul>
            </div>

            <div className="price-card policy">
              <h3>Travel Policy (for In-Home, Park, or Field Trip Sessions)</h3>
              <ul>
                <li>First <strong>40 minutes round-trip</strong> of travel included.</li>
                <li>After that: <strong>$0.75 per minute (round-trip)</strong>, billed in 10-minute increments.</li>
                <li>Calculated per visit from Boston (North End). Boston meet-ups have <strong>no travel fee</strong>.</li>
                <li>Example: ~50 min each way (≈100 min round-trip) → 60 billable minutes × $0.75 = <strong>$45 travel</strong>.</li>
              </ul>
            </div>
          </div>
        </section>

        <br />
        <h2 className="form-heading">Tell me about your pup and what you’re looking for</h2>

        <form onSubmit={handleSubmit} className="training-form">
          <label>I’m interested in:</label>
          <select name="serviceType" value={formData.serviceType} onChange={handleChange} required>
            <option value="">Select…</option>
            <option value="Day Training">Day Training (drop-off / pick-up)</option>
            <option value="Day Training Package">Day Training — Package</option>
            <option value="Private Training">Private Training (meet-up / in-home / park / field trip)</option>
            <option value="Virtual Coaching">Virtual Coaching (Zoom/Meet)</option>
            <option value="Not Sure">Not sure yet</option>
          </select>

          {wantsDayTraining && (
            <>
              <label>Day Training Package (optional):</label>
              <select
                name="dayTrainingPackage"
                value={formData.dayTrainingPackage}
                onChange={handleChange}
              >
                <option value="">No package selected</option>
                <option value="3-Day Pack ($270)">3-Day Pack ($270)</option>
                <option value="5-Day Pack ($425)">5-Day Pack ($425)</option>
                <option value="10-Day Pack ($800)">10-Day Pack ($800)</option>
              </select>
            </>
          )}

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
          <textarea name="goals" required onChange={handleChange} value={formData.goals} />

          <label>Any prior training experience or notes?</label>
          <textarea name="experience" onChange={handleChange} value={formData.experience} />

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
    </>
  );
};

export default TrainingForm;
