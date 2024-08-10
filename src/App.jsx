import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Reset from "./components/Reset";
import ProductDetails from "./components/ProductDetails";
import CategoryDisplay from "./components/categories/CategoryDisplay";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";

export default function App() {
  return (
    <Routes>
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
          element={<ProductDetails />}
        />
        <Route path="/:category" element={<CategoryDisplay />} />
        <Route path="*" element={<NotFound />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
