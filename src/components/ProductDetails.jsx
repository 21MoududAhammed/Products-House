import { BsCart3 } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
import Rating from "./Rating";
import { useEffect, useState } from "react";
import { MyCartContext } from "../providers/CartProvider";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const [product, setProduct] = useState();

  const { p_id } = useParams();

  const { handleAddToCart, increaseQuantity, decreaseQuantity, storedValue } =
    MyCartContext();
  const matchedItem = storedValue?.find((item) => item.p_id === product?.id);

  const [thumbnail, setThumbnail] = useState("");
  const [count, setCount] = useState(() =>
    matchedItem?.quantity ? matchedItem?.quantity : 0
  );

  // to decrease quantity
  const handleDecreaseQuantity = (id) => {
    if (count > 1) {
      setCount(matchedItem.quantity);
      decreaseQuantity(id);
    }
  };
  // to increase quantity
  const handleIncreaseQuantity = (id) => {
    setCount(matchedItem.quantity);
    increaseQuantity(id);
  };
  // add to the cart
  const onHandleAddToCart = (id) => {
    handleAddToCart(id);
  };
  //  fetch product and set the thumbnail after loading product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${p_id}`);
        if (res.status === 200) {
          setProduct(res.data);
          // set the thumbnail after getting product details
          setThumbnail(res?.data?.thumbnail);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchProduct();
  }, [p_id]);

  // set the quantity of product to buy
  useEffect(() => {
    matchedItem && setCount(matchedItem?.quantity);
  }, [onHandleAddToCart]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 mx-3 md:mx-5 mt-6 md:mt-10 gap-5 md:gap-3 ps-2 pt-2 pe-2 pb-8  shadow">
      {/* images  */}
      {product ? (
        <div className="md:col-span-6 max-h-72 flex justify-center items-center rounded-xl gap-3">
          <div className="flex flex-col justify-center gap-2 w-20 p-1">
            {product.images.map((url, index) => {
              return (
                <div
                  className="w-full"
                  key={index}
                  onClick={() => setThumbnail(url)}
                >
                  <img
                    className="w-full max-h-14 rounded-xl"
                    src={url}
                    alt="Product image"
                  />
                </div>
              );
            })}
          </div>
          {/* thumbnail  */}
          <div className="max-w-80 w-full rounded-xl p-2">
            <img
              className=" w-full max-h-56 rounded-xl"
              src={thumbnail}
              alt="Product thumbnail"
            />
          </div>
        </div>
      ) : (
        <div>Loading.....</div>
      )}

      {/* details  */}
      {product ? (
        <div className="md:col-span-6 font-sans p:2 sm:p-3 md:p-3">
          <h1 className="text-2xl md:text-3xl font-bold font-serif">
            {product.title}
          </h1>
          <h2 className="text-lg">Price: ${product.price}</h2>
          <h3 className="text-lg">Brand: {product.brand}</h3>

          <h3>Category: {product.category}</h3>
          <h4>Stock: {product.stock}</h4>
          <p className="font-sans">
            <span className="font-semibold">Description:</span>{" "}
            {product.description}
          </p>
          <Rating rating={product.rating} />
          <div className="flex justify-between sm:justify-normal sm:gap-8 md:gap-10 mt-10">
            {/* add to cart btn  */}
            <button
              className="flex items-center gap-1 md:gap-2 px-2 sm:px-4 md:px-6 py-2 font-medium tracking-wide text-xs sm:text-base text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              onClick={() => onHandleAddToCart(product.id)}
            >
              Add To Cart{" "}
              <span className="text-xs sm:text-xl ">
                <BsCart3 />
              </span>
            </button>
            {/* quantity changer  */}
            <div className="flex items-center justify-center bg-white  text-center  border border-blue-500 rounded">
              <div className="flex items-center  px-2">
                <button onClick={() => handleIncreaseQuantity(product.id)}>
                  <FaPlus />
                </button>
                <input
                  className="w-10 rounded text-center mx-2 font-semibold "
                  type="text"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                />
                <button onClick={() => handleDecreaseQuantity(product.id)}>
                  <FaMinus />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div> Loading....</div>
      )}
    </div>
  );
}
