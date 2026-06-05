import React from "react";
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
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <a
              href="https://www.facebook.com/nextuniform"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social facebook"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3V2z" fill="currentColor"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/next-uniform-20b2293b1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social linkedin"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-14h4v2a4 4 0 0 1 4-2z" fill="currentColor"/>
                <rect x="2" y="9" width="4" height="12" fill="currentColor" rx="1"/>
                <circle cx="4" cy="4" r="2" fill="currentColor"/>
              </svg>
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