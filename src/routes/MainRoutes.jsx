import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../components/home/HomePage";
import ProductDetails from "../components/partials/ProductDetails";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
