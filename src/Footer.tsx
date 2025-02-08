import React from "react";
import "./Footer.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const scrollToSection = (section: string, page?: string) => {
    if (page) {
      // Navigate to the page first
      navigate(page);
      // Scroll to the section after the page loads
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          offset: -100, // Adjust offset if you have a fixed header
          duration: 500,
        });
      }, 100); // Small delay to ensure the page has loaded
    } else {
      // Scroll to the section on the current page
      scroller.scrollTo(section, {
        smooth: true,
        offset: -100,
        duration: 500,
      });
    }
     // Close the mobile menu after navigation
  };
  return (
    <footer className="footer">
      <div className="footerContent">

        <div className="footerSection">
          <h3>Contact Us</h3>
          <p>Email: emetspiceworldkl07@gmail.com</p>
          <p>Phone: +91 8547397175</p>
          <p>Address: Kocharackal, Vazhavatta,Wayanad,673122</p>
        </div>

        {/* Quick Links */}
        <div className="footerSection">
          <h3>Quick Links</h3>
          <ul>
          <li>
            <button
            className="text-button"
              onClick={() => scrollToSection("app", "/")}
              // aria-label="Home"
            >
              Home
            </button>
            </li>
            <li>
            <button
            className="text-button"
              onClick={() => scrollToSection("s2", "/")}
              // aria-label="Home"
            >
              About Us
            </button>
            </li><li>
            <button
            className="text-button"
              onClick={() => scrollToSection("services", "/")}
              // aria-label="Home"
            >
              Services
            </button>
            </li><li>
            <button
            className="text-button"
              onClick={() => scrollToSection("contactContent", "/")}
              // aria-label="Home"
            >
              Contact Us
            </button>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footerSection">
          <h3>Follow Us</h3>
          <div className="socialLinks">
            <a href="https://facebook.com" aria-label="Facebook">
            <img src="icons8-twitter.svg" alt="" /> 
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              Twitter
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              Instagram
            </a>
          </div>
          
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footerBottom">
        <p>© Emet Enterprises. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;