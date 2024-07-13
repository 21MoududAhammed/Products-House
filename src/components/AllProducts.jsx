import { BsCart3 } from "react-icons/bs";
import { MyCartContext } from "../providers/CartProvider";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const perPageProductsLimit = 10;

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [morePage, setMorePage] = useState(true);
  const navigate = useNavigate();
  const loaderRef = useRef();

  const { handleAddToCart } = MyCartContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${perPageProductsLimit}&skip=${
            perPageProductsLimit * page
          }`
        );
        const data = await res.json();

        if (data.products.length === 0) {
          setMorePage(false); // there is no more page to fetch
        } else {
          setProducts((prevProducts) => [...prevProducts, ...data.products]);
          setPage((prevPage) => prevPage + 1); // set the next page number
        }
      } catch (err) {
        console.log(err);
        toast(`${err.message}`);
      }
    };
    const observer = new IntersectionObserver((items) => {
      const loaderItem = items[0];
      if (loaderItem.isIntersecting && morePage) {
        fetchProducts();
      }
    });

    // set data to observe
    observer.observe(loaderRef.current);

    // clean up
    return () => observer.disconnect();
  }, [page]);

  return (
    <>
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
      <div ref={loaderRef}>
        {morePage && (
          <h4 className="text-center">
            <span className="loading loading-dots loading-lg "></span>
          </h4>
        )}
      </div>
    </>
  );
}
