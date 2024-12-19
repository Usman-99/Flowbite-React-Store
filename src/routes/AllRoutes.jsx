import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import MainContainer from "../container/maincontainer";
import ProductDetail from "../pages/SingleProduct";
function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<MainContainer/>}>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/Cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AllRoutes;
