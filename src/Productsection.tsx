import React from 'react';
import './Productsection.css';
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
interface ProductItem {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const productData: ProductItem[] = [
  {
    image: "/fruits.jpg",
    subtitle: "Quality Services",
    title: "Premium Fruit Export",
    description: "Efficient exportation of diverse fruits, carefully selected and transported to maintain natural freshness and taste."
  },
  {
    image: "/vegetables.jpg", 
    subtitle: "Vegetable Export",
    title: "Vegetable Export", 
    description: "We specialize in exporting fresh, high-quality vegetables worldwide, ensuring farm-to-market freshness with sustainable practices and reliable logistics.",
    reverse: true
  },
  {
    image: "/spices.jpg",
    subtitle: "Quality Certification", 
    title: "Spices Export",
    description: "Quality certifications ensuring compliance with global food safety and handling standards."
  }
];

const ProductSection: React.FC = () => {
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

  return (<div>
    <h1 className="services-title">Our Services</h1>
    <section className="product-section">
      {productData.map((item, index) => (
        <div 
          key={index} 
          className={`product-container ${item.reverse ? 'reverse' : ''}`}
        >
          <div className="product-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="product-card">
            {/* <h2>{item.subtitle}</h2> */}
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button className="learn-more">Get a Quote</button>
          </div>
        </div>
      ))}
    </section>
    <button className="ad" onClick={() => scrollToSection("", "/products")}>View more</button>
    </div>
  );
};

export default ProductSection;