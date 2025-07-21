import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <img src="/assets/logo.jpg" alt="Paisley Dog Logo" className="hero-logo" />
        <h1>Paisley Dog Gear & Training</h1>
        <h2 className="tagline">Custom Biothane Dog Gear & Trick Training in Boston, MA</h2>
        <p>Functional. Custom. Made for Adventure.</p>
        <a href="/order" className="cta-button cta-primary">Start a Custom Order</a>
      </div>


      <section className="about">
        <h2>About the Maker</h2>
        <p>
          Hi, I’m Jena — maker, trainer, and dog mom. I handcraft custom Biothane gear for everyday adventures, service dog work, and everything in between.
          My work blends style, functionality, and comfort — all field-tested by my two dogs, Paisley and Tallulah.
        </p>
      </section>

      <section className="dogs">
        <h2>Meet the Dogs</h2>
        <div className="dog-profiles">
          <div className="dog-card">
            <img src="/assets/tully.jpeg" alt="Tallulah the Bordoodle" />
            <h3>Tallulah</h3>
            <p>My energetic SDiT and demo dog. Smart, sassy, and trained in freestyle, agility, and service tasks.
              <br />
              <br />
              Follow her adventures on Instagram:
              <br />
            <a 
            href="https://www.instagram.com/tullytornado"
            target="_blank"
            rel="noopener noreferrer"
            >
              @TullyTornado 
            </a>
            </p>
          </div>
          <div className="dog-card">
            <img src="/assets/paisley.jpg" alt="Paisley the Cavachon" />
            <h3>Paisley</h3>
            <p>The OG service dog. Sweet, calm, and retired — but still the inspiration behind it all.
              <br />
              <br />
              Follow her journey on Instagram:
              <br />
            <a 
            href="https://www.instagram.com/paisleyisbeautiful"
            target="_blank"
            rel="noopener noreferrer"
            >
              @PaisleyIsBeautiful
            </a>
            </p>
          </div>
        </div>
      </section>


      <section className="featured">
        <h2>Featured Gear</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/assets/thetallulah.jpg" alt="The Tallulah hands-free leash" />
            <h3>The Tallulah</h3>
            <p>Our signature hands-free leash system — versatile, strong, and designed for real life.
            </p>
          </div>
          <div className="product-card">
            <img src="/assets/ballholder.jpg" alt="Biothane Ball Holder" />
            <h3>Biothane Ball Holder</h3>
            <p>Clips to your gear and fits ChuckIt or standard balls. D-ring or snap clip.</p>
          </div>
          <div className="product-card">
            <img src="/assets/custom-longline.jpg" alt="Custom Biothane Long Line" />
            <h3>Custom Long Line</h3>
            <p>Durable, colorful long lines up to 20ft — ideal for recall, hiking, and adventure training.</p>
          </div>
        </div>
      </section>

      <section className="training-inquiry">
        <h2>Dog Training Inquiries</h2>
        <p>
          I offer trick training, freestyle, and behavior support in the Boston area.
          Interested in training or private coaching? Fill out the contact form.
        </p>
        <a href="/training" className="cta-button cta-secondary">Fill Out Training Request</a>
        <br />
        <br />
        <p> Or direct message me on Instagram.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/tullytornado" target="_blank" rel="noopener noreferrer">@TullyTornado</a>
          <br />
          <a href="https://www.instagram.com/eatwellandeatdessert" target="_blank" rel="noopener noreferrer">@eatwellandeatdessert</a>
        </div>

      </section>
    </section>
  );
};

export default Home;

