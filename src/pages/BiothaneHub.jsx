import { Link } from "react-router-dom";
import "./page.css";
import "./BiothaneHub.css";

export default function BiothaneHub() {
  // Optional: one representative product for rich results
  const leashLD = {
    "@context":"https://schema.org",
    "@type":"Product",
    "name":"Custom Biothane Dog Leash",
    "image":[
      "https://paisleydoggearandtraining.com/assets/leashpicsNvids/b&pstandard.JPG"
    ],
    "description":"Durable, waterproof coated-webbing leash handmade in Boston. Lengths, colors, and hardware are customizable.",
    "brand":{"@type":"Brand","name":"Paisley Dog Gear"},
    "offers":{
      "@type":"Offer",
      "url":"https://paisleydoggearandtraining.com/order",
      "priceCurrency":"USD",
      "price":"65",
      "availability":"https://schema.org/InStock"
    }
  };

  return (
    <>
      <title>Biothane Leashes & Collars (Boston) | Waterproof, Easy-Clean, Custom</title>
      <meta
        name="description"
        content="What is Biothane? Why it works for training walks. See leash, long line, collar, and hands-free options. Custom colors, hardware, and lengths. Handmade in Boston."
      />
      <link rel="canonical" href="https://paisleydoggearandtraining.com/biothane-dog-leashes-boston" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(leashLD) }} />

      <main className="page-scope">
        <div className="container stack-lg">
          <header className="stack-sm">
            <h1>Biothane Leashes &amp; Collars (Boston)</h1>
            <p>Waterproof, odor-resistant, and easy to wipe clean. Ideal for training and daily walks.</p>
            <p>
              <Link className="btn" to="/builder">Open the Gear Builder</Link>
              <span className="subtle"> · </span>
              <Link className="btn ghost" to="/options">See gear options</Link>
            </p>
          </header>

          <section className="stack-md">
            <h2>What is Biothane?</h2>
            <p>
              BioThane® is a <strong>polyester webbing</strong> coated with <strong>TPU or PVC</strong>. The coating makes it
              <strong> durable</strong>, <strong>waterproof</strong>, and <strong>easy to clean</strong>, while the webbing provides
              strength and flexibility.
            </p>
            <ul className="bulleted">
              <li>Wipe-clean surface; resists water and odors.</li>
              <li>Many colors and widths; consistent feel in rain or snow.</li>
            </ul>
          </section>

          <section className="stack-md">
            <h2>Hardware Options</h2>
            <p>
              Choose from several hardware finishes to match your dog’s lifestyle and your style.
            </p>
            <ul className="bulleted">
              <li>
                <strong>Stainless Steel:</strong> Extremely durable and rust-resistant—great for beach days,
                swimming, or rough play. 
                {/* (Note: Quick-release buckles and lobster clasps in this finish use
                nickel/chrome plating.) */}
              </li>
              <li>
                <strong>Solid Brass:</strong> A timeless choice that resists corrosion and develops a
                natural patina with age. Ideal for dogs who explore rain, mud, or snow. (Note: Brass does tarnish when worn in saltwater. Rinse after exposure.)
              </li>
              <li>
                <strong>Matte Black:</strong> Sleek and modern, made from coated steel. Best for light to
                moderate use and for those who prefer a fashion-forward look.
              </li>
            </ul>
            <p className="subtle">
              <em>
                Tip: Stainless steel and brass are your best bets for long-term durability, especially for
                high-energy dogs. Fashion finishes like black are better for casual wear.
              </em>
            </p>
          </section>


          <section className="grid-2 stack-md">
            <div>
              <h2>Why trainers like it</h2>
              <ul className="bulleted">
                <li><strong>Low maintenance:</strong> rinse or wipe with mild soap and water.</li>
                <li><strong>Real-world proofing:</strong> long lines don’t soak up water or odors.</li>
                <li><strong>Color coding:</strong> bright, UV-stable colors for visibility and setups.</li>
              </ul>
            </div>
            <div>
              <h2>Products we build</h2>
              <ul className="bulleted">
                <li>Standard leashes (4–10 ft)</li>
                <li>Long lines (10–30 ft)</li>
                <li>Hands-free system (The Tallulah)</li>
                <li>Collars (buckle or quick-release)</li>
                <li>Accessories: traffic handles, extenders, ball holders, safety straps</li>
              </ul>
              <p className="subtle">
                See details and price ranges on the <Link to="/options">Gear Options</Link> page.
              </p>
            </div>
          </section>

          <section className="stack-md">
            <h2>Care &amp; cleaning</h2>
            <p>
              Rinse after salt or sand; wipe with mild soap and a non-abrasive sponge. Avoid harsh solvents or high heat on the coating.
            </p>
          </section>

          <section className="stack-md faq">
            <h2>FAQs</h2>
            <details>
              <summary>Is Biothane vegan?</summary>
              <div>Yes—no animal products; it’s widely used as a leather alternative.</div>
            </details>

            <details>
              <summary>What’s it made of?</summary>
              <div>Polyester webbing core with a TPU or PVC coating.</div>
            </details>

            <details>
              <summary>Will it smell or absorb water?</summary>
              <div>The coated surface resists water and odors; a quick wipe usually restores it.</div>
            </details>
          </section>

          <section className="stack-md">
            <h2>Ready to order?</h2>
            <p>
              Start with the <Link to="/builder">Gear Builder</Link> or browse <Link to="/options">all options</Link> — lengths,
              hardware, and color layouts.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
