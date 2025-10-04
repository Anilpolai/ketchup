import React from "react";
import "./ProductSection.css";
import ketchup1 from '../../img/ketchup/ketchup1.jpg'
import { FaBeer } from "react-icons/fa"; // working react icon

export default function ProductSection() {
  return (
    <section className="product-section">
      <div className="container">
        <div className="product-row">
          {/* Left Side - Image */}
          <div className="product-left">
            {/* Label over image */}
            <div className="image-label">
              <FaBeer className="label-icon" />
              <span>+500 Basic</span>
            </div>

            <img
              src={ketchup1}
              alt="Ketchup Bottle"
              className="product-img"
            />
          </div>

          {/* Right Side - Content */}
          <div className="product-right">
            <h2 className="product-title">Premium Tomato Ketchup</h2>
            <p className="product-subtitle">
              Crafted from the finest tomatoes, our ketchup is perfect for
              restaurants, retailers, and bulk supply. Get reliable B2B delivery
              and premium taste for your business.
            </p>

            {/* Features */}
            <ul className="product-features">
              <li>✔ Bulk B2B Supply Available</li>
              <li>✔ 100% Natural & Organic Ingredients</li>
              <li>✔ Fast & Reliable Global Delivery</li>
              <li>✔ Export Quality Packaging</li>
            </ul>

            {/* Services Section */}
            <div className="product-services">
              <h4>Our Services</h4>
              <div className="services-list">
                <div className="service-box">Wholesale Supply</div>
                <div className="service-box">Private Labeling</div>
                <div className="service-box">Custom Packaging</div>
                <div className="service-box">Logistics Support</div>
              </div>
            </div>

            <button className="product-btn">Get a Quote</button>
          </div>
        </div>
      </div>
    </section>
  );
}
