import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProduct = (p_id) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`https://dummyjson.com/products/${p_id}`);
        setProduct(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
        setError(err?.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [p_id]);

  return { product, isLoading, error };
};

export default useFetchProduct;
