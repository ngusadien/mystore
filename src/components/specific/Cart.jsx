import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  // Add a product to the cart
  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Show popup message
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  // Increase product quantity
  const handleIncrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease product quantity
  const handleDecrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter((item) => item.quantity > 0) // Remove items with 0 quantity
    );
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Handle checkout functionality
  const handleCheckout = () => {
    alert(`Your order of $${calculateTotal()} has been placed successfully!`);
    setCart([]);
  };

  return (
    <div className="cart-container">
      <ProductCard products={mockProducts} onAddToCart={handleAddToCart} />

      {showMessage && <div className="popup-message">Item added to cart successfully!</div>}

      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <span>{item.name}</span>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item.id)}>+</button>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <h3>Total: ${calculateTotal()}</h3>
              <button onClick={handleCheckout} className="checkout-button">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Mock products for demonstration
const mockProducts = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

export default Cart;
