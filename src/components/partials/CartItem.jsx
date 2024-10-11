import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";

const CartItem = ({ product }) => {
  const { handleRemoveToCartProduct, handleAddToCartProduct } =
    useContext(ProductContext);

  return (
    <div className="w-full h-fit bg-white border-b border-zinc-400 flex px-4 py-4 outline-none shadow-lg">
      <div className="w-60 h-40 bg-zinc-100 p-4 rounded-md">
        <img
          className="w-full h-full hover:scale-105 transition-all duration-300 object-cover aspect-square"
          src={product?.thumbnail}
          alt=""
        />
      </div>
      <div className="w-full flex justify-between px-10">
        <div>
          <h1 className="w-full text-2xl leading-tight font-semibold">
            {product?.title}
          </h1>
          <h1 className="text-lg font-semibold my-2">
            Brand : {product?.brand}
          </h1>
          <h1 className="text-base font-semibold my-2 text-zinc-400">
            Category : {product?.category}
          </h1>
          <button
            onClick={() => handleRemoveToCartProduct(product, true)}
            className="px-4 py-2 my-2 bg-black text-white "
          >
            Remove
          </button>
        </div>
        <div>
          <h1 className="text-base font-semibold my-2">
            $ {product?.totalPrice.toFixed(2)}
          </h1>
          <h1 className="text-base font-semibold my-2">
            Quantity : {product?.quantity}
          </h1>
          <div className="flex gap-2 items-center">
            <button
              disabled={product?.quantity === 1}
              onClick={() => handleRemoveToCartProduct(product, false)}
              className="disabled:opacity-50 w-10 h-10 text-xl font-semibold rounded-md border-2 border-zinc-400"
            >
              <i className="ri-subtract-line"></i>
            </button>
            <button
              onClick={() => handleAddToCartProduct(product)}
              className="w-10 h-10 text-xl font-semibold rounded-md border-2 border-zinc-400"
            >
              <i className="ri-add-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
