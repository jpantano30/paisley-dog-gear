import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <img src="/assets/logo.jpg" alt="Paisley Dog Logo" className="hero-logo" />
        <h1>Paisley Dog Gear & Training</h1>
        <h2 className="tagline">Custom Biothane Dog Gear & Trick Training in Boston, MA</h2>
        <p>Functional. Custom. Made for Adventure.</p>
        <Link to="/builder" className="cta-button cta-primary">Design Your Own Here!</Link>
      </div>


      <section className="about">
        <h2>About the Maker</h2>
        <p>
          Hey, I’m Jena — maker, dog trainer, and former pastry chef. I started Paisley Dog Gear & Training because I love creating things that are actually useful. Designing custom gear became the perfect blend of my creativity and my obsession with dogs.
        </p>
        <p>
          The name comes from my first service dog, Paisley. My original sidekick and the reason I care so much about quality, purpose, and helping people and dogs thrive.
        </p>
        <p>
          Now I train my younger dog, Tallulah. We do canine freestyle, and service dog work, so all my gear is tested in real life and built to hold up.
        </p>
        <p>
          I design every piece to be functional, comfortable, and stylish. Whether it’s a leash, long line, or ball holder, I want it to solve a problem and make life easier — while still looking cute as hell.
        </p>
      </section>

      <section className="dogs">
        <h2>Meet the Dogs</h2>
        <div className="dog-profiles">
          <div className="dog-card">
            <img src="/assets/tully.jpeg" alt="Tallulah the Bordoodle" />
            <h3>Tallulah</h3>
            <p>My energetic SDiT and demo dog. Smart, sassy, and training in freestyle and service work.
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
            <p>The OG service dog. Sweet, calm, and retired — but still the inspiration behind it all. My first dog ever and the reason I fell in love with training, canine communication, and the power of a true bond. Paisley supported me through some of the hardest years of my life. She worked with quiet confidence, always by my side, always steady. Though she’s now enjoying retirement (and plenty of naps), her legacy lives on in every leash I make and every dog I help train. None of this would exist without her.
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
            <img src="/assets/tallulah-sage2.JPG" alt="The Tallulah hands-free leash" />
            <h3>The Tallulah</h3>
            <p>Our signature hands-free leash system — versatile, strong, and designed for real life.
            </p>
          </div>
          <div className="product-card">
            <img src="/assets/leashpicsNvids/ballholder3.JPG" alt="Biothane Ball Holder" />
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
        <Link to="/training" className="cta-button cta-secondary">Fill Out Training Request</Link>
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

