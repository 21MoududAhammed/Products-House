import { Link } from "react-router-dom";
import { MyCartContext } from "../providers/CartProvider";
import CartItem from "./CartItem";

export default function Cart() {
//   const products = useLoaderData();
  const { cart } = MyCartContext();
  console.log(cart);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 md:m-5 m-2 md:gap-5">
      {cart[0] ? (
        <div className="md:col-span-8">
          <h1 className="text-xl font-bold text-rose-600 text-center">
            Added Products
          </h1>
          {cart?.map((item) => <CartItem key={item?.id} item={item}/>)}
        </div>
      ) : (
        <div className="md:col-span-8">
          {" "}
          <Link to={"/"} className="text-2xl text-blue-600">
            Empty! Click Here To Add Products.
          </Link>
        </div>
      )}
      <div className="md:col-span-4 bg-gray-400 shadow-xl">
        <div className="">
          <div>
            <button className="btn btn-active btn-ghost">Ghost</button>
          </div>
          <div className="badge badge-lg">987,654</div>
          <div>
            <button className="btn btn-active btn-ghost">Ghost</button>
          </div>
        </div>
      </div>
    </div>
  );
}
