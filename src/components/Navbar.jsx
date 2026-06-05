import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logoImg from "../asstes/logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logoImg} alt="NextUniform Logo" className="site-logo" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Navigation */}
        <nav className={`nav-menu ${menuOpen ? "active-menu" : ""}`}>

          <Link to="/" className="active">
            Home
          </Link>

          <div className="dropdown">
            <button
              className="dropdown-btn"
              onClick={() => setCategoryOpen(!categoryOpen)}
            >
              Categories ▼
            </button>

            {categoryOpen && (
              <div className="dropdown-menu">
                <Link to="/industrial">Industrial</Link>
<Link to="/hospital">Hospital</Link>
<Link to="/corporate">Corporate</Link>
<Link to="/hotel">Hotel</Link>
              </div>
            )}
          </div>

         
         
         <Link to="/about">About Us</Link>
          <Link to="/careerspage">Careers</Link>
          <Link to="/contact">Contact Us</Link>

        </nav>

        {/* Quote Button */}
        <Link to="/quote" className="quote-btn">
  Get a Quote
</Link>

      </div>
    </header>
  );
};

export default Navbar;