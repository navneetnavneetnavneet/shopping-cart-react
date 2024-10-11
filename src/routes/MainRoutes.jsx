import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../components/home/HomePage";
import ProductDetails from "../components/partials/ProductDetails";
import CartItems from "../components/partials/CartItems";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartItems />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
