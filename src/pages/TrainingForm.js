import React, { useState } from "react";
import "./TrainingForm.css";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "../components/Banner.css";

const TrainingForm = () => {
  const [formData, setFormData] = useState({
    serviceType: "",
    dayTrainingPackage: "",
    name: "",
    email: "",
    dogName: "",
    dogAge: "",
    dogBreed: "",
    goals: "",
    experience: "",
    referral: "",
    // honeypot (hidden)
    company: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const wantsDayTraining =
    formData.serviceType === "Day Training" ||
    formData.serviceType === "Day Training Package";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // simple spam trap
    if (formData.company) return;

    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/mjkrolwr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const maybe = await res.json().catch(() => null);
        throw new Error(maybe?.error || "Submit failed");
      }

      setShowModal(true);
      setFormData({
        serviceType: "",
        dayTrainingPackage: "",
        name: "",
        email: "",
        dogName: "",
        dogAge: "",
        dogBreed: "",
        goals: "",
        experience: "",
        referral: "",
        company: ""
      });
    } catch (_err) {
      setErrorMsg("Something went wrong. Please try again or email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Banner />
      {/*  SEO style (no Helmet) */}
      <title>Dog Trainer in Boston (North End) | Puppy Foundations, Obedience, Trick Training</title>
      <meta
        name="description"
        content="Private sessions in Boston: puppy foundations, obedience & manners, trick training, and leash skills."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/training" />

      {/* Social previews */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Dog Trainer in Boston (North End) | Puppy Foundations, Obedience, Trick Training" />
      <meta property="og:description" content="Private sessions in Boston: puppy foundations, obedience & manners, trick training, and leash skills." />
      <meta property="og:url" content="https://paisleydoggearandtraining.com/training" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dog Trainer in Boston (North End) | Puppy Foundations, Obedience, Trick Training" />
      <meta name="twitter:description" content="Private sessions in Boston: puppy foundations, obedience & manners, trick training, and leash skills." />

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do I need a consult first?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "A free 15-minute consult is optional—great for quick questions or checking fit. You can also submit the training form directly."
                }
              },
              {
                "@type": "Question",
                name: "How does the training process work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "You share your goals, I review and propose a plan, then we schedule sessions. You’ll get clear homework and progress check-ins."
                }
              },
              {
                "@type": "Question",
                name: "Do you offer Day Training?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Day Training is a drop-off or pick-up option where your dog spends a structured half or full day with me. We rotate focused training sessions, rest breaks, and real-life field trips to work on your goals. Pick-up/drop-off depends on location and follows the travel policy when applicable."
                }
              }
            ]
          })
        }}
      />

      <div className="training-form-container">
        
        <h1>Dog Training Request</h1>
        <p className="links-container1">
          <Link to="/boston-dog-trainer-north-end">Boston Training</Link>
        </p>
        <p className="intro-sub">
          Share the details about your dog and goals. I’ll send a plan, pricing, and scheduling options.
        </p>

        {/* How it works — bullets */}
        <section aria-label="How quotes and scheduling work" className="page-intro">
          <h2>How training works</h2>
          <ul className="bulleted">
            <li> Fill out the form with your goals.</li>
            <li> I review and send a short intake if we’re a good fit.</li>
            <li> You get a tailored plan with pricing and scheduling options.</li>
            <li> Approve → book → train. Payment via Venmo or PayPal.</li>
          </ul>
          <p className="inline-cta">
            Prefer to talk first? <Link to="/booking">Book a free 15-minute consult</Link>.
          </p>
        </section>

        {/* Services overview — scannable */}
        <section className="training-intro">
          <h2>Dog Training</h2>

          <p className="notes one">
            <span className="note-icon" role="img" aria-label="sparkles">✨</span> I specialize in <strong>freestyle and trick training</strong> — spins, weaves, jumps, and full routines. Movement, creativity, and focus that carry into everyday life.
          </p>

          <p className="notes one">
            <span role="img" aria-label="paw prints">🐾</span> I also help with <strong>manners, obedience, and behavior</strong> using a balanced, communication-focused approach. I tailor the plan to your dog and your goals.
          </p>

          <p className="notes">
            <strong><span role="img" aria-label="school">🏫</span> New — Day Training</strong> — Drop off your dog (or I can pick them up, location permitting). Each session balances focused work and rest, with real-world field trips (parks, neighborhoods, dog-friendly stores) to build leash manners, recall, public behavior, confidence, and freestyle foundations. You’ll get a same-day summary. You can also add a handoff lesson so I walk you through everything and give you tools to carry on training at home.
          </p>

          <div className="notes where-notes">
            <strong>Where we can train:</strong>
            <ul className="where-list">
              <li><strong>In-Home</strong> — your dog’s everyday environment</li>
              <li><strong>Local Park Meet-Up</strong> — recall, leash work, tricks, general skills</li>
              <li><strong>Field Trips</strong> — Home Depot/Lowe’s for public manners and focus</li>
              <li><strong><Link to="/boston-dog-trainer-north-end">Boston (North End)</Link></strong> — meet at our training area or nearby public spots</li>
              <li><strong>Virtual Check-Ins</strong> — 30-min Zoom/Meet for tune-ups, planning, or behavior Q&amp;A</li>
            </ul>
          </div>

          <p className="notes two">
            Every dog and person is different. We personalize the plan so you both succeed.
          </p>
        </section>

        {/* Trainer Credentials — visible trust section */}
        <section className="trainer-credentials" aria-label="Trainer credentials and affiliations">
          <h2 className="cred">Experience, Education, and Approach</h2>

          <p className="cred-disclaimer">
            I have been working hands on with dogs for years, from walking and pet sitting,
            to training my own service dog and trick and freestyle demo dog, to helping
            clients with puppies, obedience, behavior, and sport foundations. I am an
            active member of professional training organizations, including IACP and APDT,
            and I am currently working toward the CPDT-KA certification. I stay current on
            modern, science informed training through courses, workshops, and mentorship,
            and I tailor each plan to the dog in front of me and the goals you care about most.
            If you have questions about methods or whether your dog is a good fit, feel free
            to email me at paisleygearandtraining@gmail.com.
          </p>
        </section>

        {/* Videos */}
        <section className="training-videos">
          <h2>Training Videos</h2>
          <p>See my methods in action.</p>
          <Link to="/videos" className="nav-link" aria-label="See training videos">
            🎥 Training Videos
          </Link>
        </section>

        {/* Rates — grouped + Most popular + collapsible Travel Policy */}
        <section className="training-pricing" aria-label="Training rates">
          <h2>Training Rates</h2>
          <p>Pre-payment is required. Please give 24-hour cancellation notice.</p>

          <div className="pricing-grid training-pricing-grid">
            <div className="price-card">
              <h3>Day Training (Drop-off / Pick-up)</h3>
              <ul>
                <li>Half-day (about 2–3 hrs incl. rest): <strong>$75</strong></li>
                <li>Full day (about 4–5 hrs incl. field trip): <strong>$100</strong></li>
                <li>Real-world practice at parks, neighborhoods, or dog-friendly stores</li>
                <li>Short photo/video updates and a same-day summary</li>
                <li>Optional 20–30 min handoff lesson: <strong>+$20</strong></li>
                <li>Pick-up/drop-off depends on location (see travel policy)</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Day Training Packages — Full Day</h3>
              <ul>
                <li>3-Day Pack: <strong>$270</strong> <em>($90/day)</em></li>
                <li>
                  5-Day Pack: <strong>$425</strong> <em>($85/day)</em>
                  <span className="popular-badge" aria-label="Most popular">Most popular</span>
                </li>
                <li>10-Day Pack: <strong>$800</strong> <em>($80/day)</em></li>
                {/* <li>Use within 6 months. Two half-days = one full day.</li> */}
              </ul>
            </div>

            <div className="price-card">
              <h3>Private Training — Meet-Up</h3>
              <ul>
                <li>One 60-min session: <strong>$50</strong></li>
                <li>No travel fee at Boston spots or agreed meet-ups</li>
                <li>Great for freestyle, tricks, recall, or behavior work</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Private Training — In-Home, Park, or Field Trip</h3>
              <ul>
                <li>One 60-min session: <strong>$50</strong> <em>+ travel</em></li>
                <li>Your home, a local park, or a Home Depot/Lowe’s field trip</li>
                <li>Perfect for puppies, behavior work, and real-world practice</li>
              </ul>
            </div>

            <details open className="price-card policy" id="travel-policy">
              <summary>
                <span className="summary-title">Travel Policy</span>
                <span className="summary-hint">First 40 min round-trip free</span>
              </summary>
              <ul>
                <li>First <strong>40 minutes round-trip</strong> included</li>
                <li>After that: <strong>$0.75 per minute (round-trip)</strong>, billed in 10-min increments</li>
                <li>Calculated from Boston (North End). Boston meet-ups have <strong>no travel fee</strong>.</li>
                <li>Example: ~50 min each way ≈ 100 min round-trip → 60 billable × $0.75 = <strong>$45 travel</strong></li>
              </ul>
            </details>


            <div className="price-card">
              <h3>Training Packages</h3>
              <ul>
                <li>3 sessions (1 hr each): <strong>$135 total</strong> ($45/session)</li>
                <li>5 sessions (1 hr each): <strong>$200 total</strong> ($40/session)</li>
                <li>Includes progress tracking and goal planning</li>
                <li><strong>Note:</strong> Package discounts apply to training time only; travel billed per visit if applicable.</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Virtual Coaching</h3>
              <ul>
                <li>30-min Zoom/Google Meet: <strong>$30–$45</strong></li>
                <li>Great for trick tune-ups, routines, or behavior Q&amp;A</li>
                <li>You can send videos/questions in advance</li>
              </ul>
            </div>
          </div>
        </section>

        <h2 className="form-heading">Tell me about your pup and what you’re looking for</h2>

        <form onSubmit={handleSubmit} className="training-form" noValidate>
          {/* hidden honeypot */}
          <div className="visually-hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" value={formData.company} onChange={handleChange} tabIndex={-1} autoComplete="off" />
          </div>

          {/* Service */}
          <h3 className="form-section">Service</h3>
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

          {/* Owner */}
          <h3 className="form-section">Owner Info</h3>
          <label>Your Name:</label>
          <input type="text" name="name" placeholder="First and last name" required onChange={handleChange} value={formData.name} />

          <label>Email Address:</label>
          <input type="email" name="email" placeholder="you@email.com" required onChange={handleChange} value={formData.email} />

          {/* Dog */}
          <h3 className="form-section">Dog Info</h3>
          <label>Dog's Name:</label>
          <input type="text" name="dogName" placeholder="e.g., Tully" onChange={handleChange} value={formData.dogName} />

          <label>Dog's Age:</label>
          <input type="text" name="dogAge" placeholder="e.g., 11 months" onChange={handleChange} value={formData.dogAge} />

          <label>Dog's Breed:</label>
          <input type="text" name="dogBreed" placeholder="e.g., Bordoodle" onChange={handleChange} value={formData.dogBreed} />

          {/* Goals */}
          <h3 className="form-section">Goals</h3>
          <label>What are your training goals?</label>
          <textarea
            name="goals"
            required
            placeholder="e.g., loose-leash walking, recall, tricks/freestyle, puppy basics, confidence in public"
            onChange={handleChange}
            value={formData.goals}
          />

          <label>Any prior training experience or notes?</label>
          <textarea
            name="experience"
            placeholder="e.g., puppy class, e-collar experience, triggers, medical notes"
            onChange={handleChange}
            value={formData.experience}
          />

          <label>How did you hear about me?</label>
          <input
            type="text"
            name="referral"
            placeholder="Instagram, friend, Nextdoor, Google…"
            onChange={handleChange}
            value={formData.referral}
          />

          {errorMsg && <div className="form-error" role="alert">{errorMsg}</div>}

          <button type="submit" disabled={submitting} aria-busy={submitting}>
            {submitting ? "Sending…" : "Request a Session"}
          </button>
        </form>

        {showModal && (
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="thankyou-title">
            <div className="modal-content" role="document">
              <h2 id="thankyou-title">Thank you!</h2>
              <p>I’ll follow up with you shortly.</p>
              <button onClick={() => setShowModal(false)} autoFocus>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TrainingForm;
