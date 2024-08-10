import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="md:mx-5">
      <Header />
      <div className="max-w-screen-2xl mx-auto">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
