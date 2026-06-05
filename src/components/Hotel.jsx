import React from "react";
import { Link } from "react-router-dom";
import "../styles/Industrial.css";

import banner from "../asstes/hotel.png";
import { hotelProducts } from "../data/hotelProducts";

function Hotel() {
  const products = hotelProducts;

  return (
    <section className="industrial-page">

      <div
        className="industrial-banner"
        style={{
          backgroundImage: `url(${banner})`
        }}
      >
        <div className="banner-overlay">

          <p className="breadcrumb">
            Home &gt; Hotel
          </p>

          <h1>Hotel Uniforms</h1>

          <p className="banner-text">
            Elegant Hospitality Uniforms Designed For Excellence.
          </p>

          <div className="banner-features">
            <span>✓ Premium Fabric</span>
            <span>✓ Elegant Design</span>
            <span>✓ Custom Branding</span>
            <span>✓ Bulk Order Support</span>
          </div>

          <div className="banner-buttons">
            <Link to="/" className="primary-btn">Explore Categories →</Link>
            <Link to="/quote" className="secondary-btn">Get a Quote</Link>
          </div>

        </div>
      </div>

      {/* tabs removed per request */}

      <div className="product-grid">

        {products.map((item) => (
          <div
            className="product-card"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <span className="price">
              {item.price}
            </span>

            <Link
              to={`/product/${item.id}`}
              className="view-btn"
              state={{ product: item }}
            >
              View Collection →
            </Link>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Hotel;