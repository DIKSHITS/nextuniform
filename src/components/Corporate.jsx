import React from "react";
import { Link } from "react-router-dom";
import "../styles/Industrial.css";

import banner from "../asstes/corporate.png";
import { corporateProducts } from "../data/corporateProducts";

function Corporate() {
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
            Home &gt; Corporate
          </p>

          <h1>Corporate Uniforms</h1>

          <p className="banner-text">
            Professional, Elegant and Powerful Corporate Attire.
          </p>

          <div className="banner-features">
            <span>✓ Premium Fabrics</span>
            <span>✓ Corporate Branding</span>
            <span>✓ Executive Styling</span>
            <span>✓ Bulk Order Support</span>
          </div>

        </div>
      </div>

      <div className="product-grid">

        {corporateProducts.map((item) => (
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

export default Corporate;