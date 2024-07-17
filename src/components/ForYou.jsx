import { useState, useEffect } from "react";
import { BsCart3 } from "react-icons/bs";

export default function ForYou() {
  const [products, setProducts] = useState([]);

  //   load products based on category
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/category/fragrances`
      );
      const data = await res.json();
      setProducts(data?.products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="text-center text-2xl md:text-4xl  text-gray-800 dark:text-white font-bold font-serif mb-8">
        For You
      </h2>
      <div className="my-5 mx-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-2 md:gap-4">
        {products?.map((product) => {
          return (
            <div key={product.id} className=" flex justify-center">
              <div className="max-w-xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 flex flex-col justify-between w-full">
                <div>
                  <div className="w-56 mx-auto">
                    <img
                      className=" w-full h-48 my-2 rounded"
                      src={product.thumbnail}
                      alt=""
                    />
                  </div>
                  <div className="px-4 py-2">
                    <h1 className="text-xl text-center font-bold text-gray-800 uppercase dark:text-white">
                      {product.title}
                    </h1>
                  </div>
                </div>

                <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                  <h1 className="text-lg font-bold text-white">
                    ${product.price}
                  </h1>

                  <div className="flex items-center gap-1">
                    <button
                      className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none flex items-center gap-1"
                      onClick={() => navigate(`product-details/${product.id}`)}
                    >
                      Details
                    </button>

                    <button
                      className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none flex items-center gap-1"
                      onClick={() => handleAddToCart(product.id)}
                    >
                      Add to cart <BsCart3 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
