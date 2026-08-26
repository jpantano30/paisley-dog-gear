import React, { useState } from "react";
import "./TrainingForm.css";
import { Link } from "react-router-dom";
// import Banner from "../components/Banner";
// import "../components/Banner.css";
import formHeader from "../background.png";

const SchoolIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3 10.5L12 4l9 6.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 9.5V20h14V9.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 20v-5h6v5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// eslint-disable-next-line no-unused-vars
const PackageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3 19 7v10l-7 4-7-4V7l7-4Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M12 3v8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M5 7l7 4 7-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const PawIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="8" r="1.8" fill="currentColor" />
    <circle cx="11.5" cy="6.5" r="1.8" fill="currentColor" />
    <circle cx="15.5" cy="8" r="1.8" fill="currentColor" />
    <circle cx="17.2" cy="12" r="1.6" fill="currentColor" />
    <path
      d="M8.5 16.5c0-2.3 1.8-4 3.8-4s3.8 1.7 3.8 4c0 1.5-1.4 2.5-3.8 2.5s-3.8-1-3.8-2.5Z"
      fill="currentColor"
    />
  </svg>
);

const VideoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect
      x="3"
      y="6"
      width="13"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M16 10l5-3v10l-5-3v-4Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z"
      fill="currentColor"
    />
    <path
      d="M18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z"
      fill="currentColor"
    />
  </svg>
);

const AwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle
      cx="12"
      cy="9"
      r="5"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="m9 13-2 8 5-3 5 3-2-8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m12 6 .9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 8.1l2-.3L12 6Z"
      fill="currentColor"
    />
  </svg>
);

const TrainingForm = () => {
  const [formData, setFormData] = useState({
    serviceType: "",
    akcRequestType: "",
    akcTitleLevel: "",
    akcVideoLink: "",
    dayTrainingWaitlistType: "",
    preferredDays: "",
    preferredStart: "",
    scheduleFlexibility: "",
    name: "",
    email: "",
    dogName: "",
    dogAge: "",
    dogBreed: "",
    goals: "",
    experience: "",
    referral: "",
    hpField: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [lastSubmittedService, setLastSubmittedService] = useState("")

  const wantsDayTrainingWaitlist =
    formData.serviceType === "Day Training Waitlist";

  const wantsAkcTesting = formData.serviceType === "AKC Testing & Titles";

  const serviceOptions = [
    {
      value: "Day Training Waitlist",
      icon: <SchoolIcon />,
      title: "Day Training Waitlist",
      desc: "Day training is currently full. Join the waitlist for future openings."
    },
    // {
    //   value: "Day Training Package",
    //   icon: <PackageIcon />,
    //   title: "Day Training Package",
    //   desc: "Discounted multi-day full-day packs."
    // },
    {
      value: "Private Training",
      icon: <PawIcon />,
      title: "Private Training",
      desc: "Meet-up, in-home, park, or field trip."
    },
    {
      value: "Trick & Freestyle Training",
      icon: <SparkleIcon />,
      title: "Trick & Freestyle Training",
      desc: "Reward-based tricks, body awareness, freestyle foundations, routines, and title prep."
    },
    {
      value: "AKC Testing & Titles",
      icon: <AwardIcon />,
      title: "AKC Testing & Titles",
      desc: "CGC testing and in-person or video Trick Dog title evaluations."
    },
    {
      value: "Virtual Coaching",
      icon: <VideoIcon />,
      title: "Virtual Coaching",
      desc: "Zoom/Meet. Great for plans, Q&A, trick tune-ups."
    },
    {
      value: "Not Sure",
      icon: <SparkleIcon />,
      title: "Not sure yet",
      desc: "Tell me what’s going on and I’ll guide you."
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (data) => {
    const next = {};

    if (!data.serviceType) next.serviceType = "Please choose a service.";
    if (data.serviceType === "AKC Testing & Titles" && !data.akcRequestType) {
      next.akcRequestType = "Please choose the AKC test or evaluation you want.";
    }
    if (!data.name.trim()) next.name = "Please enter your name.";
    if (!data.email.trim()) next.email = "Please enter your email.";
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) {
      next.email = "Please enter a valid email.";
    }
    if (!data.goals.trim()) next.goals = "Tell me what you want help with.";

    return next;
  };

  const markTouched = (field) => setTouched((p) => ({ ...p, [field]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    setTouched({
      serviceType: true,
      akcRequestType: true,
      name: true,
      email: true,
      goals: true
    });

    if (Object.keys(nextErrors).length > 0) {
      setErrorMsg("Please fix the highlighted fields.");
      return;
    }

    setErrorMsg("");

    if (formData.hpField && formData.hpField.trim() !== "") {
      setErrorMsg(
        "Please refresh and try again (spam filter triggered). If this keeps happening, email me directly."
      );
      return;
    }

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
      setLastSubmittedService(formData.serviceType);
      setShowSuccess(true);
      setFormData({
        serviceType: "",
        akcRequestType: "",
        akcTitleLevel: "",
        akcVideoLink: "",
        dayTrainingWaitlistType: "",
        preferredDays: "",
        preferredStart: "",
        scheduleFlexibility: "",
        name: "",
        email: "",
        dogName: "",
        dogAge: "",
        dogBreed: "",
        goals: "",
        experience: "",
        referral: "",
        hpField: ""
      });
    } catch (_err) {
      console.error("Form submit error:", _err);
      setErrorMsg("Something went wrong. Please try again or email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* <Banner /> */}

      <title>Boston Dog Trainer | AKC CGC &amp; Trick Dog Evaluator</title>
      <meta
        name="description"
        content="Private dog training in Boston plus AKC CGC testing and virtual or in-person Trick Dog title evaluations. View rates and request an evaluation."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/training" />

      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Boston Dog Trainer | AKC CGC & Trick Dog Evaluator"
      />
      <meta
        property="og:description"
        content="Private dog training in Boston plus AKC CGC testing and virtual or in-person Trick Dog title evaluations."
      />
      <meta property="og:url" content="https://paisleydoggearandtraining.com/training" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Boston Dog Trainer | AKC CGC & Trick Dog Evaluator"
      />
      <meta
        name="twitter:description"
        content="Private dog training in Boston plus AKC CGC testing and virtual or in-person Trick Dog title evaluations."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://paisleydoggearandtraining.com/training#service",
            name: "Dog Training and AKC Evaluations",
            serviceType: "Private dog training and AKC title evaluations",
            url: "https://paisleydoggearandtraining.com/training",
            provider: {
              "@id": "https://paisleydoggearandtraining.com/#business"
            },
            areaServed: [
              "Boston, MA",
              "Cambridge, MA",
              "Somerville, MA",
              "Medford, MA",
              "Brookline, MA",
              "Everett, MA",
              "Winchester, MA",
              "Woburn, MA",
              "Newton, MA"
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Dog Training Services",
              itemListElement: [
                "Puppy foundations",
                "Obedience and manners",
                "Leash skills",
                "Trick training",
                "Canine freestyle",
                "Virtual coaching",
                "AKC Canine Good Citizen testing",
                "AKC Trick Dog title evaluation",
                "Virtual Trick Dog video evaluation"
              ].map((name) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name
                }
              }))
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
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
                    "Yes. Day Training is primarily an owner drop-off service where your dog spends a structured half or full day with me. We rotate focused training sessions, rest breaks, and real-life field trips to work on your goals. Owners are responsible for drop-off and pick-up. For North End day training packages, pick-up may be available."
                }
              },
              {
                "@type": "Question",
                name: "Can AKC Trick Dog titles be evaluated by video?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. AKC Trick Dog title evaluations are available in person or through submitted video. The evaluation fee is $25 per dog, per title. AKC application fees are separate."
                }
              },
              {
                "@type": "Question",
                name: "Can the AKC Canine Good Citizen test be completed virtually?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "No. Canine Good Citizen and related CGC tests are scheduled in person. Virtual evaluations are available for AKC Trick Dog and Virtual Home Manners titles."
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
          Private dog training is available in Boston, Cambridge, Somerville,
          Medford, Brookline, Everett, Winchester, Woburn, Newton, and nearby
          communities. Share your dog’s needs and goals, and I’ll send a
          personalized plan, pricing, and scheduling options.
        </p>

        <p className="skipline">
          <a className="skip-to-form" href="#training-form">
            Skip to the request form
          </a>
        </p>

        <section aria-label="How quotes and scheduling work" className="page-intro">
          <h2>How training works</h2>
          <ul className="bulleted">
            <li>Fill out the form with your goals.</li>
            <li>I review and send a short intake if we’re a good fit.</li>
            <li>You get a tailored plan with pricing and scheduling options.</li>
            <li>Approve → book → train. Payment via Venmo or PayPal.</li>
          </ul>
        </section>

        <section className="availability-notice" aria-label="Current training availability">
          <div className="availability-badge">Currently full</div>

          <div>
            <h2>Day Training is currently full</h2>
            <p>
              I am not taking new Day Training clients right now, but you can join the waitlist
              for future openings. Private training, trick and freestyle training, and virtual
              coaching may still be available.
            </p>

            <a href="#training-form" className="availability-link">
              Join the Day Training waitlist
            </a>
          </div>
        </section>

        <section className="training-intro">
          <h2>Dog Training</h2>

          <p className="notes one" id="tricks">
            <span className="note-icon" role="img" aria-label="sparkles">
              ✨
            </span>{" "}
            I specialize in <strong>freestyle and trick training</strong> — spins, weaves, jumps, and full routines.
            Movement, creativity, and focus that carry into everyday life.
          </p>

          <div className="trick-page-link-card">
            <div>
              <h3>New: Trick & Freestyle Foundations</h3>
              <p>
                A reward-based program for confidence, focus, body awareness, beginner tricks,
                trick chains, and freestyle foundations.
              </p>
            </div>

            <Link to="/trick-freestyle-training" className="trick-page-link">
              Learn about trick training
            </Link>
          </div>

          <p className="notes one" id="behavior">
            <span role="img" aria-label="paw prints">
              🐾
            </span>{" "}
            I also help with <strong>manners, obedience, and behavior</strong> using a balanced,
            communication-focused approach. I tailor the plan to your dog and your goals.
          </p>

          <p className="notes day-training-full-note">
            <strong>
              <span role="img" aria-label="school">
                🏫
              </span>{" "}
              Day Training — Currently Full
            </strong>{" "}
            — Day Training is currently full for new clients. You can still join the waitlist
            for future openings. When spots are available, Day Training is an owner drop-off
            and pick-up service with structured training, rest breaks, and real-world practice
            at parks, neighborhoods, and dog-friendly stores.
          </p>

          <div className="notes where-notes">
            <strong>Where we can train:</strong>
            <ul className="where-list">
              <li>
                <strong>In-Home</strong> — your dog’s everyday environment
              </li>
              <li>
                <strong>Local Park Meet-Up</strong> — recall, leash work, tricks, general skills
              </li>
              <li>
                <strong>Field Trips</strong> — Home Depot/Lowe’s for public manners and focus
              </li>
              <li>
                <strong>
                  <Link to="/boston-dog-trainer-north-end">Boston (North End)</Link>
                </strong>{" "}
                — meet at our training area or nearby public spots
              </li>
              <li>
                <strong>Virtual Check-Ins</strong> — 30-min Zoom/Meet for tune-ups, planning, or behavior Q&amp;A
              </li>
            </ul>
          </div>

          <p className="notes two">Every dog and person is different. We personalize the plan so you both succeed.</p>
        </section>

        <section
          className="akc-testing-section"
          id="akc-testing"
          aria-labelledby="akc-testing-title"
        >
          <div className="akc-testing-heading">
            <img
              src="/assets/akc-cgc-evaluator-logo.png"
              alt="AKC Approved CGC Evaluator logo"
              className="akc-testing-logo"
              onError={(event) => {
                const heading = event.currentTarget.closest(".akc-testing-heading");
                heading?.classList.add("akc-logo-missing");
                event.currentTarget.remove();
              }}
            />

            <div>
              <p className="akc-kicker">AKC Approved Evaluator #116472</p>
              <h2 id="akc-testing-title">AKC Testing &amp; Trick Dog Titles</h2>
              <p>
                Ready to test your dog’s skills? Request an in-person CGC-family
                test or an AKC Trick Dog evaluation in person or by video.
              </p>
            </div>
          </div>

          <div className="akc-testing-grid">
            <article className="akc-test-card">
              <span className="akc-format">In person</span>
              <h3>Canine Good Citizen Testing</h3>
              <p>
                In-person evaluations for Canine Good Citizen (CGC), Community
                Canine (CGCA), and Urban CGC (CGCU), scheduled at an appropriate
                Boston-area testing location.
              </p>
              <p className="akc-price">$25 per dog, per test</p>
            </article>

            <article className="akc-test-card featured-akc-card">
              <span className="akc-format">Video or in person</span>
              <h3>AKC Trick Dog Titles</h3>
              <p>
                Evaluation for Novice, Intermediate, Advanced, Performer, or
                Elite Performer. Submit a video link or arrange an in-person
                evaluation.
              </p>
              <p className="akc-price">$25 per dog, per title</p>
            </article>

            <article className="akc-test-card">
              <span className="akc-format">Video</span>
              <h3>Virtual Home Manners</h3>
              <p>
                Video evaluation for the AKC Virtual Home Manners Puppy or Adult
                title using the applicable AKC checklist.
              </p>
              <p className="akc-price">$25 per dog, per title</p>
            </article>
          </div>

          <div className="akc-testing-note">
            <strong>Please note:</strong> The $25 fee covers your evaluation,
            feedback, and completed evaluator paperwork. It does not guarantee a
            passing result. AKC application or recording fees are separate and
            paid directly to AKC. Official titles require an eligible AKC,
            PAL, or Canine Partners number.
          </div>

          <a href="#training-form" className="akc-request-button">
            Request an AKC Test or Evaluation
          </a>
        </section>

        <section className="trainer-credentials" aria-label="Trainer credentials and affiliations">
          <h2 className="cred">Experience, Education, and Approach</h2>

          <div className="credential-highlight-grid">
            <div className="credential-highlight-card">
              <img
                src="/assets/akc-cgc-evaluator-logo.png"
                alt="AKC Approved CGC Evaluator logo"
                className="credential-akc-logo"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="credential-highlight-copy">
                <h3>AKC Approved CGC Evaluator</h3>
                <p>
                  Approved to conduct CGC-family testing and AKC Trick Dog
                  evaluations. Evaluator #116472.
                </p>
              </div>
            </div>

            <div className="credential-highlight-card">
              <img
                src="/assets/PEE-logo-certified.png"
                alt="Pet Emergency Education Certified Pet CPR and First Aid logo"
                className="credential-cpr-logo"
              />

              <div className="credential-highlight-copy">
                <h3>Pet CPR &amp; First Aid Certified</h3>
                <p>
                  Certified in Canine &amp; Feline CPR and First Aid through Pet Emergency Education.
                  Completed May 2026.
                </p>
              </div>
            </div>
          </div>

          <p className="cred-disclaimer">
            I’ve been working hands-on with dogs for over 10 years, from walking and pet sitting to training. I started
            by training my first service dog, then my second service dog, Tallulah (Tully), who is also my trick and
            freestyle demo dog and has earned her AKC Novice, Intermediate, and Advanced Trick Dog titles. Now I help
            clients with puppies, obedience, behavior, and freestyle (Dog Dance) foundations. My style is balanced
            training, with a focus on clear communication, building a strong dog and owner relationship, and setting
            both up for real world success. I’m an AKC Approved CGC Evaluator (#116472), an active member of IACP and
            APDT, Pet CPR &amp; First Aid certified through Pet Emergency Education, and I’m currently working toward my
            CPDT-KA certification. I stay current on modern, science informed training through courses, workshops,
            and mentorship, and I tailor each plan to the dog in front of me and the goals you care about most. If you
            have questions about methods or whether your dog is a good fit, feel free to email me at
            paisleygearandtraining@gmail.com.
          </p>
        </section>

        <section className="training-videos">
          <h2>Training Videos</h2>
          <p>See my methods in action.</p>
          <Link to="/videos" className="nav-link" aria-label="See training videos">
            🎥 Training Videos
          </Link>
        </section>

        <section className="training-pricing" aria-label="Training rates">
          <h2>Training Rates</h2>
            <p id="prepayment">Payment is due before or at the start of each session.</p>
            <p className="policy-note">
              Day training package pricing is only available when the full package is purchased upfront. Single day training sessions are charged at the regular day training rate.
            </p>

            <h4 id="cancellationPolicy">
            <span className="titleCancel">Cancellation Policy:</span> <br />
            Please provide at least 24 hours’ notice to cancel or reschedule. Late cancellations and no-shows are
            counted as a used session and cannot be rescheduled unless there is a true last-minute emergency. With 5-
            and 10-session packages, you receive one makeup session.
          </h4>

          <div className="pricing-grid training-pricing-grid">
            <details open className="price-card policy" id="travel-policy">
              <summary>
                <span className="summary-title">Travel Policy</span>
                <span className="summary-hint">First 40 min round-trip free</span>
              </summary>
              <ul>
                <li>
                  First <strong>40 minutes round-trip</strong> included
                </li>
                <li>
                  After that: <strong>$0.75 per minute (round-trip)</strong>, billed in 10-min increments
                </li>
                <li>
                  Calculated from Boston (North End). Boston meet-ups have <strong>no travel fee</strong>.
                </li>
                <li>
                  Example: ~50 min each way ≈ 100 min round-trip → 60 billable × $0.75 = <strong>$45 travel</strong>
                </li>
              </ul>
            </details>

            <div className="price-card">
              <h3>Private Training — Meet-Up</h3>
              <ul>
                <li>
                  One 60-min session: <strong>$90</strong>
                </li>
                <li>No travel fee at Boston spots or agreed meet-ups</li>
                <li>Great for freestyle, tricks, recall, or behavior work</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Private Training — In-Home, Park, or Field Trip</h3>
              <ul>
                <li>
                  One 60-min session: <strong>$90</strong> <em>+ travel</em>
                </li>
                <li>Your home, a local park, or a Home Depot/Lowe’s field trip</li>
                <li>Perfect for older puppies, behavior work, and real-world practice</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Training Packages</h3>
              <ul>
                <li>
                  3 sessions (1 hr each): <strong>$265 total</strong> (~$88/session)
                </li>
                <li>
                  5 sessions (1 hr each): <strong>$425 total</strong> ($85/session)
                </li>
                <li>Includes progress tracking and goal planning</li>
                <li>
                  <strong>Note:</strong> Package discounts apply to training time only; travel billed per visit if
                  applicable.
                </li>
                <li>
                  To help keep training consistent, 3- and 5-session packages should be
                  used within <strong>2 months</strong> of purchase. Any unused sessions
                  expire after that.
                </li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Puppy Training</h3>
              <ul>
                <li>
                  One 30-min session (recommended for puppies ~8 weeks–6 months): <strong>$50</strong> + travel
                </li>
                <li>No travel fee at spots located in Boston proper or at agreed nearby meet-ups</li>
                <li>Perfect for foundational manners, early socialization, handling comfort, and focus building</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Puppy Training Packages</h3>
              <ul>
                <li>
                  3 sessions (30 min each): <strong>$135 total</strong> (~$45/session)
                </li>
                <li>
                  5 sessions (30 min each): <strong>$210 total</strong> (~$42/session)
                </li>
                <li>Includes progress tracking, homework, tailored growth goals, and support between sessions</li>
                <li>
                  <strong>Note:</strong> Package discounts apply to training time only; travel billed per visit if
                  applicable.
                </li>
                <li>
                  To help keep training consistent, 3- and 5-session packages should be
                  used within <strong>2 months</strong> of purchase. Any unused sessions
                  expire after that.
                </li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Day Training</h3>
              <ul>
                <li>
                  Half-day (about 3–4 hrs incl. rest): <strong>$120</strong>
                </li>
                <li>
                  Full day (about 6–9 hrs incl. field trip): <strong>$240</strong>
                </li>
                <li>Real-world practice at parks, neighborhoods, or dog-friendly stores</li>
                <li>Short photo/video updates and a same-day summary</li>
                <li>
                  Optional 20–30 min handoff lesson: <strong>+$40</strong>
                </li>
                <li>Owners are responsible for drop-off and pick-up. For North End day training packages, pick-up may be available.</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Day Training Packages — Full Day</h3>
              <ul>
                <li>
                  3-Day Pack: <strong>$650</strong> <em>(~10% off @ ~$217/day)</em>
                </li>
                <li>
                  5-Day Pack: <strong>$1,020</strong> <em>(15% off @ $204/day)</em>
                  <span className="popular-badge" aria-label="Most popular">
                    Most popular
                  </span>
                </li>
                <li>
                  10-Day Pack: <strong>$1,920</strong> <em>(20% off @ $192/day)</em>
                </li>
                <li>Two half-days = one full day.</li>
                <li>Package pricing is only available when the full package is purchased upfront. Single day training sessions are charged at the regular day training rate.</li>
                <li>
                  To help keep progress consistent, day training packages should be used
                  within the following timeframes from purchase: <strong>3-day packages
                  within 2 months</strong>, <strong>5-day packages within 3 months</strong>,
                  and <strong>10-day packages within 6 months</strong>. Any unused sessions
                  expire after that.
                </li>
                <li>For clients in the North End who purchase a day training package, pick-up and drop-off may be available.</li>
                <li>
                  A limited sliding scale may be available for day training packages on a case-by-case basis. Please reach out before booking if cost is a barrier, and I will let you know what options are currently available.
                </li>
              </ul>
            </div>

            <div className="price-card akc-price-card">
              <h3>AKC Testing &amp; Title Evaluations</h3>
              <ul>
                <li>
                  In-person CGC-family test: <strong>$25 per dog, per test</strong>
                </li>
                <li>
                  Trick Dog video or in-person evaluation: <strong>$25 per title</strong>
                </li>
                <li>
                  Virtual Home Manners video evaluation: <strong>$25 per title</strong>
                </li>
                <li>AKC application and recording fees are paid separately to AKC.</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Virtual Coaching</h3>
              <ul>
                <li>
                  20-min Zoom/Google Meet: <strong>$30–$45</strong>
                </li>
                <li>Great for trick tune-ups, routines, or behavior Q&amp;A</li>
                <li>You can send videos/questions in advance</li>
              </ul>
            </div>
          </div>
        </section>

        {!showSuccess && (
          <img src={formHeader} alt="Tell me about your pup" className="form-header-image" />
        )}

        {submitting && <div className="loading-bar" aria-hidden="true" />}

        {!showSuccess && (
          <form id="training-form" onSubmit={handleSubmit} className="training-form" noValidate>
            <div className="visually-hidden" aria-hidden="true">
              <label htmlFor="hpField">Leave this field blank</label>
              <input
                id="hpField"
                name="hpField"
                value={formData.hpField}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="new-password"
                inputMode="none"
              />
            </div>

            <h3 className="form-section">Service</h3>

            <fieldset
              className="service-fieldset"
              role="radiogroup"
              aria-invalid={touched.serviceType && !!errors.serviceType}
              aria-describedby={touched.serviceType && errors.serviceType ? "serviceType-error" : undefined}
            >
              <legend className="service-legend">I’m interested in:</legend>
              <p className="helper">Pick one. You can change it later.</p>

              {touched.serviceType && errors.serviceType && (
                <div className="field-error" id="serviceType-error" role="alert">
                  {errors.serviceType}
                </div>
              )}

              <div className="card-grid">
                {serviceOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className={`service-card ${formData.serviceType === opt.value ? "is-selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="serviceType"
                      value={opt.value}
                      checked={formData.serviceType === opt.value}
                      onChange={(e) => {
                        handleChange(e);
                        markTouched("serviceType");
                      }}
                      className="service-radio"
                    />

                    <span className="service-content">
                      <span className="service-heading">
                        <span className="service-icon" aria-hidden="true">
                          {opt.icon}
                        </span>
                        <span className="service-title">{opt.title}</span>
                      </span>

                      <span className="service-desc">{opt.desc}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {wantsAkcTesting && (
              <section className="akc-request-fields" aria-label="AKC testing request details">
                <h3 className="form-section">AKC Test or Title Details</h3>

                <p className="waitlist-helper">
                  CGC-family tests are completed in person. Trick Dog and Virtual
                  Home Manners evaluations may be completed using submitted video.
                </p>

                <label htmlFor="akcRequestType">Which evaluation do you want?</label>
                <select
                  id="akcRequestType"
                  name="akcRequestType"
                  value={formData.akcRequestType}
                  onChange={(event) => {
                    handleChange(event);
                    markTouched("akcRequestType");
                  }}
                  onBlur={() => markTouched("akcRequestType")}
                  aria-invalid={!!(touched.akcRequestType && errors.akcRequestType)}
                  aria-describedby={
                    touched.akcRequestType && errors.akcRequestType
                      ? "akcRequestType-error"
                      : undefined
                  }
                >
                  <option value="">Select one</option>
                  <option value="CGC – in person">Canine Good Citizen (CGC) — in person</option>
                  <option value="CGCA – in person">Community Canine (CGCA) — in person</option>
                  <option value="CGCU – in person">Urban CGC (CGCU) — in person</option>
                  <option value="Trick Dog – video">Trick Dog title — video evaluation</option>
                  <option value="Trick Dog – in person">Trick Dog title — in person</option>
                  <option value="Virtual Home Manners – video">Virtual Home Manners — video evaluation</option>
                  <option value="Not sure">Not sure yet</option>
                </select>

                {touched.akcRequestType && errors.akcRequestType && (
                  <div className="field-error" id="akcRequestType-error" role="alert">
                    {errors.akcRequestType}
                  </div>
                )}

                {(formData.akcRequestType.startsWith("Trick Dog") ||
                  formData.akcRequestType.startsWith("Virtual Home Manners")) && (
                  <>
                    <label htmlFor="akcTitleLevel">Which title level?</label>
                    <select
                      id="akcTitleLevel"
                      name="akcTitleLevel"
                      value={formData.akcTitleLevel}
                      onChange={handleChange}
                    >
                      <option value="">Select one or choose “Not sure”</option>
                      {formData.akcRequestType.startsWith("Trick Dog") ? (
                        <>
                          <option value="Novice Trick Dog (TKN)">Novice Trick Dog (TKN)</option>
                          <option value="Intermediate Trick Dog (TKI)">Intermediate Trick Dog (TKI)</option>
                          <option value="Advanced Trick Dog (TKA)">Advanced Trick Dog (TKA)</option>
                          <option value="Trick Dog Performer (TKP)">Trick Dog Performer (TKP)</option>
                          <option value="Trick Dog Elite Performer (TKE)">Trick Dog Elite Performer (TKE)</option>
                        </>
                      ) : (
                        <>
                          <option value="Virtual Home Manners Puppy">Virtual Home Manners Puppy</option>
                          <option value="Virtual Home Manners Adult">Virtual Home Manners Adult</option>
                        </>
                      )}
                      <option value="Not sure">Not sure</option>
                    </select>

                    <label htmlFor="akcVideoLink">
                      Video link, if it is already ready (optional)
                    </label>
                    <input
                      id="akcVideoLink"
                      type="url"
                      name="akcVideoLink"
                      placeholder="YouTube, Google Drive, Dropbox, Vimeo, etc."
                      value={formData.akcVideoLink}
                      onChange={handleChange}
                    />
                    <p className="helper">
                      You can leave this blank and send the video after I reply with instructions.
                    </p>
                  </>
                )}
              </section>
            )}

            {wantsDayTrainingWaitlist && (
              <section className="waitlist-fields" aria-label="Day Training waitlist details">
                <h3 className="form-section">Day Training Waitlist Details</h3>

                <p className="waitlist-helper">
                  Day Training is currently full. Fill this out so I can contact you when a spot
                  opens or if your dog may be a good fit for a future day training package.
                </p>

                <label>What type of Day Training are you interested in?</label>
                <select
                  name="dayTrainingWaitlistType"
                  value={formData.dayTrainingWaitlistType}
                  onChange={handleChange}
                >
                  <option value="">Select one</option>
                  <option value="Half-day">Half-day</option>
                  <option value="Full day">Full day</option>
                  <option value="Package">Package</option>
                  <option value="Not sure">Not sure yet</option>
                </select>

                <label>Preferred days or times:</label>
                <input
                  type="text"
                  name="preferredDays"
                  placeholder="e.g., Mondays, weekdays, mornings, flexible"
                  value={formData.preferredDays}
                  onChange={handleChange}
                />

                <label>When would you ideally like to start?</label>
                <input
                  type="text"
                  name="preferredStart"
                  placeholder="e.g., ASAP, next month, summer, flexible"
                  value={formData.preferredStart}
                  onChange={handleChange}
                />

                <label>How flexible is your schedule?</label>
                <select
                  name="scheduleFlexibility"
                  value={formData.scheduleFlexibility}
                  onChange={handleChange}
                >
                  <option value="">Select one</option>
                  <option value="Very flexible">Very flexible</option>
                  <option value="Somewhat flexible">Somewhat flexible</option>
                  <option value="Specific days only">Specific days only</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </section>
            )}

            <h3 className="form-section">Owner Info</h3>

            <div className="form-row-2">
              <div>
                <label>Your Name:</label>
                <input
                  type="text"
                  name="name"
                  required
                  onBlur={() => markTouched("name")}
                  onChange={handleChange}
                  value={formData.name}
                  aria-invalid={!!(touched.name && errors.name)}
                />
                {touched.name && errors.name && <div className="field-error">{errors.name}</div>}
              </div>

              <div>
                <label>Email Address:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                  onBlur={() => markTouched("email")}
                  onChange={handleChange}
                  value={formData.email}
                  aria-invalid={!!(touched.email && errors.email)}
                  aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                />
                {touched.email && errors.email && (
                  <div className="field-error" id="email-error">
                    {errors.email}
                  </div>
                )}
              </div>
            </div>

            <h3 className="form-section">Dog Info</h3>

            <div className="form-row-3">
              <div>
                <label>Dog's Name:</label>
                <input
                  type="text"
                  name="dogName"
                  placeholder="e.g., Tully"
                  onChange={handleChange}
                  value={formData.dogName}
                />
              </div>

              <div>
                <label>Dog's Age:</label>
                <input
                  type="text"
                  name="dogAge"
                  placeholder="e.g., 11 months"
                  onChange={handleChange}
                  value={formData.dogAge}
                />
              </div>

              <div>
                <label>Dog's Breed:</label>
                <input
                  type="text"
                  name="dogBreed"
                  placeholder="e.g., Bordoodle"
                  onChange={handleChange}
                  value={formData.dogBreed}
                />
              </div>
            </div>

            <h3 className="form-section">Goals</h3>
            <label>What are your training goals?</label>

            <p className="field-help" id="goals-help">
              Examples: loose leash walking, recall, puppy basics, jumping, reactivity, confidence in public, tricks
              and freestyle.
            </p>

            <textarea
              name="goals"
              required
              aria-describedby={["goals-help", touched.goals && errors.goals ? "goals-error" : null]
                .filter(Boolean)
                .join(" ")}
              placeholder="Tell me what you want to work on"
              onBlur={() => markTouched("goals")}
              onChange={handleChange}
              value={formData.goals}
              aria-invalid={!!(touched.goals && errors.goals)}
            />

            {touched.goals && errors.goals && (
              <div className="field-error" id="goals-error">
                {errors.goals}
              </div>
            )}

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

            {errorMsg && (
              <div className="form-error" role="alert">
                {errorMsg}
              </div>
            )}

            <button type="submit" disabled={submitting} aria-busy={submitting}>
              {submitting
                ? "Sending…"
                : wantsAkcTesting
                  ? "Request an AKC Evaluation"
                  : "Request a Session"}
            </button>
          </form>
        )}

        {showSuccess && (
          <div className="success-card" role="status" aria-live="polite">
            <h2>Got it!</h2>

            {lastSubmittedService === "Day Training Waitlist" ? (
              <p>
                You’re on the Day Training waitlist. I’ll reach out if a spot opens or if
                your dog may be a good fit for a future day training package.
              </p>
            ) : lastSubmittedService === "AKC Testing & Titles" ? (
              <p>
                I received your AKC testing request. I’ll reply with scheduling or
                video-submission instructions and the forms you’ll need.
              </p>
            ) : (
              <p>I’ll follow up shortly with a plan, pricing, and scheduling options.</p>
            )}

            <button type="button" onClick={() => setShowSuccess(false)}>
              Send another request
            </button>
          </div>
        )}

        <a className="sticky-cta" href="#training-form">
          Request a session
        </a>
      </div>
    </>
  );
};

export default TrainingForm;