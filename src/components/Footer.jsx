import React from 'react';
import * as LucideIcons from 'lucide-react';
import "../App.css";

// ইমেজ পাথ তোর ফোল্ডার অনুযায়ী ঠিক করা হয়েছে
import logoImg from "../assets/images/logoimage.png"; 

const Footer = () => {
  const { 
    Phone, Mail, MapPin, ChevronRight, 
    ShieldCheck, Trees, Dumbbell, Baby, 
    Waves, Landmark, ArrowUp 
  } = LucideIcons;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-premium">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo-box">
            <img src={logoImg} alt="Subham Park" className="footer-logo" />
            <div className="logo-text">
              <h3>SUBHAM PARK</h3>
              <p>BONGAIGAON</p>
            </div>
          </div>
          <p className="brand-desc">
            Creating premium residences with elegant architecture, thoughtful planning, and lasting value for generations.
          </p>
          {/* সোশ্যাল মিডিয়া আইকনগুলো এখান থেকে সরিয়ে দেওয়া হয়েছে */}
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>{ChevronRight && <ChevronRight size={14} className="gold-icon" />} Home</li>
            <li>{ChevronRight && <ChevronRight size={14} className="gold-icon" />} About Project</li>
            <li>{ChevronRight && <ChevronRight size={14} className="gold-icon" />} Amenities</li>
            <li>{ChevronRight && <ChevronRight size={14} className="gold-icon" />} Floor Plans</li>
            <li>{ChevronRight && <ChevronRight size={14} className="gold-icon" />} Gallery</li>
            <li>{ChevronRight && <ChevronRight size={14} className="gold-icon" />} Location</li>
            <li>{ChevronRight && <ChevronRight size={14} className="gold-icon" />} Contact Us</li>
          </ul>
        </div>

        {/* Amenities Section */}
        <div className="footer-amenities">
          <h4>AMENITIES</h4>
          <ul>
            <li>{Landmark && <Landmark size={16} className="gold-icon" />} Club House</li>
            <li>{Waves && <Waves size={16} className="gold-icon" />} Swimming Pool</li>
            <li>{Baby && <Baby size={16} className="gold-icon" />} Children's Play Area</li>
            <li>{Dumbbell && <Dumbbell size={16} className="gold-icon" />} Gymnasium</li>
            <li>{Trees && <Trees size={16} className="gold-icon" />} Landscaped Garden</li>
            <li>{ShieldCheck && <ShieldCheck size={16} className="gold-icon" />} 24/7 Security</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-contact">
          <h4>CONTACT DETAILS</h4>
          <div className="contact-item">
            <div className="icon-circle">{Phone && <Phone size={16} />}</div>
            <div className="text">
              <p>Phone</p>
              <span>9854641000 / 0361 234 2344</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon-circle">{Mail && <Mail size={16} />}</div>
            <div className="text">
              <p>Email</p>
              <span>info@subhamgroup.com</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon-circle">{MapPin && <MapPin size={16} />}</div>
            <div className="text">
              <p>Location</p>
              <span>Bongaigaon, Assam - 783380</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <p>© 2025 Subham Group. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#">Terms & Conditions</a>
            <span className="separator">|</span>
            <a href="#">Sitemap</a>
          </div>
          <button className="scroll-top-btn" onClick={scrollToTop}>
            {ArrowUp && <ArrowUp size={20} />}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;