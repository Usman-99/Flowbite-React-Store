import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/cartContext";
import ReactFooter from "./layout/Footer";
import ProductDetail from "./pages/SingleProduct";
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
