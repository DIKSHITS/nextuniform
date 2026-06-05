import React from "react";
import "../styles/Quote.css";
import supportImg from "../asstes/team.png";

const Quote = () => {
  return (
    <section className="quote-page">

      <div className="breadcrumb">
        Home &gt; Get a Quote
      </div>

      <div className="quote-header">
        <h1>Request a Quote</h1>
        <p>
          Share your requirements and we will get
          back to you with the best solution.
        </p>
      </div>

      <form className="quote-form">

        <div className="form-grid">

          <div className="form-card">
            <h3>Your Details</h3>

            <input type="text" placeholder="Full Name*" />
            <input type="email" placeholder="Email Address*" />
            <input type="tel" placeholder="Phone Number*" />
            <input type="text" placeholder="Company Name*" />
            <input type="text" placeholder="Industry Type*" />
          </div>

          <div className="form-card">
            <h3>Uniform Details</h3>

            <select>
              <option>Select Category</option>
              <option>Industrial</option>
              <option>Hospital</option>
              <option>Corporate</option>
              <option>Hotel</option>
            </select>

            <input type="text" placeholder="Select Product" />

            <input type="number" placeholder="Quantity*" />
            <input type="text" placeholder="Delivery Location*" />
            <input type="date" />
          </div>

        </div>

        <div className="full-section">

          <label>Your Requirements</label>

          <textarea
            rows="6"
            placeholder="Tell us about your uniform needs..."
          />

        </div>

        <div className="full-section">

          <label>Additional Requirements</label>

          <div className="checkboxes">

            <label>
              <input type="checkbox" />
              Custom Design
            </label>

            <label>
              <input type="checkbox" />
              Logo / Embroidery
            </label>

            <label>
              <input type="checkbox" />
              Custom Packaging
            </label>

          </div>

        </div>

        <div className="full-section">

          <label>Upload Reference (Optional)</label>

          <input type="file" />

        </div>

        <button className="submit-btn">
          Submit Enquiry
        </button>

      </form>

      <div className="help-card">

        <div className="help-content">
          <h2>Need Help?</h2>

          <p>
            Our team is ready to assist you.
          </p>

          <div className="contact-item">
            📞 +91 96749 84559
          </div>

          <div className="contact-item">
            ✉ admin@nextuniform.com
          </div>
        </div>

        <div className="help-image">
          <img src={supportImg} alt="" />
        </div>

      </div>

    </section>
  );
};

export default Quote;