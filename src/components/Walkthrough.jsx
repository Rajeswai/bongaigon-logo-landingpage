import React from "react";
import "../App.css";

const Walkthrough = () => {
  return (
    <section className="walkthrough-section" id="walkthrough">
      <div className="walkthrough-header">
        <div className="walkthrough-label">
          <span></span>
          <p>Walkthrough</p>
          <span></span>
        </div>

        <h2>
          Take a Walk Through <strong>Your Future Home.</strong>
        </h2>

        <div className="walkthrough-divider">
          <span></span>
          <i></i>
          <span></span>
        </div>
      </div>

      <div className="walkthrough-video-card">
        <iframe
          src="https://www.youtube.com/embed/mJVuZiK9a6I"
          title="Subham Park Bongaigaon Walkthrough"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Walkthrough;