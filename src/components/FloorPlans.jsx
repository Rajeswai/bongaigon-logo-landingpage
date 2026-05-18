import React from "react";
import { ChevronLeft, ChevronRight, Map } from "lucide-react";
import "../App.css";

import map1 from "../assets/images/map1.jpeg";
import map2 from "../assets/images/map2.jpeg";
import map3 from "../assets/images/map3.jpeg";
import map4 from "../assets/images/map4.jpeg";

class FloorPlans extends React.Component {
  constructor(props) {
    super(props);

    this.plans = [
      { image: map1, title: "Floor Plan" },
      { image: map2, title: "Floor Plan" },
      { image: map3, title: "Floor Plan" },
      { image: map4, title: "Floor Plan" },
    ];

    this.state = {
      active: 0,
    };
  }

  prevSlide = () => {
    this.setState((prevState) => ({
      active:
        prevState.active === 0
          ? this.plans.length - 1
          : prevState.active - 1,
    }));
  };

  nextSlide = () => {
    this.setState((prevState) => ({
      active:
        prevState.active === this.plans.length - 1
          ? 0
          : prevState.active + 1,
    }));
  };

  goToSlide = (index) => {
    this.setState({
      active: index,
    });
  };

  render() {
    const { active } = this.state;
    const plans = this.plans;

    const leftIndex =
      active === 0 ? plans.length - 1 : active - 1;

    const rightIndex =
      active === plans.length - 1 ? 0 : active + 1;

    return (
      <section className="floorplan-section" id="plan">
        <div className="floorplan-header">
          <div className="floorplan-label">
            <span></span>
            <p>Floor Plan</p>
            <span></span>
          </div>

          <h2>
            Smart Layouts for <br />
            <strong>Modern Living.</strong>
          </h2>

        </div>

        <div className="floorplan-slider">
          <button
            type="button"
            className="floor-arrow left"
            onClick={this.prevSlide}
            aria-label="Previous floor plan"
          >
            <ChevronLeft size={26} />
          </button>

          <div className="floor-side-card floor-left">
            <div className="floor-card-title">
              <Map size={18} />
              <span>{plans[leftIndex].title}</span>
            </div>
            <img
              src={plans[leftIndex].image}
              alt={plans[leftIndex].title}
            />
          </div>

          <div className="floor-main-card">
            <div className="floor-card-title">
              <Map size={20} />
              <span>{plans[active].title}</span>
            </div>
            <img
              src={plans[active].image}
              alt={plans[active].title}
            />
          </div>

          <div className="floor-side-card floor-right">
            <div className="floor-card-title">
              <Map size={18} />
              <span>{plans[rightIndex].title}</span>
            </div>
            <img
              src={plans[rightIndex].image}
              alt={plans[rightIndex].title}
            />
          </div>

          <button
            type="button"
            className="floor-arrow right"
            onClick={this.nextSlide}
            aria-label="Next floor plan"
          >
            <ChevronRight size={26} />
          </button>
        </div>

        <div className="floor-dots">
          {plans.map((_, index) => (
            <button
              key={index}
              type="button"
              className={active === index ? "active" : ""}
              onClick={() => this.goToSlide(index)}
              aria-label={`Go to floor plan ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>
    );
  }
}

export default FloorPlans;