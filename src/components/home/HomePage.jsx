import React from "react";
import SideNav from "../partials/SideNav";
import ProductList from "./ProductList";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex">
      <SideNav />
      <ProductList />
    </div>
  );
};

export default HomePage;
