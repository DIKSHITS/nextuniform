import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-page">

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            We are here to help you with the best
            uniform solutions.
          </p>

          <div className="info-item">
            <span>📍</span>
            <p>
              11/A Rangalal Street, Khidirpur,
              Kolkata - 700023
            </p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <p>+91 96749 84559</p>
          </div>

          <div className="info-item">
            <span>✉️</span>
            <p>admin@nextuniform.com</p>
          </div>

          <div className="info-item">
            <span>🕒</span>
            <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
          </div>

        </div>

        {/* Center Map */}

        <div className="map-box">

          <iframe
            title="location"
            src="https://maps.google.com/maps?output=embed&q=11%2FA%2C%20Rangalal%20St%2C%20Khidirpur%2C%20Kolkata%2C%20West%20Bengal%20700023"
            loading="lazy"
          />

        </div>

        {/* Right Form */}

        <div className="contact-form">

          <form>

            <div className="input-row">

              <input
                type="text"
                placeholder="Your Name*"
              />

              <input
                type="email"
                placeholder="Your Email*"
              />

            </div>

            <input
              type="tel"
              placeholder="Phone Number*"
            />

            <textarea
              rows="6"
              placeholder="Your Message*"
            />

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;