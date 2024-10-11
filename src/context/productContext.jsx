import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      if (data) {
        setProducts(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleAddToCartProduct = (dets) => {
    const copyProducts = [...cartItems];
    const findIndexProduct = copyProducts.findIndex(
      (product) => product.id === dets.id
    );
    if (findIndexProduct === -1) {
      copyProducts.push({ ...dets, quantity: 1, totalPrice: dets?.price });
    } else {
      copyProducts[findIndexProduct] = {
        ...copyProducts[findIndexProduct],
        quantity: copyProducts[findIndexProduct].quantity + 1,
        totalPrice:
          (copyProducts[findIndexProduct].quantity + 1) *
          copyProducts[findIndexProduct].price,
      };
    }
    localStorage.setItem("cart", JSON.stringify(copyProducts));
    setCartItems(copyProducts);
    navigate("/cart");
  };

  const handleRemoveToCartProduct = (dets, isRemoved) => {
    const copyProducts = [...cartItems];
    const findIndexProduct = copyProducts.findIndex(
      (product) => product.id === dets.id
    );
    if (isRemoved) {
      copyProducts.splice(findIndexProduct, 1);
    } else {
      copyProducts[findIndexProduct] = {
        ...copyProducts[findIndexProduct],
        quantity: copyProducts[findIndexProduct].quantity - 1,
        totalPrice:
          (copyProducts[findIndexProduct].quantity - 1) *
          copyProducts[findIndexProduct].price,
      };
    }

    localStorage.setItem("cart", JSON.stringify(copyProducts));
    setCartItems(copyProducts);
  };

  useEffect(() => {
    getAllProducts();
    setCartItems(JSON.parse(localStorage.getItem("cart") || []));
  }, []);

  return (
    <ProductContext.Provider
      value={{
        loading,
        setLoading,
        products,
        productDetails,
        setProductDetails,
        cartItems,
        setCartItems,
        handleAddToCartProduct,
        handleRemoveToCartProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
