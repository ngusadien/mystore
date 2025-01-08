import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <a href="/">E-Shop</a>
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for products..."
          className="search-input"
        />
        <button className="search-btn">Search</button>
      </div>

      {/* Menu Links */}
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
 
      {/* Cart Icon */}
      <div className="navbar-cart">
        <a href="/cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">3</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;