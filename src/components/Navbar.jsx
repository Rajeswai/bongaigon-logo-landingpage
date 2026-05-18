import React from "react";
import "../App.css";
import logo from "../assets/images/logoimage.png";

const Navbar = () => {
  const navItems = [
    { name: "Overview", id: "about-project" },
    { name: "Amenities", id: "amenities" },
    { name: "Walkthrough", id: "walkthrough" },
    { name: "Gallery", id: "gallery" },
    { name: "Plans", id: "plan" },
    { name: "Location", id: "location" },
    { name: "About Us", id: "about-builder" },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (!section) {
      console.log("Section not found:", id);
      return;
    }

    const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 90;

    window.scrollTo({
      top: section.offsetTop - navbarHeight,
      behavior: "smooth",
    });
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

        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={`#${item.id}`} onClick={(e) => handleScroll(e, item.id)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="navbar-btn"
          onClick={(e) => handleScroll(e, "contact")}
        >
          Enquire Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;