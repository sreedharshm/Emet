import React  from "react";
import ContactUsMap from "./Map";
import ProductSection from "./Productsection";
import "./Homepage.css"
import { useEffect } from "react";
import LandingSection from "./LandingSection";
import AboutUs from "./Aboutus";
// HomePage Component
const HomePage: React.FC = () => {
  useEffect(() => {
    const animateElements = () => {
      const slogan = document.querySelector(".sloganText");
      const subSlogan = document.querySelector(".subSlogan");
      const logo = document.querySelector(".logoContainer");

      if (slogan && subSlogan && logo) {
        slogan.classList.add("animate");
        subSlogan.classList.add("animate");
        logo.classList.add("animate");
      }
    };
    animateElements();
  }, []);

  return (
    <div className="app">
      {/* Background Image Section */}
      <div className="backgroundImage">
      <LandingSection/>
      </div>

      <section id="s1" >
          <AboutUs/>
      
    </section>


      {/* Services Section */}
      <section id="s2" className="section">
        <h2>Products</h2>
        <p>This is another section.</p>
      </section >
      <div id="services">
      <ProductSection/>
      </div>
      
      {/* Contact Us Section */}
      <section id="s3" className="s3">
  <div className="contactContent">
    {/* Left side: Contact Us Map */}
    <div className="contactMap">
      <ContactUsMap />
    </div>

    {/* Right side: Contact Form */}
    <div className="contactForm">
      <h1>Contact Us</h1>

      <form action="https://formsubmit.co/dc875752664b16632ad196dc5c56403b"  method="POST">
        <div className="formGroup">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={5}
            required
          ></textarea>
        </div>

        <button className="learn-more" type="submit">Send Message</button>
      </form>

      <div className="companyInfo">
        <p>Email: emetspiceworldkl07@gmail.com</p>
        <p>Phone:+91 8547397175</p>
      </div>
    </div>
  </div>
</section>
  </div>
  );
};

export default HomePage;
