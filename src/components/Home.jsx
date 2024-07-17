import ProductCategories from "./categories/ProductCategories";
import banner from "../assets/banner_ph.png";
import { useNavigate } from "react-router-dom";
import ForYou from "./ForYou";
import Contact from "./Contact";

export default function Home() {
  const navigate = useNavigate();
  const handleShopNow = () => {
    navigate("/products");
  };
  return (
    <div>
      <div onClick={handleShopNow}>
        <img src={banner} alt="banner" />
      </div>
      <ProductCategories />;
      <ForYou />
      <Contact/>
    </div>
  );
}
