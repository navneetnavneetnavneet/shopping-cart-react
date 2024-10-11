import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getProductByProductId = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      if (data) {
        setProduct(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductByProductId();
  }, [id]);

  if (isLoading) {
    return (
      <h1 className="text-center w-full mt-20 text-2xl font-bold italic">
        Please wait product is loading . . .
      </h1>
    );
  }

  return product ? (
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
          <img
            className="w-full h-full object-contain aspect-auto"
            src={product?.thumbnail}
            alt=""
          />
        </div>
        <div className="w-1/2 h-full flex flex-col gap-2 px-10 py-5">
          <h1 className="text-3xl leading-none font-semibold">
            {product?.title}
          </h1>
          <h2 className="text-xl font-semibold">
            Price : $ {product?.price}{" "}
            <span className="text-yellow-500 text-sm">
              {product?.discountPercentage}% off
            </span>
          </h2>
          <h1 className="text-lg font-semibold">Brand : {product?.brand}</h1>
          <div className="flex items-center gap-2">
            <p className="text-base font-semibold">Rating :</p>
            <span className="w-10 h-10 italic bg-yellow-300 rounded-full flex items-center justify-center">
              {product?.rating}
            </span>
          </div>
          <div className="flex items-center gap-10">
            <p className="text-base font-semibold">stock : {product?.stock}</p>
            <p className="text-base font-semibold">
              Mini. Order : {product?.minimumOrderQuantity}
            </p>
          </div>
          <h1 className="text-lf font-semibold">
            Tag :{" "}
            {product?.tags.map((tag, idx) => (
              <sapn key={idx} className="pl-2 font-normal italic">
                {tag},
              </sapn>
            ))}
          </h1>
          <div className="">
            <h1 className="text-lg font-semibold">Description </h1>
            <p className="text-sm">{product?.description}</p>
          </div>

          <h1 className="font-semibold text-lg">
            Available :{" "}
            <span className="text-green-600 text-base">
              {product?.availabilityStatus}
            </span>
          </h1>
          <h1 className="font-semibold text-lg mt-5">
            Information About Product
          </h1>
          <div className="">
            <h3 className="text-sm font-semibold">
              Return Policy : {product?.returnPolicy}
            </h3>
            <h3 className="text-sm font-semibold">
              Shipping Info : {product?.shippingInformation}
            </h3>
            <h3 className="text-sm font-semibold">
              Warrnnty Info : {product?.warrantyInformation}
            </h3>
          </div>
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
