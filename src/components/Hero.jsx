import React from "react";
import {
  MapPin,
  Building2,
  Layers,
  Home,
  Dumbbell,
  ArrowRight,
  PlayCircle,
  Phone,
} from "lucide-react";
import "../App.css";
import heroImage from "../assets/images/herosectionimage.png";

const Hero = () => {
  return (
    <>
      {/* Navbar er sathe mil rakhar jonno id="about-project" kora holo */}
      <section className="hero" id="about-project">
        <div className="hero-leaf-bg"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <span></span>
            Quiet Luxury Living
            <span></span>
          </div>

          <h1>
            Step Into <br />
            <strong>Spotlight of</strong> <br />
            Modern Living
          </h1>

          <div className="hero-line">
            <span></span>
            <i></i>
            <span></span>
          </div>

          <p>
            Imagine a life where everything you need is just a step away.
            Bongaigaon’s most coveted address offers you just that. Built in a
            prime location with the best of modern amenities, it’s not just a
            home; it’s a lifestyle upgrade.
          </p>

          <div className="hero-details">
            <div className="detail-item">
              <Building2 size={22} />
              <span>1 Residential Tower</span>
            </div>

            <div className="detail-item">
              <MapPin size={22} />
              <span>Site Area: 28800 Sq.Ft. Approx</span>
            </div>

            <div className="detail-item">
              <Layers size={22} />
              <span>G+7 Storeys</span>
            </div>

            <div className="detail-item">
              <Home size={22} />
              <span>48 Spacious Flats</span>
            </div>

            <div className="detail-item">
              <Home size={22} />
              <span>3 BHK & 4 BHK</span>
            </div>

            <div className="detail-item">
              <Dumbbell size={22} />
              <span>Club House</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="hero-btn primary">
              Enquire Now <ArrowRight size={18} />
            </a>

            <a href="#walkthrough" className="hero-btn secondary">
              View Walkthrough <PlayCircle size={19} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img src={heroImage} alt="Subham Park Bongaigaon" />
        </div>
      </section>

      <a href="#contact" className="mobile-sticky-cta">
        <Phone size={18} />
        Enquire Now
      </a>
    </>
  );
};

export default Hero;