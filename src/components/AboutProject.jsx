import React from "react";
import { Building2, Trees, ShieldCheck, Dumbbell } from "lucide-react";
import "../App.css";
import aboutArtElevation from "../assets/images/aboutartelivation.jpeg";

const AboutProject = () => {
  return (
    // IMPORTANT: id অবশ্যই "about-project" হবে
    // কারণ Navbar-এর Overview link = "#about-project"
    <section className="about-project" id="about-project">
      <div className="about-image-card">
        <img src={aboutArtElevation} alt="Subham Park Art Elevation" />
      </div>

      <div className="about-content">
        <h2>
          Crafted for Comfort <br />
          <span>Built for Life</span>
        </h2>

        <div className="about-line">
          <span></span>
          <i></i>
          <span></span>
        </div>

        <p>
          Subham Park Bongaigaon is a premium residential development that
          brings together contemporary architecture, thoughtful design, and
          world-class amenities to create a lifestyle of comfort, convenience,
          and sophistication.
        </p>

        <p>
          Every detail of our project reflects our commitment to quality,
          sustainability, and customer satisfaction. From spacious homes and
          landscaped surroundings to modern amenities and excellent
          connectivity, we ensure a living experience that truly stands apart.
        </p>

        <div className="about-features">
          <div className="about-feature">
            <div className="about-icon">
              <Building2 size={34} />
            </div>
            <h4>Premium Residences</h4>
            <small>3 & 4 BHK Luxury Apartments</small>
          </div>

          <div className="about-feature">
            <div className="about-icon">
              <Trees size={34} />
            </div>
            <h4>Landscaped Garden</h4>
            <small>Beautiful Gardens & Open Spaces</small>
          </div>

          <div className="about-feature">
            <div className="about-icon">
              <ShieldCheck size={34} />
            </div>
            <h4>24×7 Security</h4>
            <small>Advanced Security & CCTV Surveillance</small>
          </div>

          <div className="about-feature">
            <div className="about-icon">
              <Dumbbell size={34} />
            </div>
            <h4>Lifestyle Amenities</h4>
            <small>Clubhouse, Gym, Kids Play Area & More</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;