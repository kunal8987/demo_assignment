import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../../pages/Cart/Cart";
import Product from "../../pages/LandingPage/Products/Product";
import About from "../../pages/About/About";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Product />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AllRoutes;
