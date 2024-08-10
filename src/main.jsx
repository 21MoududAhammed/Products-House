import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Cart from "./components/Cart.jsx";
import LogIn from "./components/LogIn.jsx";
import Register from "./components/Register.jsx";
import Reset from "./components/Reset.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/Profile.jsx";
import CartProvider from "./providers/CartProvider.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import { loadProduct } from "./loaders/index.js";
import AllProducts from "./components/AllProducts.jsx";
import CategoryDisplay from "./components/categories/CategoryDisplay";
import NotFound from "./components/NotFound";
import Home from "./components/Home/Home";
import ProductDetails2 from "./components/PfoductDetails2";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/products/product-details/:p_id"
        element={<ProductDetails/>}
      />
      <Route path="/:category" element={<CategoryDisplay />} />
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
