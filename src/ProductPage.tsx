// ProductPage.tsx
import React from 'react';
import ProductCard from './ProductCard';
import './ProductPage.css';

const products = [
  
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
    
  },
  {
    image: "/spices.jpg",
    subtitle: "Quality Certification", 
    title: "Spices Export",
    description: "Quality certifications ensuring compliance with global food safety and handling standards."
  }
];

const ProductPage: React.FC = () => {
  return (
    <div className="product-page">
      <h1>Our Services</h1>
      <div className="product-page__list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.title}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
