import { Link } from "react-router-dom";
import "./page.css";

export default function Boston() {
  const localLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Paisley Dog Gear & Training",
    "url": "https://paisleydoggearandtraining.com/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "15 Stillman St",
      "addressLocality": "Boston",
      "addressRegion": "MA",
      "postalCode": "02113",
      "addressCountry": "US"
    },
    "areaServed": [
      { "@type": "City", "name": "Boston" },
      "North End",
      "West End",
      "Waterfront",
      "Beacon Hill",
      "Charlestown"
    ],
    "priceRange": "$$",
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Puppy Foundations",
          "serviceType": "Dog training"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Obedience & Manners",
          "serviceType": "Dog training"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Trick Training / Canine Freestyle",
          "serviceType": "Dog training"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Leash Skills & Reactivity Coaching",
          "serviceType": "Dog training"
        }
      }
    ]
  };

  return (
    <>
      <title>Boston Dog Trainer — North End | Obedience, Manners, Puppy Foundations</title>
      <meta
        name="description"
        content="Private dog training at our North End location or at your home in Boston. Puppy foundations, manners, trick training & leash skills. Travel time billed for in-home visits."
      />
      <link
        rel="canonical"
        href="https://paisleydoggearandtraining.com/boston-dog-trainer-north-end"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localLD) }}
      />

      <main className="page-scope">
        <div className="container stack-lg">
          <header className="stack-sm">
            <h1>Dog Trainer in Boston’s North End</h1>
            <p>
              Work with us at our North End location, at your home in Boston, or at nearby public spots that fit your goals.
            </p>
            <p>
              <Link className="btn" to="/training">Tell me about your dog</Link>
              <span className="subtle"> · </span>
              <Link className="btn ghost" to="/booking">Book a free 15-min consult</Link>
            </p>
          </header>

          {/* High-level overview */}
          <section className="grid-2 stack-md">
            <div>
              <h2>What we teach</h2>
              <ul className="bulleted">
                <li><strong>Puppy foundations</strong>: house training, socialization plans, crate/alone-time, calm focus.</li>
                <li><strong>Obedience &amp; manners</strong>: sit/down, place, recall, loose-leash, polite greetings.</li>
                <li><strong>Trick training / freestyle</strong>: confidence, teamwork, short routines.</li>
                <li><strong>Leash skills &amp; Light reactivity</strong>: equipment, handling skills, safe setups.</li>
              </ul>
            </div>
            <div>
              <h2>How sessions work</h2>
              <ol className="numbered">
                <li><strong>Quick consult</strong> (optional) to set goals.</li>
                <li><strong>Initial session</strong> with a clear written plan.</li>
                <li><strong>Progress sessions</strong>—North End, your neighborhood, or field trips.</li>
              </ol>
              <p className="note">In-home visits include travel time. Boston meet-ups have no travel fee.</p>
            </div>
          </section>

          {/* Service details from your Google Business descriptions */}
          <section className="stack-md">
            <h2>Service details</h2>

            <article className="stack-xs service" id="tricks">
              <h3>Trick Training / Canine Freestyle (Dog Dance)</h3>
              <p>
                Trick training and canine freestyle that deepen your bond while building confidence, focus, and body awareness.
                We teach targeting, perch and pivot, heel work, spins, weaves, and prop work, progressing to short routines for
                enrichment, teamwork, and stronger results in other areas of training.
              </p>
            </article>

            <article className="stack-xs service" id="puppy">
              <h3>Puppy Foundations</h3>
              <p>
                Build strong foundations with reward-based training: social skills, house and crate manners, name recognition,
                impulse control, and basic cues. You’ll leave with a clear plan and daily routines that keep progress going long term.
              </p>
            </article>

            <article className="stack-xs service" id="behavior">
              <h3>Obedience &amp; Manners</h3>
              <p>
                Balanced obedience and real-life manners: heel, stay, leave it/drop it, place with duration, door and greeting
                manners, leash skills, handling confidence, car/house manners, and distraction proofing for calm, reliable behavior anywhere.
              </p>
            </article>

            <article className="stack-xs service" id="leash">
              <h3>Leash Skills</h3>
              <p>
                We cover equipment selection and fit, handler mechanics, step by step setups, and conditioning for loose leash,
                engagement with the handler for better focus on walks, and heel work. Light leash reactivity support available to reduce
                tension and create calmer walks.
              </p>
            </article>
          </section>

          <section className="stack-md">
            <h2>Areas we cover</h2>
            <p>North End, West End, Waterfront, Beacon Hill, Charlestown, South End, South Boston, Back Bay, and nearby neighborhoods.</p>
            <p>Not in Boston? <Link to="/training">See our travel policy</Link> or inquire about virtual coaching.</p>
          </section>

          <section className="stack-md">
            <h2>Ready to get started?</h2>
            <p>
              Go straight to the <Link to="/training">training request form</Link> or <Link to="/booking">book a quick consult</Link>.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
