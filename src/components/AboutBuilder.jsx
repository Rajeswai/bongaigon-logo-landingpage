import React from "react";
import {
  Building2,
  Home,
  Construction,
  Users,
  ShieldCheck,
  Clock3,
  Eye,
  Handshake,
  Landmark,
} from "lucide-react";
import "../App.css";
import builderSketch from "../assets/images/builder-sketch.jpeg";

class AboutBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: "completed" };
  }

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;

    const stats = [
      { icon: <Building2 />, number: "16+", label: "Completed\nProjects" },
      { icon: <Home />, number: "28Lac+", label: "Sq. Ft.\nConstructed" },
      { icon: <Construction />, number: "15Lac+", label: "Sq. Ft.\nOngoing" },
      { icon: <Users />, number: "6000+", label: "Happy\nResidents" },
    ];

    const projects = {
      completed: {
        title: "Completed Projects",
        list: [
          { name: "Subham Heights", location: "Kahilipara" },
          { name: "Subham Enclave", location: "Hatigaon" },
          { name: "Subham Park View", location: "Fatasil" },
          { name: "Subham Elite", location: "Gandhibasti" },
          { name: "Subham Classic", location: "Ambikagiri Nagar" },
          { name: "Subham Manjushree", location: "Datalpara" },
          { name: "Subham Regency", location: "Hengrabari" },
          { name: "Subham Residency", location: "Kharguli" },
        ],
      },
      ongoing: {
        title: "Ongoing Projects",
        list: [
          { name: "Subham Garden", location: "Jorhat" },
          { name: "Subham Solitaire", location: "Agartala" },
          { name: "Subham Ashray", location: "Garal" },
          { name: "Subham Park", location: "Sonarigaon" },
          { name: "Subham Kishori Heights", location: "Dibrugarh" },
          { name: "The Peak", location: "GS Road" },
        ],
      },
      commercial: {
        title: "Commercial Projects",
        list: [
          { name: "Subham Velocity", location: "Guwahati" },
          { name: "Subham Redstone", location: "Downtown" },
          { name: "Bijay Crescent", location: "PBCO" },
          { name: "Subham Square", location: "Lokhra" },
        ],
      },
    };

    const values = [
      { icon: <ShieldCheck />, label: "Quality\nConstruction" },
      { icon: <Clock3 />, label: "Timely\nDelivery" },
      { icon: <Eye />, label: "Transparent\nDealings" },
      { icon: <Handshake />, label: "Customer\nFirst Approach" },
    ];

    return (
      <section className="builder-section" id="about-builder">
        <div className="builder-left">
          <div className="builder-label">
            <span></span>
            <p>About The Developer</p>
            <span></span>
          </div>

          <h2 className="builder-main-title">
            Time-Bound Projects & <br />
            <span className="gold-text">Timeless Relationship</span>
          </h2>

          <p className="builder-desc">
            With a strong legacy of delivering landmark residential and commercial
            spaces, Subham Group continues to shape modern living with integrity,
            innovation, and unmatched quality.
          </p>

          <div className="builder-sketch">
            <img src={builderSketch} alt="Subham Group Sketch" />
          </div>

          <div className="builder-stats">
            {stats.map((item, index) => (
              <div className="builder-stat" key={index}>
                <div className="builder-stat-icon">{item.icon}</div>
                <h3>{item.number}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className="builder-left-note">
            <div className="left-note-icon">
              <Building2 />
            </div>
            <div className="note-text-content">
              <p>
                Building more than structures <br />
                we build <strong>trust</strong> for a better tomorrow
              </p>
            </div>
            <div className="left-note-dots"></div>
          </div>
        </div>

        <div className="builder-right">
          <div className="portfolio-label">
            <span></span>
            <p>Our Portfolio</p>
            <span></span>
          </div>

          <h2 className="portfolio-main-title">
            Crafting Landmarks{" "}
            <span className="gold-text">Creating Trust</span>
          </h2>

          <div className="portfolio-tabs">
            <button
              type="button"
              className={activeTab === "completed" ? "active" : ""}
              onClick={() => this.setActiveTab("completed")}
            >
              <Landmark size={18} /> Completed Projects
            </button>

            <button
              type="button"
              className={activeTab === "ongoing" ? "active" : ""}
              onClick={() => this.setActiveTab("ongoing")}
            >
              <Construction size={18} /> Ongoing Projects
            </button>

            <button
              type="button"
              className={activeTab === "commercial" ? "active" : ""}
              onClick={() => this.setActiveTab("commercial")}
            >
              <Building2 size={18} /> Commercial Projects
            </button>
          </div>

          <div className="portfolio-box">
            <div className="portfolio-title-divider">
              <span></span>
              <h3>{projects[activeTab].title}</h3>
              <span></span>
            </div>

            <div className="single-project-grid">
              {projects[activeTab].list.map((project, index) => (
                <div className="builder-project-card" key={index}>
                  <div className="builder-project-art">
                    <Building2 />
                  </div>
                  <h4>{project.name}</h4>
                  <p>{project.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="builder-quote-card">
            <div className="builder-values">
              {values.map((item, index) => (
                <div className="builder-value" key={index}>
                  <div className="val-icon-box">{item.icon}</div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            <div className="quote-text-container">
              <span className="quote-mark">“</span>
              <p>
                We don’t just build structures, <br />
                we build spaces where{" "}
                <span className="gold-text-light">life flourishes.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutBuilder;