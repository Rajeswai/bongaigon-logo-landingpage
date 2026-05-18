import React from "react";
import "../App.css";

const Highlights = () => {
  const items = [
    "Luxury Residences in Bongaigaon",
    "Modern Amenities for Everyday Life",
    "Peaceful Green Surroundings",
    "Premium 3 BHK & 4 BHK Homes",
    "A Lifestyle Upgrade",
  ];

  return (
    <section className="highlight-marquee-section">
      <div className="highlight-marquee">
        <div className="highlight-track">
          {[...items, ...items].map((item, index) => (
            <div className="highlight-item" key={index}>
              <span>{item}</span>
              <i></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;