import React from "react";
import { Link } from "react-router-dom";
import "../styles/Industrial.css";

import banner from "../asstes/hospital.png";
import { hospitalProducts } from "../data/hospitalProducts";

function Hospital() {

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
            Home &gt; Hospital
          </p>

          <h1>Hospital Uniforms</h1>

          <p className="banner-text">
            Hygienic, Comfortable and Professional Healthcare Apparel.
          </p>

          <div className="banner-features">
            <span>✓ Hygienic Fabric</span>
            <span>✓ Medical Grade Quality</span>
            <span>✓ Comfortable Fit</span>
            <span>✓ Bulk Order Support</span>
          </div>

        </div>
      </div>

      <div className="product-grid">

        {hospitalProducts.map((item) => (
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

export default Hospital;