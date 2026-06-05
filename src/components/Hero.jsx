import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import heroImage from "../asstes/hero.png";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="top-contact">
          <p>📞 +91 96749 84559</p>
          <p>✉️ admin@nextuniform.com</p>
        </div>

        <h1>
          Smart Uniforms.
          <br />
          <span>Stronger Identity.</span>
        </h1>

        <p className="hero-desc">
          Premium uniform solutions for every industry.
          Designed for performance. Tailored for you.
        </p>

        <div className="hero-buttons">
          <Link to="/" className="primary-btn">
            Explore Categories →
          </Link>

          <Link to="/quote" className="quote-btn">
            Get a Quote
          </Link>

        </div>

      </div>

      {/* Hero Image */}
      <div className="hero-image">
        <img src={heroImage} alt="Uniform Collection" />
      </div>

      {/* Features */}
      <div className="features">
        <div className="feature">
          <h4>Premium Quality</h4>
          <p>Finest fabrics & stitching</p>
        </div>

        <div className="feature">
          <h4>Custom Design</h4>
          <p>Tailored to your brand</p>
        </div>

        <div className="feature">
          <h4>On Time Delivery</h4>
          <p>Always on schedule</p>
        </div>

        <div className="feature">
          <h4>Dedicated Support</h4>
          <p>We are here for you</p>
        </div>
      </div>

    </section>
  );
};

export default Hero;