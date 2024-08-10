import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartProvider from "./providers/CartProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
