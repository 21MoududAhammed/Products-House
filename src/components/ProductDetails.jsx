import { useLoaderData } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
import Rating from "./Rating";
import { useState } from "react";

export default function ProductDetails() {
  const product = useLoaderData();

  const [thumbnail, setThumbnail] = useState(product.thumbnail);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 mx-3 md:mx-5 mt-6 md:mt-10 gap-5 md:gap-3 ps-2 pt-2 pe-2 pb-8  shadow">
      {/* images  */}
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

      {/* details  */}
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
        <div className="flex gap-10 mt-10">
          {/* add to cart btn  */}
          <button class="flex items-center gap-1 md:gap-2 px-2 sm:px-4 md:px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Add To Cart{" "}
            <span className="text-xl">
              <BsCart3 />
            </span>
          </button>
          {/* quantity changer  */}
          <div className="flex items-center justify-center bg-white py-2 text-center w-28 border border-blue-500 rounded">
            <div className="flex items-center ">
              <button>
                <FaPlus />
              </button>
              <input
                className="w-10 rounded text-center mx-2 font-semibold "
                type="text"
                name=""
                id=""
              />
              <button>
                <FaMinus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
