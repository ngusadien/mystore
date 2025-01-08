import React from "react";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import ProductCard from "./components/specific/product";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <div>
        {/* Main content of your app */}
        <h1>Welcome to the React App</h1>
        <ProductCard/>

      </div>
      <Footer/>
    </>
  );
}

export default App;
