import { useLoaderData } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { MyCartContext } from "../providers/CartProvider";

export default function Home() {
  const products = useLoaderData();
  const { handleAddToCart } = MyCartContext();

  return (
    <div className="my-5 mx-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-2 md:gap-4">
      {products?.map((product) => {
        return (
          <div key={product.id} className=" flex justify-center">
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 flex flex-col justify-between w-full">
              <div>
                <div className="w-56 mx-auto">
                  <img
                    className=" w-full h-48 my-2"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="px-4 py-2">
                  <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                    {product.title}
                  </h1>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">
                  ${product.price}
                </h1>
                <button
                  className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none flex items-center gap-1"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to cart <BsCart3 />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
