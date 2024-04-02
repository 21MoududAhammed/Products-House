import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';


const CartContext = createContext(null);
const MyCartContext = () =>{
     return useContext(CartContext)
}


export default function CartProvider({children}){
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) =>{
        setCart([...cart, product])
    }


    return (
        <CartContext.Provider value={{ cart, handleAddToCart}}>
            {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes ={
    children:PropTypes.node 
}

export{MyCartContext}