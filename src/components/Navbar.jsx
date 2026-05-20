// src/components/Navbar.jsx

import React from "react";
import "../App.css";
import logo from "../assets/images/logoimage.png";

const Navbar = ({ onOpenPopup }) => {
  const navItems = [
    { name: "Overview", id: "about-project" },
    { name: "Amenities", id: "amenities" },
    { name: "Gallery", id: "gallery" },
    { name: "Plans", id: "plan" },
    { name: "Location", id: "location" },
    { name: "About Us", id: "about-builder" },
  ];

  const closeMenu = () => {
    const checkbox = document.getElementById("nav-toggle");
    if (checkbox) checkbox.checked = false;
  };

  const handleScroll = (e, id) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (!section) return;

    const navbarHeight =
      document.querySelector(".navbar")?.offsetHeight || 90;

    window.scrollTo({
      top: section.offsetTop - navbarHeight,
      behavior: "smooth",
    });

    closeMenu();
  };

  // Enquire Now button click -> Popup Open
  const handleEnquireClick = (e) => {
    e.preventDefault();
    closeMenu();

    if (onOpenPopup) {
      onOpenPopup();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-box">
          <img
            src={logo}
            alt="Subham Park Bongaigaon Logo"
            className="navbar-logo"
          />
        </div>

        <input type="checkbox" id="nav-toggle" className="nav-toggle" />

        <label htmlFor="nav-toggle" className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CLICK করলে Popup Form Open হবে */}
        <button
          type="button"
          className="navbar-btn"
          onClick={handleEnquireClick}
        >
          Enquire Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;