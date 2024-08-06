import { useNavigate } from "react-router-dom";
import banner from "../../assets/banner_ph.png";
import ProductCategories from "../categories/ProductCategories";
import Contact from "./Contact";
import ForYou from "./ForYou";

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
      <Contact />
    </div>
  );
}
