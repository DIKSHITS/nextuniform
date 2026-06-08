import React from "react";
import { Link } from "react-router-dom";
import "../styles/Industrial.css";

import banner from "../asstes/hotel.png";
import { hotelProducts } from "../data/hotelProducts";

function Hotel() {
  const products = Array.isArray(hotelProducts)
    ? hotelProducts
    : [];

  return (
    <section className="industrial-page">
      <div
        className="industrial-banner"
        style={{
          backgroundImage: `url(${banner})`,
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

  
        </div>
      </div>

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((item) => (
            <div className="product-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
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
          ))
        ) : (
          <h2 style={{ textAlign: "center", width: "100%" }}>
            No Products Found
          </h2>
        )}
      </div>
    </section>
  );
}

export default Hotel;