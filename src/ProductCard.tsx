// ProductCard.tsx
import React from 'react';
import './ProductCard.css';  // Import the CSS file

type ProductCardProps = {
  name: string;
  image: string;
   description: string;
  // price: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, image,description }) => {
  return (
    <div className="product-card1">
      <img src={image} alt={name} className="product-card__image" />
      <div className="product-card__info">
        <h2 className="product-card__name">{name}</h2>
        <p className="product-card__description">{description}</p>

      </div>
    </div>
  );
};

export default ProductCard;
