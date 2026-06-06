import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/careerspage">Careers</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div className="footer-column">
          <h3>Categories</h3>
          <a href="/industrial">Industrial</a>
          <a href="/hospital">Hospital</a>
          <a href="/hotel">Hotel</a>
          <a href="/">Corporate</a>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <a href="/">Get Quote</a>
          <a href="/contact">Bulk Enquiry</a>
          <a href="/contact">Return Policy</a>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>📍 11/A Rangalal Street, Khidirpur, Kolkata - 700023</p>

          <p>📞 +91 96749 84559</p>

          <p>✉️ admin@nextuniform.com</p>

          <div className="social-links">
            <a
              href="https://www.instagram.com/nextuniform/"
              target="_blank"
              rel="noreferrer"
              className="social instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/nextuniform"
              target="_blank"
              rel="noreferrer"
              className="social facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/in/next-uniform-20b2293b1/"
              target="_blank"
              rel="noreferrer"
              className="social linkedin"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <p>© 2025 NextUniform. All Rights Reserved.</p>
          <p className="dev-credit">Developed by Dikshit Raj</p>
        </div>

        <div className="footer-links">
          <a href="/">Privacy Policy</a>
          <span>|</span>
          <a href="/">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;