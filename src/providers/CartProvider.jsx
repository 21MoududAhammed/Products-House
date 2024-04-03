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

  const {
    storedValue,
    addToLocalStorage,
    removeFromLocalStorage,
    increaseQuantity,
    decreaseQuantity,
  } = useLocalStorage("cart", []);

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
    const item = products.find((product) => product.id === value.p_id);
    if (item) {
      const newItem = { ...item, quantity: value.quantity };
      return newItem;
    }
  });

  return (
    <CartContext.Provider
      value={{
        cart,
        storedValue,
        handleAddToCart,
        handleRemoveFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node,
};

export { MyCartContext };
