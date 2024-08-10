import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="max-w-screen-2xl mx-auto">
        <div className="md:mx-5">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}
