import React from "react";
import "../styles/TeamSection.css";
import teamImg from "../asstes/team.png";

const TeamSection = () => {
  return (
    <section className="team-section">

      {/* Trusted Brands */}

      <div className="trusted-section">
       
        <div className="brands">
          <span>TATA</span>
          <span>adani</span>
          <span>Apollo</span>
          <span>ITC HOTELS</span>
          <span>wipro</span>
          <span>Deloitte</span>
        </div>
      </div>

      {/* How It Works */}

      <div className="works-card">
        <h2>How It Works</h2>

        <div className="steps">

          <div className="step">
            <div className="icon">🎧</div>
            <h4>Connect</h4>
            <p>Share your requirements</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <div className="icon">✂️</div>
            <h4>Design</h4>
            <p>We create custom designs</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <div className="icon">🧵</div>
            <h4>Sample</h4>
            <p>Get samples for approval</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <div className="icon">🏭</div>
            <h4>Produce</h4>
            <p>Manufacturing with care</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <div className="icon">🚚</div>
            <h4>Deliver</h4>
            <p>On-time delivery</p>
          </div>

        </div>
      </div>

      {/* CTA Banner */}

      <div className="cta-banner">

        <div className="cta-content">
          <h2>Need Custom Uniforms for Your Team?</h2>

          <p>
            We are ready to deliver the perfect uniform solution.
          </p>

          <button>Get a Quote Now →</button>
        </div>

        <div className="cta-image">
          <img src={teamImg} alt="Team" />
        </div>

      </div>

    </section>
  );
};

export default TeamSection;