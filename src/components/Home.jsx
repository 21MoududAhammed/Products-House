import { useLoaderData } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

export default function Home() {
  const products = useLoaderData();
  console.log(products)
  return (
   
    <div className="my-5 mx-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-2 md:gap-4">
      {products?.map((product) => {
        return (
          <div
            key={product.id}
            className=" flex flex-col justify-between shadow p-2 "
          >
            <div>
              <div className="flex justify-center">
              <img
                className="w-52 h-56 rounded-xl"
                src={product.image}
                alt=""
              />
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-semibold">{product.title}</h3>
                <h4 className="font-medium text-xl">Category: {product.category}</h4>
                <h3 className="font-semibold text-xl text-rose-600">Price: {product.price}TK</h3>
              </div>
            </div>

            <div className="mt-5 ">
              <button className="btn btn-success w-full text-white text-xl hover:bg-rose-500 border-none">
                Add To Cart <BsCart3 />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
