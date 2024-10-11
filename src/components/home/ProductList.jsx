import React, { useContext } from "react";
import Product from "../partials/Product";
import { ProductContext } from "../../context/productContext";

const ProductList = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading)
    return (
      <h1 className="text-center w-full mt-20 text-2xl font-bold italic">
        Please waitin Products is Loading . . .
      </h1>
    );
  return (
    <div className="w-[80%] h-screen">
      <div className="w-full h-[10vh] border-b border-zinc-400 flex items-center justify-center">
        <h1 className="text-3xl font-black tracking-widest">
          Product Here . . .
        </h1>
      </div>
      <div className="w-full h-[90vh] overflow-y-auto overflow-x-hidden flex flex-wrap gap-10 px-10 py-10">
        {products && products.map((product) => <Product product={product} />)}
      </div>
    </div>
  );
};

export default ProductList;
