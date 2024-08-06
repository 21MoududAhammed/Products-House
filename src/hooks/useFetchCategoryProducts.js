import axios from "axios";
import { useState, useEffect } from "react";

// TO FETCH PRODUCTS BY CATEGORY NAME 

const useFetchCategoryProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://dummyjson.com/products/category/${category}`
        );
        setProducts(res?.data?.products);
      } catch (err) {
        console.log(err);
        setError(err?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useFetchCategoryProducts;
