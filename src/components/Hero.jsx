import React from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";

import "../App.css";
import heroimage from "../assets/images/g9.webp";

const Hero = ({ onOpenPopup }) => {
  return (
    <section className="hero-section" id="home">
      <img
        src={heroimage}
        alt="Subham Park residential building"
        className="hero-bg"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Step Into
          <span>Spotlight Of</span>
          Modern Living.
        </h1>

        <div className="hero-description">
          <p>
            Bongaigaon's most coveted address offers you just that.
Built in a prime location with the best of modern amenities,
it's not just a home; it's a lifestyle upgrade.
          </p>

          <div className="hero-info">
            <div className="hero-info-card">
              <small>Starting Price</small>
              <div className="hero-price-list">
                <div className="hero-price-row">
                  <span>3 BHK</span>
                  <strong>₹63.54L</strong>
                </div>
                <div className="hero-price-row">
                  <span>4 BHK</span>
                  <strong>₹86.34L</strong>
                </div>
              </div>
            </div>

            <div className="hero-info-card">
              <small>
                <MapPin size={14} />
                Location
              </small>
              <strong>Guru Nanak Nagar,Chapaguri Road</strong>
            </div>
          </div>

          <div className="hero-buttons">
            <button
              type="button"
              className="hero-btn hero-btn-brochure brochure-cta"
              onClick={() => onOpenPopup("Download Brochure")}
            >
              <Download aria-hidden="true" />
              Download Brochure
              <ArrowRight aria-hidden="true" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
