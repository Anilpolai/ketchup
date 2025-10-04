import React from "react";
import "./ProductWallpaper.css";
import k1 from "../../img/slider/katchap1.png";
import k2 from "../../img/slider/katchap2.png";
import k3 from "../../img/slider/katchap3.png";

export default function ProductWallpaper() {
  return (
    <section className="product-wallpaper">
      <div className="product-wallpaper-container">
        {/* Left side big vertical image */}
        <div className="wallpaper-left">
          <img src={k1} alt="Ketchup Bottle" className="big-img" />
        </div>

        {/* Right side horizontal two images */}
        <div className="wallpaper-right">
          <div className="right-item">
            <img src={k2} alt="Ketchup Product" className="small-img" />
            <div className="text-box">
              <h3>Premium Tomato Ketchup</h3>
              <p>Freshly crafted with finest ingredients for quality taste.</p>
            </div>
          </div>

          <div className="right-item">
            <img src={k3} alt="Ketchup Product" className="small-img" />
            <div className="text-box">
              <h3>Organic Ketchup</h3>
              <p>100% natural and perfect for every recipe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
