import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {

  return (
    <Link
      to={`/product-details/${product.id}`}
      className="w-48 px-2 py-4 bg-white outline-none border shadow-lg"
    >
      <div className="w-full h-48">
        <img
          className="w-full h-full hover:scale-105 transition-all duration-300 object-cover aspect-square"
          src={product?.thumbnail}
          alt=""
        />
      </div>
      <div className="w-full mt-2 flex items-start justify-between">
        <h1 className="w-2/3 text-base leading-tight font-semibold">
          {product?.title}
        </h1>
        <h1 className="text-base font-semibold">$ {product?.price}</h1>
      </div>
    </Link>
  );
};

export default Product;
