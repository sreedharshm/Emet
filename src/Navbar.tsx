import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scrolling to a section
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
    closeMenu(); // Close the mobile menu after navigation
  };

  return (
    <header>
      <nav>
        {/* Logo on the left side */}
        <div className="logo1">
          <img src="/logo.png"  alt="Logo" /> 
          
          {/* Replace with your logo */}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="navIcon"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          &#9776;
        </div>

        {/* Navigation Links */}
        <ul className={`navLinks ${isMenuOpen ? "active" : ""}`}>
          <li>
            <button
              onClick={() => scrollToSection("app", "/")}
              aria-label="Home"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("s1", "/")}
              aria-label="Scroll to About section"
            >
              About
            </button>
          </li>
          <li>
          <button
              onClick={() => scrollToSection("services", "/")}
              aria-label="Scroll to About section"
            >
             Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("s3", "/")}
              aria-label="Scroll to Contact Us section"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
