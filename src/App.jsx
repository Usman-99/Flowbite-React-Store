import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { CartProvider } from "./context/cartContext";
import ReactFooter from "./components/Footer";
import ProductDetail from "./components/SingleProduct";
function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <ReactFooter />
      </Router>
    </CartProvider>
  );
}

export default App;
