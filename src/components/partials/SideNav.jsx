import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[20%] h-screen border-r border-zinc-400">
      <div className="w-full flex items-center justify-between h-[10vh] px-4 border-b border-zinc-400">
        <h1 className="text-4xl font-black">ShopApp</h1>
        <Link to="/cart" className="w-10 h-10 bg-zinc-300 cursor-pointer rounded-full flex items-center justify-center">
          <i className="ri-shopping-cart-2-line text-[1.2rem]"></i>
        </Link>
      </div>
      <div className="w-full py-4 px-4">
        <h1 className="text-2xl mb-4 font-semibold border-b pb-1 border-zinc-400">
          Category
        </h1>
        <div className="mt-2 w-full flex items-center gap-1 hover:bg-emerald-400 duration-200 transition-all rounded-md py-2">
          <div className="w-4 h-4 bg-blue-500  rounded-full"></div>
          <h2 className="text-lg font-semibold">Male</h2>
        </div>
        <div className="mt-2 w-full flex items-center gap-1 hover:bg-emerald-400 duration-200 transition-all  rounded-md py-2">
          <div className="w-4 h-4 bg-red-500  rounded-full"></div>
          <h2 className="text-lg font-semibold">Female</h2>
        </div>
        <div className="mt-2 w-full flex items-center gap-1 hover:bg-emerald-400 duration-200 transition-all rounded-md py-2">
          <div className="w-4 h-4 bg-green-500  rounded-full"></div>
          <h2 className="text-lg font-semibold">Kids</h2>
        </div>
        <div className="mt-2 w-full flex items-center gap-1 hover:bg-emerald-400 duration-200 transition-all rounded-md py-2">
          <div className="w-4 h-4 bg-yellow-500  rounded-full"></div>
          <h2 className="text-lg font-semibold">Grocery</h2>
        </div>
      </div>
      <div className="w-full px-4 py-4">
        <div className="mt-2 w-full flex items-center gap-1 hover:bg-emerald-400 duration-200 transition-all rounded-md py-2">
          <i className="ri-account-pin-box-line text-[1.2rem]"></i>
          <h2 className="text-lg font-semibold">About Us</h2>
        </div>
        <div className="mt-2 w-full flex items-center gap-1 hover:bg-emerald-400 duration-200 transition-all rounded-md py-2">
          <i className="ri-contacts-line text-[1.2rem]"></i>
          <h2 className="text-lg font-semibold">Contact Us</h2>
        </div>
        <div className="mt-2 w-full flex items-center gap-1 hover:bg-emerald-400 duration-200 transition-all rounded-md py-2">
          <i className="ri-question-line text-[1.2rem]"></i>
          <h2 className="text-lg font-semibold">Help Us</h2>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
