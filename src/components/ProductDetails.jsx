import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../styles/ProductDetails.css";

import { getProductById } from "../data/industrialProducts";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const productFromState = location.state?.product;
  const product = productFromState || getProductById(Number(id));
  const whatsappNumber = "919876543210";

  const images = useMemo(() => product?.gallery || [], [product]);

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [qty, setQty] = useState(10);

  const whatsappMessage = useMemo(() => {
    if (!product) {
      return "";
    }

    return encodeURIComponent(
      `Hello, I want to place an order for ${product.title}. Quantity: ${qty}. Please share the details.`
    );
  }, [product, qty]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  if (!product) {
    return (
      <div className="product-details">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="product-details">

      <div className="product-top">

        <div className="product-gallery">

          <div className="thumbs">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.title}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          <div className="main-image">
            <img src={selectedImage} alt={product.title} />
          </div>

        </div>

        <div className="product-info">

          <h1>{product.title}</h1>

          <h2>{product.price}.00</h2>

          <p>
            {product.desc}
          </p>

          <h3>Features</h3>

          <ul>
            <li>Heavy-duty fabric</li>
            <li>Reflective tape</li>
            <li>Multiple pockets</li>
            <li>Comfort fit</li>
            <li>Custom branding available</li>
          </ul>

          <div className="sizes">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
          </div>

          <div className="qty-box">
            <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          <div className="action-buttons">
            <a
              className="whatsapp-btn"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              Send Order on WhatsApp
            </a>

           <Link to="/quote" className="quote-btn">
  Get a Quote
</Link>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;