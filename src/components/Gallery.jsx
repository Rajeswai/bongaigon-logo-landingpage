import React from "react";
import "../App.css";

import eveningView from "../assets/images/gymnasium.jpeg";
import mainEntrance from "../assets/images/mainentrance.jpeg";
import kidsPlayArea from "../assets/images/kidsplayarea.jpeg";
import lobbyLounge from "../assets/images/lobbylounge.jpeg";
import indoorGames from "../assets/images/indoor-games.png";
import gymnasium from "../assets/images/semiarenaview.jpeg";
import splashPool from "../assets/images/splashpool.jpeg";
import picture1 from "../assets/images/picture1.jpeg";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: null,
    };

    this.galleryImages = [
      { image: eveningView, title: "Gymnasium", className: "gallery-tall" },
      { image: lobbyLounge, title: "Community Hall", className: "gallery-wide" },
      { image: mainEntrance, title: "Main Entrance", className: "gallery-small" },
      { image: kidsPlayArea, title: "Kids Play Area", className: "gallery-small" },
      { image: indoorGames, title: "Indoor Games Room", className: "gallery-bottom" },
      { image: gymnasium, title: "Semi-Aerial View", className: "gallery-bottom" },
      { image: splashPool, title: "Splash Pool", className: "gallery-bottom" },
      { image: picture1, title: "Semi-Aerial View", className: "gallery-bottom" },
    ];
  }

  openImage = (index) => {
    this.setState({ selectedIndex: index });
    document.body.classList.add("gallery-open");
  };

  closeImage = () => {
    this.setState({ selectedIndex: null });
    document.body.classList.remove("gallery-open");
  };

  prevImage = (e) => {
    e.stopPropagation();

    this.setState((prevState) => ({
      selectedIndex:
        prevState.selectedIndex === 0
          ? this.galleryImages.length - 1
          : prevState.selectedIndex - 1,
    }));
  };

  nextImage = (e) => {
    e.stopPropagation();

    this.setState((prevState) => ({
      selectedIndex:
        prevState.selectedIndex === this.galleryImages.length - 1
          ? 0
          : prevState.selectedIndex + 1,
    }));
  };

  componentWillUnmount() {
    document.body.classList.remove("gallery-open");
  }

  render() {
    const { selectedIndex } = this.state;
    const selectedImage =
      selectedIndex !== null ? this.galleryImages[selectedIndex] : null;

    return (
      <>
        <section className="gallery-section" id="gallery">
          <div className="gallery-header">
            <div className="gallery-label">
              <span></span>
              <p>Gallery</p>
              <span></span>
            </div>

            <h2>
              Spaces That Inspire <br />
              <strong>Details That Matter</strong>
            </h2>

            <p className="gallery-subtitle">
              Explore the design, comfort, and craftsmanship that define Subham Park
              Bongaigaon. Every image tells a story of quality living.
            </p>

            <div className="gallery-divider">
              <span></span>
            </div>
          </div>

          <div className="gallery-grid">
            {this.galleryImages.map((item, index) => (
              <div
                className={`gallery-card ${item.className}`}
                key={index}
                onClick={() => this.openImage(index)}
              >
                <img src={item.image} alt={item.title} />
                <div className="gallery-tag">{item.title}</div>
              </div>
            ))}
          </div>
        </section>

        {selectedImage && (
          <div className="gallery-modal" onClick={this.closeImage}>
            <button
              className="gallery-modal-close"
              onClick={this.closeImage}
              type="button"
            >
              ×
            </button>

            <button
              className="gallery-modal-arrow gallery-modal-prev"
              onClick={this.prevImage}
              type="button"
            >
              ‹
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="gallery-modal-arrow gallery-modal-next"
              onClick={this.nextImage}
              type="button"
            >
              ›
            </button>
          </div>
        )}
      </>
    );
  }
}

export default Gallery;