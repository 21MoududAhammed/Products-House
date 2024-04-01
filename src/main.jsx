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
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { loadMealDetails, loadMeals, loadProducts } from "./loaders/index.js";
import Meals from "./components/Meals.jsx";
import Cart from "./components/Cart.jsx";
import MealDetails from "./components/MealDetails.jsx";
import LogIn from "./components/LogIn.jsx";
import Register from "./components/Register.jsx";
import Reset from "./components/Reset.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} loader={loadProducts} />
      <Route path="/meals" element={<Meals />} loader={loadMeals} />
      <Route
        path="/meals/:mealId"
        element={<MealDetails />}
        loader={loadMealDetails}
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<Reset />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
    </AuthProvider>
  </React.StrictMode>
);
