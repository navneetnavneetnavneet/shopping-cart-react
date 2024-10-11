import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../context/productContext";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { productDetails, setProductDetails, loading, setLoading } =
    useContext(ProductContext);

  const getProductByProductId = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      if (data) {
        setProductDetails(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductByProductId();
  }, [id]);

  if (loading) {
    return (
      <h1 className="text-center w-full mt-20 text-2xl font-bold italic">
        Please wait productDetails is loading . . .
      </h1>
    );
  }
  return productDetails ? (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h3
        onClick={() => navigate("/")}
        className="text-blue-500 cursor-pointer w-full px-20 flex items-center gap-1"
      >
        <i className="ri-arrow-left-line"></i> back
      </h3>
      <h1 className="text-3xl mb-5 text-center w-full font-black tracking-widest">
        Product Details
      </h1>
      <div className="w-[60%] h-[80vh] rounded-xl flex bg-zinc-100">
        <div className="w-1/2 h-full overflow-hidden">
          <div className="w-full h-2/3">
            <img
              className="w-full h-full object-contain aspect-auto"
              src={productDetails?.thumbnail}
              alt=""
            />
          </div>
          <div className="flex items-center justify-center gap-2 mt-10 overflow-x-auto overflow-hidden">
            {productDetails?.images.map((image) => (
              <div
                key={image}
                className="w-32 h-32 p-4 bg-white shadow-lg border rounded-md"
              >
                <img
                  className="w-full h-full hover:scale-105 transition-all duration-300 object-cover aspect-square"
                  src={image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col gap-2 px-10 py-5">
          <h1 className="text-3xl leading-none font-semibold">
            {productDetails?.title}
          </h1>
          <h2 className="text-xl font-semibold">
            Price : $ {productDetails?.price}{" "}
            <span className="text-yellow-500 text-sm">
              {productDetails?.discountPercentage}% off
            </span>
          </h2>
          <h1 className="text-lg font-semibold">
            Brand : {productDetails?.brand}
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-base font-semibold">Rating :</p>
            <span className="w-10 h-10 italic bg-yellow-300 rounded-full flex items-center justify-center">
              {productDetails?.rating}
            </span>
          </div>
          <div className="flex items-center gap-10">
            <p className="text-base font-semibold">
              stock : {productDetails?.stock}
            </p>
            <p className="text-base font-semibold">
              Mini. Order : {productDetails?.minimumOrderQuantity}
            </p>
          </div>
          <h1 className="text-lf font-semibold">
            Tag :{" "}
            {productDetails?.tags.map((tag, idx) => (
              <sapn key={idx} className="pl-2 font-normal italic">
                {tag},
              </sapn>
            ))}
          </h1>
          <div className="">
            <h1 className="text-lg font-semibold">Description </h1>
            <p className="text-sm">{productDetails?.description}</p>
          </div>

          <h1 className="font-semibold text-lg">
            Available :{" "}
            <span className="text-green-600 text-base">
              {productDetails?.availabilityStatus}
            </span>
          </h1>
          <h1 className="font-semibold text-lg mt-5">
            Information About Product
          </h1>
          <div className="">
            <h3 className="text-sm font-semibold">
              Return Policy : {productDetails?.returnPolicy}
            </h3>
            <h3 className="text-sm font-semibold">
              Shipping Info : {productDetails?.shippingInformation}
            </h3>
            <h3 className="text-sm font-semibold">
              Warrnnty Info : {productDetails?.warrantyInformation}
            </h3>
          </div>
          <button className="px-4 py-2 w-fit mt-3 bg-black text-white text-base font-semibold">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  ) : (
    <h1 className="text-center w-full mt-20 text-2xl font-bold italic">
      Product is not found . . .
    </h1>
  );
};

export default ProductDetails;
