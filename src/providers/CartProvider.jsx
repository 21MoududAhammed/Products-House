import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { loadProducts } from "../loaders";
import useLocalStorage from "../hooks/useLocalStorage";
import useFetchAllProducts from "../hooks/useFetchAllProducts";

// context
const CartContext = createContext(null);
const MyCartContext = () => {
  return useContext(CartContext);
};

// provider
export default function CartProvider({ children }) {
  // get all products by useFetchAllProducts hook
  const { allProducts } = useFetchAllProducts();

  // get localStorage value and functions to handle it by useLocalStorage hook
  const {
    storedValue,
    addToLocalStorage,
    removeFromLocalStorage,
    increaseQuantity,
    decreaseQuantity,
  } = useLocalStorage("cart", []);

  // add a product to the cart
  const handleAddToCart = (id) => {
    addToLocalStorage(id);
  };
  // remove a product from the cart
  const handleRemoveFromCart = (id) => {
    removeFromLocalStorage(id);
  };

  const cart = storedValue
    ?.map((value) => {
      // get the required product details by product's id
      const item = allProducts?.find((product) => product.id === value.p_id);
      // if we have the product, add the actual quantity with it what we get from localStorage
      if (item) {
        const newItem = { ...item, quantity: value.quantity };
        return newItem;
      }
      // if the product is not available, it will return null
      return null;
    })
    .filter(Boolean); // filter out null values

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
