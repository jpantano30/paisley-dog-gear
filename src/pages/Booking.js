import React from "react";
import { InlineWidget } from "react-calendly";
import "./Booking.css"; 
import "../components/page-intro.css"; 


export default function Booking() {
  return (
    <>
      {/* SEO tags for Booking page */}
      <title>Book a Free 15-Minute Training Consult</title>
      <meta
        name="description"
        content="Book a free 15-minute call to see if we’re a good training fit, ask questions, and plan next steps."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/booking" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Book a Free 15-Minute Training Consult" />
      <meta property="og:description" content="Quick call to check fit, discuss goals, and plan next steps—no commitment." />
      <meta property="og:url" content="https://paisleydoggearandtraining.com/booking" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Book a Free 15-Minute Training Consult" />
      <meta name="twitter:description" content="Quick call to check fit, discuss goals, and plan next steps—no commitment." />

      {/* Optional JSON-LD for the consult */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Dog Training Consultation (15 minutes)",
        "provider": { "@type": "Organization", "name": "Paisley Dog Gear & Training" },
        "areaServed": "Boston, MA",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      })}</script>

      <section aria-label="Free consult">
        <h2>Free 15-minute training consult</h2>
        <p>
          Not sure where to start? Book a quick call to see if we’re a good fit, ask
          questions, and plan next steps. The consult is optional—you can also submit
          the <a href="/training">training request form</a> directly if you’re ready.
        </p>
      </section>

    
    
    <div className="main-content">
      <h2 className="text-3xl font-bold mb-6">📅 Free 15-Min Training Consult</h2>
      <p className="mb-4">
        Want to chat about training goals or see if we’re a good fit? Schedule a free 15-minute consult using the calendar below.
      </p>
      <InlineWidget
        url="https://calendly.com/paisleygearandtraining/free-15-min-training-consult"
        styles={{ height: "700px" }}
      />
    </div>
    </>
  );
}
