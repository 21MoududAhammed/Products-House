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
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
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
import ErrorPage from "./components/ErrorPage";
import AllProducts from "./components/AllProducts.jsx";
import Home from "./components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />}/>
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/all-products/product-details/:p_id" element={<ProductDetails/>} loader={loadProduct}/>
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
