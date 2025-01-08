import React from "react";
import "../layout/navbar.css";

// Dynamically load all images from the images folder
const images = require.context("./images", false, /\.(png|jpe?g|svg)$/);

const ProductCard = ({ products, onAddToCart }) => {
  // Get all image paths and extract names
  const imageList = images.keys().map((imagePath) => {
    const fileName = imagePath.replace(/^.*[\\/]/, "").replace(/\.(png|jpe?g|svg)$/, ""); // Remove path and extension
    return {
      src: images(imagePath),
      name: fileName.charAt(0).toUpperCase() + fileName.slice(1), // Capitalize the first letter
    };
  });

  return (
    <div className="product-grid">
      {imageList.map((image, index) => (
        <div className="card" key={index}>
          <img className="image" src={image.src} alt={`Product ${index + 1}`} />
          <h3>{products?.[index]?.name || image.name}</h3>
          <h4>This is an amazing product ever.</h4>
          <p>${products?.[index]?.price || 200}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
