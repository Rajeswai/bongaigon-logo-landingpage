import React from "react";
import { Building2, Landmark, Home } from "lucide-react";
import "../App.css";
import aboutImage from "../assets/images/aboutimage.png";

const AboutBuilder = () => {
  return (
    <section className="about-builder-section" id="about">
      <div className="about-builder-container">
        <div className="about-builder-left">
          <p className="about-builder-label">About Subham Park</p>

          <h2>
            Crafted For <br />
            <strong>Modern Life</strong>
          </h2>

          <p className="about-builder-text">
            A thoughtfully planned community in Bongaigaon, offering modern
            living, excellent connectivity, and a peaceful environment for
            families to thrive.
          </p>

          <div className="about-builder-features">
            <div className="about-builder-feature">
              <div className="about-builder-icon">
                <Building2 />
              </div>
              <div>
                <h3>Premium Units</h3>
                <p>48 Units</p>
              </div>
            </div>

            <div className="about-builder-feature">
              <div className="about-builder-icon">
                <Landmark />
              </div>
              <div>
                <h3>Elevated Living</h3>
                <p>G+7 Storeys</p>
              </div>
            </div>

            <div className="about-builder-feature">
              <div className="about-builder-icon">
                <Home />
              </div>
              <div>
                <h3>3BHK & 4BHK</h3>
                <p>Configurations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-builder-image-box">
          <img src={aboutImage} alt="Subham Park" />
        </div>
      </div>
    </section>
  );
};

export default AboutBuilder;