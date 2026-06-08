import React from "react";
import { Link } from "react-router-dom";
import "../styles/Industrial.css";

import banner from "../asstes/industrial.png";
import { products } from "../data/industrialProducts";

function Industrial() {
  return (
    <section className="industrial-page">
      <div
        className="industrial-banner"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="banner-overlay">
          <p className="breadcrumb">Home &gt; Industrial</p>

          <h1>Industrial Uniforms</h1>

          <p className="banner-text">
            Durable, Functional, Built for tough environments.
          </p>

          <div className="banner-features">
            <span>✓ Safety First</span>
            <span>✓ Premium Quality</span>
            <span>✓ Custom Made</span>
            <span>✓ Bulk Order Support</span>
          </div>
        </div>
      </div>

      <div className="product-grid">
        {products?.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <span className="price">{item.price}</span>

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

export default Industrial;