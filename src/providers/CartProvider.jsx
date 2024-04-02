import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { loadProducts } from "../loaders";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext(null);
const MyCartContext = () => {
  return useContext(CartContext);
};

export default function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const { storedValue, addToLocalStorage, removeFromLocalStorage } =
    useLocalStorage("cart", []);

  const handleAddToCart = (id) => {
    addToLocalStorage(id);
  };

  const handleRemoveFromCart = (id) => {
    removeFromLocalStorage(id);
  };

  useEffect(() => {
    loadProducts().then((data) => setProducts(data));
  }, []);

  const cart = storedValue?.map((value) => {
    return products.find((product) => product.id === value);
  });

//   console.log(cart);
  return (
    <CartContext.Provider
      value={{ cart, handleAddToCart, handleRemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node,
};

export { MyCartContext };
