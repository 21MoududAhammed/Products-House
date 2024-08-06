import { useState, useEffect } from "react";
import axios from "axios";

const useFetchAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("https://dummyjson.com/products?limit=100");
        setAllProducts(res?.data?.products);
      } catch (err) {
        setError(err?.message);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    // call the function 
    fetchAllProducts();
  }, []);
  return { allProducts, isLoading, error };
};

export default useFetchAllProducts;
