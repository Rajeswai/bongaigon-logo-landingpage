import React from "react";
import { User, Phone, Mail, Building, PenTool, ArrowRight } from "lucide-react";
import "../App.css";

const Contact = () => {
  return (
    <section className="contact-premium-section" id="contact">
      {/* LEFT SIDE - TEXT SECTION */}
      <div className="contact-left">
        <div className="contact-label">
          <i></i>
          <span>Get in Touch</span>
        </div>
        <h2>
  Let's Build Something <br />
  <strong>Extraordinary Together</strong>
</h2>
        <p>
          Share your requirements with us and our team will get back to you with the best solutions for your dream space.
        </p>
      </div>

      {/* RIGHT SIDE - COMPACT FORM CARD */}
      <div className="contact-form-card">
        <h3>Tell Us About <strong>Your Requirement</strong></h3>
        
        <form>
          <div className="form-row">
            <div className="input-box">
              <User />
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-box">
              <Phone />
              <input type="text" placeholder="Phone Number" required />
            </div>
          </div>

          <div className="input-box">
            <Mail />
            <input type="email" placeholder="Your Email Address" required />
          </div>

          <div className="input-box">
            <Building />
            <select required>
              <option value="" disabled selected>I'm Interested In</option>
              <option value="residential">Residential Projects</option>
              <option value="commercial">Commercial Projects</option>
              <option value="ongoing">Ongoing Projects</option>
            </select>
          </div>

          <div className="input-box textarea-box">
            <PenTool />
            <textarea placeholder="Tell us about your requirement..."></textarea>
          </div>

          <button type="submit" className="contact-submit-btn">
            Enquire Now <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;