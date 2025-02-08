import React from "react";
import "./Aboutus.css";

const AboutUs: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title animate-fadeIn">About Us</h2>
        <p className="about-text animate-fadeInDelay">
          Welcome to <span className="highlight">EMET ENTERPRISES</span>, your trusted partner in global exports. 
          As we embark on our journey, our mission is to connect the world with nature’s finest treasures.  
        </p>
        <p className="about-text animate-fadeInDelay">
          With a commitment to quality, sustainability, and integrity, we aim to build strong relationships with 
          clients worldwide, delivering excellence in every shipment. Whether it’s raw materials, organic produce, 
          or artisanal goods, we ensure that only the best reaches international markets.
        </p>
        <p className="about-text animate-fadeInDelay">
          As we prepare for launch, we are dedicated to creating a seamless and reliable export experience.  
          Join us on this journey as we bring the finest products from our homeland to the global stage.  
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
