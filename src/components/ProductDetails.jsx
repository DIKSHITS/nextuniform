import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../styles/ProductDetails.css";
import { getProductById } from "../data/industrialProducts";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();

  const productFromState = location.state?.product;
  const product = productFromState || getProductById(Number(id));

  const images = useMemo(() => product?.gallery || [], [product]);

  const [selectedImage, setSelectedImage] = useState("");
  const [qty, setQty] = useState(10);
  const [selectedSize, setSelectedSize] = useState("M");

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  const whatsappMessage = useMemo(() => {
    if (!product) return "";

    return encodeURIComponent(
`Hello,

I want to place an order.

Product: ${product.title}
Size: ${selectedSize}
Quantity: ${qty}

Please share pricing, delivery details and customization options.

Thank You.`
    );
  }, [product, selectedSize, qty]);

  if (!product) {
    return (
      <div className="product-details">
        <h2>Product not found.</h2>
      </div>
    );
  }

  return (
    <div className="product-details">
      <div className="product-top">

        {/* Product Gallery */}
        <div className="product-gallery">

          <div className="thumbs">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.title}
                onClick={() => setSelectedImage(img)}
                className={selectedImage === img ? "active-thumb" : ""}
              />
            ))}
          </div>

          <div className="main-image">
            <img
              src={selectedImage || images[0]}
              alt={product.title}
            />
          </div>

        </div>

        {/* Product Information */}
        <div className="product-info">

          <h1>{product.title}</h1>

          <h2>₹{product.price}.00</h2>

          <p>{product.desc}</p>

          <h3>Features</h3>

          <ul>
            <li>Heavy-duty fabric</li>
            <li>Reflective tape</li>
            <li>Multiple pockets</li>
            <li>Comfort fit</li>
            <li>Custom branding available</li>
          </ul>

          {/* Size Selection */}
          <h3>Select Size</h3>

          <div className="sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                type="button"
                className={
                  selectedSize === size ? "active-size" : ""
                }
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Show Selected Size */}
          <p style={{ marginBottom: "20px", fontWeight: "600" }}>
            Selected Size: {selectedSize}
          </p>

          {/* Quantity */}
          <h3>Quantity</h3>

          <div className="qty-box">
            <button
              type="button"
              onClick={() => setQty(Math.max(1, qty - 1))}
            >
              -
            </button>

            <span>{qty}</span>

            <button
              type="button"
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">

            <a
              href={`https://wa.me/919674984559?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Send Order on WhatsApp
            </a>

            <Link
              to="/quote"
              className="quote-btn"
            >
              Get a Quote
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails;