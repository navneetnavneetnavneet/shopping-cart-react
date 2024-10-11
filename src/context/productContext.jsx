import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        loading,
        setLoading,
        products,
        productDetails,
        setProductDetails,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
