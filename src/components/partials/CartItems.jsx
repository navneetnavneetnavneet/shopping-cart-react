import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const navigate = useNavigate();
  const { cartItems, loading } = useContext(ProductContext);

  if (loading)
    return (
      <h1 className="text-center w-full mt-20 text-2xl font-bold italic">
        Please waitin Products is Loading . . .
      </h1>
    );
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[10vh] border-b border-zinc-400 flex items-center justify-center">
        <h1 className="text-3xl font-black tracking-widest">
          Cart Items here . . .
        </h1>
      </div>
      <div className="flex w-full h-[90vh]">
        <div className="w-[80%] h-full overflow-y-auto overflow-x-hidden">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <h1 className="w-full text-center mt-10 text-3xl font-black">
              No Product Found . . .
            </h1>
          )}
        </div>
        <div className="w-[20%] h-full border-l  px-2 py-5">
          <h1 className="text-2xl font-bold px-4 py-2 rounded-md bg-zinc-300">
            Order Summry
          </h1>
          <div className="text-base font-bold mt-5 py-2 rounded-md bg-zinc-100">
            <h3 className="text-lg py-2 px-4 font-semibold">
              Total Price :{" "}
              <span>
                $ {cartItems.reduce((acc, next) => acc + next?.totalPrice, 0).toFixed(2)}
              </span>
            </h3>
            <hr />
            <h3 className="text-lg py-2 px-4 font-semibold">
              Number of Products : <span>{cartItems?.length}</span>
            </h3>
          </div>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 mt-5 bg-black text-white rounded-md"
          >
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
